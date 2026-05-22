/* ============================================================
   Lone Star ITS — Launch Tracker shared data
   Single source of truth for the 8-week launch plan.
   Used by both index.html (dashboard) and tracker.html (React).
   ============================================================ */

window.LSI_WEEKS = [
  { id: 1, month: 1, title: "Legal & Business Setup", tasks: [
    "File Texas LLC", "Register EIN", "Open business checking account",
    "Secure GL + E&O insurance", "Purchase domain",
    "Send MSA/SLA templates to attorney", "Contact Rockdale MDD",
    "Create bilingual business cards", "Contact Temple SBDC"
  ] },
  { id: 2, month: 1, title: "Zoho One Setup", tasks: [
    "Activate Zoho One subscription",
    "Verify custom domain in Zoho Directory",
    "Set up Zoho Mail (primary inbox + role aliases)",
    "Configure Zoho CRM (pipeline stages + lead sources)",
    "Configure Zoho Books (tax, invoicing, ACH)",
    "Set up Zoho Sign templates for MSA / SLA",
    "Configure Zoho Bookings for discovery calls",
    "Configure Zoho Desk for client ticketing",
    "Configure Zoho Assist for remote support",
    "Configure Zoho Vault for credential storage"
  ] },
  { id: 3, month: 1, title: "Service Packages & Pricing", tasks: [
    "Define 2–3 service tiers", "Create Industrial Onboarding package",
    "Build one-page print brochure", "Confirm 60-mile service radius",
    "Choose primary niche vertical", "Write onboarding checklist",
    "Configure Zoho Books invoice templates",
    "Configure Zoho CRM pipeline stages",
    "Draft proposal template in Zoho Sign"
  ] },
  { id: 4, month: 1, title: "Go-to-Market & Local Outreach", tasks: [
    "Launch 5-page website", "Claim Google Business Profile",
    "Join Rockdale Chamber", "Contact Milam County EDC",
    "Contact Temple SBDC", "Build 40–60 prospect list in Zoho CRM",
    "Begin LinkedIn outreach",
    "Schedule 5–10 discovery calls via Zoho Bookings",
    "Order vehicle branding design"
  ] },
  { id: 5, month: 2, title: "Close First Clients", tasks: [
    "Run discovery calls", "Document prospect pain points in Zoho CRM",
    "Send proposals via Zoho Sign", "Target 1–3 signed agreements",
    "Prioritize construction, medical/dental, school-adjacent vendors",
    "Collect signed contracts",
    "Set up automated billing in Zoho Books",
    "Set up ACH auto-pay",
    "Onboard won clients in Zoho Desk"
  ] },
  { id: 6, month: 2, title: "Onboard & Deliver", tasks: [
    "Perform on-site onboarding",
    "Deploy Zoho Assist unattended access on client endpoints",
    "Verify first backup restore",
    "Document client environment in Zoho Desk + Zoho Vault",
    "Run initial security assessment",
    "Document legacy hardware/software risks",
    "Confirm endpoint protection on all client devices",
    "Confirm DNS / web filtering on client networks",
    "Hand off client portal access in Zoho Desk"
  ] },
  { id: 7, month: 2, title: "Processes & Automation", tasks: [
    "Build patching / update SOP",
    "Create monthly client report template in Zoho Analytics",
    "Build ticket triage SOP in Zoho Desk",
    "Create severity / response matrix",
    "Build Industrial IT pitch deck",
    "Attend Cameron / Taylor business events",
    "Add runbooks to Zoho Desk knowledge base",
    "Document repeatable workflows in Zoho Creator / Flow",
    "Set up Zoho Analytics dashboards for ops metrics"
  ] },
  { id: 8, month: 2, title: "Review & Scale Plan", tasks: [
    "Deliver first client QBR / 30-day check-in", "Ask for referrals",
    "Review MRR vs. operating costs", "Cut unused tools",
    "Assess solo endpoint capacity",
    "Plan first subcontractor or part-time tech",
    "Research A&M-Central Texas / Temple College candidates",
    "Update referrals in Zoho CRM",
    "Evaluate future scale-up tooling needs"
  ] }
];
