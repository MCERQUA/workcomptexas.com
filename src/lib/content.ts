// Rich, niche-accurate content blocks + centralized COPY for Work Comp Texas.

import {
  PhoneCall, FileSearch, FileSignature, ShieldCheck,
  Building2, Briefcase, HardHat, Wrench, Home, Thermometer,
} from "lucide-react";

/* ============================================================
   COPY — centralized display strings consumed by components/pages.
   ============================================================ */
export const COPY = {
  hero: {
    h1Lead: "Texas workers' comp built for",
    h1Highlight: "contractors who build Texas",
    subcopy:
      "General contractors, subcontractors, roofing crews, HVAC techs, and construction trades across all 254 Texas counties. Correct class codes, fast certificates, real rates — from a licensed agency that knows Texas's unique opt-out system. A-rated carriers. 15-minute quotes.",
    statValue: "1,200+",
    statLabel: "Texas contractors insured — GCs, subs, roofing, HVAC, and specialty trades statewide",
    imageAlt: "Texas contractor in hard hat on a commercial construction site under a big blue Texas sky",
  },
  nav: { ariaLabel: "Work Comp Texas home" },
  footer: {
    ctaTitle: "Ready for Texas workers' comp that actually fits?",
    ctaSubcopy: "15-minute quotes. 2-hour claims response. Workers' comp for Texas contractors statewide — Houston, Dallas, Austin, and all 254 counties.",
    description:
      "Workers' compensation insurance for Texas contractors — general contractors, subcontractors, roofing, HVAC, construction, and specialty trades. Texas WC, non-subscriber guidance, and occupational accident alternatives. A division of Contractors Choice Agency — founded 2005, licensed all 50 states. NPN #8608479.",
  },
  servicesGrid: {
    h2Lead: "Texas workers' comp coverage built for",
    h2Highlight: "every Texas trade",
    lead: "Generic WC programs misclassify Texas contractors and overprice the premium. We write WC with the right class codes for your trade — roofing, HVAC, electrical, plumbing, general contracting, or specialty work — so your rate reflects what you actually do.",
  },
  why: {
    eyebrow: "Why Texas contractors choose us",
    h2Lead: "The WC problems that",
    h2Highlight: "cost Texas contractors the most",
    lead: "Most Texas contractors either overpay for workers' comp due to wrong class codes, can't get coverage at all, or don't understand the non-subscriber system well enough to make an informed choice. We fix all three — fast quotes, correct codes, and honest advice on Texas's opt-out option.",
    sidebarTitle: "Run by people who know construction",
    sidebarBody:
      "Contractors Choice Agency was founded in 2005 by Josh Cotner, who came from the trades. We've written Texas WC for contractors in every major market — Houston, Dallas, Austin, San Antonio, and across the state — and we know what a roofing crew's WC should actually cost.",
  },
  coverage: {
    eyebrow: "Where we write",
    h2Lead: "Texas workers' comp.",
    h2Highlight: "All 254 counties.",
    lead: "From Houston's petrochemical corridor to the Permian Basin to the DFW Metroplex, Contractors Choice Agency writes workers' compensation for Texas contractors in every county, every trade.",
    imageAlt: "Texas construction workers on a commercial building site — statewide Texas workers comp coverage",
    badgeTitle: "Statewide Texas workers' comp for contractors.",
    badgeSub: "Writing Texas WC programs in all 254 counties since 2005.",
  },
  process: {
    lead: "No wrong class codes, no two-week delay for a certificate. A quick conversation, the right program for your trade and payroll, and a certificate your GC can accept — handled fast.",
  },
  testimonials: {
    eyebrow: "From Texas contractors",
    h2Lead: "Texas contractors who found",
    h2Highlight: "WC that actually worked",
  },
  finalCta: {
    h2Lead: "Get Texas Workers' Comp",
    h2Highlight: "that fits your trade and your payroll.",
    lead: "Whether you need a WC certificate by Friday, a program for your growing crew, or honest advice on Texas's non-subscriber option — one call gets you real answers from an agent who knows Texas contracting.",
  },
  ctaBand: {
    defaultTitle: "Ready for a Texas workers' comp quote?",
    defaultDescription:
      "Get a 15-minute quote from specialists who know Texas WC — correct class codes, fast certificates, and honest non-subscriber guidance for all Texas contractor trades.",
  },
  faq: {
    defaultTitleLead: "Texas workers' comp,",
    defaultTitleHighlight: "in plain English",
  },
  servicesPage: {
    metaTitle: "Texas Workers' Comp Insurance — All Contractor Trades",
    metaDescription:
      "Eight workers' compensation programs for Texas contractors: general contractor WC, subcontractor WC, Texas WC opt-out guidance, non-subscriber insurance, construction WC, small business WC, roofing WC, and HVAC WC. Licensed all 50 states.",
    h1Lead: "Texas workers' comp built line-by-line for",
    h1Highlight: "every Texas contractor trade",
    lead: "Each program below addresses a specific Texas contractor type — from the general contractor managing multiple job sites to the roofing crew with high-hazard WC classifications to the Texas non-subscriber evaluating the opt-out decision.",
    ogTitle: "Texas Workers' Comp Insurance | Contractors Choice Agency",
    ogDescription:
      "GC WC, subcontractor WC, Texas opt-out guidance, non-subscriber insurance, construction WC, roofing WC, HVAC WC — written correctly for Texas contractors.",
    ctaTitle: "Not sure which Texas WC program fits?",
    ctaDescription:
      "Most Texas contractors need a trade-specific WC program with correct class codes. We'll match your trade, payroll, and Texas status in one call.",
  },
  blogPage: {
    metaTitle: "Texas Workers' Comp Blog — Contractor Guides",
    metaDescription:
      "Plain-English guides on workers' compensation for Texas contractors: WC rates by trade, non-subscriber status, class codes, opt-out guidance, and roofing WC in Texas.",
    h1Lead: "Texas workers' comp,",
    h1Highlight: "decoded",
    lead: "Texas-specific guides on WC rates, class codes, non-subscriber status, opt-out decisions, and the coverage contractors need to work on Texas job sites.",
    ogTitle: "Texas Workers' Comp Blog | Contractors Choice Agency",
    ogDescription:
      "Plain-English guides for Texas contractors: WC rates, class codes, non-subscriber status, opt-out guidance, and roofing WC in Texas.",
  },
  serviceDetail: {
    h1Suffix: "for Texas contractors",
    imageAltSuffix: "Texas contractor workers comp",
    category: "Texas Workers' Comp Insurance",
  },
  about: {
    metaTitle: "About Work Comp Texas | Contractors Choice Agency",
    metaDescription:
      "Work Comp Texas is the Texas contractor WC division of Contractors Choice Agency, founded in 2005 by Josh Cotner. General contractor, roofing, HVAC, construction, and non-subscriber guidance for Texas. Licensed all 50 states.",
    h1Lead: "Built by people who know the trades,",
    h1Highlight: "for Texas contractors",
    lead: "Work Comp Texas is the Texas contractor division of Contractors Choice Agency — founded in 2005 by Josh Cotner, who knows what happens when wrong class codes blow up a WC audit or a slow certificate loses a job in Houston.",
    imageAlt: "A contractor in a hard hat reviewing workers comp documents on a Texas construction site",
    storyEyebrow: "Our story",
    storyTitle: "From the jobsite to the agency.",
    storyLead:
      "Josh Cotner ran equipment, read specs, and filed certificates before founding CCA in 2005. That background is why we understand what a Texas roofing contractor's WC should cost — and what the audit will find if the class codes are wrong.",
    valuesTitle: "Four things we won't compromise on.",
    timeline: [
      { year: "2005", title: "Contractors Choice Agency founded", desc: "Josh Cotner opens CCA in Chandler, AZ, after years working in the trades — built to insure contractors the right way." },
      { year: "10 yrs", title: "Expanded deep into Texas contractor WC", desc: "After placing WC for contractors across the country, CCA builds a dedicated Texas practice — roofing, HVAC, GC, and sub programs across the state." },
      { year: "Today", title: "Texas WC specialist division", desc: "Work Comp Texas focuses CCA's expertise on Texas's unique WC system — voluntary coverage, non-subscriber framework, and trade-specific class codes for every Texas trade." },
    ],
    values: [
      { icon: "HardHat", title: "Contractor-first, always", desc: "Josh spent years in the trades before starting the agency. We speak the language of Texas contracting because we know what it costs when WC goes wrong at audit time." },
      { icon: "ShieldCheck", title: "Right class codes from the start", desc: "Wrong class codes mean overpayment and audit surprises. We classify your work correctly the first time so your WC rate reflects what you actually do." },
      { icon: "Award", title: "A-rated markets only", desc: "We place Texas WC with A-rated (and A.M. Best A+ where possible) carriers so your certificate is accepted and your claims are paid." },
      { icon: "Handshake", title: "Honest non-subscriber guidance", desc: "Texas's opt-out system is a real option for some contractors. We'll tell you honestly when it makes sense and when it doesn't — not just sell you a policy you might not need." },
    ],
  },
  quote: {
    h1Lead: "Get your",
    h1Highlight: "Texas workers' comp quote",
    lead: "Tell us about your Texas business and trade. We'll shop A-rated carriers with the right class codes and come back with real quotes in about 15 minutes — no obligation.",
    businessPlaceholder: "Lone Star Roofing LLC",
    emailPlaceholder: "mike@lonestarroofing.com",
    phonePlaceholder: "(713) 555-0100",
    messagePlaceholder:
      "Trade type, payroll, number of employees, Texas cities where you work, current WC situation, loss history, or anything else that helps us quote accurately…",
    errorMessage: "Something went wrong. Please call us at 844-967-5247 or try again.",
    trustNicheTitle: "Built for Texas contractors",
    trustNicheDesc: "WC programs with the right class codes for your Texas trade — not generic coverage.",
  },
  contact: {
    h1Lead: "Let's talk about your",
    h1Highlight: "Texas workers' comp",
    lead: "Questions about Texas WC rates, non-subscriber status, or a certificate you need fast — reach a person who knows Texas contractor WC, not a queue.",
    errorMessage: "Something went wrong. Please call us at 844-967-5247.",
  },
  coveragePage: {
    metaTitle: "Texas Workers' Comp Insurance — All 254 Counties",
    metaDescription:
      "Contractors Choice Agency writes workers' compensation for Texas contractors in all 254 counties — Houston, Dallas, Austin, San Antonio, West Texas, Gulf Coast, and statewide.",
    h1Lead: "Statewide Texas reach.",
    h1Highlight: "All 254 counties, every Texas trade.",
    lead: "Contractors Choice Agency writes Texas workers' compensation for contractors in every county — from the DFW Metroplex to the Permian Basin to the Gulf Coast.",
    sectionTitle: "Texas markets and regions we serve.",
    nationwideLead:
      "Whether you're in Houston, Dallas, Austin, or anywhere across the state — one agent, one coordinated program, Texas statewide. NPN #8608479.",
    faqs: [
      { q: "Do you write Texas WC outside of Houston and Dallas?", a: "Yes. We write Texas workers' comp for contractors in all 254 counties — West Texas, the Gulf Coast, the Panhandle, South Texas, and everywhere in between. One agent, statewide." },
      { q: "Can you write WC for contractors working on Texas state projects?", a: "Yes. State agency and public-sector projects in Texas typically require WC even though WC is otherwise optional for private employers. We place WC programs that satisfy state project requirements." },
      { q: "Do you handle multi-county or statewide Texas WC programs?", a: "Yes. General contractors running multiple job sites across Texas need a WC program that follows their work. We coordinate statewide programs with the right class codes for each project location." },
      { q: "Can you write Texas WC for contractors who also work in other states?", a: "Yes. We structure multi-state WC programs that cover Texas employees when they work across state lines — coordinating coverage so there are no gaps between states." },
    ],
  },
} as const;

