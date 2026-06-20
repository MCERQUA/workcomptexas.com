// Centralized site data — used across nav, footer, schema, CTAs
// Work Comp Texas — Texas workers' compensation insurance for contractors

export const SITE = {
  name: "Work Comp Texas",
  legalName: "Work Comp Texas (by Contractors Choice Agency)",
  domain: "workcomptexas.com",
  url: "https://workcomptexas.com",
  tagline: "Workers' Compensation Insurance for Texas Contractors",
  description:
    "Workers' compensation insurance for Texas contractors and small businesses — general contractors, subcontractors, roofing, HVAC, construction, and specialty trades. Texas WC opt-out, non-subscriber guidance, and occupational accident alternatives. A-rated carriers. 15-minute quotes. NPN #8608479.",
  phone: "844-967-5247",
  phoneAlt: "855-336-7189",
  phoneHref: "tel:+18449675247",
  phoneAltHref: "tel:+18553367189",
  email: "josh@contractorschoiceagency.com",
  founded: 2005,
  npn: "8608479",
  address: {
    street: "12220 E Riggs Road, Suite #105",
    city: "Chandler",
    state: "AZ",
    zip: "85249",
    country: "US",
  },
  hours: "Mon–Fri 8am–5pm (MST)",
  claimsSla: "2-hour claims response",
  quoteSla: "15-minute quote turnaround",
  statesLicensed: "All 50 states — Texas specialist",
} as const;

// Niche nouns used in headings, metadata, and component copy
export const BRAND = {
  brandShort: "Work Comp Texas",
  brandSub: "Texas WC Insurance",
  nicheShort: "Texas contractor",
  nicheShortCap: "Texas Contractor",
  nichePlural: "Texas contractors",
  nichePluralCap: "Texas Contractors",
  operator: "Texas contractor",
  operatorCap: "Texas Contractor",
  industry: "Texas construction",
  industryCap: "Texas Construction",
  audience: "Texas contractors and small businesses",
  audienceCap: "Texas Contractors and Small Businesses",
  ownerTitle: "Texas contractor",
  regionPill: "Houston · Dallas · Austin · San Antonio · Statewide",
  serviceSuffix: "Texas Contractors",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Coverage", href: "/coverage" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    slug: "general-contractor-wc",
    title: "General Contractor Workers' Comp",
    short: "WC for Texas GCs managing crews and subs",
    description:
      "Texas general contractors managing multiple crews, subcontractors, and job sites need workers' compensation structured for their actual exposure. We place GC-specific WC programs that cover your employees correctly, coordinate with sub requirements, and hold up at audit.",
    icon: "HardHat",
    keywords: ["general contractor workers comp Texas", "Texas GC workers compensation", "contractor WC Texas", "general contractor insurance Texas"],
  },
  {
    slug: "subcontractor-wc",
    title: "Subcontractor Workers' Comp",
    short: "WC that satisfies GC certificate requirements",
    description:
      "Texas subcontractors are frequently required by GCs to carry workers' compensation or produce a valid exemption. We place subcontractor WC programs that generate the certificates your GC requires, with the right class codes for your trade and a rate that reflects your actual risk.",
    icon: "Wrench",
    keywords: ["subcontractor workers comp Texas", "Texas subcontractor WC insurance", "sub workers compensation Texas", "trade contractor WC Texas"],
  },
  {
    slug: "texas-wc-opt-out",
    title: "Texas WC Opt-Out Guidance",
    short: "Navigate Texas's voluntary WC system",
    description:
      "Texas is the only state where workers' compensation is not mandatory for most employers. We advise contractors on non-subscriber status, posting requirements, TDI reporting, and the legal tradeoffs so you can make an informed decision — not just assume opt-out is always the right move.",
    icon: "FileText",
    keywords: ["Texas WC opt-out", "Texas workers comp opt out", "non-subscriber Texas WC", "Texas optional workers compensation"],
  },
  {
    slug: "non-subscriber-insurance",
    title: "Non-Subscriber Insurance",
    short: "Protect your Texas non-subscriber business",
    description:
      "Texas non-subscribers — employers who opt out of WC — face unique liability exposure. We place non-subscriber benefit plans, occupational accident policies, and employer liability coverage designed to manage injury costs and reduce lawsuit exposure for Texas employers who choose to operate outside the WC system.",
    icon: "ShieldCheck",
    keywords: ["Texas non-subscriber insurance", "non-subscriber workers comp alternative Texas", "Texas employer liability non-subscriber", "occupational accident Texas"],
  },
  {
    slug: "construction-wc",
    title: "Texas Construction WC",
    short: "Construction workers' comp — all trades",
    description:
      "Construction workers' comp in Texas covers the real injury patterns on job sites — falls, tool and equipment injuries, overexertion, and struck-by incidents. We place construction WC programs with correct trade class codes for framing, concrete, electrical, plumbing, HVAC, roofing, and general construction.",
    icon: "Building2",
    keywords: ["Texas construction workers comp", "construction WC insurance Texas", "construction workers compensation Texas", "building contractor WC Texas"],
  },
  {
    slug: "small-business-wc",
    title: "Small Business Workers' Comp",
    short: "Affordable WC for Texas small contractors",
    description:
      "Small Texas contractors with 1–10 employees often pay more than necessary for workers' comp because they're quoted on generic programs rather than trade-specific rates. We place WC for small Texas businesses with rates that reflect your actual trade, payroll, and loss history.",
    icon: "Briefcase",
    keywords: ["small business workers comp Texas", "Texas small contractor WC", "workers compensation small business Texas", "cheap workers comp Texas"],
  },
  {
    slug: "roofing-wc",
    title: "Texas Roofing Workers' Comp",
    short: "High-hazard roofing WC at real rates",
    description:
      "Roofing is one of the highest-hazard trades in Texas — and roofing WC premiums reflect that. We have access to specialty markets for Texas roofing contractors that write roofing WC at competitive rates and with class codes that match your specific work: residential, commercial, metal, or repair.",
    icon: "Home",
    keywords: ["roofing workers comp Texas", "Texas roofer workers compensation", "roofing WC insurance Texas", "roofing contractor workers comp Texas"],
  },
  {
    slug: "hvac-wc",
    title: "Texas HVAC Workers' Comp",
    short: "WC for Texas HVAC and mechanical contractors",
    description:
      "Texas HVAC contractors — from residential service technicians to commercial mechanical crews — need workers' comp rated for the real exposures in the trade: ladder and rooftop work, electrical hazards, refrigerant handling, and heavy equipment. We write HVAC WC with class codes that fit your work.",
    icon: "Thermometer",
    keywords: ["HVAC workers comp Texas", "Texas HVAC workers compensation", "mechanical contractor WC Texas", "air conditioning contractor WC Texas"],
  },
] as const;

