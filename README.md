# Bolo - 24/7 AI Phone Answering for Restaurants

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Features

- Sticky call button in lower right corner
- iPhone-style call modal with Bolo delivery service persona
- Improved hero section mobile widget UI
- LiveKit integration for real-time voice calls

## Setup

### Environment Variables

Create a `.env` file in the root directory with:

```env
# MetaPresence Backend API URL
# This is the URL to your MetaPresence backend server
# For production: https://api.metapresence.my
# For local development: http://localhost:YOUR_BACKEND_PORT
VITE_METAPRESENCE_API_URL=https://api.metapresence.my
```

**Important Notes:**
- Bolo uses **MetaPresence backend API** to generate LiveKit tokens
- No separate server needed - perfect for Netlify static hosting!
- Bolo delivery service persona (DEMO002) is **automatically selected** - no user choice
- LiveKit credentials are managed by MetaPresence backend (server-side only)

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

## Call Feature

The call feature uses **MetaPresence backend API** (`/demo/start-call`) to generate LiveKit tokens. The Bolo delivery service persona (DEMO002) is **automatically selected** - no user choice needed. This approach:
- ✅ No separate server needed - perfect for Netlify static hosting
- ✅ Uses existing MetaPresence infrastructure
- ✅ Keeps LiveKit credentials secure on the backend
- ✅ Simple deployment - just build and deploy static files

## Netlify Deployment

1. **Build Command**: `npm run build`
2. **Publish Directory**: `dist`
3. **Environment Variables** (in Netlify Dashboard):
   - `VITE_METAPRESENCE_API_URL` - Your MetaPresence backend API URL

That's it! No server configuration needed - just static files.

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
