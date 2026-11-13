export interface ServiceItem {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  priceLkr: number;
  tagline: string;
  description: string;
  iconName: "globe" | "layers" | "plug" | "bot" | "cpu";
  editorialImage: string;
  homeImage: string;
  heroImage: string;
  includes: string[];
  features: string[];
  benefits: string[];
  technologies: string[];
  deliverables: string[];
}

export interface PreBuildModuleDetail {
  title: string;
  description: string;
}

export interface PreBuildWorkflowStep {
  title: string;
  description: string;
}

export interface PreBuildProduct {
  slug: string;
  name: string;
  category: "Point of Sale" | "Enterprise & Operations" | "Hospitality & Fleet" | "Digital & Commerce";
  priceLkr: number;
  tagline: string;
  summary: string;
  overview: string[];
  idealFor: string[];
  modules: string[];
  moduleDetails: PreBuildModuleDetail[];
  workflow: PreBuildWorkflowStep[];
  included: string[];
  deployment: string[];
  highlights: { label: string; value: string }[];
  bannerImage: string;
  screenshot?: string;
  liveUrl?: string;
  stack?: string[];
}

export interface PortfolioProject {
  slug: string;
  name: string;
  client: string;
  category: string;
  status: string;
  liveUrl?: string;
  internalLink?: string;
  screenshot?: string;
  bannerImage?: string;
  summary: string;
  challenges: string[];
  solutions: string[];
  stack: string[];
  testimonialId?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  projects: string[];
}

export const COMPANY_INFO = {
  name: "Devrious",
  tagline: "Software Company · Colombo, Sri Lanka",
  founded: 2024,
  phone: "+94 70 661 1936",
  whatsappUrl: "https://wa.me/94706611936",
  email: "info@devrious.lk",
  address: "161/6, Old Kottawa Road, Navinna, Maharagama, Colombo, Sri Lanka",
  hours: "Monday to Friday, 9:00 AM - 6:00 PM (GMT+5:30)",
  founders: [
    {
      name: "Savindu Shiranjaya",
      role: "Co-Founder & Technical Lead",
      photo: "/images/Savindu.jpg",
      bio: "Co-founded Devrious in 2024 to give growing businesses software that is engineered properly — built on a dependable stack, tested before it ships and supported after launch.",
    },
    {
      name: "Rangana Munasinghe",
      role: "Co-Founder & Operations Lead",
      photo: "/images/Rangana.jpg",
      bio: "Co-founded Devrious in 2024 with a focus on turning real operational problems into practical, maintainable systems that teams actually enjoy using.",
    },
  ],
};

export const STATS = [
  { value: "2024", label: "Founded in Colombo", detail: "Independent software studio" },
  { value: "10", label: "Pre-Built Systems", detail: "POS, ERP & operations ready" },
  { value: "5", label: "Core Services", detail: "Web, software, API & AI" },
  { value: "99.9%", label: "Uptime Focus", detail: "Cloudflare & cloud-native" },
];

