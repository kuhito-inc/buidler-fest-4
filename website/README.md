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

## Visual reference alignment — iteration 2

The hero now layers independent `public/decor/osaka-skyline.svg` and `public/decor/sakura-petals.svg` underneath the unchanged approved master `/brand/logo.png`. These are lightweight vector decorations, **not** reproductions of Osaka Castle or the exact original illustration. The official master remains the only source of the event logo.

Next QA: run `npm run build`, check desktop 1440px and mobile 390px, verify that no logo text is clipped, and compare against the user-provided three-panel reference screenshot. The current SVG decorations are first-pass approximations; browser QA and visual approval are outstanding.
