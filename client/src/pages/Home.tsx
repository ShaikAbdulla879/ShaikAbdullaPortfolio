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
  {
    number: "01",
    title: "Oracle Fusion Cloud",
    icon: CloudCog,
    description: "Enterprise reporting, integrations, data migration, and technical automation.",
    skills: ["SCM", "Procurement", "Product Data Hub", "ESS Jobs", "Scheduled Processes", "Security Fundamentals"],
  },
  {
    number: "02",
    title: "Reporting & Analytics",
    icon: LineChart,
    description: "Turning operational data into structured reports, practical dashboards, and AI-assisted insights.",
    skills: ["BI Publisher", "SQL Data Models", "XML", "RTF / XSL", "Bursting", "OTBI", "AI-Assisted Reporting"],
  },
  {
    number: "03",
    title: "Integration Engineering",
    icon: Network,
    description: "Connecting systems and automating data movement across enterprise platforms, with a growing focus on AI-assisted workflows.",
    skills: ["Oracle Integration Cloud", "REST", "SOAP", "FTP / SFTP", "JSON / XML", "Fault Handling", "AI Agent Integration"],
  },
  {
    number: "04",
    title: "Data & Migration",
    icon: Database,
    description: "Structured data validation, transformation, FBDI processing, and reconciliation.",
    skills: ["SQL", "PL/SQL", "Oracle ATP", "FBDI", "UCM", "Data Reconciliation"],
  },
  {
    number: "05",
    title: "Software & AI",
    icon: Braces,
    description: "Backend and AI-powered applications built on an understanding of the complete stack.",
    skills: ["Python", "Flask", "PHP", "MySQL", "Face Recognition", "REST APIs"],
  },
  {
    number: "06",
    title: "AI Agents & Intelligent Automation",
    icon: Bot,
    description: "Exploring AI agents as an intelligence layer for reporting, integration workflows, contextual analysis, and decision support.",
    skills: ["AI Agent Studio", "Enterprise AI", "Reporting Intelligence", "Integration Automation", "Data Analysis"],
  },
];

const projects = [
  {
    id: "01",
    label: "Professional work",
    title: "Automated Supplier Import & Reconciliation System",
    challenge: "External supplier files required automated intake, validation, Oracle Fusion import, and post-processing reconciliation.",
    role: "Designed and implemented components of the integration workflow, including staging, status tracking, FBDI processing, and result handling.",
    summary:
      "An Oracle Integration Cloud workflow for receiving external supplier data, validating it, processing FBDI imports, and reconciling the result in a staging layer.",
    stack: ["Oracle Fusion Cloud", "OIC", "FTP", "ATP", "FBDI", "UCM", "BI Publisher"],
    image: assetUrl("supplier-import-architecture.jpg"),
    flow: ["FTP intake", "ATP staging", "FBDI package", "ESS process", "Reconcile"],
    focus: [
      "Tracked batches, request IDs, retry states, and supplier-level errors.",
      "Created a clear success / rejected classification path with OIC activities.",
      "Produced error CSV files and batch-level processing summaries.",
    ],
  },
  {
    id: "02",
    label: "Academic project",
    title: "AI-Based Smart Attendance System",
    challenge: "Attendance marking needed a reliable method to identify users, prevent duplicates, and make subject-level records easier to understand.",
    role: "Developed the face-recognition attendance flow, backend processing APIs, record handling, and dashboard analytics as an academic project.",
    summary:
      "A backend attendance system that applies face embeddings and similarity matching to mark attendance, prevent duplicates, and present subject-level analytics.",
    stack: ["Python", "Flask", "Firebase", "Face Recognition", "REST APIs", "Chart.js"],
    image: assetUrl("ai-attendance-visual.jpg"),
    flow: ["Face input", "Embedding", "Match", "Duplicate check", "Analytics"],
    focus: [
      "Built facial-recognition and duplicate-prevention flows around backend attendance APIs.",
      "Connected attendance records to Firebase Firestore for retrieval and analytics.",
      "Presented subject-wise attendance and automated percentage calculations.",
    ],
  },
  {
    id: "03",
    label: "Technical practice",
    title: "Oracle Fusion Reporting Solutions",
    challenge: "Business questions need to become trustworthy SQL data models, report outputs, and usable analytics without losing the operational context.",
    role: "Built and practiced structured reporting patterns spanning data extraction, template design, analysis, testing, and scheduled delivery.",
    summary:
      "Reporting work that translates business questions into SQL-based data models, BI Publisher documents, OTBI analyses, and governed delivery processes.",
    stack: ["BI Publisher", "SQL", "XML", "RTF / XSL", "OTBI", "ESS"],
    image: assetUrl("reporting-analytics-visual.jpg"),
    flow: ["Requirement", "SQL model", "XML", "Template", "Delivery"],
    focus: [
      "Designed parameterized data models, report templates, and structured XML output.",
      "Developed OTBI analyses with filters, prompts, calculated columns, and dashboards.",
      "Worked through test, registration, scheduling, and production reporting use cases.",
    ],
  },
  {
    id: "04",
    label: "Technical exploration",
    title: "AI Agent–Assisted Enterprise Reporting & Integration",
    challenge: "Enterprise reporting and integration data can be difficult to interpret quickly when exceptions, error patterns, and operational context are spread across multiple outputs.",
    role: "Exploring how Oracle AI Agent Studio, Oracle Fusion, OIC, BI Publisher, and REST APIs can work together as an intelligence layer for analysis, assistance, and suggested next actions.",
    summary: "A technical exploration of AI agents as an additional intelligence layer across enterprise reporting and integration workflows—not a production deployment claim.",
    stack: ["Oracle AI Agent Studio", "Oracle Fusion", "OIC", "BI Publisher", "REST APIs", "AI Agents"],
    image: "",
    flow: ["Enterprise data", "Report / integration", "AI agent", "Analyze / assist", "Insight / action"],
    focus: [
      "AI-assisted report interpretation and natural-language interaction with enterprise information.",
      "Exception and error analysis with contextual, priority-aware suggested attention.",
      "Agent-assisted integration monitoring, automated summaries, and workflow decisions.",
    ],
  },
];

