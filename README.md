# Kalyanam — an ivory & gold South Indian wedding invitation

A South Indian kalyana card brought to the web: warm ivory-cream paper,
antique gold line-work, kumkum and rani-pink accents, a gold Ganesha
above the names, a fresh marigold toran with brass bells across the
cover, and the bride and groom beneath a mehrab arch. The cover is a
pair of ivory-silk doors that part onto ten scenes — story, save the
date, the celebrations, palette, garland, mandapam, countdown, RSVP
and a closing note. Fully customisable in the browser with a guided,
auto-saving visual editor — then published live with one click on
Cloudflare.

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
