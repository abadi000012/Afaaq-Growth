import { fileURLToPath } from "url";
import { dirname, join } from "path";
import express from "express";
import compression from "compression";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const clientDir = join(__dirname, "dist/client");
const serverEntry = import("./dist/server/server.js");

// Middleware
app.set("trust proxy", true);
app.use(compression());
app.use(express.static(clientDir, { index: false }));

function createWebRequest(req) {
  const host = req.get("host") ?? `localhost:${PORT}`;
  const protocol = req.protocol;
  const url = new URL(req.originalUrl, `${protocol}://${host}`);
  const headers = new Headers();

  for (const [key, value] of Object.entries(req.headers)) {
    if (Array.isArray(value)) {
      for (const item of value) headers.append(key, item);
    } else if (value !== undefined) {
      headers.set(key, value);
    }
  }

  const init = {
    method: req.method,
    headers,
  };

  if (req.method !== "GET" && req.method !== "HEAD") {
    init.body = req;
    init.duplex = "half";
  }

  return new Request(url, init);
}

async function sendWebResponse(res, response) {
  res.status(response.status);

  if (typeof response.headers.getSetCookie === "function") {
    const setCookie = response.headers.getSetCookie();
    if (setCookie.length > 0) res.setHeader("set-cookie", setCookie);
  }

  response.headers.forEach((value, key) => {
    if (key.toLowerCase() !== "set-cookie") {
      res.setHeader(key, value);
    }
  });

  if (response.body == null) {
    res.end();
    return;
  }

  const body = Buffer.from(await response.arrayBuffer());
  res.send(body);
}

// Serve TanStack Start SSR routes.
app.all("*", async (req, res, next) => {
  try {
    const entry = await serverEntry;
    const response = await entry.default.fetch(createWebRequest(req), process.env, {});
    await sendWebResponse(res, response);
  } catch (error) {
    next(error);
  }
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Internal Server Error");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
