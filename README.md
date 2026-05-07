# AnchorLink Tech MSP Launch

Interactive 60-day launch tracker for starting AnchorLink Tech, a managed technology services provider serving Rockdale and Central Texas.

## Contents

- `rockdale_msp_launch_plan.pdf` — Original 60-day MSP launch plan
- `index.html` — Self-contained React progress tracker web app
- `assets/anchorlink-tech-logo.svg` — AnchorLink Tech horizontal logo/wordmark
- `assets/anchorlink-tech-icon.svg` — AnchorLink Tech app icon/favicon

## Brand

Name: **AnchorLink Tech**

Tagline: **Managed Technology Services**

Brand pillars: **Reliable · Connected · Secure · Supported**

## Tracker Features

- 8-week milestone checklist with live progress
- AnchorLink Tech branding, logo panel, app icon, and favicon
- Dashboard next-action cards for the next incomplete launch tasks
- Month 1 and Month 2 completion rings with launch phase labels
- MRR insights for clients logged, average MRR, $3K gap, and estimated clients needed
- Editable week timeline with downstream auto-shift
- Budget tracker for projected vs. actual spend
- MRR tracker with break-even, $3K, and $8K progress targets
- Mobile-friendly horizontal tab navigation
- Vendor signup checklist
- Required forms checklist
- Weekly notes/journal
- Dark/light mode
- localStorage persistence for launch data
- Remembers the last opened tracker page/tab in localStorage
- JSON export/import with basic backup validation
- Safer reset flow that requires typing `RESET`
- Print/export snapshot support
- Mobile-friendly layout

## Deployment with GitHub Pages

1. Create a new GitHub repository named `rockdale-msp-launch`.
2. Upload `README.md`, `rockdale_msp_launch_plan.pdf`, and `index.html` to the repository root.
3. Go to **Settings > Pages**.
4. Set source to **Deploy from a branch**.
5. Choose the `main` branch and `/root` folder.
6. Save.

The app will publish as:

```text
https://elspaniard97.github.io/rockdale-msp-launch/
```

## Data Storage Warning

The tracker stores progress in browser `localStorage`. Export your progress JSON regularly if you use multiple browsers or devices.

The active page/tab is also stored locally, so the tracker reopens to the last section you were using.

## License

MIT. See `LICENSE`.

## Suggested Initial Git Commands

```bash
git init
git add README.md rockdale_msp_launch_plan.pdf index.html assets/
git commit -m "Initial AnchorLink Tech MSP launch tracker"
git branch -M main
git remote add origin https://github.com/ElSpaniard97/rockdale-msp-launch.git
git push -u origin main
```