export const SERVICES: ServiceItem[] = [
  {
    slug: "custom-web-development",
    number: "01",
    title: "Custom Web Development",
    shortTitle: "Web Development",
    priceLkr: 85000,
    tagline: "Corporate websites, portals and web applications that load fast and rank well.",
    description:
      "From corporate websites to customer portals and full web applications, we build on React, Next.js and Django DRF so your site is fast, secure and easy to grow. Every launch includes search-engine groundwork with Google Search Console and SEMrush plus Cloudflare protection.",
    iconName: "globe",
    editorialImage: "/images/editorial/service-web.jpg",
    homeImage: "/images/editorial/home-service-web.jpg",
    heroImage: "/images/banners/service-hero-web.jpg",
    includes: [
      "Responsive React / Next.js front-end, designed for your brand",
      "Django DRF back-end with an admin you can manage yourself",
      "SEO setup with Google Search Console and SEMrush",
      "Cloudflare caching, SSL and DDoS protection",
      "Hosting on GCP, OCI or AWS",
    ],
    features: [
      "Responsive editorial & corporate web architecture",
      "Custom portals, quote workflows & CMS control",
      "Technical SEO groundwork & Core Web Vitals tuning",
      "Cloudflare CDN, WAF & SSL security hardening",
    ],
    benefits: [
      "Faster page loads even on mid-range mobile devices",
      "Higher search visibility and structured lead capture",
      "Clean, maintainable codebase with zero template bloat",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Django DRF", "Cloudflare"],
    deliverables: [
      "Responsive production web application",
      "SEO metadata, sitemap & Search Console readiness",
      "Deployment, SSL & post-launch handover",
    ],
  },
  {
    slug: "custom-software-development",
    number: "02",
    title: "Custom Software Development",
    shortTitle: "Custom Software",
    priceLkr: 75000,
    tagline: "Business software shaped around how your team actually works.",
    description:
      "Internal tools, operational platforms and management systems designed after we map your real process — not a generic template. We handle discovery, design, development, testing with PyTest and Selenium, and the training your staff need to adopt it.",
    iconName: "layers",
    editorialImage: "/images/editorial/service-software.jpg",
    homeImage: "/images/editorial/home-service-software.jpg",
    heroImage: "/images/banners/service-hero-software.jpg",
    includes: [
      "Requirements workshops and process mapping",
      "Role-based dashboards and approval flows",
      "Integration with your existing tools and data",
      "Automated testing with PyTest and Selenium",
      "Staff training and post-launch support",
    ],
    features: [
      "Role-based access control & multi-department workflows",
      "Real-time operational dashboards & audit trails",
      "Automated invoicing, reporting & PDF exports",
      "PostgreSQL / MySQL relational data integrity",
    ],
    benefits: [
      "Eliminate manual spreadsheets and disconnected notebooks",
      "Full visibility across orders, stock, and staff activity",
      "Software that scales as your team and branches grow",
    ],
    technologies: ["Python 3.12", "Django 5", "PostgreSQL", "React", "Docker", "Redis"],
    deliverables: [
      "Custom web/desktop-accessible business system",
      "Role-based staff accounts & training",
      "Automated backups & cloud deployment",
    ],
  },
  {
    slug: "api-development",
    number: "03",
    title: "API Development",
    shortTitle: "API Development",
    priceLkr: 55000,
    tagline: "Secure, documented APIs that connect apps, devices and partners.",
    description:
      "We design and build REST APIs that connect your mobile apps, hardware devices, payment gateways (PayHere, Stripe) and partner systems — documented, versioned and tested for load and security.",
    iconName: "plug",
    editorialImage: "/images/editorial/service-api.jpg",
    homeImage: "/images/editorial/home-service-api.jpg",
    heroImage: "/images/banners/service-hero-api.jpg",
    includes: [
      "REST API design with Django DRF",
      "JWT / OAuth authentication and permissions",
      "Interactive API documentation (OpenAPI / Swagger)",
      "Payment gateway and third-party integrations",
      "Load and security testing before release",
    ],
    features: [
      "Versioned Django REST Framework & OpenAPI documentation",
      "JWT / OAuth2 authentication & rate-limiting",
      "Payment gateway, SMS, WhatsApp & courier integrations",
      "Background task queues with Celery & Redis",
    ],
    benefits: [
      "Seamless data sync between front-end, mobile & back-office",
      "Protected against BOLA/IDOR and abusive traffic",
      "Reliable async processing for notifications and reports",
    ],
    technologies: ["Django DRF", "PostgreSQL", "Celery", "Redis", "OpenAPI", "OWASP"],
    deliverables: [
      "Production REST API with interactive docs",
      "Automated PyTest integration test suite",
      "Rate-limiting & security header configuration",
    ],
  },
  {
    slug: "ai-assistants-and-tools",
    number: "04",
    title: "AI Assistants & Tools",
    shortTitle: "AI Assistants",
    priceLkr: 125000,
    tagline: "Assistants that answer customers, draft content and automate routine work.",
    description:
      "Practical AI assistants trained on your own documents and data — answering customer questions on your website or WhatsApp, drafting content, summarising records and taking repetitive work off your team.",
    iconName: "bot",
    editorialImage: "/images/editorial/service-ai.jpg",
    homeImage: "/images/editorial/home-service-ai.jpg",
    heroImage: "/images/banners/service-hero-ai.jpg",
    includes: [
      "Customer support chat assistants",
      "Knowledge-base assistants trained on your documents",
      "Content, email and document automation",
      "Website and WhatsApp integration",
      "Usage analytics and conversation review",
    ],
    features: [
      "Custom knowledge-base Q&A and support assistants",
      "Guided quote & lead qualification chat flows",
      "Internal document search and summary tools",
      "Human-handoff to WhatsApp or support desk",
    ],
    benefits: [
      "24/7 accurate responses grounded in your business data",
      "Reduced repetitive support load on your team",
      "Faster customer onboarding and inquiry conversion",
    ],
    technologies: ["Python", "LLM APIs", "RAG", "React", "FastAPI / DRF", "PostgreSQL"],
    deliverables: [
      "Custom-branded AI assistant widget or portal",
      "Curated knowledge base ingestion pipeline",
      "Usage guardrails & analytics dashboard",
    ],
  },
  {
    slug: "ai-systems-and-ai-development",
    number: "05",
    title: "AI Systems & AI Development",
    shortTitle: "AI Systems",
    priceLkr: 175000,
    tagline: "End-to-end AI systems — prediction, recognition and intelligent automation.",
    description:
      "Any AI-related system your business needs: demand forecasting, image and document recognition, recommendation engines and intelligent automation, built into your operations with proper data pipelines and monitoring.",
    iconName: "cpu",
    editorialImage: "/images/editorial/service-ai-systems.jpg",
    homeImage: "/images/editorial/home-service-ai-systems.jpg",
    heroImage: "/images/banners/service-hero-ai-systems.jpg",
    includes: [
      "Use-case discovery and feasibility assessment",
      "Data collection and preparation pipelines",
      "Model selection, integration and fine-tuning",
      "AI-powered dashboards and workflows",
      "Monitoring, evaluation and retraining plan",
    ],
    features: [
      "Automated document & invoice data extraction",
      "Demand, churn & stock-out predictive analytics",
      "Automated multi-step workflow orchestration",
      "Secure private-data handling & audit logging",
    ],
    benefits: [
      "Catch operational bottlenecks before they cost revenue",
      "Automate repetitive back-office data entry",
      "Own your automation pipeline without lock-in",
    ],
    technologies: ["Python", "Celery", "Redis", "PostgreSQL", "Docker", "GCP / AWS"],
    deliverables: [
      "Production AI workflow & background workers",
      "Monitoring, fallback & error-handling safeguards",
      "Executive reporting & KPI integration",
    ],
  },
];

export const PRE_BUILDS: PreBuildProduct[] = [
  {
    slug: "gym-pos",
    name: "Gym POS & Membership System",
    category: "Point of Sale",
    priceLkr: 120000,
    tagline: "Memberships, check-ins, payments and trainers — run from one front desk.",
    summary: "Membership plans, QR check-ins, supplement sales and trainer schedules in one system.",
    overview: [
      "Built for fitness centres that are tired of chasing expired memberships and reconciling cash at the end of the day. Every member, plan, payment and visit is recorded in one place, so the front desk moves quickly and the owner sees exactly where revenue comes from.",
      "Sell supplements, drinks and merchandise from the same counter, schedule trainers and classes, and send renewal reminders automatically before a membership lapses.",
    ],
    idealFor: [
      "Gyms and fitness centres",
      "Functional training and CrossFit boxes",
      "Yoga, dance and martial arts studios",
      "Multi-branch fitness chains",
    ],
    modules: [
      "Membership plans & renewals (monthly, quarterly, annual, freeze, transfer)",
      "QR / card check-in with live payment status",
      "Counter sales (supplements, drinks & merchandise with stock tracking)",
      "Trainer & class scheduling with commission calculation",
      "Automatic SMS and email payment reminders",
      "Revenue, attendance peak & member churn reports",
    ],
    moduleDetails: [
      { title: "Membership plans & renewals", description: "Monthly, quarterly, annual and custom plans with freeze and transfer options." },
      { title: "QR / card check-in", description: "Instant member check-in with live status — active, expiring or overdue." },
      { title: "Counter sales", description: "Sell supplements, drinks and merchandise with stock tracking." },
      { title: "Trainer & class scheduling", description: "Personal training sessions, class timetables and trainer commissions." },
      { title: "Payment reminders", description: "Automatic SMS and email reminders before renewals are due." },
      { title: "Reports & dashboard", description: "Daily revenue, active members, attendance peaks and churn." },
    ],
    workflow: [
      { title: "Register", description: "A new member is registered with photo, plan and payment in under two minutes." },
      { title: "Check in", description: "Members scan a QR code or card at the desk; expired plans are flagged instantly." },
      { title: "Sell & renew", description: "Renewals and counter sales are billed from the same screen." },
      { title: "Review", description: "The owner reviews revenue, attendance and dues from the dashboard." },
    ],
    included: [
      "Installation and data migration",
      "Staff training",
      "Receipt printer and barcode scanner setup",
      "3 months of free support",
    ],
    deployment: [
      "Cloud hosted (GCP, OCI or AWS)",
      "On-premise server",
      "Multi-branch with central dashboard",
    ],
    highlights: [
      { label: "Deployment", value: "1–2 Weeks" },
      { label: "Check-in", value: "QR & Card" },
      { label: "Billing", value: "POS + Plans" },
    ],
    bannerImage: "/images/editorial/prebuild-gym-pos.jpg",
  },
  {
    slug: "pharmacy-pos",
    name: "Pharmacy POS System",
    category: "Point of Sale",
    priceLkr: 85000,
    tagline: "Batch and expiry control, prescription records and fast barcode billing.",
    summary: "Batch-wise stock, expiry alerts, supplier GRNs and prescription sales for pharmacies.",
    overview: [
      "Pharmacies carry thousands of items, many with short expiry windows and multiple batches. This system tracks stock at batch level, warns you before medicines expire and picks the right batch at the counter automatically.",
      "Purchase orders, goods received notes and supplier balances are handled in the same system, so stock, cost and profit always match.",
    ],
    idealFor: [
      "Retail pharmacies",
      "Pharmacy chains",
      "Hospital and channelling-centre pharmacies",
      "Medical and surgical stores",
    ],
    modules: [
      "Batch & expiry tracking with FEFO stock selection",
      "Barcode billing with generic and brand-name search",
      "Prescription sales log (doctors, patients & records)",
      "Purchasing, GRNs & supplier payments",
      "Low-stock alerts & suggested purchase lists",
      "Sales & profit reports by item, supplier and cashier",
    ],
    moduleDetails: [
      { title: "Batch & expiry tracking", description: "FEFO stock selection with alerts for items nearing expiry." },
      { title: "Barcode billing", description: "Fast billing with generic and brand-name search." },
      { title: "Prescription sales log", description: "Record prescriptions, doctors and patients against each sale." },
      { title: "Purchasing & GRN", description: "Purchase orders, goods received notes and supplier payments." },
      { title: "Low-stock alerts", description: "Reorder levels per item with suggested purchase lists." },
      { title: "Sales & profit reports", description: "Profit by item, supplier, category and cashier." },
    ],
    workflow: [
      { title: "Receive stock", description: "Goods are received against a purchase order with batch and expiry captured." },
      { title: "Bill", description: "The cashier scans or searches; the oldest valid batch is used automatically." },
      { title: "Monitor", description: "Expiry and low-stock alerts appear on the dashboard every morning." },
      { title: "Reorder", description: "Suggested purchase orders are generated from sales velocity." },
    ],
    included: [
      "Installation and item master import",
      "Staff training",
      "Receipt printer and barcode scanner setup",
      "3 months of free support",
    ],
    deployment: [
      "On-premise with offline billing",
      "Cloud hosted (GCP, OCI or AWS)",
      "Multi-branch with central stock",
    ],
    highlights: [
      { label: "Deployment", value: "1–2 Weeks" },
      { label: "Stock Control", value: "Batch & FEFO" },
      { label: "Alerts", value: "Expiry + Reorder" },
    ],
    bannerImage: "/images/editorial/prebuild-pharmacy-pos.jpg",
  },
  {
    slug: "tuition-institute-pos",
    name: "Tuition Institute Management & POS",
    category: "Point of Sale",
    priceLkr: 95000,
    tagline: "Student registration, class fees, attendance and teacher payments in one place.",
    summary: "Class fees, QR attendance, student ID cards and teacher payment calculations.",
    overview: [
      "Tuition institutes handle hundreds of students across many classes, each with monthly fees and different teachers. This system registers students, issues ID cards, collects fees at the counter and marks attendance with a quick QR scan.",
      "Teacher payments and institute shares are calculated automatically from collected fees, and parents can receive SMS updates for payments and attendance.",
    ],
    idealFor: [
      "Tuition and education institutes",
      "Language and IT training centres",
      "Music and arts academies",
      "Exam preparation classes",
    ],
    modules: [
      "Student registration & printable QR ID cards",
      "Class, subject, grade & hall timetable management",
      "Monthly & per-class fee collection with receipts",
      "QR scan-in attendance with unpaid student flags",
      "Automatic teacher share & commission calculations",
      "Parent SMS notifications for payments & absences",
    ],
    moduleDetails: [
      { title: "Student registration & ID cards", description: "Student profiles with printable QR ID cards." },
      { title: "Class & batch management", description: "Subjects, grades, halls and timetables per teacher." },
      { title: "Fee collection", description: "Monthly and per-class fees with printed receipts and arrears tracking." },
      { title: "QR attendance", description: "Scan-in attendance with daily class reports." },
      { title: "Teacher payments", description: "Automatic teacher share and institute commission calculations." },
      { title: "Parent notifications", description: "SMS alerts for payments, absences and announcements." },
    ],
    workflow: [
      { title: "Enrol", description: "Students are registered and assigned to classes with an ID card." },
      { title: "Collect fees", description: "Fees are paid at the counter and receipts printed instantly." },
      { title: "Mark attendance", description: "Students scan in at the hall door; unpaid students are flagged." },
      { title: "Settle", description: "Teacher payments are calculated and settled at month end." },
    ],
    included: [
      "Installation and student data import",
      "Staff training",
      "ID card template design",
      "3 months of free support",
    ],
    deployment: [
      "Cloud hosted (GCP, OCI or AWS)",
      "On-premise server",
      "Multi-branch with central reporting",
    ],
    highlights: [
      { label: "Deployment", value: "1–2 Weeks" },
      { label: "Attendance", value: "QR ID Cards" },
      { label: "Parent Alerts", value: "Instant SMS" },
    ],
    bannerImage: "/images/editorial/prebuild-tuition-pos.jpg",
  },
  {
    slug: "grocery-pos",
    name: "Grocery Shop POS",
    category: "Point of Sale",
    priceLkr: 85000,
    tagline: "Fast, simple billing and stock control for neighbourhood grocery shops.",
    summary: "Quick barcode and loose-item billing, customer credit book and daily cash-up.",
    overview: [
      "A straightforward POS designed for busy grocery counters. Bill packaged items by barcode and loose items by weight, keep track of customers who buy on credit and close the day with an accurate cash-up.",
      "Stock is updated with every sale, so you know what to reorder before the shelf is empty.",
    ],
    idealFor: [
      "Grocery and convenience stores",
      "Mini marts",
      "Wholesale and retail shops",
      "Vegetable and dry-goods stores",
    ],
    modules: [
      "Barcode & loose-item weight billing",
      "Live inventory & reorder alerts",
      "Customer credit book & payment tracking",
      "Supplier purchases, returns & balances",
      "Daily cash-up reconciliation (cash, card, credit)",
      "Best sellers, slow movers & daily profit reports",
    ],
    moduleDetails: [
      { title: "Barcode & loose-item billing", description: "Scan packaged items or enter weights for loose goods." },
      { title: "Inventory & reorder", description: "Live stock levels with reorder alerts." },
      { title: "Customer credit book", description: "Track credit sales and payments per customer." },
      { title: "Supplier management", description: "Purchases, returns and supplier balances." },
      { title: "Daily cash-up", description: "Cash, card and credit totals reconciled each day." },
      { title: "Sales reports", description: "Best sellers, slow movers and daily profit." },
    ],
    workflow: [
      { title: "Stock in", description: "Supplier deliveries update stock and cost prices." },
      { title: "Bill", description: "Items are scanned or weighed and the receipt is printed." },
      { title: "Track credit", description: "Credit sales are logged against the customer’s account." },
      { title: "Close the day", description: "The cash-up report shows exactly what should be in the drawer." },
    ],
    included: [
      "Installation and item import",
      "Staff training",
      "Printer, scanner and scale setup",
      "3 months of free support",
    ],
    deployment: [
      "On-premise with offline billing",
      "Cloud backup (GCP, OCI or AWS)",
    ],
    highlights: [
      { label: "Deployment", value: "1 Week" },
      { label: "Hardware", value: "Scale & Barcode" },
      { label: "Cash Control", value: "Daily Cash-Up" },
    ],
    bannerImage: "/images/editorial/prebuild-grocery-pos.jpg",
  },
  {
    slug: "supermarket-pos",
    name: "Mid-Level Supermarket POS",
    category: "Point of Sale",
    priceLkr: 125000,
    tagline: "Multi-counter billing, central stock, promotions and loyalty for growing supermarkets.",
    summary: "Multiple counters, cashier shifts, promotions, loyalty points and branch reports.",
    overview: [
      "For supermarkets that have outgrown a single-counter POS. Run multiple checkout counters against one central inventory, manage cashier shifts and floats, and launch promotions and loyalty programmes without manual calculation.",
      "Purchasing, GRNs and supplier settlements are built in, and branch-level reporting gives management a clear view of performance.",
    ],
    idealFor: [
      "Mid-sized supermarkets",
      "Supermarket chains with 2–10 branches",
      "Large convenience stores",
      "Wholesale cash-and-carry",
    ],
    modules: [
      "Multi-counter billing with offline fallback",
      "Cashier shift management & opening floats",
      "Promotions, bundles & buy-X-get-Y rules",
      "Phone-linked loyalty programme & points tiers",
      "Purchasing, GRN & supplier settlements",
      "Branch, category & margin reporting",
    ],
    moduleDetails: [
      { title: "Multi-counter billing", description: "Several checkouts sharing one live inventory, with offline fallback." },
      { title: "Cashier shift management", description: "Opening floats, shift handovers and cashier-level reconciliation." },
      { title: "Promotions & discounts", description: "Buy-X-get-Y, bundle, time-based and card-specific offers." },
      { title: "Loyalty programme", description: "Points, tiers and redemption linked to customer phone numbers." },
      { title: "Purchasing & GRN", description: "Purchase orders, goods received and supplier settlements." },
      { title: "Branch reporting", description: "Sales, margins and stock movement by branch, category and supplier." },
    ],
    workflow: [
      { title: "Open shift", description: "Cashiers sign in with a float; every counter is tracked separately." },
      { title: "Checkout", description: "Promotions and loyalty points are applied automatically at billing." },
      { title: "Replenish", description: "Central stock triggers reorders and inter-branch transfers." },
      { title: "Report", description: "Management reviews branch and category performance daily." },
    ],
    included: [
      "Installation across counters",
      "Data migration from your old POS",
      "Cashier and manager training",
      "3 months of free support",
    ],
    deployment: [
      "On-premise server with offline counters",
      "Cloud hosted (GCP, OCI or AWS)",
      "Hybrid multi-branch",
    ],
    highlights: [
      { label: "Deployment", value: "2–3 Weeks" },
      { label: "Resilience", value: "Offline Fallback" },
      { label: "Scale", value: "Multi-Counter" },
    ],
    bannerImage: "/images/editorial/prebuild-supermarket-pos.jpg",
  },
  {
    slug: "erp-system",
    name: "ERP System",
    category: "Enterprise & Operations",
    priceLkr: 250000,
    tagline: "Finance, inventory, procurement, sales and HR — one connected system for your business.",
    summary: "Finance, inventory, procurement, sales, HR and production on one connected platform.",
    overview: [
      "Our ERP replaces disconnected spreadsheets and standalone tools with one system where every department works from the same data. A sale updates stock, stock drives procurement and every transaction flows into the accounts.",
      "Start with the modules you need today and switch on more as you grow. Role-based access and approval flows keep control where it belongs.",
    ],
    idealFor: [
      "Manufacturers and distributors",
      "Trading and import companies",
      "Multi-department SMEs",
      "Businesses replacing spreadsheets",
    ],
    modules: [
      "Finance & accounting (general ledger, payables, receivables, tax)",
      "Multi-location inventory & warehouse valuations",
      "Procurement requisitions, POs & approval hierarchy",
      "Sales quotations, orders, invoicing & CRM",
      "HR, attendance, EPF/ETF & employee payroll",
      "Production planning, BOMs & work-order costing",
    ],
    moduleDetails: [
      { title: "Finance & accounting", description: "General ledger, payables, receivables, bank reconciliation and tax." },
      { title: "Inventory & warehouse", description: "Multi-location stock, transfers, batches and valuations." },
      { title: "Procurement", description: "Requisitions, purchase orders, approvals and supplier performance." },
      { title: "Sales & CRM", description: "Quotations, sales orders, invoicing and customer history." },
      { title: "HR & payroll", description: "Employee records, leave, attendance, EPF/ETF and payroll." },
      { title: "Production planning", description: "Bills of materials, work orders and production costing." },
    ],
    workflow: [
      { title: "Quote & sell", description: "Sales creates a quotation that converts into an order and invoice." },
      { title: "Fulfil", description: "Inventory reserves stock or triggers production and procurement." },
      { title: "Approve & pay", description: "Purchases follow approval rules and post to accounts payable." },
      { title: "Report", description: "Management sees live P&L, cash flow and stock valuation." },
    ],
    included: [
      "Process mapping workshop",
      "Data migration",
      "Department-level training",
      "6 months of free support",
    ],
    deployment: [
      "Cloud hosted (GCP, OCI or AWS)",
      "Private on-premise server",
    ],
    highlights: [
      { label: "Deployment", value: "3–4 Weeks" },
      { label: "Accounting", value: "Double-Entry" },
      { label: "Support", value: "6 Months Free" },
    ],
    bannerImage: "/images/editorial/prebuild-erp.jpg",
  },
  {
    slug: "hotel-management",
    name: "Hotel Management System",
    category: "Hospitality & Fleet",
    priceLkr: 180000,
    tagline: "Reservations, front desk, housekeeping and guest billing for hotels and villas.",
    summary: "Reservations, room status, housekeeping, restaurant billing and guest folios.",
    overview: [
      "From boutique villas to city hotels, this system runs the front desk: reservations, check-ins, room assignments and guest folios that collect every charge during the stay.",
      "Housekeeping sees live room status, the restaurant posts bills directly to rooms and a direct-booking engine lets guests reserve from your website without commission.",
    ],
    idealFor: [
      "Hotels and resorts",
      "Boutique villas and guest houses",
      "Serviced apartments",
      "Eco-lodges and holiday bungalows",
    ],
    modules: [
      "Reservations & front desk calendar",
      "Room types, seasonal rates & meal packages",
      "Live housekeeping status & maintenance tasks",
      "Restaurant & bar billing posted to guest rooms",
      "Guest folios, split bills & multi-currency invoicing",
      "Commission-free direct booking engine",
    ],
    moduleDetails: [
      { title: "Reservations & front desk", description: "Booking calendar, check-in/out, deposits and room assignment." },
      { title: "Room & rate management", description: "Room types, seasonal rates, meal plans and packages." },
      { title: "Housekeeping", description: "Live room status, cleaning tasks and maintenance requests." },
      { title: "Restaurant & bar billing", description: "F&B orders posted to guest rooms or settled directly." },
      { title: "Guest folios & invoicing", description: "All charges in one folio with split bills and multiple currencies." },
      { title: "Direct booking engine", description: "Commission-free bookings from your own website." },
    ],
    workflow: [
      { title: "Book", description: "Reservations arrive from your website, phone or walk-ins." },
      { title: "Check in", description: "Guests are assigned a clean room and a folio is opened." },
      { title: "Stay", description: "Restaurant, laundry and extras post to the folio automatically." },
      { title: "Check out", description: "A clear invoice is issued and the room returns to housekeeping." },
    ],
    included: [
      "Installation and room setup",
      "Front desk and housekeeping training",
      "Booking engine on your website",
      "3 months of free support",
    ],
    deployment: [
      "Cloud hosted (GCP, OCI or AWS)",
      "On-premise server",
    ],
    highlights: [
      { label: "Deployment", value: "2–3 Weeks" },
      { label: "Front Desk", value: "Calendar + POS" },
      { label: "Bookings", value: "Zero Commission" },
    ],
    bannerImage: "/images/editorial/prebuild-hotel.jpg",
  },
  {
    slug: "fleet-management",
    name: "Fleet Management System",
    category: "Hospitality & Fleet",
    priceLkr: 120000,
    tagline: "Vehicles, drivers, trips, fuel and maintenance — under control in one dashboard.",
    summary: "Vehicle registry, trip dispatch, fuel logs, maintenance schedules and cost reports.",
    overview: [
      "Know where every vehicle is, who is driving it and what it costs to run. The system keeps a complete record of each vehicle — licences, insurance, service history — and alerts you before anything expires.",
      "Dispatch trips, log fuel and expenses, and compare running costs per vehicle, route or driver to find savings.",
    ],
    idealFor: [
      "Transport and logistics companies",
      "Distribution and delivery fleets",
      "Bus and tour operators",
      "Companies with staff vehicles",
    ],
    modules: [
      "Vehicle registry with licence, insurance & emission alerts",
      "Trip dispatch & progress tracking",
      "Driver profiles, licences & assignments",
      "Fuel & trip expense logs per vehicle",
      "Mileage/date maintenance scheduling & repair history",
      "GPS tracker integration & cost-per-km reports",
    ],
    moduleDetails: [
      { title: "Vehicle registry", description: "Licences, insurance, emission tests and documents with expiry alerts." },
      { title: "Trip dispatch", description: "Assign vehicles and drivers to trips and track progress." },
      { title: "Driver management", description: "Driver profiles, licences, assignments and performance." },
      { title: "Fuel & expense logs", description: "Fuel, tolls and expenses recorded per trip or vehicle." },
      { title: "Maintenance scheduling", description: "Service reminders by mileage or date, with repair history." },
      { title: "GPS integration & reports", description: "Connect existing GPS trackers; cost-per-km and utilisation reports." },
    ],
    workflow: [
      { title: "Plan", description: "A trip is created and the best available vehicle and driver assigned." },
      { title: "Run", description: "The driver logs fuel and expenses while the trip is tracked." },
      { title: "Maintain", description: "Mileage updates trigger service reminders automatically." },
      { title: "Analyse", description: "Cost-per-vehicle and utilisation reports reveal savings." },
    ],
    included: [
      "Installation and vehicle data import",
      "Admin and driver training",
      "GPS tracker integration support",
      "3 months of free support",
    ],
    deployment: [
      "Cloud hosted (GCP, OCI or AWS)",
      "Mobile-friendly driver access",
    ],
    highlights: [
      { label: "Deployment", value: "2 Weeks" },
      { label: "Tracking", value: "GPS & Fuel" },
      { label: "Compliance", value: "Auto Alerts" },
    ],
    bannerImage: "/images/editorial/prebuild-fleet.jpg",
  },
  {
    slug: "social-media-management",
    name: "Social Media Management System",
    category: "Digital & Commerce",
    priceLkr: 125000,
    tagline: "Plan, approve, schedule and measure social content across every account.",
    summary: "Content calendar, approvals, multi-account scheduling and performance analytics.",
    overview: [
      "Built for agencies and in-house marketing teams managing several brands and channels. Plan posts on a shared calendar, route them through client or manager approval and schedule them to publish automatically.",
      "Separate workspaces keep each client’s accounts, assets and reports apart, and analytics show which content actually performs.",
    ],
    idealFor: [
      "Digital marketing agencies",
      "In-house marketing teams",
      "Multi-brand companies",
      "Freelance social media managers",
    ],
    modules: [
      "Drag-and-drop content calendar across platforms",
      "Multi-account post scheduling",
      "Client & manager approval workflows",
      "Isolated client workspaces & permissions",
      "Shared tagged media library",
      "Reach, engagement & exportable client reports",
    ],
    moduleDetails: [
      { title: "Content calendar", description: "Drag-and-drop planning across platforms and campaigns." },
      { title: "Multi-account scheduling", description: "Schedule posts to multiple pages and profiles at once." },
      { title: "Approval workflows", description: "Draft, review and approve with comments before publishing." },
      { title: "Client workspaces", description: "Separate brands, assets, users and permissions per client." },
      { title: "Media library", description: "Shared, tagged storage for images, videos and captions." },
      { title: "Analytics & reports", description: "Reach, engagement and growth with exportable client reports." },
    ],
    workflow: [
      { title: "Plan", description: "The team drafts posts on the shared calendar." },
      { title: "Approve", description: "Managers or clients review and approve with comments." },
      { title: "Publish", description: "Approved posts go out automatically at the scheduled time." },
      { title: "Measure", description: "Performance reports are generated per client and campaign." },
    ],
    included: [
      "Workspace and account setup",
      "Team training",
      "Branded client reports",
      "3 months of free support",
    ],
    deployment: [
      "Cloud hosted (GCP, OCI or AWS)",
    ],
    highlights: [
      { label: "Deployment", value: "2 Weeks" },
      { label: "Workspaces", value: "Multi-Client" },
      { label: "Approvals", value: "Built-in Flow" },
    ],
    bannerImage: "/images/editorial/prebuild-social-media.jpg",
  },
  {
    slug: "flexcore-ecommerce",
    name: "FlexCore E-Commerce Template",
    category: "Digital & Commerce",
    priceLkr: 75000,
    tagline: "A complete, ready-to-brand online store — catalogue, deals, pre-orders and warranty built in.",
    summary: "Ready-to-launch online store with deals, pre-orders, order tracking and warranty.",
    overview: [
      "FlexCore is our own e-commerce template, built on Django DRF, React JS and MySQL. It gives you a polished, fast storefront with everything a modern retailer needs — a categorised catalogue, deals, new arrivals, pre-orders, order tracking and warranty handling.",
      "Buy it, and we brand it as your own store, connect your payment gateway and deploy it to the cloud. Need something extra? FlexCore can be extended with custom features.",
    ],
    idealFor: [
      "Electronics and gadget stores",
      "Home, travel and lifestyle retailers",
      "Beauty and personal-care brands",
      "Retailers moving from social media to a real store",
    ],
    modules: [
      "Unlimited products, variants, brands & categories",
      "Fast search & category/brand filters",
      "Guest & account cart checkout with payment gateway",
      "Promotional deals, new arrivals & pre-orders",
      "Online order tracking & warranty claims",
      "Full admin dashboard for orders, products & content",
    ],
    moduleDetails: [
      { title: "Catalogue & categories", description: "Unlimited products, variants, brands and category navigation." },
      { title: "Search & filters", description: "Fast search across products, brands and categories." },
      { title: "Cart & checkout", description: "Guest and account checkout with payment-gateway integration." },
      { title: "Deals & pre-orders", description: "Promotions, new arrivals and pre-orders with arrival dates." },
      { title: "Order tracking & warranty", description: "Customers track orders and claim warranty online." },
      { title: "Admin dashboard", description: "Manage products, orders, customers and content in one place." },
    ],
    workflow: [
      { title: "Purchase", description: "You choose FlexCore and share your brand, logo and colours." },
      { title: "Brand & configure", description: "We apply your branding, set up payments and import products." },
      { title: "Launch", description: "Your store goes live on GCP, OCI or AWS behind Cloudflare." },
      { title: "Grow", description: "SEO setup with Search Console and SEMrush helps customers find you." },
    ],
    included: [
      "Branding with your logo and colours",
      "Payment gateway integration",
      "Product import (up to 200 items)",
      "Deployment and SSL",
      "3 months of free support",
    ],
    deployment: [
      "Cloud hosted (GCP, OCI or AWS)",
      "Behind Cloudflare CDN",
    ],
    highlights: [
      { label: "Deployment", value: "1–2 Weeks" },
      { label: "Stack", value: "Django + React" },
      { label: "Catalog", value: "200 Items Import" },
    ],
    bannerImage: "/images/editorial/prebuild-flexcore.jpg",
    liveUrl: "https://flexcore.devrious.lk/",
    stack: ["Django DRF", "React JS", "MySQL"],
  },
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    slug: "avenor-apparel",
    name: "Avenor Apparel",
    client: "Avenor Apparel (Pvt) Ltd",
    category: "Corporate website",
    status: "Live",
    liveUrl: "https://avenorapparel.lk/",
    screenshot: "/images/screenshot_of_avenorapparel.png",
    summary:
      "Corporate website for Avenor Apparel (Pvt) Ltd — the parent company behind Zevora Custom, Gemora Clothing and Masha.Ts — presenting promotional apparel, custom T-shirts and retail collections under one standard of quality.",
    challenges: [
      "The client required the site to feel unmistakably professional — closer to a corporate group than a fashion store.",
      "Three distinct brands had to sit under one parent identity without competing with each other.",
      "Enquiries needed to reach the sales team fast, with WhatsApp as a primary channel for Sri Lankan buyers.",
    ],
    solutions: [
      "A restrained navy-and-gold editorial design with serif headlines, generous spacing and minimal motion.",
      "A “three brands, one standard” structure that gives each brand its own entry point while the group stays in charge.",
      "Persistent WhatsApp and contact actions, plus SEO groundwork with Google Search Console and SEMrush.",
    ],
    stack: ["React JS", "Django DRF", "MySQL", "Cloudflare", "Search Console", "SEMrush"],
    testimonialId: "hirun-mansara",
  },
  {
    slug: "zevora-custom",
    name: "Zevora Custom",
    client: "Avenor Apparel (Pvt) Ltd",
    category: "Brand website & quote system",
    status: "Live",
    liveUrl: "https://zevoracustom.lk/",
    screenshot: "/images/screenshot_of_zevoracustom.png",
    summary:
      "Website for Zevora Custom, Avenor Apparel’s custom promotional T-shirt brand serving businesses, events and teams — from a single team kit to ten-thousand-piece campaigns, every order quoted personally.",
    challenges: [
      "The client wanted a rich, animation-heavy experience — animated hero slides, reveals and motion across the site.",
      "All of that motion had to stay smooth on the mid-range Android phones most of their buyers use.",
      "Orders are quoted personally, so the site had to drive quote requests rather than an online checkout.",
    ],
    solutions: [
      "Choreographed animations built on GPU-friendly transforms, automatically reduced for visitors who prefer less motion.",
      "Lazy-loaded media, optimised imagery and Cloudflare caching to keep load times low.",
      "A catalogue that flows into a structured “Request for Quote” form and an always-visible WhatsApp button.",
    ],
    stack: ["React JS", "Django DRF", "MySQL", "Cloudflare", "Search Console", "SEMrush"],
    testimonialId: "hirun-mansara",
  },
  {
    slug: "clothing-production-system",
    name: "Clothing Production Management System",
    client: "Avenor Apparel (Pvt) Ltd",
    category: "Internal production platform",
    status: "In use by client",
    bannerImage: "/images/editorial/portfolio-clothing-production.jpg",
    summary:
      "An internal system that tracks every garment order across Avenor Apparel’s brands — from intake and material planning through cutting, printing, sewing, quality control and dispatch.",
    challenges: [
      "Orders moved through cutting, printing, sewing, QC and dispatch with no single source of truth.",
      "Three brands share one production floor, with order sizes ranging from one team kit to ten thousand tees.",
      "Floor staff needed something fast and simple enough to use in the middle of a shift.",
    ],
    solutions: [
      "Stage-by-stage order tracking with live status and bottleneck views for management.",
      "Brand-aware order intake, material planning and a capacity view across the floor.",
      "Large, role-based screens for floor staff, verified end-to-end with PyTest and Selenium.",
    ],
    stack: ["React JS", "Django DRF", "MySQL", "PyTest", "Selenium"],
    testimonialId: "hirun-mansara",
  },
  {
    slug: "sunrise-accommodation",
    name: "Accommodation Management System",
    client: "Sunrise Apartments",
    category: "Property management system",
    status: "In use by client",
    bannerImage: "/images/editorial/portfolio-accommodation.jpg",
    summary:
      "A management system for Sunrise Apartments covering reservations, availability, guest records, billing and housekeeping — accessible to the owner from anywhere.",
    challenges: [
      "Bookings, guest details and payments were scattered across notebooks and spreadsheets.",
      "Short stays and long-term rentals needed different pricing and billing rules.",
      "Staff with little technical experience had to adopt the system immediately.",
    ],
    solutions: [
      "A visual availability calendar with check-in, check-out and guest history in one place.",
      "Flexible rate plans and automatic invoicing for nightly, weekly and monthly stays.",
      "A simple role-based interface plus on-site training for every staff member.",
    ],
    stack: ["React JS", "Django DRF", "MySQL"],
    testimonialId: "thiranda-kariyawasam",
  },
  {
    slug: "smart-metro-ticketing",
    name: "Bus Ticketing Machine Software",
    client: "Smart Metro Tech",
    category: "Embedded & back-office software",
    status: "In use by client",
    bannerImage: "/images/editorial/portfolio-bus-ticketing.jpg",
    summary:
      "Software for handheld bus ticketing machines — fare calculation, ticket printing and conductor shifts — with a back office that reconciles every transaction.",
    challenges: [
      "Ticketing machines must keep working without network coverage along the route.",
      "Integration with thermal printers and handheld hardware with limited resources.",
      "Fare stages and every transaction had to reconcile exactly with the back office.",
    ],
    solutions: [
      "Offline-first local storage that syncs automatically once a connection is available.",
      "Lightweight, hardware-specific print handling tested on the actual devices.",
      "A central Django DRF API with shift-level reconciliation reports.",
    ],
    stack: ["Django DRF", "MySQL", "REST API", "PyTest"],
    testimonialId: "thushara-weerapperuma",
  },
  {
    slug: "smart-park-n-fly",
    name: "Smart Park n Fly",
    client: "Smart Park n Fly (UK)",
    category: "Airport parking booking platform",
    status: "Retired at client’s request",
    bannerImage: "/images/editorial/portfolio-park-n-fly.jpg",
    summary:
      "A booking platform that let the client rent out parking slots at the airport parking terminals he owned. Travellers could check availability and reserve a space online. The site has since been taken offline at the client’s request.",
    challenges: [
      "Slot availability had to stay accurate under simultaneous bookings — a double-booked space was unacceptable.",
      "Pricing and availability depended on drop-off and return dates, times and UK time zones.",
      "Serving UK customers from Sri Lanka, with UK-standard expectations for payments and privacy.",
    ],
    solutions: [
      "Transaction-safe slot reservations in Django and MySQL with temporary holds that expire.",
      "Date-and-time-aware pricing and availability logic tested against edge cases.",
      "A secure checkout flow with Cloudflare protection in front of the application.",
    ],
    stack: ["React JS", "Django DRF", "MySQL", "Cloudflare"],
  },
  {
    slug: "flexcore",
    name: "FlexCore",
    client: "Devrious (in-house product)",
    category: "E-commerce template",
    status: "Devrious product",
    liveUrl: "https://flexcore.devrious.lk/",
    internalLink: "/pre-builds/flexcore-ecommerce",
    screenshot: "/images/screenshot_of_flexcore.png",
    summary:
      "Our ready-to-launch e-commerce template with catalogue, deals, pre-orders, order tracking and warranty — available to purchase and brand as your own store.",
    challenges: [
      "Sri Lankan retailers moving off social media needed a fast, full-featured online store without months of custom build time.",
      "Storefronts had to support pre-orders, local payment gateways, order tracking and warranty claims out of the box.",
    ],
    solutions: [
      "Engineered a modular React JS + Django DRF + MySQL storefront template ready to brand in 1–2 weeks.",
      "Built-in catalogue, promotional deals, pre-order dates, online order tracking, warranty claims and Cloudflare-ready deployment.",
    ],
    stack: ["React JS", "Django DRF", "MySQL"],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "hirun-mansara",
    name: "Mr. Hirun Mansara",
    role: "CEO",
    company: "Avenor Apparel (Pvt) Ltd",
    quote:
      "Devrious built both of our websites — Avenor Apparel and Zevora Custom — and the clothing production management system our factory floor now runs on. They understood that Avenor had to feel corporate and trustworthy while Zevora needed movement and personality, and they delivered both without sacrificing speed. The production system finally gave us clear visibility of every order from cutting to dispatch. Responsive, honest and technically sharp — they are our long-term technology partner.",
    projects: [
      "Avenor Apparel website",
      "Zevora Custom website",
      "Clothing Production Management System",
    ],
  },
  {
    id: "thiranda-kariyawasam",
    name: "Mr. Thiranda Kariyawasam",
    role: "Owner",
    company: "Sunrise Apartments",
    quote:
      "Before Devrious, our bookings, guest records and payments lived in notebooks and spreadsheets. The Accommodation Management System they built brought everything into one place — availability, check-ins, billing and housekeeping. My staff learned it in a day, and I can now see occupancy and revenue from my phone. They listened carefully and built exactly what we needed.",
    projects: ["Accommodation Management System"],
  },
  {
    id: "thushara-weerapperuma",
    name: "Mr. Thushara Weerapperuma",
    role: "Managing Director",
    company: "Smart Metro Tech",
    quote:
      "Software for bus ticketing machines is unforgiving — it has to work offline, print reliably and reconcile every rupee. Devrious took on that challenge and delivered a stable system our conductors use every day. They handled hardware integration, fare logic and data sync with real care, and their support after launch has been excellent.",
    projects: ["Bus Ticketing Machine Software"],
  },
];

