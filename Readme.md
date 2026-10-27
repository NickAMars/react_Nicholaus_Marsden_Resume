# Nicholaus Marsden Resume

A personal resume and portfolio website built with React 18, TypeScript, and Material UI. The application is deployed to AWS S3 via Terraform and automated through GitHub Actions CI/CD.

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Installation

```bash
npm install       # Install dependencies
npm run dev       # Run development server (http://localhost:4000)
npm run build     # Build for production
npm test          # Run tests in watch mode
```

### All Available Scripts

| Script             | Description                              |
|--------------------|------------------------------------------|
| `npm run dev`      | Start Webpack dev server on port 4000    |
| `npm run build`    | Clean `dist/` and create production build|
| `npm run start`    | Serve production build locally           |
| `npm test`         | Run Jest tests in watch mode             |
| `npm run clean`    | Remove the `dist/` directory             |
| `npm run docker:build` | Build a Docker image                 |

## Tech Stack

- **Frontend:** React 18, TypeScript 5, Material UI 5, Styled Components, Emotion
- **Routing:** React Router v6 with lazy-loaded routes
- **Forms:** Formik + Yup validation
- **Maps:** Leaflet / React Leaflet
- **Bundler:** Webpack 5, Babel 7
- **Testing:** Jest, React Testing Library, ts-jest
- **Infrastructure:** Terraform (AWS S3)
- **CI/CD:** GitHub Actions
- **Containerization:** Docker (multi-stage Node 20 + Nginx)

## Application Architecture

The app follows a single-page layout with a sidebar, header, and routed dashboard area.

```
App
├── ModalProvider (React Context for modal state)
│   ├── SideBar         — Profile and navigation sidebar
│   ├── Header          — Top navigation bar
│   ├── Dashboard       — Route-based content area
│   │   ├── /                      → About (description, skills, education, certifications)
│   │   ├── /experience            → Work experience and history
│   │   ├── /technical-exercises   → Portfolio projects
│   │   └── /contact               → Contact form with interactive map
│   ├── Footer
│   └── Modal           — Confirmation overlay for form submissions
```

### Key Pages

- **About** — Personal description, technical skills, education, and certifications
- **Experience** — Professional work history
- **Technical Exercises** — Portfolio project showcase
- **Contact** — Contact form (Formik + Yup validation) with a Leaflet interactive map, submitting to `https://api.nicholausamarsden.com/send`

### State Management

- **React Context API** — `ModalContext` manages modal visibility and data
- **Formik** — Handles contact form state and submission

## Project Structure

```
src/
├── index.tsx                  # Entry point — wraps app with ThemeProvider and Router
├── app.tsx                    # Root layout component
├── app.style.ts               # Styled components for layout
├── global.css                 # Global styles
├── components/                # Reusable components (Modal, Button)
├── context/                   # React Context providers (ModalContext)
├── theme/                     # MUI theme configuration
├── page/main/
│   ├── header/                # Navigation header
│   ├── side_bar/              # Sidebar with timeline
│   ├── footer/                # Footer component
│   └── dashboard/             # Route handler + page components
│       ├── about/             # About page (description, skills, education, certs)
│       ├── experience/        # Experience page
│       ├── project/           # Projects page
│       └── contact/           # Contact page (form, map, info, validation)
└── assets/                    # Images, PDFs, and static files

webpack/
├── weback.config.js           # Common Webpack config (entry, loaders, plugins)
├── webpack.dev.js             # Dev server settings (port 4000, source maps)
└── webpack.prod.js            # Production build settings (minification)

terraform/
└── main.tf                    # AWS S3 deployment config

.github/workflows/
└── deploy.yml                 # CI/CD pipeline
```

## Build Configuration

### Webpack

- **Entry:** `src/index.tsx`
- **Output:** `dist/` with content-hash filenames for cache busting
- **Code splitting:** Enabled via `splitChunks`
- **Loaders:** Babel (TS/JS), CSS/SCSS, file-loader (images/PDFs), SVGR (SVGs as React components)
- **Plugins:** HTML Webpack Plugin, Gzip Compression, Fork TS Checker (parallel type checking)
- **Path aliases:** `@src/*` and `@assets/*` (mirrored in `tsconfig.json`)

### TypeScript

- Strict mode enabled
- Target: ES5, Module: CommonJS
- JSX: react-jsx (automatic runtime)
- Source maps enabled

### Testing

- **Jest** with `ts-jest` preset and `jsdom` environment
- CSS/SCSS imports mocked via `identity-obj-proxy`
- Path aliases mapped to match Webpack config

## Infrastructure and Deployment

### AWS (Terraform)

Terraform manages the S3 deployment:

- **Provider:** AWS (`us-east-2`)
- **State backend:** Stored in the S3 bucket `nicholausamarsden.com`
- **Resource:** `aws_s3_object` uploads all built files from `dist/` with automatic content-type detection and MD5-based ETags for cache invalidation

### CI/CD (GitHub Actions)

Pushing to `master` triggers the pipeline (`.github/workflows/deploy.yml`):

1. Checkout code
2. Setup Node.js 20 with npm cache
3. `npm ci` — clean install dependencies
4. `npm run build` — Webpack production build
5. `terraform init` — initialize Terraform backend
6. `terraform apply -auto-approve` — deploy built files to S3

**Required GitHub Secrets:**
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`

### Docker

A multi-stage Dockerfile is available for containerized deployment:
1. **Build stage:** Node 20 Alpine — installs dependencies and builds the project
2. **Serve stage:** Nginx — serves the static build output
