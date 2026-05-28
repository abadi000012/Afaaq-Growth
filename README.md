# Afaaq Growth

A modern web application built with [TanStack Router](https://tanstack.com/router), [React](https://react.dev), and [Tailwind CSS](https://tailwindcss.com).

## Features

- ⚡ Fast development with Vite
- 🎨 Beautiful UI components with Radix UI
- 🎭 Tailwind CSS for styling
- 🧭 File-based routing with TanStack Router
- 🔗 Data fetching with TanStack Query
- 📝 Form handling with React Hook Form
- 🎯 TypeScript for type safety
- 🔍 ESLint for code quality

## Prerequisites

- [Bun](https://bun.sh) (recommended) or Node.js 18+

## Getting Started

### Installation

```bash
bun install
```

### Development

Start the development server:

```bash
bun run dev
```

The application will be available at `http://localhost:5173`

### Building

Build for production:

```bash
bun run build
```

Preview the production build locally:

```bash
bun run preview
```

## Available Scripts

- `bun run dev` - Start the development server
- `bun run build` - Build for production
- `bun run build:dev` - Build for development
- `bun run preview` - Preview the production build
- `bun run lint` - Run ESLint
- `bun run format` - Format code with Prettier

## Project Structure

```
src/
├── components/       # React components
│   └── ui/          # Reusable UI components
├── hooks/           # Custom React hooks
├── lib/             # Utility functions and config
│   └── api/         # API functions
├── routes/          # File-based routes
├── router.tsx       # Router configuration
├── server.ts        # Server entry point
├── start.ts         # Application entry point
└── styles.css       # Global styles
```

## Deployment

This project uses TanStack Start with Vite and can be deployed to:

- **Vercel** - Zero-config deployment
- **Netlify** - Deploy from GitHub
- **Cloudflare** - Workers or Pages (configured via Wrangler)
- **Docker** - Custom containerization
- **Other** - Any Node.js or static hosting provider

### Deploying to Vercel

```bash
npm install -g vercel
vercel
```

### Deploying to Netlify

Connect your GitHub repository to Netlify and it will automatically deploy on push to main.

## Technologies Used

- **Frontend Framework**: React 19
- **Routing**: TanStack Router
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Forms**: React Hook Form
- **Data Fetching**: TanStack Query
- **Language**: TypeScript
- **Package Manager**: Bun

## License

MIT

## Support

For issues and questions, please open an issue on GitHub.
