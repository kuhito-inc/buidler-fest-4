# Buidler Fest 2027 website

Next.js App Router landing page. Uses the **existing approved master PNG** at `../brand/logos/builder-fest-2027-logo.png` without redrawing or regenerating it. The predev/prebuild script copies those exact bytes to `public/brand/logo.png` (gitignored).

## Local development

```bash
cd website
npm install
npm run dev
```

## Production build

```bash
cd website
npm install
npm run build
npm start
```

For Vercel/Cloudflare CI, set the project root to `website`, and ensure the checkout contains the parent `brand/` folder. Do not deploy the `website` directory in isolation. Cloudflare Pages Next.js support may require a compatible adapter.

## Content status
- Dates, hotel, ticket sales, speakers, sponsors, and registration links are **not yet confirmed** and are not invented on the page.
- Search indexing is intentionally disabled while the site is a draft.
- No external social links are shown until official ownership is confirmed.
- This is a first implementation, not a verified production deployment. Run build and browser QA before publishing.

## Design lock
Do not regenerate the logo or substitute another image. Adjust layout, sizing and spacing around the approved master instead.
