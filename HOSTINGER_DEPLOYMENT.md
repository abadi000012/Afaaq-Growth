# Hostinger Deployment Guide

## Prerequisites

Before deploying to Hostinger Node.js hosting, ensure:

1. You have a Hostinger account with Node.js hosting
2. Node.js version 18+ is available on your hosting plan

## Deployment Steps

### 1. Install Dependencies

```bash
npm install
# or if using Bun
bun install
```

### 2. Build the Project

```bash
npm run build
```

This creates:
- `dist/` - Built files
- `dist/client/` - Static assets

### 3. Upload to Hostinger

Upload the following to your Hostinger server:

- `dist/` folder
- `server.mjs` file
- `package.json` file
- `package-lock.json` or `bun.lock` file

### 4. Configure Hostinger

In your Hostinger control panel:

1. Go to **Node.js** settings
2. Set **Application Root** to your project directory (where `package.json` is)
3. Set **Application Entry Point** to `server.mjs`
4. Set **Node Version** to 18+ (recommended: 20 or higher)
5. Add any environment variables (if needed)
6. Click **Save** or **Deploy**

### 5. Start the Server

Hostinger should automatically start your application. If not:

```bash
npm start
```

Your app will run on the assigned port (usually 3000 or specified by Hostinger).

## Environment Variables

If you need environment variables:

1. Create a `.env` file locally (add to `.gitignore`)
2. Add required variables
3. In Hostinger control panel, add the same variables under **Environment Variables**

Example `.env`:
```
NODE_ENV=production
```

## Troubleshooting

### Port Issues

Hostinger might use a specific port. Update `server.mjs` if needed:

```bash
PORT=8080 npm start
```

### Static Files Not Loading

Ensure the `dist/public` folder structure is correct after building:

```
dist/
├── public/
│   ├── index.html
│   ├── videos/
│   └── other static files...
```

### Application Crashes

Check Hostinger logs in the control panel. Common issues:

- Missing environment variables
- Node.js version incompatibility
- Port already in use
- Missing dependencies

### SSL/HTTPS

Hostinger usually provides free SSL automatically. Verify in control panel.

## Performance Optimization

To optimize for production:

1. Enable gzip compression (already configured in `server.mjs`)
2. Use Hostinger's CDN for static assets
3. Consider upgrading to a higher plan for better performance
4. Monitor logs for errors

## Rebuilding After Changes

When you push updates:

1. Pull latest code on server
2. Run `npm install` to update dependencies
3. Run `npm run build` to rebuild
4. Restart the application in Hostinger panel

You can automate this with Git webhooks in Hostinger.
