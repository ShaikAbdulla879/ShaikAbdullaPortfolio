# Deploying This Portfolio to GitHub Pages

This portfolio is a static React and Vite application, so it can be published on GitHub Pages. The repository includes a GitHub Actions workflow at `.github/workflows/deploy.yml` and a GitHub-Pages-specific Vite configuration at `vite.github-pages.config.ts`.

> **Important:** The current managed deployment uses `/manus-storage/` URLs for the portrait, resume, logo, and illustrative images. GitHub Pages cannot serve those managed URLs. Before publishing the GitHub version, copy each asset into the GitHub repository and update those URLs as described below.

## 1. Create a Repository

1. Sign in to [GitHub](https://github.com/) and select **New repository**.
2. Choose the **Abdul879** account as owner.
3. Use `shaik-abdulla-portfolio` as the repository name. Keep the repository **Public** if you use the GitHub Free plan.
4. Do not initialize the repository with an additional README, because this project already includes one.
5. Select **Create repository**.

This repository name will publish the site at:

```text
https://abdul879.github.io/shaik-abdulla-portfolio/
```

If you prefer the shorter root address `https://abdul879.github.io/`, name the repository exactly `Abdul879.github.io` instead. The included Vite configuration supports both address types automatically.

## 2. Upload the Project Source

Use the complete project ZIP previously provided, extract it on your computer, and open the extracted `shaik-abdulla-portfolio` folder in a terminal.

```bash
git init
git add .
git commit -m "Initial portfolio deployment"
git branch -M main
git remote add origin https://github.com/Abdul879/shaik-abdulla-portfolio.git
git push -u origin main
```

Alternatively, upload the project files through GitHub’s web interface. Do **not** upload `node_modules`, `dist`, `.manus-logs`, `.env`, or any private credential files.

## 3. Add the Required Static Assets

Create this folder in the GitHub copy of the project:

```text
client/public/assets/
```

Copy the following resources into that folder:

| Asset type | Suggested filename |
|---|---|
| Professional portrait | `shaik-abdulla-professional-portrait.jpg` |
| Resume PDF | `Shaik-Abdulla-Resume.pdf` |
| Header logo | `shaik-connector-mark.png` |
| Hero illustration | `shaik-hero-system-flow.jpg` |
| Supplier-import illustration | `supplier-import-architecture.jpg` |
| Attendance illustration | `ai-attendance-visual.jpg` |
| Reporting illustration | `reporting-analytics-visual.jpg` |

Then open `client/src/pages/Home.tsx` and replace every `/manus-storage/...` asset reference with the equivalent GitHub Pages path. For example:

```ts
const resumeUrl = "/assets/Shaik-Abdulla-Resume.pdf";
```

For an image reference, change:

```tsx
<img src="/manus-storage/your-current-image.jpg" alt="" />
```

to:

```tsx
<img src="/assets/your-image.jpg" alt="" />
```

This asset step is required for a fully independent GitHub Pages deployment.

## 4. Enable GitHub Pages

1. Open the repository on GitHub.
2. Select **Settings**.
3. In the left sidebar, choose **Pages**.
4. Under **Build and deployment**, set **Source** to **GitHub Actions**.
5. Push the asset changes and any updated source files to the `main` branch.

The included workflow builds the Vite application and publishes the `dist/github-pages` folder each time changes are pushed to `main`.

## 5. Confirm the Deployment

1. Open the **Actions** tab in the repository.
2. Select the **Deploy portfolio to GitHub Pages** workflow.
3. Wait for each step to complete successfully.
4. Return to **Settings → Pages** and select **Visit site**, or open the expected published URL directly.

GitHub Pages normally publishes a new build within several minutes. If the page is blank or assets are missing, first confirm that the Vite base path is correct and that every managed asset URL was replaced with a local `/assets/...` path.

## Ongoing Updates

After the initial setup, update portfolio content normally and publish changes with:

```bash
git add .
git commit -m "Update portfolio content"
git push
```

The GitHub Actions workflow deploys the updated portfolio automatically.

## References

GitHub Pages can deploy a static build artifact through GitHub Actions, while Vite recommends setting the appropriate `base` value for repository subpaths. [1] [2]

[1]: https://vite.dev/guide/static-deploy "Vite: Deploying a Static Site"
[2]: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site "GitHub Docs: Creating a GitHub Pages site"
