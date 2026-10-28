# Approved artwork replacement — 2026-10-28

This update supersedes the original master references in the earlier report below.

- Official master: `main-logo.png`; header: `title-logo.png`; hero: `top-hero-image.png`.
- Source PNGs are copied byte-for-byte with individual hash guards. The previous master remains archived.
- Removed the old hero waterfront/petal layers, since the new hero includes them. Header and hero preserve their complete native aspect ratios at both viewport widths.
- Playwright passed at 1440×900 and 390×844: no horizontal overflow, broken images, missing anchors, or page errors; mobile navigation works.
- Screenshots inspected: `qa-output/brand-update/desktop-viewport.png` and `mobile-viewport.png` (full-page captures also retained).

---
# Visual QA — 2026-10-28

## Target and constraints

Target: `references/website-design/大阪の未来を描くイベントサイトデザイン.png` (1536×1024 composite).
GitHub `main` and the starting checkout both pointed to `a4bdc7c99934a520b3d8a8ea0f62b2e0ea9403cd`.

The reference is a composition guide. The approved master has different artwork and is retained in full. No dates, named speakers, attendance figures, or purchase availability were copied from the reference.

## Comparison passes

1. Captured the starting page at 1440×900 and 390×844. The hero was undersized, waterfront was a simple skyline silhouette, and lower sections used unrelated geometric placeholders.
2. Enlarged the master, matched typography/spacing and the navy information band, added framed decorative regions of the supplied reference, and matched mobile theme icons and vertical composition. Speaker cards use anonymous CSS silhouettes.
3. Re-captured both widths. Reduced and faded the waterfront to keep the headline readable, excluded the neighboring navy edge from the gathering artwork, and refined the ink transition. Re-captured and inspected final screenshots.

Local artifacts (intentionally ignored):

- `qa-output/before/desktop.png`, `mobile.png`
- `qa-output/iteration-1/desktop.png`, `mobile.png`
- `qa-output/after/desktop.png`, `mobile.png`
- Each pass also includes viewport captures and `results.json`.

## Verification

- `npm.cmd run build`: passed; static home route generated, TypeScript checks passed.
- Playwright / installed Chrome: passed at both widths.
- Document width equals viewport width: 1440 / 390 (no horizontal overflow).
- Approved hero image loaded, no broken HTML images, no missing anchor targets, no uncaught page JavaScript errors.
- Mobile menu opens and its Program link navigates to `#program`.
- Original and served logo Git blob SHA both equal `13207b122d312f7982e5ff843b49a87e14c00993`.
- `git diff --check`: passed.

## Fidelity limits

- The locked logo is not the logo shown in the mockup, so an exact match is intentionally impossible without replacing the approved master.
- Decorative source windows are low-resolution parts of the supplied composite; they soften when enlarged. High-resolution source illustrations/photos remain desirable.
- Speakers, dates, venue, and tickets retain honest pending states. The program uses existing topic categories instead of fabricated daily schedules.
- Stage/gathering art is labeled as an event concept visual, not represented as photography of the future event.
- The mobile mockup omits some desktop sections; the implementation keeps Speakers and other informational sections accessible on mobile.
- This verifies local development and a production build, not a hosting deployment.