/* ============================================================
   PROCESS
   ============================================================ */
export const PROCESS = [
  { step: "01", icon: PhoneCall, title: "Tell us about your Texas business", description: "15-min call or form. Trade type, payroll, employee count, Texas cities where you work, and your current WC situation. We identify the right program immediately." },
  { step: "02", icon: FileSearch, title: "We shop A-rated Texas WC markets", description: "Texas WC markets that write your specific trade — roofing, HVAC, electrical, general contracting — with class codes that match what you actually do." },
  { step: "03", icon: FileSignature, title: "Bind a program with the right class codes", description: "Correct codes from the start mean no audit surprises. We structure your WC so the premium you pay is the premium that sticks at year-end audit." },
  { step: "04", icon: ShieldCheck, title: "Claims support that moves fast", description: "When a job-site injury happens, you reach a person with context — not a queue. 2-hour claims response. We advocate for your crew and for your business." },
] as const;

/* ============================================================
   WHY CHOOSE US
   ============================================================ */
export const WHY_CHOOSE = [
  { icon: ShieldCheck, title: "Class codes that match your trade", description: "Wrong class codes blow up WC audits and overprice the premium. We classify Texas roofing, HVAC, electrical, plumbing, and GC work correctly — so your rate reflects your actual risk." },
  { icon: HardHat, title: "Fast WC certificates for Texas GC requirements", description: "Many Texas GCs and project owners require WC certificates before you start. We have programs that issue certificates within 24–48 hours so a missing cert never costs you a job." },
  { icon: Wrench, title: "Honest Texas non-subscriber guidance", description: "Texas WC is optional for most employers — but non-subscriber status has real liability consequences. We give you an honest comparison so you know what you're choosing before you choose it." },
  { icon: Building2, title: "Roofing and high-hazard WC access", description: "High-hazard trades like roofing are hard to place in Texas at a fair rate. We have specialty market access for roofing contractors and other high-hazard trades that standard markets decline or overprice." },
  { icon: Briefcase, title: "Small Texas contractor programs", description: "Small contractors with 1–5 employees often get generic, overpriced WC. We place small-employer programs with rates that match your payroll and trade — not a large commercial scale." },
  { icon: Home, title: "Run by a former contractor", description: "Josh Cotner knows what Texas job sites look like and what a WC audit feels like when the class codes are wrong. We've been writing Texas contractor WC since 2005." },
] as const;

