# Nicholaus Marsden Resume

A personal resume website built with React, TypeScript, and Material UI, deployed to AWS S3 via Terraform and GitHub Actions.

## Getting Started

```bash
npm install       # Install dependencies
npm run dev       # Run development server
npm run build     # Build production code
npm run test      # Run tests
```

## Tech Stack

- **Frontend:** React 18, TypeScript, Material UI, Emotion, Leaflet
- **Bundler:** Webpack 5, Babel
- **Testing:** Jest, React Testing Library
- **Infrastructure:** Terraform (AWS S3)
- **CI/CD:** GitHub Actions

## Deployment

Pushing to `master` triggers a GitHub Actions workflow that:

1. Installs dependencies and builds the project
2. Runs `terraform apply` to upload the build to S3

## Project Structure

```
src/            # Application source code
terraform/      # Terraform infrastructure config
webpack/        # Webpack configuration
public/         # Static assets
.github/        # GitHub Actions workflows
```
