/* ============================================================
   Lone Star ITS — Launch Tracker shared data
   Single source of truth for the 8-week launch plan.
   Used by both index.html (dashboard) and tracker.html (React).
   ============================================================ */

window.LSI_WEEKS = [
  { id: 1, month: 1, title: "Legal & Business Setup", tasks: [
    "File Texas LLC", "Register EIN", "Open business checking account",
    "Secure GL + E&O insurance", "Purchase domain", "Set up Google Workspace",
    "Send MSA/SLA templates to attorney", "Contact Rockdale MDD",
    "Create bilingual business cards", "Contact Temple SBDC"
  ] },
  { id: 2, month: 1, title: "Software Stack Setup", tasks: [
    "Create Pax8 distributor account", "Create HubSpot CRM account",
    "Set up QuickBooks Online", "Start Syncro trial",
    "Start Huntress trial / partner signup", "Order Acronis through Pax8",
    "Sign up for DNSFilter MSP account", "Sign up for Hudu",
    "Install Syncro agent on your own machines", "Test Huntress deployment through Syncro"
  ] },
  { id: 3, month: 1, title: "Service Packages & Pricing", tasks: [
    "Define 2–3 service tiers", "Create Industrial Onboarding package",
    "Build one-page print brochure", "Confirm 60-mile service radius",
    "Choose primary niche vertical", "Write onboarding checklist",
    "Configure Syncro billing templates", "Configure HubSpot pipeline stages",
    "Draft proposal template"
  ] },
  { id: 4, month: 1, title: "Go-to-Market & Local Outreach", tasks: [
    "Launch 5-page website", "Claim Google Business Profile",
    "Join Rockdale Chamber", "Contact Milam County EDC",
    "Contact Temple SBDC", "Build 40–60 prospect list",
    "Begin LinkedIn outreach", "Schedule 5–10 discovery calls",
    "Order vehicle branding design"
  ] },
  { id: 5, month: 2, title: "Close First Clients", tasks: [
    "Run discovery calls", "Document prospect pain points",
    "Send proposals", "Target 1–3 signed agreements",
    "Prioritize construction, medical/dental, school-adjacent vendors",
    "Collect signed contracts", "Set up automated billing",
    "Set up ACH auto-pay", "Move won clients into Syncro"
  ] },
  { id: 6, month: 2, title: "Onboard & Deliver", tasks: [
    "Perform on-site onboarding", "Deploy Syncro RMM agents",
    "Deploy Huntress EDR", "Deploy DNSFilter",
    "Deploy Acronis backup", "Verify first backup restore",
    "Document client environment in Hudu", "Run initial security assessment",
    "Document legacy hardware/software risks"
  ] },
  { id: 7, month: 2, title: "Processes & Automation", tasks: [
    "Build Syncro patching policy", "Configure Huntress alert policies",
    "Create monthly client report template", "Build ticket triage SOP",
    "Create severity/response matrix", "Build Industrial IT pitch deck",
    "Attend Cameron/Taylor business events", "Add runbooks to Hudu",
    "Document Syncro automation scripts"
  ] },
  { id: 8, month: 2, title: "Review & Scale Plan", tasks: [
    "Deliver first client QBR / 30-day check-in", "Ask for referrals",
    "Review MRR vs. stack costs", "Cut unused tools",
    "Assess solo endpoint capacity", "Plan first subcontractor or part-time tech",
    "Research A&M-Central Texas / Temple College candidates",
    "Update HubSpot with referrals", "Evaluate future NinjaOne + HaloPSA upgrade path"
  ] }
];
