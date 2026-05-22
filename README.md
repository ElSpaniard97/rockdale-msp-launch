# Lone Star ITS — Launch Tracker

Internal 60-day launch progress tracker for **Lone Star ITS**, a veteran family-owned managed technology services provider serving Rockdale and Central Texas.

This repo is the launch tracker only. The customer-facing marketing site lives in [`ElSpaniard97/lone-star-its`](https://github.com/ElSpaniard97/lone-star-its).

## Contents

- `index.html` — Dashboard (high-level launch snapshot, reads tracker localStorage)
- `tracker.html` — Full React-based 60-day launch tracker (checklists, MRR, budget, forms, notes)
- `style.css` — Shared Lone Star ITS visual system (navy + teal + silver palette)
- `main.js` — Shared dark-mode toggle and mobile hamburger nav
- `logo.png` — Lone Star ITS full brand logo
- `logo-mark.png` — Lone Star ITS star mark (favicon and header)
- `rockdale_msp_launch_plan.pdf` — Original 60-day MSP launch plan

## Brand

Name: **Lone Star ITS**

Tagline: **Managed Technology Services**

Brand pillars: **Reliable · Connected · Secure · Supported**

## Pages

| Page | Purpose |
| --- | --- |
| `index.html` | Read-only dashboard: overall %, Month 1 / Month 2 rings, MRR targets, next actions, budget snapshot. Reads from the same browser localStorage that `tracker.html` writes. |
| `tracker.html` | Full interactive tracker. Editable timeline, budget, MRR, forms checklist, weekly notes, export/import, print snapshot. |

## Tracker Features

- 8-week milestone checklist with live progress
- Dashboard next-action cards for the next incomplete launch tasks
- Month 1 and Month 2 completion rings with launch phase labels
- MRR insights for clients logged, average MRR, $3K gap, and estimated clients needed
- Editable week timeline with downstream auto-shift
- Budget tracker for projected vs. actual spend
- MRR tracker with break-even, $3K, and $8K progress targets
- Required forms checklist
- Weekly notes/journal
- Dark/light mode shared across both pages
- localStorage persistence for launch data
- Remembers the last opened tracker tab in localStorage
- JSON export/import with basic backup validation
- Safer reset flow that requires typing `RESET`
- Print/export snapshot support
- Mobile-friendly layout

## Operational Stack

Lone Star ITS runs day-to-day operations on **Zoho One** (mail, CRM, books, bookings, etc.). The tracker itself is intentionally not wired into Zoho — it is a private, browser-local progress tool. Customer-facing forms, scheduling, and chat belong on the public marketing site, not here.

## Deployment with GitHub Pages

1. Push to `main` on `ElSpaniard97/rockdale-msp-launch`.
2. Go to **Settings > Pages**.
3. Set source to **Deploy from a branch**.
4. Choose the `main` branch and `/root` folder.
5. Save.

The tracker publishes as:

```text
https://elspaniard97.github.io/rockdale-msp-launch/
```

## Data Storage Warning

Both pages store progress in browser `localStorage` under the key `rockdale-msp-launch-v1`. Export your progress JSON from `tracker.html` regularly if you use multiple browsers or devices.

The dark-mode preference and the active tracker tab are also stored locally.

## License

MIT. See `LICENSE`.
