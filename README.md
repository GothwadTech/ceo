# Yuvkesh Meena — Gothwad Tech profile

A responsive, English-language profile for **Yuvkesh Meena, Chief Executive Officer of Gothwad Tech**. Gothwad Tech was founded by **Pawan Gothwad**. This site presents Yuvkesh’s role, background and leadership context, along with a curated index of Gothwad Tech products linked to their public repositories and developer documentation.

The profile is a static React/Vite site with no API keys, backend, database or contact-form data collection. Its production build prerenders the page into `dist/index.html` so search and social crawlers receive the biography and project catalogue in the initial HTML.

## Local development

Use Node.js 22.12 or newer.

```bash
npm install
npm run dev
```

Vite listens on `0.0.0.0:3000`. No environment variables are required.

```bash
npm run lint
npm run build
npm run preview
```

`npm run build` type-checks the project, builds the Vite assets and prerenders the profile. The deployable output is `dist/`.

## Deploy to Cloudflare Pages

Create a Pages project from this repository and use:

| Setting | Value |
| --- | --- |
| Framework preset | Vite |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | `/` |
| Node.js version | `22` |

Add `ceo.gothwadtech.com` as a custom domain in Cloudflare Pages and follow the DNS instructions shown in the dashboard. After deployment, check the homepage, `https://ceo.gothwadtech.com/robots.txt`, `https://ceo.gothwadtech.com/sitemap.xml` and `https://ceo.gothwadtech.com/llms.txt`.

## Content and assets

- Profile facts and product summaries: `src/data/profileData.ts`
- Search and social metadata, canonical URL and Person/ProfilePage structured data: `index.html`
- Project cards link to Gothwad Tech's public source repositories; descriptions are intentionally limited to documented scope.
- The Gothwad Tech logo is stored in `public/assets/gothwad-tech-logo.svg` and is also used as the favicon.
- The supplied CEO portrait is optimized as `public/assets/yuvkesh-meena.webp`, with a JPEG fallback. The social preview uses a 1200 × 630 JPEG card at `public/og-yuvkesh-meena.jpg`.
- `public/robots.txt`, `public/sitemap.xml`, `public/llms.txt` and `public/_headers` are copied to the Pages output by Vite.

The product index is curated, not a live GitHub API feed. Check each linked repository for current release availability, licensing and implementation details. The page does not claim that repository ownership means one person authored every line of code.