/* ============================================================
   HOMEPAGE FAQ — 20 questions
   ============================================================ */
export const HOME_FAQS = [
  { q: "Is workers' compensation required in Texas?", a: "No — Texas is the only state where WC is not mandatory for most private employers. However, public-sector contracts, state agency work, and some municipal projects require it regardless. And GCs frequently require subcontractors to carry WC as a contract condition. Just because Texas doesn't require it doesn't mean your work doesn't." },
  { q: "What is a Texas non-subscriber?", a: "A Texas non-subscriber is a private employer who has chosen not to carry workers' compensation insurance. Non-subscribers operate outside the state WC system — they can design their own benefit plans but lose the standard employer negligence defenses that come with WC participation. Employees can sue non-subscribers for negligence without the standard 'course and scope' burden." },
  { q: "How much does workers' comp cost in Texas?", a: "WC cost in Texas depends heavily on your trade, payroll, employee count, and loss history. High-hazard trades like roofing and structural steel carry much higher rates than interior finishing or landscaping. Small contractors typically pay a few hundred to a few thousand dollars a year; larger crews with high-hazard work pay more. We quote your actual trade and payroll — not a ballpark." },
  { q: "Do Texas subcontractors need workers' comp?", a: "Texas law doesn't require it — but your GC's contract often does. Many Texas general contractors require all subs to either carry WC or provide a valid WC exemption certificate (in states that offer one). Without satisfying that requirement, a GC can withhold payment or pull you from the job. Read your subcontract before assuming you don't need WC." },
  { q: "What are WC class codes and why do they matter?", a: "WC class codes determine your premium rate. Each class code corresponds to a type of work — roofing, framing, electrical, HVAC, concrete — and carries a base rate that reflects the historical injury cost for that work type. Misclassified workers under low-hazard codes get corrected at audit, often resulting in large additional premiums. Correct codes from day one prevent audit surprises." },
  { q: "Can I get workers' comp just for my employees and not myself?", a: "Yes — as a business owner, you may be able to exclude yourself from your own WC policy (similar to a corporate officer or LLC member exclusion). Your employees would still be covered. This is a common strategy for small Texas contractors who want coverage for their crew but not for themselves." },
  { q: "What is occupational accident insurance and how does it differ from WC?", a: "Occupational accident insurance is a private benefit policy — not WC — that provides medical and disability payments if someone is injured on the job. Texas contractors who operate as non-subscribers often use occupational accident coverage for their employees as a WC alternative. It's less expensive but doesn't provide all the protections of a state-sponsored WC program." },
  { q: "Does Texas WC cover independent contractors?", a: "Not automatically. WC covers employees — workers you direct, control, and pay as W-2 employees. True independent contractors (1099s) are not covered under your WC policy unless the carrier views them as misclassified employees. We help you understand which workers your policy needs to cover." },
  { q: "What happens when a Texas non-subscriber employee is injured?", a: "When a non-subscriber's employee is injured on the job, the employee can sue the employer for negligence. Non-subscribers cannot use the standard WC defenses (contributory negligence, fellow servant, assumption of risk). Jury awards in non-subscriber injury cases can be substantial. This is the primary reason many Texas contractors choose WC despite its not being mandatory." },
  { q: "How fast can I get a Texas WC certificate?", a: "Once a WC program is bound, most carriers issue certificates within 24–48 hours. For urgent situations — a job starting tomorrow that requires a WC cert today — call us directly at 844-967-5247. We have relationships with carriers that can move fast when the situation demands it." },
  { q: "Do I need workers' comp for subcontractors I hire?", a: "If you're a Texas GC and you hire subcontractors who don't carry their own WC, your WC carrier may include those subs in your audited payroll — effectively charging you premium on their workers too. We structure GC WC programs with clear subcontractor documentation to prevent this audit problem." },
  { q: "Is roofing workers' comp more expensive in Texas?", a: "Yes — roofing is one of the highest-rated WC class codes in Texas because fall injuries are the leading cause of serious job-site injuries. But roofing WC rates vary significantly between carriers. We have access to specialty markets that write Texas roofing WC at rates that better reflect residential vs. commercial work, slope, and safety programs." },
  { q: "What Texas jobs require workers' comp regardless of the opt-out law?", a: "State agency contracts, some city and county projects, federal construction projects, and certain privately-owned projects that contractually require it. If you're bidding on any public-sector work in Texas, assume WC is required and factor it into your bid." },
  { q: "Can I get Texas WC if I've had prior workers' comp claims?", a: "Yes — but a prior loss run affects your placement options and premium. We have admitted and E&S market access for Texas contractors with prior claims, lapsed coverage, or loss histories that make standard markets difficult. Bring us your situation and we'll find a path." },
  { q: "What does a Texas WC audit look at?", a: "At policy year-end, WC carriers audit your actual payroll by class code. If your actual payroll was higher than estimated, you owe additional premium. If lower, you receive a refund. Misclassified workers get corrected — and if your roofers were coded as general laborers, the audit will catch it and you'll owe the difference at the higher roofing rate." },
  { q: "Does Texas WC cover occupational diseases?", a: "Yes — Texas WC covers injuries from occupational diseases arising out of the course and scope of employment, subject to the policy terms. Silica exposure, asbestos-related illness, and chemical exposure claims fall under occupational disease provisions." },
  { q: "What do Texas non-subscribers have to post at their workplace?", a: "Texas non-subscribers must post Texas Department of Insurance (TDI) Form DWC 5 at the workplace notifying employees of the employer's non-subscriber status and their right to sue for negligence. Non-subscribers must also file an annual non-subscriber report with TDI." },
  { q: "Do small Texas contractors really need workers' comp if they only have one or two employees?", a: "Texas law doesn't require it — but one serious injury can generate a lawsuit that far exceeds what a year or two of WC premiums would have cost. For small contractors with employees, the math usually favors carrying WC. We'll give you an honest premium estimate so you can make an informed decision." },
  { q: "Can you write Texas WC for specialty trades like oilfield, marine, or industrial?", a: "Yes. We have specialty market access for high-hazard Texas trades including oilfield services, marine construction, industrial maintenance, and petrochemical work — trades that many standard WC carriers decline to write. Bring us your trade and we'll find a market." },
  { q: "Is Contractors Choice Agency licensed to write Texas workers' comp?", a: "Yes. Contractors Choice Agency holds NPN #8608479 and is licensed in all 50 states, including Texas. We write Texas WC programs for contractors in all 254 counties through A-rated admitted and surplus lines markets." },
];

