# Kalyanam — a blush-ivory & gold Indian wedding invitation

An elegant Indian kalyana card brought to the web, rebuilt from the
reference invitations as **one continuous printed card**: a single
ivory-cream sheet with a double gold rule, lying on warm linen — a
marigold toran and hanging temple bells strung across its top edge,
blossom cascades breaking the frame at the corners, a gold Ganesha in
its niche, the shloka, "With the divine blessings of our families",
the names in maroon Pinyon Script, an ornamental date row with the
foil numerals, the muhurat, the venue and "Your presence will make
our day complete" — and then, painted into the same sheet, the
standing couple amid banana leaves, a carved mandap and a framed
signboard. Below: their story as a centred letter, the engraved
save-the-date plate, the six celebrations as a printed itinerary,
the palette, the garland of festivities, the kalyana mandapam, the
countdown beneath the mandala, the reply card, and a closing note
sealed with the couple's monogram. No site chrome — it reads as the
card itself. Set in Cormorant Garamond, EB Garamond and Pinyon
Script. Fully customisable in the browser with a guided, auto-saving
visual editor — then published live with one click on Cloudflare.

**Live template pieces**

| Piece | Where |
| --- | --- |
| Guest invitation (opening + ten scenes + RSVP) | `index.html` |
| Visual editor ("Invitation Atelier") | `customize.html` |
| Guest submissions page | `replies.html` |
| Static assets + D1 API | `worker.js`, `functions/` |
| Sample content & copy | `js/config.js` |

## Stack

- **Cloudflare Workers** — static assets (`dist/`) + a small JSON API
- **Cloudflare D1** — stores published invitations and guest replies
- **No build framework** — vanilla HTML/CSS/JS; `scripts/build.mjs`
  copies source into `dist/` and cache-busts asset URLs with content
  hashes, and stamps every page with the build version
- GSAP (CDN) for the opening choreography — everything degrades
  gracefully without it
- The drifting dust motes are pure CSS (a dozen wandering lights);
  they still, dim and disappear politely under `prefers-reduced-motion`
- Every ornament is a pure inline SVG in one flat gold — no `<use>`,
  no gradients, no shadow-DOM surprises

## Quick start (local)

```bash
npm install
npx wrangler d1 migrations apply kalyanam-invitations --local
npm run build
npx wrangler dev            # http://localhost:8788
```

The invitation runs in honest demonstration mode until published:
RSVPs validate and preview but are not stored. Deploy with a D1
database (see `DEPLOY.md`) and everything — the atelier, publishing,
guest replies, the submissions page — goes live.

## Deploying to Cloudflare

`DEPLOY.md` walks through it step by step (dashboard path and CLI
path): create the D1 database, paste its id into `wrangler.jsonc`,
run `npx wrangler d1 migrations apply kalyanam-invitations --remote`,
then `npm run build && npx wrangler deploy`.
