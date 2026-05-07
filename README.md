# Rockdale MSP Launch

Interactive 60-day launch tracker for starting a local IT Managed Service Provider business in Rockdale, Texas.

## Contents

- `rockdale_msp_launch_plan.pdf` — Original 60-day MSP launch plan
- `index.html` — Self-contained React progress tracker web app

## Tracker Features

- 8-week milestone checklist with live progress
- Month 1 and Month 2 completion rings
- Editable week timeline with downstream auto-shift
- Budget tracker for projected vs. actual spend
- MRR tracker with break-even, $3K, and $8K progress targets
- Vendor signup checklist
- Required forms checklist
- Weekly notes/journal
- Dark/light mode
- localStorage persistence
- JSON export/import
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

## Suggested Initial Git Commands

```bash
git init
git add README.md rockdale_msp_launch_plan.pdf index.html
git commit -m "Initial Rockdale MSP launch tracker"
git branch -M main
git remote add origin https://github.com/ElSpaniard97/rockdale-msp-launch.git
git push -u origin main
```
