export const experience = [
  {
    company: 'Limbic Capital',
    role: 'Private Equity Intern',
    location: 'London, UK',
    period: 'Apr 2026 – Present',
    bullets: [
      'Built a sourcing infrastructure from scratch — automated outreach across M&A Advisory, Manufacturing, Real Estate, and HVAC — generating 20 first meetings and 3 signed NDAs in the first month. Sourcing as a system, not a hunt.',
      'Mapped 500+ companies and 370+ contacts across RNG/AD developers and European lower mid-market M&A advisors; built a proprietary database of 7,000+ US companies tracking M&A activity to give the team a structural coverage advantage.',
      'Red-teamed the data center investment thesis from first principles — probability-weighted scenario models, primary hard signals, kill-criteria stress testing. Conclusion: mode selection, not sector timing, determines whether the thesis works.',
      'Diagnosed the conversion funnel of an alpha-stage portfolio SaaS company and deployed an analytics layer that autonomously corrects copy when metrics breach floor thresholds — closing the feedback loop no one had automated.',
    ],
  },
  {
    company: 'Eaglewings Ventures',
    role: 'Investment Analyst Intern',
    location: 'Mumbai, India',
    period: 'Jun 2025 – Aug 2025',
    bullets: [
      'Developed investment theses on Nuclear Energy in India and Immersion Cooling — surfaced nuclear as India\'s cheapest firm power at ₹3.83/kWh vs. ₹5+/kWh for firmed renewables, expanding the pipeline with 3 qualified companies.',
      'Supported pre-Series A diligence across 15+ founder calls — burn rates, cap tables, unit economics — building evaluative frameworks that outlasted the specific deals.',
      'Produced 2 sector research reports mapping regulatory risk, investment potential, and scalability across DeepTech and energy verticals.',
    ],
  },
  {
    company: 'Caprae Capital Partners',
    role: 'Private Equity Intern',
    location: 'Glendale, CA',
    period: 'Jan 2025 – May 2025',
    bullets: [
      'Built 2 LBO models across Legal Tech and ITAD targets — translating financial diligence into go/no-go acquisition memos with clear investment rationale.',
      'Sourced acquisition targets through direct founder outreach: cold-called into 2 partner-level meetings, proving that disciplined prospecting beats warm introductions when the thesis is specific enough.',
      'Produced 3 sector reports across Legal Tech, ITAD, and Accounting — mapping market structure, competitive dynamics, and where acquisition value concentrates in each vertical.',
    ],
  },
  {
    company: 'HP Tech Ventures',
    role: 'Deal Sourcing & Startup Analysis Extern',
    location: 'Remote',
    period: 'Nov 2024 – Jan 2025',
    bullets: [
      'Screened 20+ startups against HP\'s investment theses, surfacing 5 high-conviction targets for deeper review — one advanced to partner-level due diligence. Selection criterion: teams building infrastructure layers, not features.',
    ],
  },
  {
    company: 'The Dallas Entrepreneur Center Network',
    role: 'Project Management Intern',
    location: 'Dallas, TX',
    period: 'May 2024 – Aug 2024',
    bullets: [
      'Replaced intuition-based mentor-mentee pairing with a structured, metrics-driven dashboard — drove a 24.8% improvement in match quality and demonstrated that good system design beats good intentions.',
      'Coordinated delivery across a team of 5, maintaining 95% on-time project completion by building the tracking infrastructure that made the rate achievable.',
    ],
  },
  {
    company: 'Udayaa',
    role: 'Lead Software Engineer',
    location: 'Remote',
    period: 'May 2023 – Feb 2024',
    bullets: [
      'Led architecture and delivery of a full-stack platform for a non-profit supporting student fundraisers — directed a 5-person team from spec to live product using React, Django, PostgreSQL, Docker, and AWS.',
    ],
  },
]

