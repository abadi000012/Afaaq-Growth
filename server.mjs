import { fileURLToPath } from "url";
import { dirname, join } from "path";
import express from "express";
import compression from "compression";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(compression());
app.use(express.json());
app.use(express.static(join(__dirname, "dist/client")));

// Serve the app
app.get("*", (req, res) => {
  const indexPath = join(__dirname, "dist/client/index.html");
  res.sendFile(indexPath, (err) => {
    if (err) {
      res.status(500).send("Internal Server Error");
    }
  });
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Internal Server Error");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