export const TECH_STACK = [
  { name: "React & Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Framer Motion", category: "Motion" },
  { name: "Python 3.12", category: "Backend" },
  { name: "Django 5 & DRF", category: "API" },
  { name: "PostgreSQL & MySQL", category: "Database" },
  { name: "Redis & Celery", category: "Queues" },
  { name: "Docker", category: "Containers" },
  { name: "Cloudflare WAF", category: "Security" },
  { name: "GCP / AWS / OCI", category: "Cloud" },
  { name: "PyTest & Selenium", category: "QA" },
];

export const WHY_CHOOSE_US = [
  {
    number: "01",
    title: "We Learn Your Business First",
    description:
      "Before writing a single line of code, we map how your team actually operates — from front-desk check-ins to factory floor dispatch.",
  },
  {
    number: "02",
    title: "Zero Technical Debt Shortcuts",
    description:
      "Typed frontends, clean Django REST APIs, automated testing, and OWASP security practices built in from day one.",
  },
  {
    number: "03",
    title: "Honest Scoping, Not Upselling",
    description:
      "If a ready-to-deploy Pre-Build solves 90% of your workflow faster and for less, we tell you — and tailor the rest.",
  },
  {
    number: "04",
    title: "It Works After We Leave",
    description:
      "Staff-friendly interfaces that teams learn in a day, backed by clear documentation, Cloudflare protection, and ongoing support.",
  },
];

