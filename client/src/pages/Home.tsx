/**
 * Executive Bluebook design reminder: a polished corporate-consulting system in white, navy, and cobalt.
 * Both light and dark modes prioritise calm surfaces, structured hierarchy, readable information, and practical controls.
 */
import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowUp,
  ArrowUpRight,
  Award,
  BadgeCheck,
  Bot,
  BookOpen,
  Braces,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  CircleCheck,
  CloudCog,
  Code2,
  Database,
  Download,
  FileText,
  Github,
  GraduationCap,
  LineChart,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Network,
  Phone,
  Puzzle,
  Send,
  Sparkles,
  Sun,
  Workflow,
  X,
} from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import "./transit-reinforcements.css";
import "./executive-bluebook.css";
import "./executive-bluebook-refinement.css";

const navItems = [
  ["About", "about"],
  ["Experience", "experience"],
  ["Expertise", "expertise"],
  ["Projects", "projects"],
  ["Credentials", "credentials"],
  ["Contact", "contact"],
] as const;

const assetUrl = (filename: string) => `${import.meta.env.BASE_URL}assets/${filename}`;
const resumeUrl = assetUrl("Shaik-Abdulla-Resume.pdf");
const linkedInUrl = "https://www.linkedin.com/in/shaik-abdulla-3b2b1524a";
const githubUrl = "https://github.com/Abdul879/";

const expertise = [
  { number: "01", title: "Oracle Fusion Cloud", icon: CloudCog, description: "Technical work supporting enterprise business processes, data flows, reporting, and application connectivity.", skills: ["Fusion ERP", "SCM", "Procurement", "ESS Jobs", "Scheduled Processes", "Fusion REST / SOAP"], exploring: ["Product Data Hub", "Security Fundamentals"] },
  { number: "02", title: "Oracle Integration Cloud", icon: Network, description: "Design and development of integrations connecting enterprise applications and external systems.", skills: ["Scheduled & App-Driven Flows", "REST / SOAP / ERP Cloud / FTP / DB Adapters", "Mapping & Transformation", "Stage File", "Lookups", "Scope-Based Fault Handling", "Monitoring"], exploring: ["AI Agent Integration"] },
  { number: "03", title: "Data Migration & Bulk Processing", icon: Database, description: "Structured data preparation, validation, import processing, and reconciliation.", skills: ["FBDI", "CSV / XML", "UCM Upload", "ESS Submission & Monitoring", "ATP Staging", "Duplicate Detection", "SQL Reconciliation"], exploring: ["HDL"] },
  { number: "04", title: "Reporting & Analytics", icon: LineChart, description: "Translating business requirements into operational reports, analytical queries, and dashboards.", skills: ["BI Publisher", "SQL Data Models", "RTF Templates", "XML", "Report Parameters", "OTBI Analyses", "Filters & Prompts"], exploring: ["Bursting", "AI-Assisted Reporting"] },
  { number: "05", title: "Database & Backend Development", icon: Braces, description: "Structured data, application logic, and backend processing that inform how I design and troubleshoot integrations.", skills: ["SQL", "PL/SQL", "Oracle ATP", "Python", "Flask", "PHP", "MySQL", "JavaScript", "REST APIs"], exploring: [] },
  { number: "06", title: "AI Agents & Intelligent Automation", icon: Bot, description: "A secondary specialization: exploring AI agents for reporting, data interpretation, and integration workflows.", skills: ["AI Agent Studio (certified foundations)"], exploring: ["Agent Instructions & I/O Specs", "Tool / API Integration", "PO Status Agent", "AI-Assisted Exception Analysis"] },
];

type Project = { id: string; label: string; title: string; summary: string; stack: string[]; challenge: string; role: string; image: string; flow: string[]; focus: string[]; tests: string[]; status: string; limits: string };

