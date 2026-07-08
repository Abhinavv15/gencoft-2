# Gencoft Technologies Website

A premium corporate website for Gencoft Technologies, showcasing software products, consulting services, and contact channels. Built with modern web technologies, the site features custom glassmorphic components, fluid animation triggers, and a real-time WebGL interactive background shader.

---

## Key Features

- **Interactive 3D WebGL Background**: A real-time particle/fluid vortex shader canvas rendered with `ogl`, responsive to theme state controls.
- **Persistent Theme Controls**: Seamlessly switches between a luxury dark mode and high-contrast pure white light mode, storing user selection in `localStorage`.
- **Framer Motion Animations**: Elegant push-up hover animations on CTA buttons, parallax 3D tilts on cursor movement, card staggers, and slideshow page transitions.
- **Responsive Mobile Menu Drawer**: Sleek full-screen navigation overlay on mobile screen widths with auto-closing handlers.
- **Glassmorphic UI Design**: Beautiful translucent panels (`backdrop-filter`) with refined gold highlights and ambient background glows.
- **Responsive & Accessible Touch Targets**: Expanded click areas (`44x44px`) for tiny slider pagination dots ensuring mobile accessibility.

---

## Prerequisites

Make sure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (Version 18.0.0 or higher recommended)
- [npm](https://www.npmjs.com/) (installed automatically with Node) or **Yarn** / **pnpm**

---

## Getting Started

Follow these step-by-step instructions to run the project locally after cloning:

### 1. Install Dependencies
Install all required package packages listed in `package.json`:
```bash
npm install
```

### 2. Run the Development Server
Launch the local dev environment:
```bash
npm run dev
```

Vite will start the server and print the local URL in your terminal:
```text
  VITE v8.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```
*Note: If port `5173` is already in use, Vite will automatically select the next available port (e.g., `5174` or `5175`). Check the terminal output for the exact address.*

Open the printed URL in your web browser to view the live site.

---

## Available Commands

Here are the primary scripts defined in `package.json`:

| Command | Action |
| :--- | :--- |
| `npm run dev` | Boots up the local development server with Hot Module Replacement (HMR). |
| `npm run build` | Compiles and minifies the code into optimized production assets inside the `/dist` directory. |
| `npm run preview` | Runs a local server to preview the built production bundle (`/dist`) before deployment. |

---

## Tech Stack & Core Libraries

- **Frontend Library**: [React.js](https://react.dev/)
- **Build Tool / Bundler**: [Vite](https://vite.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **WebGL Rendering**: [OGL](https://github.com/o-g-l/ogl) (A lightweight WebGL library used for the fluid background shader)
- **Styling**: Modern CSS variables, flexbox, and grid layouts.