export const SECTORS = [
  "Apparel & Manufacturing",
  "Hospitality & Apartments",
  "Fitness & Gyms",
  "Pharmacies & Healthcare",
  "Retail & Supermarkets",
  "Education & Tuition",
  "Logistics & Fleets",
  "E-Commerce Brands",
];

export interface CyberPackage {
  id: string;
  name: string;
  description: string;
  priceLkr: number;
  featured?: boolean;
  includes: string[];
}

export const CYBERSECURITY_PACKAGES: CyberPackage[] = [
  {
    id: "secure-code-review",
    name: "Secure Code Review",
    description:
      "Manual and automated review of your codebase for security flaws before they reach production.",
    priceLkr: 45000,
    includes: [
      "Up to 5,000 lines of code",
      "OWASP Top 10 and secure-coding checks",
      "Secrets and dependency vulnerability scan",
      "Findings report with recommended fixes",
      "One walkthrough call with your developers",
    ],
  },
  {
    id: "api-security-assessment",
    name: "API Security Assessment",
    description:
      "Focused penetration test of your REST or mobile back-end APIs.",
    priceLkr: 75000,
    includes: [
      "Up to 25 endpoints",
      "Authentication and authorisation (IDOR / BOLA) testing",
      "Input validation and rate-limit checks",
      "OWASP API Security Top 10 coverage",
      "Risk-rated report and one retest",
    ],
  },
  {
    id: "web-app-pen-test",
    name: "Web Application Pen Test",
    description:
      "Hands-on penetration test of your website or web app, the way a real attacker would approach it.",
    priceLkr: 95000,
    featured: true,
    includes: [
      "Up to 15 pages or user flows",
      "Login, session and access-control testing",
      "Injection, XSS and CSRF testing",
      "Business-logic abuse scenarios",
      "Risk-rated report and one free retest",
    ],
  },
  {
    id: "full-security-audit",
    name: "Full Security Audit",
    description:
      "Complete review across application, API, code and infrastructure for business-critical systems.",
    priceLkr: 195000,
    includes: [
      "Web application and API pen test",
      "Secure code review of critical modules",
      "Cloud and server configuration review (GCP, OCI, AWS)",
      "Cloudflare / WAF hardening recommendations",
      "Executive summary and two retest rounds",
    ],
  },
];