const workflowSteps = [
  ["01", "Understand", "Clarify the business outcome, constraints, and operating context."],
  ["02", "Analyze", "Identify source data, target data, validations, and edge cases."],
  ["03", "Architect", "Select the right integration, migration, reporting, or app pattern."],
  ["04", "Build", "Develop mappings, queries, orchestration, templates, or backend logic."],
  ["05", "Validate", "Reconcile data, test payloads, and confirm processing outcomes."],
  ["06", "Improve", "Monitor faults and statuses, then make the workflow more reliable."],
];

const architectureStreams = [
  {
    title: "Enterprise data lifecycle",
    nodes: ["Source", "Extract", "Validate", "Transform", "Integrate", "Load", "Process", "Reconcile", "Report"],
  },
  {
    title: "Integration lifecycle",
    nodes: ["Trigger", "Authenticate", "Retrieve", "Validate", "Transform", "Invoke", "Handle faults", "Track status", "Reconcile"],
  },
  {
    title: "Reporting lifecycle",
    nodes: ["Requirement", "Data source", "SQL model", "XML output", "Template", "Testing", "Schedule / delivery"],
  },
  {
    title: "AI-assisted workflow exploration",
    nodes: ["Source data", "Report / integration", "AI agent", "Analyze / assist", "Insight / action"],
  },
];

