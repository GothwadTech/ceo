# Yuvkesh Meena — Gothwad Tech profile

## Objective

Create a professional, English-language profile for Yuvkesh Meena, Founder and Chief Executive Officer of Gothwad Tech, at `ceo.gothwadtech.com`. The profile should be clear to people, search engines and AI-assisted search, and feel editorial rather than like a generic technology template.

## Content boundaries

- Use the profile owner’s supplied facts for Yuvkesh Meena’s role and birthplace: Dausa, Rajasthan, India.
- Ground product descriptions in Gothwad Tech’s public repository descriptions and developer documentation.
- Do not invent career dates, education, public metrics, endorsements, direct code authorship, product performance or release guarantees.
- Link project cards to their public source repositories and point readers to the developer documentation.
- Use the official Gothwad Tech SVG logo. The CEO portrait was not present in the checked-out workspace; the hero therefore uses a typographic monogram until the approved photo is available.
- Avoid operational-status claims unless directly verified in current product documentation.

## Experience and design

- Use an understated, editorial light theme with warm paper surfaces, deep green typography and restrained copper accents.
- Provide responsive navigation, a profile introduction and fact list, leadership context, a searchable and filterable project catalogue, and official contact links.
- Keep all visible site content in English, with accessible labels, keyboard focus states and reduced-motion support.
- Avoid fabricated timelines, engagement figures, testimonial quotes, AI-generated portraits and simulated contact-form submissions.

## SEO and deployment

- Provide a descriptive title and summary, canonical URL, Open Graph and Twitter metadata, Person/ProfilePage JSON-LD, robots file, sitemap and an optional `llms.txt` summary.
- Prerender the React page into the production HTML so profile and project text are available before client-side JavaScript runs.
- Keep deployment static and key-free for Cloudflare Pages (`npm run build`, output `dist/`).

## Implementation files

- `src/data/profileData.ts`: profile facts, themes and curated repository-backed project summaries.
- `src/components/`: accessible layout, profile, project explorer and contact sections.
- `index.html`: metadata and structured data.
- `scripts/prerender.mjs`: static HTML rendering for production.
- `public/`: Gothwad Tech logo, social card, crawler files and response headers.