const projects: Project[] = [
  {
    id: "01", label: "Professional work", title: "Automated Supplier Import & Reconciliation",
    summary: "An OIC workflow that receives supplier master data from an external system, validates it, prepares FBDI files, processes the import in Oracle Fusion, and reconciles the results.",
    stack: ["OIC", "FTP / SFTP", "Oracle ATP", "SQL / PL-SQL", "FBDI", "UCM", "ESS", "Fusion ERP"],
    challenge: "Supplier data must be checked for completeness, validated, converted to the import format, and processed in Fusion. Without structure, invalid records, duplicate submissions, and failed imports are hard to support.",
    role: "Separated the process into five stages: file ingestion, ATP staging, FBDI preparation, Fusion import processing, and reconciliation.",
    image: assetUrl("supplier-import-architecture.jpg"),
    flow: ["FTP / SFTP intake", "ATP staging", "FBDI file", "UCM upload", "ESS import", "Reconcile"],
    focus: ["File-level and record-level validation with duplicate detection.", "Batch-level status tracking and diagnostic logging.", "Success / rejected classification with an exception report for correction.", "Controlled retry and reprocessing; protected credentials and supplier data."],
    tests: ["Valid supplier records", "Missing mandatory fields", "Duplicate source identifiers", "Incorrect date / field formats", "Failed file transfer or upload", "Fusion import job failure", "Restart after partial processing", "Reconciliation discrepancies"],
    status: "Documented design with defined test scenarios. Sanitized execution evidence is published via GitHub where available.",
    limits: "Import template, attributes, UCM mechanism, ESS jobs, and status information depend on the Fusion environment and the implemented integration.",
  },
  {
    id: "05", label: "Technical practice", title: "Purchase Order Status Integration",
    summary: "A REST integration that accepts a purchase order number, retrieves PO data from Oracle Fusion ERP, maps it to a normalized JSON response, and handles expected errors.",
    stack: ["OIC", "Fusion ERP REST APIs", "REST Adapter", "JSON", "Postman", "Fault Handling"],
    challenge: "Procurement users and external applications may need PO information without navigating the ERP interface. A defined endpoint can expose it to authorized consumers.",
    role: "Designed the flow from REST trigger and request validation, through the Fusion REST invoke and response mapping, to success and fault responses.",
    image: "",
    flow: ["REST trigger", "Validate PO no.", "Fusion REST invoke", "Map response", "Handle faults", "Return JSON"],
    focus: ["Illustrative custom endpoint, e.g. GET /api/purchase-orders/{poNumber}; not the native Fusion URL.", "Handles invalid or missing PO, not found, authorization failure, service unavailable, and unexpected responses.", "Normalized response fields mapped from what the Fusion endpoint actually returns."],
    tests: ["Retrieve an existing PO", "Nonexistent PO", "Invalid request", "Authorization failure", "Simulated downstream failure", "No unnecessary sensitive data exposed"],
    status: "Independent technical practice. Request / response examples and the Postman collection are the primary evidence.",
    limits: "Response fields shown are illustrative and depend on the configured Fusion endpoint.",
  },
  {
    id: "03", label: "Technical practice", title: "Procurement Reporting & Analytics",
    summary: "Procurement data turned into structured operational reports and OTBI dashboards: PO activity, supplier analysis, receiving, invoice status, and exceptions.",
    stack: ["BI Publisher", "OTBI", "SQL", "XML", "RTF / XSL", "Fusion Procurement"],
    challenge: "Business questions must become trustworthy data models and reports without inflated totals or lost operational context.",
    role: "Designed the SQL data model, report parameters and RTF layout for the Purchase Order & Invoice Statement, and a five-page OTBI dashboard structure.",
    image: assetUrl("reporting-analytics-visual.jpg"),
    flow: ["Requirement", "Data source", "SQL model", "XML output", "Template", "Validate"],
    focus: ["Dashboard pages: PO overview, creation & approval, receiving, invoice & payment, detail & exceptions.", "Confirms data grain before joining PO, line, distribution, and invoice data.", "Data-quality checks: duplicate totals from one-to-many joins; unmatched invoices kept visible with outer joins."],
    tests: ["Totals reconciled to source data", "No duplicate aggregation across PO lines / invoices", "Unmatched invoices appear in exceptions", "PDF and Excel output validation"],
    status: "Technical practice. Dashboard pages are designs unless marked completed in the case study.",
    limits: "Available subject areas, attributes, and security depend on the Fusion environment.",
  },
  {
    id: "06", label: "Practice / design exercise", title: "HCM Employee Data Migration (HDL)",
    summary: "A controlled employee data migration workflow using HDL-compatible files, validation rules, error analysis, and post-load reconciliation.",
    stack: ["HDL", "CSV", "SQL", "Data Validation", "Reconciliation"],
    challenge: "Employee data loads fail on missing attributes, bad dates, duplicates, and invalid reference values unless validated first.",
    role: "Defined the workflow: prepare a sample dataset, validate, map to HDL business objects, generate files, review errors, reprocess, and reconcile.",
    image: "",
    flow: ["Sample dataset", "Validate", "Map to HDL", "Generate files", "Load / review", "Reconcile"],
    focus: ["Validation: required identifiers, duplicates, mandatory names, date formats, valid reference values.", "Respects object dependencies and relationships.", "Error scenarios documented with a correction and reprocess path."],
    tests: ["Missing required attributes", "Invalid date format", "Duplicate source identifiers", "Invalid reference values", "Rejected records", "Incomplete or failed processing"],
    status: "Design exercise unless an HDL load was executed in an authorized HCM environment. Simulated results are not presented as Fusion execution results.",
    limits: "Uses fictitious data; reference values and dependencies depend on the target environment.",
  },
  {
    id: "07", label: "Technical practice", title: "Integration Monitoring & Exception Management",
    summary: "Making integrations easier to monitor, troubleshoot, and recover with business identifiers, processing statuses, and diagnostic information.",
    stack: ["OIC", "ATP", "SQL / PL-SQL", "REST APIs", "Logging", "Status Tracking"],
    challenge: "Without batch and record-level status, failures are hard to diagnose, and retries risk duplicate processing.",
    role: "Designed status tables and monitoring fields, separating validation errors from transient technical failures.",
    image: "",
    flow: ["Detect", "Classify", "Record", "Investigate", "Correct / retry", "Verify"],
    focus: ["Tracks integration, batch and record identifiers, timestamps, status, error category, and downstream request IDs.", "Transient failure: retry under a policy that considers whether the first call may have succeeded.", "Invalid business data: reject, record the reason, route for correction instead of retrying."],
    tests: ["Downstream API timeout", "Missing required attribute", "Retry after partial success", "Success / failed / unresolved summary"],
    status: "Technical practice, or an enhancement to the supplier integration. Retries, replay and idempotency are described only as far as they are implemented and tested.",
    limits: "Recovery behavior depends on the downstream system's idempotency.",
  },
  {
    id: "04", label: "Technical exploration", title: "AI Agent–Assisted Enterprise Reporting & Integration",
    summary: "An exploration of an AI Agent Studio agent that accepts a PO identifier, invokes an integration tool, and summarizes the returned data. Not a production deployment.",
    stack: ["Oracle AI Agent Studio", "Fusion Cloud", "OIC", "BI Publisher", "REST APIs"],
    challenge: "Reporting and integration exceptions are spread across outputs; an agent could help interpret them if it stays grounded in retrieved data.",
    role: "Exploring agent objectives, input / output specs, tool invocation, and mapping for a Purchase Order Status Agent.",
    image: "",
    flow: ["Business question", "Authorized retrieval", "Structured context", "AI analysis", "Verified explanation"],
    focus: ["The agent must not invent missing PO data or claim success the tool has not confirmed.", "Boundary between retrieved facts and generated explanations.", "Record-changing actions need authorization and confirmation controls."],
    tests: ["PO found", "PO not found / missing data", "Tool failure handling"],
    status: "Technical exploration. Any production-readiness, security, accuracy, or automation claim needs evidence.",
    limits: "Potential extensions (error explanation, report summaries, reconciliation hints) are ideas, not delivered features.",
  },
  {
    id: "02", label: "Academic project", title: "AI-Based Smart Attendance System",
    summary: "A Flask backend for face-recognition-based attendance with duplicate checks, Firebase storage, and subject-level analytics in Chart.js.",
    stack: ["Python", "Flask", "Firebase", "Firestore", "Face Recognition", "REST APIs", "Chart.js"],
    challenge: "Attendance marking needed reliable identification, duplicate prevention, and clear subject-level records.",
    role: "Developed the attendance flow, backend APIs, record handling, and dashboard analytics as an academic project.",
    image: assetUrl("ai-attendance-visual.jpg"),
    flow: ["Face input", "Embedding", "Match", "Duplicate check", "Analytics"],
    focus: ["Backend API design, storage and retrieval, attendance validation.", "Subject-wise attendance and percentage calculations.", "Accuracy or anti-spoofing claims are made only where tested."],
    tests: ["Duplicate attendance attempt", "Unknown face", "Percentage calculation"],
    status: "Academic project showing broader software-engineering foundations; not an Oracle project.",
    limits: "Recognition accuracy has not been benchmarked here.",
  },
];

