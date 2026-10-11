# GitHub and Netlify handoff

The repository contains source code, local website assets, fonts and licenses. Dependencies, builds, offline ZIPs, supplied source footage, local environment files and platform state are ignored.

## Connect the existing Netlify site

1. Push this repository to GitHub.
2. Open the existing CENTAURA project in Netlify.
3. Under Project configuration, Build & deploy, Continuous deployment, link the GitHub repository.
4. Use the main branch. Build command: npm run build. Publish directory: dist. These settings also live in netlify.toml.
5. Deploy. Future pushes to main trigger a new build and deployment.

This preserves the existing project URL. The SPA fallback supports direct links and refreshes on routes such as /atelier. Website commerce remains a local demonstration.

## Local changes

Edit src or public, rather than generated dist files. Build with npm run build when preparing an offline demo. Commit the source changes and push to GitHub for a linked deployment.