export const CYBERSECURITY_TESTS = [
  "OWASP Top 10 web vulnerabilities",
  "Authentication, session and password handling",
  "Access control and privilege escalation",
  "SQL injection, XSS and CSRF",
  "Exposed secrets, keys and dependencies",
  "Server, cloud and Cloudflare misconfiguration",
];

export const CYBERSECURITY_STEPS = [
  {
    title: "Scope",
    description:
      "We agree targets, rules of engagement and testing windows in writing, then send a custom quote.",
  },
  {
    title: "Reconnaissance",
    description:
      "We map your application, endpoints and attack surface without disrupting users.",
  },
  {
    title: "Testing",
    description:
      "Manual testing backed by automated tools, focused on vulnerabilities that matter to your business.",
  },
  {
    title: "Reporting",
    description:
      "A clear, risk-rated report with proof of concept and step-by-step remediation advice.",
  },
  {
    title: "Retest",
    description:
      "Once fixes are in, we verify them and issue an updated report.",
  },
];

export const POLICY_DOCS = [
  {
    slug: "privacy-policy",
    title: "Privacy Policy",
    file: "privacy_policy.md",
  },
  {
    slug: "terms-and-conditions",
    title: "Terms & Conditions",
    file: "terms_and_conditions.md",
  },
  {
    slug: "refund-and-cancellation-policy",
    title: "Refund & Cancellation Policy",
    file: "refund_and_cancellation_policy.md",
  },
  {
    slug: "cookie-policy",
    title: "Cookie Policy",
    file: "cookie_policy.md",
  },
] as const;