/* ============================================================
   GENERAL FAQ — pads service & location pages to 20.
   ============================================================ */
export const GENERAL_FAQS = [
  { q: "How much does Texas WC cost?", a: "Cost depends on your trade, payroll, and loss history. High-hazard trades like roofing pay more than low-hazard trades. We quote your actual situation in about 15 minutes — never a ballpark." },
  { q: "Do you write Texas WC in all 254 counties?", a: "Yes. We write Texas workers' comp for contractors in all 254 counties — Houston, DFW, Austin, San Antonio, West Texas, Gulf Coast, and everywhere in between." },
  { q: "How fast can we get a Texas WC certificate?", a: "Most Texas WC programs can issue a certificate within 24–48 hours of binding. For urgent situations, call us directly at 844-967-5247." },
  { q: "Will you write Texas WC for a contractor with prior claims?", a: "Often yes. We have admitted and E&S market access for Texas contractors with prior loss history. Bring us your loss run and we'll find a market." },
  { q: "What is Texas WC non-subscriber status?", a: "A Texas non-subscriber has opted out of the state WC system. Non-subscribers can design private benefit plans but lose standard employer negligence defenses. Employees can sue without the 'course and scope' burden." },
  { q: "What does a Texas WC audit review?", a: "Carriers audit actual payroll by class code at year-end. Wrong codes get corrected, and you owe additional premium if your work was higher-rated than your original estimate. Correct codes from day one prevent audit surprises." },
  { q: "Is Texas WC required for subcontractors?", a: "Texas law doesn't require it, but most GC contracts do. We structure WC programs with subcontractor documentation so your payroll doesn't include uninsured sub workers at audit." },
  { q: "What are WC class codes and why do they matter for Texas contractors?", a: "Class codes determine your premium rate. Roofing, framing, electrical, and HVAC each carry different rates. Misclassification gets corrected at audit — often with a large additional bill." },
  { q: "Does Texas WC cover occupational disease?", a: "Yes — Texas WC covers occupational disease arising from the course and scope of employment, including silica, asbestos, and chemical exposure claims." },
  { q: "Can Texas contractors exclude themselves from their own WC policy?", a: "Yes. Corporate officers, LLC members, and owners may elect to be excluded from the WC payroll, reducing the premium while keeping employees covered." },
  { q: "Do you write high-hazard Texas WC like roofing and oilfield?", a: "Yes. We have specialty market access for Texas roofing, oilfield service, marine, industrial, and other high-hazard trades that standard carriers decline." },
  { q: "What information do you need to quote Texas WC?", a: "Trade type, payroll estimate, employee count, Texas locations, current coverage status, and loss history. A 15-minute call covers everything." },
  { q: "Can you handle multi-state WC for Texas contractors who work in other states?", a: "Yes. We structure programs that cover Texas employees when they cross state lines, coordinating coverage across states without gaps." },
  { q: "What does Contractors Choice Agency do for Texas WC claims?", a: "We provide 2-hour claims response and advocate for your crew throughout the claims process — not just at quote time." },
];