const workflowSteps = [
  ["01", "Discover", "Understand the requirement, process owners, source and target systems, and constraints."],
  ["02", "Analyze", "Identify data structures, business rules, required fields, and dependencies."],
  ["03", "Design", "Select the integration, reporting, or migration pattern and error-handling strategy."],
  ["04", "Implement", "Develop mappings, queries, flows, data models, templates, and database objects."],
  ["05", "Validate", "Test success, invalid data, duplicates, missing fields, and downstream failures."],
  ["06", "Monitor", "Track instances, business identifiers, statuses, and diagnostics."],
  ["07", "Reconcile", "Compare source records to final results and investigate discrepancies."],
  ["08", "Document", "Keep diagrams, configuration notes, test evidence, limitations, and procedures."],
];

const architectureStreams = [
  { title: "Enterprise data lifecycle", nodes: ["Source", "Extract", "Validate", "Transform", "Integrate", "Load", "Process", "Reconcile", "Report"] },
  { title: "Integration lifecycle", nodes: ["Trigger", "Authenticate", "Retrieve", "Validate", "Transform", "Invoke", "Handle faults", "Track status", "Reconcile"] },
  { title: "Reporting lifecycle", nodes: ["Requirement", "Data source", "Data model", "Query", "Output structure", "Template", "Testing", "Delivery"] },
  { title: "Bulk data import lifecycle", nodes: ["Prepare data", "Validate", "Generate files", "Package", "Upload", "Submit jobs", "Monitor", "Reconcile"] },
  { title: "Exception management lifecycle", nodes: ["Detect", "Classify", "Record", "Investigate", "Correct / retry", "Verify", "Close"] },
  { title: "AI-assisted workflow exploration", nodes: ["Business question", "Authorized retrieval", "Structured context", "AI analysis", "Verified explanation"] },
];