export const DELIVERY_PROCESS = [
  {
    step: "01",
    title: "Discover",
    description:
      "We learn your business, users and goals, then agree scope, timeline and price in writing.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Screens and data models are designed and approved before a line of production code.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Development in short cycles with regular demos, so you see progress every week.",
  },
  {
    step: "04",
    title: "Test",
    description:
      "Automated PyTest and Selenium suites plus manual QA on real devices.",
  },
  {
    step: "05",
    title: "Launch & support",
    description:
      "Deployment to GCP, OCI or AWS behind Cloudflare, followed by staff training and support.",
  },
];

export const COMPANY_VISION = {
  statement:
    "To be the first software partner growing businesses trust — known for systems that are engineered properly, last for years and genuinely move the business forward.",
  detail:
    "We want every business we work with, in Sri Lanka and beyond, to run on technology it can rely on rather than work around.",
};

export const COMPANY_MISSION = {
  statement:
    "To design, build, test and support reliable websites, business software and AI tools that solve real operational problems.",
  commitments: [
    "Understand the business before writing a line of code",
    "Ship tested, documented and secure software",
    "Price transparently and support everything we build",
  ],
};

export const KEYS_TO_SUCCESS = [
  {
    number: "01",
    title: "Business-first thinking",
    description:
      "We start with how your team actually works, then design software around it — never the other way round.",
  },
  {
    number: "02",
    title: "Engineering discipline",
    description:
      "Automated tests with PyTest and Selenium, code reviews and security checks before anything reaches production.",
  },
  {
    number: "03",
    title: "One proven stack",
    description:
      "React, Django DRF and MySQL / PostgreSQL on every project, so systems stay consistent, fast and easy to maintain.",
  },
  {
    number: "04",
    title: "Honest scope",
    description:
      "Clear written quotes, agreed milestones and no surprise invoices — you always know what you are paying for.",
  },
  {
    number: "05",
    title: "Clear communication",
    description:
      "Regular demos and direct access to the people building your system, from first call to launch day.",
  },
  {
    number: "06",
    title: "Long-term support",
    description:
      "We stay with what we ship. Most of our clients come back to us for their next system.",
  },
];