export const LOCATIONS = [
  { slug: "houston", name: "Houston", region: "Greater Houston Area", blurb: "Houston's booming construction market runs on contractors — from energy-sector commercial builds to the region's relentless residential demand. We place workers' comp for Houston contractors with class codes built for the Gulf Coast climate, OSHA exposure, and the city's fast-paced construction pace." },
  { slug: "dallas", name: "Dallas–Fort Worth", region: "DFW Metroplex", blurb: "DFW is one of the largest construction markets in the country. General contractors, subcontractors, and specialty trades in the Metroplex need workers' comp that can keep pace with their growth — correct class codes, fast certificates, and programs that handle multiple active job sites." },
  { slug: "austin", name: "Austin", region: "Central Texas", blurb: "Austin's tech-driven growth has created one of the most competitive construction labor markets in Texas. We place workers' comp for Austin contractors — from custom home builders to commercial interior contractors — with rates built for Central Texas's high-value, high-pace market." },
  { slug: "san-antonio", name: "San Antonio", region: "South Central Texas", blurb: "San Antonio contractors serve a massive and diverse market — military base construction, commercial development, and residential growth across the metro. We write WC programs for San Antonio contractors with the class codes and sub coordination your GCs require." },
  { slug: "west-texas", name: "West Texas", region: "Permian Basin & Odessa", blurb: "West Texas contractors in the Permian Basin face unique WC exposures — oilfield service work, extreme heat, and long-haul job sites. We place workers' comp for Midland, Odessa, and Permian Basin contractors with programs that reflect the energy-sector risk profile." },
  { slug: "gulf-coast", name: "Gulf Coast", region: "Corpus Christi & Beaumont", blurb: "Gulf Coast Texas contractors work petrochemical, marine, and industrial builds — some of the most hazardous WC classifications in the state. We have E&S market access for Gulf Coast contractors whose trade or loss history makes standard markets difficult." },
  { slug: "north-texas", name: "North Texas", region: "Lubbock & Amarillo", blurb: "North Texas contractors in Lubbock, Amarillo, and the Panhandle work agricultural, commercial, and residential builds across a wide geographic area. We write WC for North Texas contractors with class codes that reflect the region's trade mix and workforce." },
  { slug: "statewide", name: "Statewide Texas", region: "All 254 Counties", blurb: "We write workers' comp for Texas contractors in all 254 counties — from the Rio Grande Valley to the Panhandle, from the Permian Basin to the Piney Woods. One program, one agent, Texas statewide." },
] as const;

export const CREDENTIALS = [
  { label: "Licensed in all 50 states", icon: "MapPin" },
  { label: "Founded 2005 — 20+ years", icon: "CalendarCheck" },
  { label: "Texas WC specialists", icon: "HardHat" },
  { label: "15-minute quote turnaround", icon: "Timer" },
  { label: "2-hour claims response", icon: "Zap" },
  { label: "A.M. Best A+ carrier partners", icon: "Award" },
] as const;

export const STATS = [
  { value: 1200, suffix: "+", label: "Texas contractors insured statewide", prefix: "" },
  { value: 20, suffix: "+", label: "Years writing contractor WC in Texas", prefix: "" },
  { value: 15, suffix: " min", label: "Average quote turnaround", prefix: "" },
  { value: 254, suffix: "", label: "Texas counties covered", prefix: "" },
] as const;

export const TESTIMONIALS = [
  { quote: "Roofing WC in Texas is brutal to find at a decent rate. These guys got me a program that actually fit my payroll and my work type — residential re-roofs, not some generic high-rise code. First time in years my premium made sense.", name: "Bobby K.", role: "Roofing Contractor", location: "San Antonio, TX" },
  { quote: "I didn't know Texas WC was optional until I called. They walked me through the non-subscriber vs. WC tradeoffs honestly, helped me decide what was right for my crew size, and placed a program the same week. Straight talk, no runaround.", name: "Debra L.", role: "General Contractor", location: "Austin, TX" },
  { quote: "My GC in Houston was pulling me off jobs because I couldn't get a WC cert fast enough. These folks had a certificate issued in 48 hours and a rate I could actually work with. That's exactly what I needed.", name: "Marcus T.", role: "HVAC Contractor", location: "Houston, TX" },
] as const;