/* ============================================================
   SERVICE DETAIL
   ============================================================ */
export interface ServiceDetail {
  heroBlurb: string;
  whatsCovered: string[];
  whoItsFor: string[];
  whyCca: string[];
  faqs: { q: string; a: string }[];
}

export const SERVICE_DETAIL: Record<string, ServiceDetail> = {
  "general-contractor-wc": {
    heroBlurb: "Texas general contractors managing multiple crews, subcontractors, and job sites need WC structured for their actual exposure — not a generic employer policy. We place GC-specific WC programs with the right class codes, sub documentation, and audit management to prevent year-end surprises.",
    whatsCovered: ["Medical and wage replacement for injured GC employees", "Job-site injury coverage across all active Texas projects", "Class codes matched to your actual work type", "Subcontractor payroll documentation to prevent audit inclusion", "Employers' liability (Part Two) protection", "Certificates issued fast for GC job-site requirements"],
    whoItsFor: ["Texas general contractors with direct-hire employees", "GCs managing subcontractors and specialty crews", "Contractors working on projects that require WC certificates", "Texas GCs with payrolls across multiple trades and class codes"],
    whyCca: ["GC-specific class code structure — not a catch-all general labor code", "Subcontractor exclusion documentation so audits don't include uninsured subs", "Certificate turnaround within 48 hours for urgent job-start requirements"],
    faqs: [
      { q: "How do WC class codes work for a Texas general contractor?", a: "As a GC, your employees are classified by what they actually do — not just 'general contractor.' Supervisors, project managers, framers, finish carpenters, and concrete workers each carry different class codes. We structure the policy by work type so each employee is coded correctly and your audit reflects your actual payroll breakdown." },
      { q: "What happens if my GC WC audit includes my subcontractors?", a: "WC auditors can include subcontractor payroll in your GC policy if those subs don't carry their own WC and provide proof of it. We document your subcontractor WC certificates at policy time so your audit only covers your direct employees." },
      { q: "Do I need WC as a Texas GC if my subs are all 1099?", a: "If your 1099 subs don't carry their own WC, your carrier may view them as covered workers and include them in your audit. The distinction between true independent contractors and misclassified employees matters. We advise on the documentation you need to keep subs out of your policy payroll." },
      { q: "How fast can I get a WC certificate as a Texas GC?", a: "Once the program is bound, most carriers issue certificates within 24–48 hours. For a project starting tomorrow, call us directly at 844-967-5247 — we have markets that can move faster when needed." },
    ],
  },
  "subcontractor-wc": {
    heroBlurb: "Texas subcontractors are frequently required by GCs to carry workers' compensation or produce a valid certificate before stepping on a job. We place subcontractor WC with the right class codes for your trade and fast certificate turnaround so a missing cert never costs you a contract.",
    whatsCovered: ["Medical and wage replacement for injured subcontractor employees", "Class codes matched to your specific trade", "Certificates accepted by Texas GCs and project owners", "Employers' liability (Part Two) protection", "Named additional insured endorsements when required", "Audit management to prevent year-end premium surprises"],
    whoItsFor: ["Texas subcontractors required by GCs to carry WC", "Specialty trade subs — electrical, plumbing, HVAC, framing, roofing", "Subcontractors who've lost work over missing or lapsed WC certificates", "Small subs with 1–5 employees needing affordable WC programs"],
    whyCca: ["Fast certificate turnaround — most issued within 48 hours of binding", "Trade-specific class codes so your rate reflects your actual work", "Small-employer programs available for subs with minimal payroll"],
    faqs: [
      { q: "My GC requires a WC certificate — how fast can I get one?", a: "Once your program is bound, we can have a certificate issued within 24–48 hours. For urgent situations — a job starting soon — call us at 844-967-5247. We prioritize certificate turnaround for subs in this situation." },
      { q: "Do I need WC even if Texas doesn't require it?", a: "Your GC's subcontract may require it even if Texas law doesn't. Most Texas GCs require WC from subs to protect themselves from liability for injuries to uninsured workers. Read your contract." },
      { q: "Can I get WC for just a few employees?", a: "Yes. We have small-employer Texas WC programs for subs with as few as one or two employees. The premium is based on actual payroll, not a minimum headcount." },
      { q: "What if my trade is hard to insure — roofing, structural steel, etc.?", a: "We have specialty market access for high-hazard Texas trades. High-hazard doesn't mean uninsurable — it means you need the right market. We find it." },
    ],
  },
  "texas-wc-opt-out": {
    heroBlurb: "Texas is the only state where workers' compensation is not mandatory for most private employers. Navigating the non-subscriber decision — with its tradeoffs in liability exposure, posting requirements, and employee relations — requires honest guidance, not just an opt-out form.",
    whatsCovered: ["Texas non-subscriber status analysis and employer obligations", "TDI Form DWC-5 posting and non-subscriber report filing guidance", "Comparison of WC vs. non-subscriber total cost and liability exposure", "Occupational accident insurance as a non-subscriber benefit alternative", "Independent contractor classification review to identify true WC obligation", "State project and public-sector WC requirement identification"],
    whoItsFor: ["Texas contractors evaluating whether to carry WC or opt out", "Non-subscribers who want to understand their real liability exposure", "Small contractors weighing WC premium against opt-out risk", "Texas employers who want an honest advisor before making the decision"],
    whyCca: ["We give you the honest tradeoff — not just what's easiest to sell", "We identify when your specific work requires WC regardless of Texas law", "We place occupational accident coverage for non-subscribers who want employee benefit alternatives"],
    faqs: [
      { q: "Is Texas WC opt-out right for my business?", a: "It depends on your crew size, the work you do, and whether your GCs require WC from subs. For sole operators with no employees doing private work, opt-out often makes sense. For contractors with crews on public projects or under GCs who require WC, opt-out creates real problems. We'll walk through your specific situation honestly." },
      { q: "What are the risks of being a Texas non-subscriber?", a: "Employees can sue you for negligence without the standard WC defenses. Jury awards in non-subscriber injury cases can be very large. You also lose the 'course and scope' defense and cannot claim contributory negligence in most cases. These are real risks, not theoretical ones." },
      { q: "What does a Texas non-subscriber have to do legally?", a: "Post DWC Form-5 at your workplace, file an annual non-subscriber report with TDI, and communicate your non-subscriber status to employees. Failure to comply carries penalties." },
      { q: "What's occupational accident insurance and should I get it as a non-subscriber?", a: "Occupational accident insurance is a private injury benefit policy — not WC — that provides medical and disability benefits if an employee is injured at work. Many Texas non-subscribers use it to provide some employee protection and reduce lawsuit exposure. It's less expensive than WC but doesn't replicate all its protections." },
    ],
  },
  "non-subscriber-insurance": {
    heroBlurb: "Texas employers who operate outside the state WC system need non-subscriber benefit plans, occupational accident policies, and employer liability coverage to manage injury costs and lawsuit exposure. We design and place non-subscriber programs that fit your Texas business.",
    whatsCovered: ["Occupational accident insurance with medical and disability benefits", "Non-subscriber benefit plan design and placement", "Employer liability coverage for non-subscriber negligence claims", "Group accident coverage for employee injury benefits", "Reporting and posting compliance for Texas non-subscribers", "Annual non-subscriber report filing guidance"],
    whoItsFor: ["Texas non-subscribers who want some employee injury protection", "Employers who chose opt-out and now want to manage lawsuit exposure", "Texas businesses designing private benefit plans for injured workers", "Non-subscribers whose employees want injury benefit assurance"],
    whyCca: ["We design non-subscriber programs that actually manage injury costs", "Occupational accident and employer liability placed together in one coordinated program", "We know Texas non-subscriber law — not just the marketing pitch for opt-out"],
    faqs: [
      { q: "What does a Texas non-subscriber benefit plan cover?", a: "A non-subscriber benefit plan is a privately designed program — not WC — that provides some defined benefits to employees injured on the job. It can reduce lawsuit motivation and provide some injury protection, but the benefits and structure are whatever you design, not a statutory standard." },
      { q: "Does occupational accident insurance replace WC for my employees?", a: "Not exactly. Occupational accident insurance provides specific benefit amounts for medical treatment, disability, and death — but doesn't provide the full statutory benefits of WC. It's better than nothing and can meaningfully reduce lawsuit motivation." },
      { q: "Can a non-subscriber get sued for an employee's workplace injury?", a: "Yes — and without the standard WC defenses. A non-subscriber employee who is injured can sue the employer for negligence, and the employer cannot use contributory negligence or assumption of risk as defenses. This is the main risk of non-subscriber status." },
      { q: "Is there employer liability insurance for Texas non-subscribers?", a: "Yes. Employer liability coverage can be added to protect against negligence claims from injured workers. We place employer liability alongside occupational accident coverage so non-subscribers have a coordinated response when an injury happens." },
    ],
  },
  "construction-wc": {
    heroBlurb: "Texas construction workers' comp covers the real injury patterns on job sites — falls, tool and equipment incidents, overexertion, and struck-by injuries. We write construction WC with the right trade class codes for every Texas construction trade.",
    whatsCovered: ["Medical treatment and wage replacement for injured construction workers", "Class codes for framing, concrete, electrical, plumbing, HVAC, roofing, and specialty trades", "Fall protection and height-work injury coverage", "Tool and heavy-equipment injury claims", "Employers' liability (Part Two) for construction supervisors", "Job-site certificates issued fast for project requirements"],
    whoItsFor: ["General and specialty construction contractors with employees", "Multi-trade contractors working residential and commercial projects", "Texas construction crews in Houston, DFW, Austin, and statewide", "Contractors who've been misclassified in the wrong WC codes"],
    whyCca: ["Trade-specific class codes — framing, concrete, electrical, roofing each rated correctly", "Construction market specialists who know Texas job-site injury patterns", "Audit management to ensure year-end payroll breakdown matches original estimate"],
    faqs: [
      { q: "What WC class codes apply to Texas construction trades?", a: "Construction carries dozens of class codes — carpentry, framing, masonry, electrical, plumbing, roofing, concrete, and many more. Each carries a different rate reflecting its historical injury cost. Using the right code matters enormously for the premium you pay." },
      { q: "Does construction WC cover falls from ladders and scaffolding?", a: "Yes — falls are one of the most common WC claims in construction, and they're covered. WC pays for medical treatment and disability income while the worker recovers." },
      { q: "What about construction workers who do multiple types of work?", a: "Workers who perform multiple types of construction work should be classified under the highest-rated applicable code for the majority of their work. We review your actual workflow and classify employees correctly from the start." },
      { q: "How does a Texas construction WC audit work?", a: "At year-end, the carrier audits your actual payroll by work type. Workers doing higher-rated work get reclassified upward if they were on a lower code. Correct classification from policy inception prevents audit shock." },
    ],
  },
  "small-business-wc": {
    heroBlurb: "Small Texas contractors with 1–10 employees often get quoted on programs designed for large commercial accounts — wrong class codes, oversized deposits, and rates that don't fit a small payroll. We place small-employer Texas WC that fits your actual business.",
    whatsCovered: ["Medical and disability benefits for small-employer employees", "Class codes matched to your small-business trade type", "Minimum-premium programs for contractors with minimal payroll", "No large deposit requirements on qualifying programs", "Certificates for small contractors required by GCs", "Year-end audit with straightforward payroll reconciliation"],
    whoItsFor: ["Texas contractors with 1–10 employees", "Sole operators who recently hired their first employee", "Small subcontractors who need a WC cert but have minimal payroll", "Small businesses that have been declined or overpriced by standard carriers"],
    whyCca: ["Small-employer programs with rates built for small payrolls — not large commercial scale", "Fast placement for small contractors who need a cert by a specific date", "We know which markets write small Texas WC and which ones don't"],
    faqs: [
      { q: "Can I get Texas WC with just one or two employees?", a: "Yes. WC is available for Texas employers of any size. We have programs for contractors with one employee. The premium is based on actual payroll, so a small payroll means a small premium." },
      { q: "What's the minimum premium for Texas WC?", a: "Minimum premiums vary by carrier and trade. High-hazard trades like roofing carry higher minimums. For very small payrolls, minimum premium may be the binding constraint. We find markets with minimums that fit your scale." },
      { q: "I recently hired my first employee — do I need WC now?", a: "Texas law doesn't require it — but once you have an employee, you have potential injury liability. A single workplace injury without WC can generate a negligence lawsuit that costs far more than years of WC premiums." },
      { q: "Why do small contractors sometimes get declined for Texas WC?", a: "Small contractors in high-hazard trades are sometimes declined because their payroll is too small for the carrier's minimum program. We know which Texas WC markets write small accounts and route your application accordingly." },
    ],
  },
  "roofing-wc": {
    heroBlurb: "Roofing is the highest-hazard WC classification in most Texas markets — but roofing WC rates vary significantly between carriers. We have access to specialty markets that write Texas roofing WC at competitive rates for residential, commercial, and metal roofing contractors.",
    whatsCovered: ["Medical and disability benefits for roofing crew injuries", "Class codes matched to residential, commercial, or metal roofing work", "Fall and height-work injury coverage — the #1 roofing WC claim", "Tear-off, re-roof, and new construction class distinctions", "Certificates fast for GC requirements", "Audit management for seasonal roofing payroll fluctuations"],
    whoItsFor: ["Texas residential roofing contractors", "Texas commercial roofing contractors", "Metal roofing and specialty roofing crews", "Roofing contractors who've been declined or quoted unaffordable rates"],
    whyCca: ["Specialty market access for Texas roofing WC — not just standard market rejections", "Class code structure for residential vs. commercial vs. metal roofing", "Seasonal payroll programs for roofing contractors with seasonal fluctuations"],
    faqs: [
      { q: "Why is roofing WC so expensive in Texas?", a: "Roofing carries one of the highest WC class code rates because falls from rooftops are a leading cause of serious injury and death in construction. The high rate reflects real injury costs. But rates vary significantly between carriers — we find the markets with the best roofing-specific programs." },
      { q: "Is there a difference between residential and commercial roofing WC rates?", a: "Often yes. Residential roofing and commercial roofing can carry different class codes with different rates. Residential re-roofs typically carry lower rates than steep commercial work or multi-story projects. We classify your roofing type correctly to get the appropriate rate." },
      { q: "What if my roofing company has been declined for WC?", a: "Texas roofing WC declines are common from standard markets. We have E&S market access for roofing contractors who've been declined — including contractors with prior claims or high experience modification rates." },
      { q: "Does roofing WC cover fall injuries?", a: "Yes — fall injuries are the most common serious WC claim in roofing, and they're covered. Medical treatment, hospitalization, disability income, and death benefits are all included under a properly structured WC program." },
    ],
  },
  "hvac-wc": {
    heroBlurb: "Texas HVAC contractors — from residential service technicians to large commercial mechanical crews — need WC rated for the real exposures in the trade: ladder and rooftop work, electrical hazards, refrigerant handling, and heavy equipment. We write HVAC WC with class codes that fit your specific work.",
    whatsCovered: ["Medical and disability benefits for HVAC worker injuries", "Class codes for residential HVAC, commercial mechanical, and sheet metal", "Ladder, rooftop, and height-work injury coverage", "Electrical hazard and refrigerant exposure claims", "Certificates fast for Texas GC and permit requirements", "Multi-trade programs for HVAC contractors who also do plumbing or electrical"],
    whoItsFor: ["Texas residential HVAC contractors and service companies", "Commercial mechanical and sheet metal contractors", "HVAC installers working new construction and remodel projects", "HVAC companies whose current WC rates seem too high for the work they do"],
    whyCca: ["HVAC-specific class codes — residential service tech vs. commercial mechanical are different rates", "Multi-trade programs when your crews do more than just HVAC", "Fast certificates for HVAC contractors whose GC just asked for proof of WC"],
    faqs: [
      { q: "What class codes apply to Texas HVAC contractors?", a: "HVAC work spans several class codes — residential HVAC installation, commercial mechanical work, sheet metal installation, and service/repair each carry different rates. We identify the correct codes for your specific work mix to ensure accurate rating." },
      { q: "Is HVAC rooftop and ladder work covered under WC?", a: "Yes — rooftop equipment installation, ladder climbs, and elevated work are covered under a correctly structured HVAC WC policy. Height-work injuries are among the more common HVAC WC claims." },
      { q: "Can you write WC if my HVAC company also does plumbing or electrical?", a: "Yes. Multi-trade contractors are common in Texas, and we structure programs that cover all your work types with the appropriate class code for each. One program, all your trades." },
      { q: "How fast can an HVAC contractor get a WC certificate in Texas?", a: "Within 24–48 hours of binding in most cases. For a permit or GC requirement that comes up suddenly, call us at 844-967-5247 — we prioritize fast certificate turnaround." },
    ],
  },
};