const quickStats = [
  ["1+", "Year of Oracle Fusion experience"],
  ["15+", "Technical & academic projects"],
  ["3+", "Enterprise domains explored"],
  ["2026", "MCA graduate"],
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
  const [projectDetail, setProjectDetail] = useState<{ id: string; tab: "architecture" | "details" | "technology" } | null>(null);
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
        <span>ORACLE FUSION</span><i /> <span>INTEGRATION</span><i /> <span>DATA</span><i /> <span>AI AGENTS &amp; AUTOMATION</span>
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
              <span>Integration, Data<br />AI Agents &amp; Automation</span>
            </div>
            <p className="hero-intro">
              I build enterprise solutions that connect systems, automate data flows, improve reporting, and solve complex technical problems.
            </p>
            <p className="hero-manifesto">Documentation is the first layer of every dependable system.</p>
            <div className="hero-actions">
              <button className="primary-action" onClick={() => scrollToSection("projects")}>Explore my work <ArrowDownRight size={19} /></button>
              <a className="text-action" href={resumeUrl} download="Shaik-Abdulla-Resume.pdf"><Download size={17} /> Download resume</a>
            </div>
            <div className="tech-strip" aria-label="Key technologies">
              {['Oracle Fusion Cloud', 'OIC', 'BI Publisher', 'OTBI', 'SQL', 'REST APIs', 'FBDI', 'AI Agents', 'Python'].map((tech) => <span key={tech}>{tech}</span>)}
            </div>
          </div>
          <div className="hero-visual">
            <img src={assetUrl("shaik-hero-system-flow.jpg")} alt="Abstract enterprise data handoff visual" />
            <figure className="hero-portrait"><img src={assetUrl("shaik-abdulla-professional-portrait.jpg")} alt="Shaik Abdulla in professional attire" /><figcaption><span>PROFESSIONAL PROFILE</span><b>SHAIK ABDULLA</b></figcaption></figure>
            <div className="visual-caption"><span>LIVE SYSTEM TRACE</span><b>DATA → PROCESS → DECISION</b></div>
            <div className="hero-index">/ 2026</div>
          </div>
          <div className="hero-stats">
            {[["1+ YEAR", "Oracle Fusion experience"], ["SCM", "Professional focus"], ["OIC", "Integration & automation"], ["2026", "MCA"]].map(([value, label]) => (
              <div key={value} className="stat"><strong>{value}</strong><span>{label}</span></div>
            ))}
          </div>
        </section>

        <section id="about" className="about-section dossier-section" aria-labelledby="about-title">
          <div className="section-rail"><span>02</span><i /><small>PROFILE</small></div>
          <div className="section-content about-layout">
            <div className="section-heading"><p className="eyebrow">THE WORK BEHIND THE TITLE</p><h2 id="about-title">Building solutions beyond individual technologies.</h2></div>
            <div className="about-copy">
              <p>I am <strong>Shaik Abdulla</strong>, an Oracle Fusion Technical Consultant with experience across reporting, integrations, data migration, SQL, APIs, and enterprise automation.</p>
              <p>My foundation in backend development, databases, APIs, Python, Flask, PHP, MySQL, JavaScript, and full-stack applications helps me understand how applications, users, data, and integrations behave together.</p>
              <p>What interests me is the <em>complete flow of a solution</em>—from a business requirement through validation, processing, reconciliation, and reporting.</p>
            </div>
            <div className="solution-trace" aria-label="Solution flow">
              {['Business requirement', 'Data analysis', 'Validation', 'Integration', 'Transformation', 'Processing', 'Reconciliation', 'Reporting'].map((step, index) => (
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
              <p className="experience-summary">Developing Oracle Fusion Cloud technical solutions focused on reporting, integrations, data migration, validation, and operational automation.</p>
            </div>
            <div className="responsibility-list">
              {[
                'Develop BI Publisher reports with SQL data models and RTF / XSL templates.',
                'Create OTBI analyses and dashboards using subject areas, filters, measures, and prompts.',
                'Build and test OIC integrations with REST, SOAP, FTP, and ERP Cloud adapters.',
                'Perform FBDI migration activities from CSV preparation through UCM, ESS, and error monitoring.',
                'Use SQL for data extraction, validation, aggregation, troubleshooting, and reconciliation.',
                'Support Oracle Fusion SCM and Procurement technical processes and automation workflows.',
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
            <div className="section-heading split-heading"><div><p className="eyebrow">CAPABILITIES / PRACTICE AREAS</p><h2 id="expertise-title">Capabilities built around real system flow.</h2></div><p>Technical breadth is useful only when it creates a clearer path from source system to outcome.</p></div>
            <div className="expertise-list">
              {expertise.map((item) => {
                const Icon = item.icon;
                return <article className="expertise-item" key={item.number}>
                  <div className="expertise-number">{item.number}</div>
                  <div className="expertise-icon"><Icon size={25} /></div>
                  <div className="expertise-copy"><h3>{item.title}</h3><p>{item.description}</p></div>
                  <div className="skill-tags">{item.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
                </article>;
              })}
            </div>
          </div>
        </section>

        <section id="projects" className="projects-section dossier-section" aria-labelledby="projects-title">
          <div className="section-rail inverse"><span>05</span><i /><small>SELECTED WORK</small></div>
          <div className="section-content">
            <div className="section-heading heading-light split-heading"><div><p className="eyebrow"><span className="pulse-dot" /> SELECTED SYSTEMS &amp; PROJECTS</p><h2 id="projects-title">Work with the flow left visible.</h2></div><p>Each entry is marked by its real context: professional work, academic project, or professional practice.</p></div>
            <div className="project-list">
              {projects.map((project) => {
                const selectedTab = projectDetail?.id === project.id ? projectDetail.tab : null;
                const selectProjectDetail = (tab: "architecture" | "details" | "technology") => setProjectDetail(selectedTab === tab ? null : { id: project.id, tab });
                return <article className={`project-sheet project-${project.id}`} key={project.id}>
                <div className="project-header"><span className="project-id">{project.id}</span><span className={`work-stamp project-stamp-${project.id}`}>{project.label}</span><ArrowUpRight size={20} /></div>
                <div className="project-grid">
                  <div className="project-description"><h3>{project.title}</h3><p>{project.summary}</p><div className="project-stack">{project.stack.map((tech) => <span key={tech}>{tech}</span>)}</div></div>
                  {project.id === "04" ? <div className="agent-system-visual" aria-label="Conceptual AI-assisted enterprise workflow"><span>ORACLE FUSION</span><i /><span>REPORT / INTEGRATION</span><i /><strong>AI<br />AGENT</strong><i /><span>INSIGHT / ACTION</span><small>TECHNICAL EXPLORATION / 04</small></div> : <figure className="project-visual"><img src={project.image} alt="" /><figcaption><span>EVIDENCE FRAME / {project.label}</span><b>SYSTEM VISUAL / {project.id}</b></figcaption></figure>}
                </div>
                <div className="project-actions" aria-label={`${project.title} project details`}><button className={selectedTab === "architecture" ? "is-selected" : ""} onClick={() => selectProjectDetail("architecture")} aria-expanded={selectedTab === "architecture"}><Workflow size={15} /> View architecture</button><button className={selectedTab === "details" ? "is-selected" : ""} onClick={() => selectProjectDetail("details")} aria-expanded={selectedTab === "details"}><Code2 size={15} /> Technical details</button><button className={selectedTab === "technology" ? "is-selected" : ""} onClick={() => selectProjectDetail("technology")} aria-expanded={selectedTab === "technology"}><Database size={15} /> Technologies used</button></div>
                {selectedTab === "architecture" && <div className="project-detail"><p className="detail-kicker">ARCHITECTURE / SYSTEM FLOW</p><div className="mini-flow">{project.flow.map((step, flowIndex) => <span key={step}><b>{String(flowIndex + 1).padStart(2, '0')}</b>{step}</span>)}</div></div>}
                {selectedTab === "details" && <div className="project-detail project-detail-copy"><div><p className="detail-kicker">TECHNICAL CHALLENGE</p><p>{project.challenge}</p></div><div><p className="detail-kicker">MY ROLE</p><p>{project.role}</p></div><ul>{project.focus.map((item) => <li key={item}><CircleCheck size={15} />{item}</li>)}</ul></div>}
                {selectedTab === "technology" && <div className="project-detail technology-detail"><p className="detail-kicker">KEY TECHNICAL AREAS</p><div className="project-stack">{project.stack.map((tech) => <span key={tech}>{tech}</span>)}</div><p>These are the principal platforms, patterns, and technologies represented by this {project.label.toLowerCase()}.</p></div>}
              </article>;
              })}
            </div>
            <div className="project-footnotes">
              <article><span>05 / TECHNICAL PRACTICE</span><h3>Enterprise API &amp; Integration Solutions</h3><p>REST-to-REST, REST-to-SOAP, and file-based patterns centered on validation, transformation, monitoring, retry logic, and reconciliation.</p></article>
              <article><span>06 / ACADEMIC PROJECT</span><h3>College Management System</h3><p>A PHP and MySQL full-stack application for student data, authentication, CRUD operations, backend validation, and responsive use.</p></article>
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
              <article className="education-card"><div className="card-top"><GraduationCap size={24} /><span>EDUCATION</span></div><div className="education-row"><span>2024 — 2026</span><h3>Master of Computer Applications</h3><p>RGM College of Engineering &amp; Technology, Nandyal<br /><b>SGPA 8.86</b></p></div><div className="education-row"><span>2021 — 2024</span><h3>Bachelor of Science — Computer Science</h3><p>St. Joseph's Degree College, Kurnool<br /><b>GPA 8.56</b></p></div></article>
              <article className="certification-card"><div className="card-top"><BadgeCheck size={24} /><span>CERTIFICATIONS</span></div><div className="cert-item"><b>Oracle Fusion Cloud Applications SCM Process Essentials Certified — Rel 1</b><p>Oracle Fusion Cloud SCM process and application fundamentals.</p></div><div className="cert-item"><b>Oracle Fusion AI Agent Studio Certified Foundations Associate — Rel 1</b><p>Foundation-level certification focused on Oracle’s AI Agent Studio.</p></div></article>
              <article className="achievements-card"><div className="card-top"><Award size={24} /><span>ACHIEVEMENTS</span></div><div className="achievement-row"><b>02</b><p><strong>Hackathon — Second Prize</strong><br />AI-based solution development.</p></div><div className="achievement-row"><b>♞</b><p><strong>Intercollegiate Chess — Runner-Up</strong><br />Competitive recognition.</p></div><div className="achievement-row"><b>★</b><p><strong>Best Intern Recognition</strong><br />Full-stack internship performance.</p></div></article>
            </div>
            <div className="learning-strip"><BookOpen size={18} /><span>ADDITIONAL TECHNICAL LEARNING</span>{['SQL', 'Python', 'Web Development', 'C Programming', 'R Programming', 'IoT', 'Cloud Security', 'AI & ML', 'Data Analytics'].map((topic) => <b key={topic}>{topic}</b>)}</div>
          </div>
        </section>

        <section className="focus-section dossier-section" aria-labelledby="focus-title">
          <div className="section-rail inverse"><span>09</span><i /><small>CURRENT FOCUS</small></div>
          <div className="section-content">
            <div className="section-heading heading-light split-heading"><div><p className="eyebrow"><span className="pulse-dot" /> WHERE THE PRACTICE IS GOING</p><h2 id="focus-title">Building toward complete solution architecture.</h2></div><p>My current direction is toward designing complete systems rather than isolated reports, APIs, or integrations.</p></div>
            <div className="focus-grid"><article><Bot size={25} /><h3>Enterprise AI Agents &amp; Intelligent Automation</h3><p>Exploring how AI agents can work alongside Oracle Fusion, reporting, and integration workflows to interpret data, analyze exceptions, assist with decisions, and automate repetitive processes.</p></article><article><CloudCog size={25} /><h3>Advanced Cloud &amp; Agent Integration</h3><p>Developing deeper knowledge of connecting AI agents, APIs, enterprise applications, and cloud services into reliable end-to-end workflows.</p></article><article><Database size={25} /><h3>Data Engineering</h3><p>Learning advanced approaches to data pipelines, orchestration, validation, and analytics.</p></article><article><Puzzle size={25} /><h3>Solution Architecture</h3><p>Working toward complete solutions rather than isolated technical components.</p></article></div>
          </div>
        </section>

        <section id="contact" className="contact-section" aria-labelledby="contact-title">
          <div className="contact-rule" />
          <div className="contact-top"><p className="eyebrow"><span className="pulse-dot" /> 10 / CONTACT</p><span>AVAILABLE FOR RELEVANT OPPORTUNITIES</span></div>
          <h2 id="contact-title">Open to building<br /><em>better systems.</em></h2>
          <div className="contact-grid">
            <div><p>Interested in Oracle Fusion technical consulting, enterprise integrations, data automation, backend engineering, and intelligent enterprise solutions.</p><a className="primary-action contact-action" href="mailto:Inthyaz0@gmail.com">Start a conversation <Send size={18} /></a></div>
            <div className="contact-details"><a href="mailto:Inthyaz0@gmail.com"><Mail size={17} /><span><small>EMAIL</small>Inthyaz0@gmail.com</span></a><a href="tel:+916300078028"><Phone size={17} /><span><small>PHONE</small>+91 6300078028</span></a><a href={linkedInUrl} target="_blank" rel="noreferrer"><Linkedin size={17} /><span><small>LINKEDIN</small>Shaik Abdulla</span></a><a href={githubUrl} target="_blank" rel="noreferrer"><Github size={17} /><span><small>GITHUB</small>Explore my technical work</span></a></div>
          </div>
        </section>
      </main>

      {showScrollTop && <button className="floating-top" onClick={scrollToTop} aria-label="Scroll back to the top of the page"><ArrowUp size={17} /><span>Back to top</span></button>}
      <footer className="site-footer"><div className="footer-brand"><img src={assetUrl("shaik-connector-mark.png")} alt="" /><p><strong>SHAIK ABDULLA</strong><span>ORACLE FUSION • INTEGRATION • DATA • AI AGENTS &amp; AUTOMATION</span></p></div><p>Building systems that connect technology, data, and business.</p><div className="footer-actions"><small>© 2026 SHAIK ABDULLA</small></div></footer>
    </div>
  );
}