export const research = [
  {
    title: 'Nuclear Energy in India',
    context: 'Eaglewings Ventures · 2025',
    thesis:
      'Nuclear is India\'s cheapest firm power at ₹3.83/kWh — decisively below firmed renewables at ₹5+/kWh once storage costs are factored in.',
    findings: [
      'TAM expanding from $1.54B today to $100B+ by 2047, at an 11% CAGR vs. global 2.9% — driven by peak load demand tripling to 366.4 GW by 2032.',
      '$2.4B government allocation in the 2025 budget targets 5 operational SMRs by 2033 and $26B in projected private investment. Atomic Energy Act reforms opening up to 49% FDI.',
      'AI-driven data center growth and 20-year hyperscaler PPAs (Microsoft, Google, Amazon) are creating durable structural demand for firm, dispatchable baseload power.',
    ],
    recommendation:
      'Express via EPC contractors and fuel-cycle suppliers rather than direct generation assets. Monitor Hylenr (LENR) and Pranos Fusion (spherical tokamak) as early-stage private plays with asymmetric upside.',
  },
  {
    title: 'Data Center Investment Thesis: Red-Team',
    context: 'Limbic Capital · 2026',
    thesis:
      'The sector thesis survives — but mode selection determines returns. A build-led platform creates a ~32% development margin; acquisition-led roll-ups at 28x EBITDA are a leveraged bet on peak multiples persisting, not a manufactured spread.',
    findings: [
      '$600B AI capex-to-revenue gap is widening; Microsoft cancelled 200 MW of US leases; Virginia Digital Gateway — the largest campus ever proposed — was killed by permitting opposition. A 35% combined probability of negative equity returns across bear/break scenarios requires only modest, correlated deterioration.',
      '+200bps cap rate expansion erases the entire value-creation margin. The 2028–2030 refinancing wall concentrates this rate risk into a narrow window.',
      'Power is simultaneously the thesis\'s strongest moat (3–5 year grid interconnection queues) and its most acute tail risk — 75 projects worth $130B were delayed or blocked in Q1 2026 alone.',
    ],
    recommendation:
      'The only version worth backing is build-led, pre-leased to investment-grade hyperscalers (50–70%), and power-secured before a dollar of hard cost is committed. Anything else — acquisition-led at 25–30x, speculative development, neocloud tenants — is equity risk wearing a real estate costume. Refuse above 20–22x EV/EBITDA. Actively manage the 2028–2030 refinancing wall; at +200bps the entire value-creation margin disappears.',
  },
]

export const projects = [
  {
    title: 'Automated Deal Evaluation Pipeline',
    stack: 'Python · Claude API · FastAPI · React · Vite',
    date: 'March 2026',
    bullets: [
      'PE deal triage follows the same pattern every time: ingest documents, extract the metrics that matter, write the memo. I automated all three with a multi-agent LLM pipeline — reducing analyst write-up time from days to minutes.',
      '60% faster on metric extraction. An additional 30% efficiency gain from integrated LBO Modeling and Research agents that feed conclusions directly into the IC Memo. The model does the grunt work; the analyst does the judgment.',
    ],
    github: 'https://github.com/ritwiksaini',
  },
  {
    title: 'HubAssist',
    stack: 'Python · Django · React · PostgreSQL · Docker · AWS',
    date: 'November 2022',
    bullets: [
      'BU\'s course planning system forced students to manually check 7,000+ courses against graduation requirements — a coordination problem that\'s cleanly solvable by a greedy algorithm. Built the algorithm, then the product. 1,500+ students used it.',
    ],
    github: 'https://github.com/ritwiksaini',
  },
]

export const skills = {
  finance: [
    'Financial Modeling',
    'LBO Analysis',
    'Equity Research',
    'Financial Statement Analysis',
    'Deal Sourcing',
    'Investment Memos',
    'Due Diligence',
    'Cap Table Review',
    'Bloomberg Terminal',
    'Econometrics',
    'CFA Level I',
    'Stata',
  ],
  tools: [
    'Excel (Advanced)',
    'Python',
    'SQL',
    'Tableau',
    'Power BI',
    'Salesforce',
    'PostgreSQL',
    'AWS',
  ],
}

export const education = [
  {
    school: 'Boston University',
    degree: 'BA Computer Science & Economics',
    period: 'Sep 2022 – May 2026',
    details: ['GPA 3.52 / 4.0', 'Presidential Scholarship', "Dean's List"],
  },
  {
    school: 'CFA Institute',
    degree: 'CFA® Level I — Passed',
    period: 'March 2026',
    details: [],
  },
]