export const TRUSTED_CLIENTS = [
  "Avenor Apparel",
  "Zevora Custom",
  "Sunrise Apartments",
  "Smart Metro Tech",
  "Smart Park n Fly (UK)",
];

export const SERVICE_FAQS = [
  {
    question: "How does pricing work for custom projects?",
    answer:
      "Every service has a transparent starting price in LKR (from LKR 55,000 for APIs and LKR 75,000–85,000 for custom software and websites). After a free discovery call, we provide a fixed written quote and milestone schedule before work begins.",
  },
  {
    question: "What technology stack do you build on?",
    answer:
      "We standardise on React / Next.js + TypeScript for frontends and Python / Django REST Framework with PostgreSQL or MySQL for backends, tested with PyTest and Selenium and deployed on GCP, OCI, or AWS behind Cloudflare.",
  },
  {
    question: "Do we own the source code and cloud accounts?",
    answer:
      "Yes. Custom-built projects are deployed to infrastructure you control, with full handover documentation, admin access, and staff training.",
  },
  {
    question: "What happens after launch?",
    answer:
      "Every project includes post-launch support, monitoring, and direct access to our Colombo engineering team for bug fixes, security updates, and future feature phases.",
  },
];

export const PREBUILD_FAQS = [
  {
    question: "Can a Pre-Build system be customised to our workflow?",
    answer:
      "Yes. Every Pre-Build is built on our modular React + Django DRF stack, so we can brand it to your company, adjust approval rules, add custom reports, or integrate local payment gateways, SMS, and hardware.",
  },
  {
    question: "How fast can we go live?",
    answer:
      "Most POS systems (Grocery, Pharmacy, Gym, Tuition) and FlexCore go live in 1–2 weeks including item/member data import, hardware setup, and staff training. Larger ERP or multi-lane deployments take 2–4 weeks.",
  },
  {
    question: "Is it cloud-hosted or on-premise?",
    answer:
      "Your choice. We deploy on GCP, OCI, or AWS behind Cloudflare for multi-branch access from anywhere, or on a local server with offline billing fallback for retail counters.",
  },
  {
    question: "What support is included?",
    answer:
      "POS, Hospitality, Fleet, Social Media, and FlexCore packages include 3 months of free support; the ERP System includes 6 months of free support, plus staff training and data migration.",
  },
];