function scrollToSection(sectionId: string) {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [projectDetail, setProjectDetail] = useState<{ id: string; tab: "architecture" | "details" | "technology" | "evidence" } | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => {
      const current = navItems
        .map(([, id]) => document.getElementById(id))
        .filter(Boolean)
        .findLast((section) => section && section.getBoundingClientRect().top <= 156);
      if (current?.id) setActiveSection(current.id);
      setShowScrollTop(window.scrollY > 420);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="site-shell">
      <div className="utility-stripe" aria-hidden="true">
        <span>ORACLE FUSION</span><i /> <span>OIC INTEGRATION</span><i /> <span>FBDI &amp; DATA</span><i /> <span>REPORTING</span>
      </div>

      <header className="site-header">
        <button className="brand-lockup" onClick={() => scrollToSection("home")} aria-label="Go to home">
          <img src={assetUrl("shaik-connector-mark.png")} alt="Shaik Abdulla connector mark" />
          <span className="brand-name"><strong>SHAIK</strong><em>ABDULLA</em></span>
        </button>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map(([label, id]) => (
            <button key={id} className={activeSection === id ? "is-active" : ""} onClick={() => scrollToSection(id)}>{label}</button>
          ))}
        </nav>

        <button className="theme-toggle" onClick={() => toggleTheme?.()} aria-label={`Switch to ${theme === "light" ? "dark" : "light"} appearance`} title={`Switch to ${theme === "light" ? "dark" : "light"} appearance`}>
          {theme === "light" ? <Moon size={15} /> : <Sun size={15} />}
          <span>{theme === "light" ? "Dark" : "Light"}</span>
        </button>
        <a className="resume-button header-resume" href={resumeUrl} target="_blank" rel="noreferrer">
          <FileText size={15} /> View Resume <ArrowUpRight size={15} />
        </a>

        <button className="menu-button" aria-label="Toggle navigation menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      {menuOpen && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navItems.map(([label, id]) => (
            <button key={id} onClick={() => { scrollToSection(id); setMenuOpen(false); }}>{label}<ArrowDownRight size={18} /></button>
          ))}
          <a className="mobile-resume" href={resumeUrl} target="_blank" rel="noreferrer"><FileText size={16} /> View Resume</a>
        </nav>
      )}

      <main>
        <section id="home" className="hero-section" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="pulse-dot" /> 01 / PROFESSIONAL IDENTITY</p>
            <div className="hero-brand-stamp" aria-label="Shaik Abdulla portfolio identity"><img src={assetUrl("shaik-connector-mark.png")} alt="" /><span><small>ORACLE FUSION CONSULTING PORTFOLIO</small><b>SHAIK / ABDULLA</b></span><i>01</i></div>
            <h1 id="hero-title"><span>Shaik</span> Abdulla.</h1>
            <div className="hero-role">
              <p>Oracle Fusion<br />Technical Consultant</p>
              <span>OIC · Fusion ERP · Integrations<br />Reporting · Data Migration</span>
            </div>
            <p className="hero-intro">
              I design and develop Oracle Fusion Cloud technical solutions that connect enterprise systems, automate data processing, improve reporting, and support reliable operations. I approach every problem through the full lifecycle: requirements, integration design, data validation, exception handling, and reconciliation.</p>
            <p className="hero-manifesto">Documentation is the first layer of every dependable system.</p>
            <div className="hero-actions">
              <button className="primary-action" onClick={() => scrollToSection("projects")}>Explore my work <ArrowDownRight size={19} /></button>
              <a className="text-action" href={resumeUrl} download="Shaik-Abdulla-Resume.pdf"><Download size={17} /> View resume</a>
              <a className="text-action" href={githubUrl} target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
              <button className="text-action" onClick={() => scrollToSection("contact")}><Mail size={17} /> Contact me</button>
            </div>
            <div className="tech-strip" aria-label="Key technologies">
              {['Oracle Integration Cloud', 'Fusion ERP', 'REST / SOAP', 'FBDI / HDL', 'BI Publisher / OTBI', 'SQL / PL-SQL', 'Oracle ATP', 'UCM / ESS', 'Error handling'].map((tech) => <span key={tech}>{tech}</span>)}
            </div>
            <p className="context-note">Projects are labelled by their actual context: professional experience, independent practice, academic work, or technical exploration.</p>
          </div>
          <div className="hero-visual">
            <img src={assetUrl("shaik-hero-system-flow.jpg")} alt="Abstract enterprise data handoff visual" />
            <figure className="hero-portrait"><img src={assetUrl("shaik-abdulla-professional-portrait.jpg")} alt="Shaik Abdulla in professional attire" /><figcaption><span>PROFESSIONAL PROFILE</span><b>SHAIK ABDULLA</b></figcaption></figure>
            <div className="visual-caption"><span>LIVE SYSTEM TRACE</span><b>DATA → PROCESS → DECISION</b></div>
            <div className="hero-index">/ 2026</div>
          </div>
          <div className="hero-stats">
            {[["1+ YEAR", "Oracle Fusion technical experience"], ["SCM", "& Procurement focus"], ["OIC", "& Integrations focus"], ["MCA", "Education"]].map(([value, label]) => (
              <div key={value} className="stat"><strong>{value}</strong><span>{label}</span></div>
            ))}
          </div>
        </section>

        <section id="about" className="about-section dossier-section" aria-labelledby="about-title">
          <div className="section-rail"><span>02</span><i /><small>PROFILE</small></div>
          <div className="section-content about-layout">
            <div className="section-heading"><p className="eyebrow">THE WORK BEHIND THE TITLE</p><h2 id="about-title">Building solutions beyond individual technologies.</h2></div>
            <div className="about-copy">
              <p>I am <strong>Shaik Abdulla</strong>, an Oracle Fusion Technical Consultant focused on enterprise integrations, reporting, data processing, and technical automation.</p>
              <p>My foundation spans Oracle Fusion Cloud, OIC, SQL/PL-SQL, REST and SOAP APIs, data migration, BI Publisher, OTBI, and backend development in Python, Flask, PHP, and MySQL. That lets me look at enterprise systems from both the application and the integration side.</p>
              <p>I am drawn to <em>how data moves between systems</em>, how business rules are enforced, how failures are diagnosed, and how results are validated and reconciled.</p>
              <p><strong>Objective:</strong> to grow as an Oracle Fusion Technical Consultant and OIC specialist, building dependable integrations, effective reporting, and maintainable data-processing workflows.</p>
            </div>
            <div className="solution-trace" aria-label="Solution flow">
              {['Understand the requirement', 'Analyze the data', 'Design the solution', 'Develop the workflow', 'Test and troubleshoot', 'Reconcile the results'].map((step, index) => (
                <div key={step} className="trace-step"><b>{String(index + 1).padStart(2, '0')}</b><span>{step}</span></div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="experience-section dossier-section" aria-labelledby="experience-title">
          <div className="section-rail inverse"><span>03</span><i /><small>JOURNEY</small></div>
          <div className="section-content">
            <div className="section-heading heading-light"><p className="eyebrow"><span className="pulse-dot" /> PROFESSIONAL JOURNEY</p><h2 id="experience-title">Methodical growth, from application logic to enterprise flow.</h2></div>
            <div className="experience-feature">
              <div className="experience-mark"><BriefcaseBusiness size={30} /><span>PROFESSIONAL<br />EXPERIENCE</span></div>
              <div className="experience-main"><p className="stamp">CURRENT ROLE / AUG 2025 — PRESENT</p><h3>Oracle Fusion<br /><em>Technical Consultant</em></h3><p className="company">Kaapture Minds</p></div>
              <p className="experience-summary">Working on Oracle Fusion Cloud technical areas involving reporting, integrations, data processing, validation, and enterprise automation.</p>
            </div>
            <div className="responsibility-list">
              {[
                'Work with OIC to design, configure, and test integrations using adapters, mappings, orchestration, and fault handling.',
                'Use REST and SOAP APIs for application connectivity and data exchange.',
                'Develop BI Publisher reports (SQL data models, RTF templates) and OTBI analyses, validating outputs against requirements and source data.',
                'Work with FBDI import workflows: file preparation, validation, upload, execution, and error analysis.',
                'Use SQL and PL/SQL for extraction, validation, transformation, and reconciliation, with staging and status tracking where required.',
                'Investigate integration failures by analyzing payloads, validation errors, and statuses; document root causes and corrective actions.',
              ].map((item) => <div key={item}><Check size={16} /><span>{item}</span></div>)}
            </div>
            <div className="career-timeline" aria-label="Career timeline">
              <div><span>2024</span><b>Full Stack Web Development</b><p>Applications, backend logic, databases, authentication, and data processing.</p></div>
              <div><span>2025</span><b>Transition into Enterprise Technology</b><p>Oracle Fusion reporting, integrations, APIs, data migration, and SQL.</p></div>
              <div className="current"><span>AUG 2025 — NOW</span><b>Oracle Fusion Technical Consultant</b><p>Professional work across SCM, Procurement, OIC, reporting, and enterprise data processing.</p></div>
              <div><span>NEXT</span><b>AI-Assisted Enterprise Automation</b><p>Growing toward solution architecture across enterprise systems, data, AI agents, and automation.</p></div>
            </div>
          </div>
        </section>

        <section id="expertise" className="expertise-section dossier-section" aria-labelledby="expertise-title">
          <div className="section-rail"><span>04</span><i /><small>EXPERTISE</small></div>
          <div className="section-content">
            <div className="section-heading split-heading"><div><p className="eyebrow">CAPABILITIES / PRACTICE AREAS</p><h2 id="expertise-title">Capabilities built around real system flow.</h2></div><p>Solid tags are hands-on skills. Dashed tags are areas I am actively exploring.</p></div>
            <div className="expertise-list">
              {expertise.map((item) => {
                const Icon = item.icon;
                return <article className="expertise-item" key={item.number}>
                  <div className="expertise-number">{item.number}</div>
                  <div className="expertise-icon"><Icon size={25} /></div>
                  <div className="expertise-copy"><h3>{item.title}</h3><p>{item.description}</p></div>
                  <div className="skill-tags">{item.skills.map((skill) => <span key={skill}>{skill}</span>)}{item.exploring.map((skill) => <span key={skill} className="is-exploring" title="Currently exploring">{skill}</span>)}</div>
                </article>;
              })}
            </div>
          </div>
        </section>

        <section id="projects" className="projects-section dossier-section" aria-labelledby="projects-title">
          <div className="section-rail inverse"><span>05</span><i /><small>SELECTED WORK</small></div>
          <div className="section-content">
            <div className="section-heading heading-light split-heading"><div><p className="eyebrow"><span className="pulse-dot" /> SELECTED SYSTEMS &amp; PROJECTS</p><h2 id="projects-title">Work with the flow left visible.</h2></div><p>Oracle and integration work comes first. Every entry is labelled by its real context: professional work, independent practice, design exercise, technical exploration, or academic project.</p></div>
            <div className="project-list">
              {projects.map((project, projectIndex) => {
                const selectedTab = projectDetail?.id === project.id ? projectDetail.tab : null;
                const selectProjectDetail = (tab: "architecture" | "details" | "technology" | "evidence") => setProjectDetail(selectedTab === tab ? null : { id: project.id, tab });
                return <article id={projectIndex === 0 ? "featured-project" : undefined} className={`project-sheet project-${project.id}`} key={project.id}>
                <div className="project-header"><span className="project-id">{String(projectIndex + 1).padStart(2, "0")}</span>{projectIndex === 0 && <span className="featured-badge">Featured case study</span>}<span className={`work-stamp project-stamp-${project.id}`}>{project.label}</span><ArrowUpRight size={20} /></div>
                <div className="project-grid">
                  <div className="project-description"><h3>{project.title}</h3><p>{project.summary}</p><div className="project-stack">{project.stack.map((tech) => <span key={tech}>{tech}</span>)}</div></div>
                  {project.id === "04" ? <div className="agent-system-visual" aria-label="Conceptual AI-assisted enterprise workflow"><span>ORACLE FUSION</span><i /><span>REPORT / INTEGRATION</span><i /><strong>AI<br />AGENT</strong><i /><span>INSIGHT / ACTION</span><small>TECHNICAL EXPLORATION / 04</small></div> : !project.image ? <div className="flow-visual" aria-label={`${project.title} flow`}>{project.flow.map((step, i) => <span key={step}><b>{String(i + 1).padStart(2, "0")}</b>{step}</span>)}<small>{project.label.toUpperCase()}</small></div> : <figure className="project-visual"><img src={project.image} alt="" /><figcaption><span>EVIDENCE FRAME / {project.label}</span><b>SYSTEM VISUAL / {project.id}</b></figcaption></figure>}
                </div>
                <div className="project-actions" aria-label={`${project.title} project details`}><button className={selectedTab === "architecture" ? "is-selected" : ""} onClick={() => selectProjectDetail("architecture")} aria-expanded={selectedTab === "architecture"}><Workflow size={15} /> View architecture</button><button className={selectedTab === "details" ? "is-selected" : ""} onClick={() => selectProjectDetail("details")} aria-expanded={selectedTab === "details"}><Code2 size={15} /> Technical details</button><button className={selectedTab === "technology" ? "is-selected" : ""} onClick={() => selectProjectDetail("technology")} aria-expanded={selectedTab === "technology"}><Database size={15} /> Technologies used</button><button className={selectedTab === "evidence" ? "is-selected" : ""} onClick={() => selectProjectDetail("evidence")} aria-expanded={selectedTab === "evidence"}><BadgeCheck size={15} /> Status &amp; evidence</button></div>
                {selectedTab === "architecture" && <div className="project-detail"><p className="detail-kicker">ARCHITECTURE / SYSTEM FLOW</p><div className="mini-flow">{project.flow.map((step, flowIndex) => <span key={step}><b>{String(flowIndex + 1).padStart(2, '0')}</b>{step}</span>)}</div></div>}
                {selectedTab === "details" && <div className="project-detail project-detail-copy"><div><p className="detail-kicker">TECHNICAL CHALLENGE</p><p>{project.challenge}</p></div><div><p className="detail-kicker">MY ROLE</p><p>{project.role}</p></div><ul>{project.focus.map((item) => <li key={item}><CircleCheck size={15} />{item}</li>)}</ul></div>}
                {selectedTab === "evidence" && <div className="project-detail project-detail-copy"><div><p className="detail-kicker">IMPLEMENTATION STATUS</p><p>{project.status}</p></div><div><p className="detail-kicker">TEST SCENARIOS</p><ul>{project.tests.map((t) => <li key={t}><CircleCheck size={15} />{t}</li>)}</ul></div><div><p className="detail-kicker">LIMITATIONS</p><p>{project.limits}</p></div><div><p className="detail-kicker">REPOSITORY &amp; DOCUMENTATION</p><p><a className="evidence-link" href={githubUrl} target="_blank" rel="noreferrer"><Github size={14} /> Browse GitHub profile <ArrowUpRight size={13} /></a></p></div></div>}
                {selectedTab === "technology" && <div className="project-detail technology-detail"><p className="detail-kicker">KEY TECHNICAL AREAS</p><div className="project-stack">{project.stack.map((tech) => <span key={tech}>{tech}</span>)}</div><p>These are the principal platforms, patterns, and technologies represented by this {project.label.toLowerCase()}.</p></div>}
              </article>;
              })}
            </div>
            <div className="project-footnotes">
              <article><span>08 / INTEGRATION PATTERNS</span><h3>Enterprise API &amp; Integration Patterns</h3><p>REST-to-REST, REST-to-SOAP, file-based, scheduled database processing, and reconciliation patterns. These are technical demonstrations, not separate production implementations.</p></article>
              <article><span>09 / ACADEMIC PROJECT</span><h3>College Management System</h3><p>A PHP and MySQL full-stack application for student records: CRUD operations, relational schema, server-side validation, and a responsive interface.</p></article>
            </div>
          </div>
        </section>

        <section className="problem-section dossier-section" aria-labelledby="problem-title">
          <div className="section-rail"><span>06</span><i /><small>METHOD</small></div>
          <div className="section-content">
            <div className="section-heading split-heading"><div><p className="eyebrow">FROM PROBLEM TO SOLUTION</p><h2 id="problem-title">A practical process for complex technical work.</h2></div><p>Good enterprise work needs both systems thinking and disciplined follow-through.</p></div>
            <div className="method-map">
              {workflowSteps.map(([number, title, description]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></article>)}
            </div>
          </div>
        </section>

        <section className="architecture-section dossier-section" aria-labelledby="architecture-title">
          <div className="section-rail inverse"><span>07</span><i /><small>ARCHITECTURE</small></div>
          <div className="section-content">
            <div className="section-heading heading-light"><p className="eyebrow"><span className="pulse-dot" /> SYSTEMS THINKING</p><h2 id="architecture-title">How I think about enterprise systems.</h2></div>
            <div className="architecture-streams">
              {architectureStreams.map((stream, streamIndex) => <article key={stream.title}><div className="stream-title"><b>0{streamIndex + 1}</b><h3>{stream.title}</h3></div><div className="stream-nodes">{stream.nodes.map((node, nodeIndex) => <span key={node} className={nodeIndex === stream.nodes.length - 1 ? "last-node" : ""}><i>{String(nodeIndex + 1).padStart(2, '0')}</i>{node}</span>)}</div></article>)}
            </div>
          </div>
        </section>

        <section id="credentials" className="credentials-section dossier-section" aria-labelledby="credentials-title">
          <div className="section-rail"><span>08</span><i /><small>CREDENTIALS</small></div>
          <div className="section-content">
            <div className="section-heading"><p className="eyebrow">EDUCATION / CERTIFICATIONS / ACHIEVEMENTS</p><h2 id="credentials-title">The qualifications behind the practice.</h2></div>
            <div className="credentials-grid">
              <article className="education-card"><div className="card-top"><GraduationCap size={24} /><span>EDUCATION</span></div><div className="education-row"><span>2024 — 2026</span><h3>Master of Computer Applications</h3><p>Rajeev Gandhi Memorial College of Engineering &amp; Technology, Nandyal<br /><b>SGPA 8.86</b></p></div><div className="education-row"><span>2021 — 2024</span><h3>Bachelor of Science — Computer Science</h3><p>St. Joseph's Degree College, Kurnool<br /><b>GPA 8.56</b></p></div></article>
              <article className="certification-card"><div className="card-top"><BadgeCheck size={24} /><span>CERTIFICATIONS</span></div><div className="cert-item"><b>Oracle Fusion Cloud Applications SCM Process Essentials Certified — Rel 1</b><p>Oracle Fusion Cloud SCM process and application fundamentals.</p></div><div className="cert-item"><b>Oracle Fusion AI Agent Studio Certified Foundations Associate — Rel 1</b><p>Foundation-level certification focused on Oracle’s AI Agent Studio.</p></div></article>
              <article className="achievements-card"><div className="card-top"><Award size={24} /><span>ACHIEVEMENTS</span></div><div className="achievement-row"><b>02</b><p><strong>Hackathon — Second Prize</strong><br />AI-based solution development.</p></div><div className="achievement-row"><b>♞</b><p><strong>Intercollegiate Chess — Runner-Up</strong><br />Competitive recognition.</p></div><div className="achievement-row"><b>★</b><p><strong>Best Intern Recognition</strong><br />Full-stack internship performance.</p></div></article>
            </div>
            <div className="learning-strip"><BookOpen size={18} /><span>ADDITIONAL TECHNICAL LEARNING</span>{['SQL', 'Python', 'Web Development', 'C Programming', 'R Programming', 'IoT', 'Cloud Security', 'AI & ML', 'Data Analytics'].map((topic) => <b key={topic}>{topic}</b>)}</div>
          </div>
        </section>

        <section className="focus-section dossier-section" aria-labelledby="focus-title">
          <div className="section-rail inverse"><span>09</span><i /><small>CURRENT FOCUS</small></div>
          <div className="section-content">
            <div className="section-heading heading-light split-heading"><div><p className="eyebrow"><span className="pulse-dot" /> WHERE THE PRACTICE IS GOING</p><h2 id="focus-title">Developing deeper enterprise integration expertise.</h2></div><p>Long term: end-to-end solution design across enterprise applications, integrations, data, reporting, and intelligent automation.</p></div>
            <div className="focus-grid"><article><Network size={25} /><h3>Oracle Integration Cloud</h3><p>Deepening practical understanding of integration patterns, adapters, transformations, error handling, monitoring, and reliable data exchange.</p></article><article><LineChart size={25} /><h3>Oracle Fusion Reporting</h3><p>Improving SQL data models, BI Publisher reports, OTBI analyses, and validated reporting outputs.</p></article><article><Database size={25} /><h3>Data Processing &amp; Reconciliation</h3><p>Building repeatable approaches to staging, validation, bulk import, error tracking, and source-to-target reconciliation.</p></article><article><Bot size={25} /><h3>AI-Assisted Enterprise Automation</h3><p>Exploring how AI agents can support contextual reporting and integration troubleshooting while keeping business data and actions controlled.</p></article></div>
          </div>
        </section>

        <section id="contact" className="contact-section" aria-labelledby="contact-title">
          <div className="contact-rule" />
          <div className="contact-top"><p className="eyebrow"><span className="pulse-dot" /> 10 / CONTACT</p><span>AVAILABLE FOR RELEVANT OPPORTUNITIES</span></div>
          <h2 id="contact-title">Interested in Oracle Fusion<br /><em>Technical &amp; OIC roles?</em></h2>
          <div className="contact-grid">
            <div><p>I am interested in opportunities involving Oracle Fusion technical consulting, Oracle Integration Cloud, enterprise integrations, data migration, reporting, and technical automation. Preferred locations: Hyderabad and Bangalore.</p><a className="primary-action contact-action" href="mailto:Inthyaz0@gmail.com">Start a conversation <Send size={18} /></a></div>
            <div className="contact-details"><a href="mailto:Inthyaz0@gmail.com"><Mail size={17} /><span><small>EMAIL</small>Inthyaz0@gmail.com</span></a><a href="tel:+916300078028"><Phone size={17} /><span><small>PHONE</small>+91 6300078028</span></a><a href={linkedInUrl} target="_blank" rel="noreferrer"><Linkedin size={17} /><span><small>LINKEDIN</small>Shaik Abdulla</span></a><a href={githubUrl} target="_blank" rel="noreferrer"><Github size={17} /><span><small>GITHUB</small>Explore my technical work</span></a></div>
          </div>
        </section>
      </main>

      {showScrollTop && <button className="floating-top" onClick={scrollToTop} aria-label="Scroll back to the top of the page"><ArrowUp size={17} /><span>Back to top</span></button>}
      <footer className="site-footer"><div className="footer-brand"><img src={assetUrl("shaik-connector-mark.png")} alt="" /><p><strong>SHAIK ABDULLA</strong><span>ORACLE FUSION • INTEGRATION • DATA • AI AGENTS &amp; AUTOMATION</span></p></div><p>Building systems that connect technology, data, and business.</p><div className="footer-actions"><small>© 2026 SHAIK ABDULLA</small></div></footer>
    </div>
  );
}