/* ============================================================
   COVERAGE REGIONS — coverage page
   ============================================================ */
export const AZ_REGIONS = [
  { name: "Houston", note: "Greater Houston Area — GC, sub, oilfield, and industrial WC" },
  { name: "Dallas–Fort Worth", note: "DFW Metroplex — multi-trade, commercial, and residential construction" },
  { name: "Austin", note: "Central Texas — commercial and residential contractor WC" },
  { name: "San Antonio", note: "South Central Texas — GC, sub, military, and commercial WC" },
  { name: "West Texas", note: "Permian Basin, Midland, Odessa — oilfield and energy-sector WC" },
  { name: "Gulf Coast", note: "Corpus Christi, Beaumont — petrochemical and industrial WC" },
  { name: "North Texas", note: "Lubbock, Amarillo — agricultural, commercial, and residential WC" },
  { name: "Statewide Texas", note: "All 254 counties — one program, all of Texas" },
];

export const US_STATES = [
  "Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut",
  "Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa",
  "Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan",
  "Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire",
  "New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio",
  "Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota",
  "Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia",
  "Wisconsin","Wyoming",
];

export const QUOTE_SERVICE_TYPES = [
  "General Contractor Workers' Comp",
  "Subcontractor Workers' Comp",
  "Texas WC Opt-Out Guidance",
  "Non-Subscriber Insurance",
  "Texas Construction Workers' Comp",
  "Small Business Workers' Comp",
  "Roofing Workers' Comp",
  "HVAC Workers' Comp",
  "Occupational Accident Insurance",
  "Not sure — help me figure it out",
];

export const YEARS_OPTIONS = [
  "Less than 1 year",
  "1–2 years",
  "3–5 years",
  "6–10 years",
  "10+ years",
];
