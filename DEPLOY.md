# Deploy Guide

This microsite is a static site (HTML/CSS/JS), so deployment is straightforward.

## Option 1: Vercel (Recommended)

### If this folder is its own repo
1. Push this folder to GitHub.
2. In Vercel: `Add New Project` -> import repo.
3. Keep defaults:
   - Framework preset: `Other`
   - Build command: *(empty)*
   - Output directory: *(empty / root)*
4. Deploy.
5. After first deploy, set these optional metadata values in `index.html`:
   - `og:url` to your live URL
   - `og:image` / `twitter:image` to a real hosted preview image (`preview-card.png`)

### If this folder is inside a bigger repo
1. Import the parent repo in Vercel.
2. In project settings, set `Root Directory` to `pod-value-story`.
3. Keep build command empty and deploy.

## Option 2: Netlify

### Drag-and-drop
1. Zip the contents of `pod-value-story` (not the parent folder).
2. In Netlify, use `Add new site` -> `Deploy manually`.
3. Drag the zip or folder contents.

### Git-based
1. Push to GitHub.
2. In Netlify, `Add new site` -> `Import an existing project`.
3. If in a monorepo, set:
   - Base directory: `pod-value-story`
   - Build command: *(empty)*
   - Publish directory: `.`
4. After publish, validate social preview using your live URL in LinkedIn/X preview tools.

## Option 3: GitHub Pages
1. Put these files in a repo root (or `docs/`).
2. In GitHub repo settings -> `Pages`:
   - Source: `Deploy from a branch`
   - Branch: `main` (or your branch) and folder `/root` (or `/docs`)
3. Save and share the generated URL.
4. Validate social sharing preview once DNS and Pages are live.

## Local preview
From `C:\Users\diorh\OneDrive\Documents\Playground`:

```powershell
node serve.js
```

Open:

```text
http://localhost:3000/pod-value-story/
```
