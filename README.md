# Shaik Abdulla — Professional Portfolio

A responsive personal portfolio for **Shaik Abdulla**, an Oracle Fusion Technical Consultant working across enterprise integration, reporting, data processing, automation, and AI-agent exploration.

> **Live site:** [shaikfolio-2pkpaw2r.manus.space](https://shaikfolio-2pkpaw2r.manus.space)

## Overview

This portfolio presents professional experience, technical capabilities, selected work, qualifications, and current learning direction in a polished **Executive Bluebook** consulting-report visual system. It distinguishes between professional work, academic projects, technical practice, and AI-agent technical exploration so that the portfolio remains clear and accurate.

## Highlights

| Area | Included |
|---|---|
| Professional identity | Oracle Fusion, integration, data, AI agents, and automation positioning |
| Experience | Oracle Fusion Technical Consultant experience, career direction, and responsibilities |
| Capabilities | Oracle Fusion SCM, reporting and analytics, integration engineering, data migration, software development, and AI agents |
| Featured work | Supplier import and reconciliation, smart attendance, reporting solutions, and AI-agent-assisted workflow exploration |
| Profile experience | Professional portrait, downloadable resume, email, phone, LinkedIn, and GitHub links |
| Appearance | Persistent light and dark theme toggle |
| Accessibility | Semantic controls, visible focus states, descriptive image alternative text, and responsive navigation |
| Interaction | Expandable project details and a scroll-triggered, fixed **Back to top** button |

## Technology Stack

| Technology | Purpose |
|---|---|
| React 19 | User interface |
| TypeScript | Type-safe application code |
| Vite | Local development and production builds |
| Tailwind CSS 4 | Base styling utilities and tokens |
| Custom CSS | Executive Bluebook visual system and responsive refinements |
| Wouter | Client-side routing |
| Lucide React | Interface icons |
| pnpm | Package management |

## Run Locally

### Prerequisites

Install a recent LTS release of Node.js and [pnpm](https://pnpm.io/installation).

### Installation

```bash
git clone https://github.com/Abdul879/shaik-abdulla-portfolio.git
cd shaik-abdulla-portfolio
pnpm install
```

### Development Server

```bash
pnpm dev
```

Open the local URL printed in the terminal, normally `http://localhost:3000`.

### Validation and Production Build

```bash
pnpm check
pnpm build
```

`pnpm check` runs the TypeScript check. `pnpm build` creates the production web assets.

## Project Structure

```text
.
├── client/
│   ├── index.html                     # Page metadata and font loading
│   └── src/
│       ├── App.tsx                    # Application shell and theme provider
│       ├── contexts/ThemeContext.tsx  # Persistent light/dark appearance state
│       └── pages/
│           ├── Home.tsx               # Portfolio content, links, sections, and interactions
│           ├── executive-bluebook.css # Primary professional visual system
│           └── executive-bluebook-refinement.css
├── server/                            # Static deployment compatibility layer
├── shared/                            # Shared compatibility types
├── ideas.md                           # Visual direction and design decisions
└── package.json                       # Project scripts and dependencies
```

## Content and Link Updates

All portfolio content is defined in `client/src/pages/Home.tsx`.

| Item to update | Where to edit |
|---|---|
| Name, role, biography, expertise, and selected projects | `client/src/pages/Home.tsx` |
| Resume URL | `resumeUrl` near the top of `client/src/pages/Home.tsx` |
| LinkedIn URL | `linkedInUrl` near the top of `client/src/pages/Home.tsx` |
| GitHub URL | `githubUrl` near the top of `client/src/pages/Home.tsx` |
| Theme default and persisted toggle | `client/src/contexts/ThemeContext.tsx` and `client/src/App.tsx` |
| Executive Bluebook colours and component styling | `client/src/pages/executive-bluebook.css` |
| Final visual refinements | `client/src/pages/executive-bluebook-refinement.css` |

## Managing Assets

The current hosted site references managed asset URLs for the professional portrait, resume, and editorial illustrations. When moving the project to another static host, download those assets, store them in your host’s public-assets directory, and update the relevant image or resume URLs in `Home.tsx`.

For example, a standalone static deployment can place a resume in `client/public/assets/Shaik-Abdulla-Resume.pdf` and change the resume constant to:

```ts
const resumeUrl = "/assets/Shaik-Abdulla-Resume.pdf";
```

## Deployment Notes

The portfolio is currently deployed through managed hosting. For a self-managed static deployment, build the project and publish the generated web output from `dist/public` to a compatible static host.

Before deploying to GitHub Pages, Vercel, Netlify, or another host, confirm that all managed asset URLs have been replaced with URLs that your new host can serve. Also update the application base path if deploying under a repository subdirectory instead of a custom domain.

For GitHub Pages, follow the complete [GitHub Pages deployment guide](docs/GITHUB_PAGES_DEPLOYMENT.md). The repository includes a dedicated Vite configuration and GitHub Actions workflow.

## Portfolio Positioning Note

AI-agent content in this portfolio is deliberately labelled as **technical exploration**. It represents learning, certification-aligned experimentation, and prototype direction rather than a claim of production delivery unless corresponding project evidence is added.

## License

This is a personal portfolio project. You may add a license such as `MIT` only if you intend to permit reuse of the source code.

---

Built for **Shaik Abdulla** — Oracle Fusion, Integration, Data, AI Agents & Automation.
