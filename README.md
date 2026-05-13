# BQLDA AI Training — Landing Page

Enterprise landing page for the internal AI training program at Ban Quản lý Dự án, Viettel Networks.

---

## Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| Next.js | 14.x | App Router, SSG |
| React | 18.x | UI framework |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 3.x | Styling |
| Framer Motion | 11.x | Animations |
| Lucide React | 0.400+ | Icons |

---

## Project Structure

```
landing-page/
├── app/
│   ├── globals.css       # Global styles + Tailwind imports
│   ├── layout.tsx        # Root layout with SEO metadata
│   └── page.tsx          # Main page — assembles all sections
├── components/
│   ├── Header.tsx        # Sticky nav with mobile menu
│   ├── Hero.tsx          # Hero section + AI visual
│   ├── TrustSection.tsx  # Certification badge
│   ├── BenefitsSection.tsx  # 2x2 benefit cards
│   ├── DemoSection.tsx   # 3 alternating demo blocks
│   ├── HowToParticipate.tsx # 4-step timeline
│   ├── InstructorSection.tsx # Instructor profile
│   ├── TestimonialsSection.tsx # 3 testimonial cards
│   ├── StudentBenefits.tsx   # 6-item benefit grid
│   ├── FAQSection.tsx    # Accordion FAQ
│   ├── RegistrationForm.tsx  # Registration form
│   ├── FinalCTA.tsx      # Dark CTA section
│   ├── Footer.tsx        # Dark footer
│   └── StickyBottomCTA.tsx  # Sticky bottom bar
├── public/               # Static assets
├── next.config.ts        # Next.js config (static export)
├── tailwind.config.ts    # Tailwind + brand colors
├── tsconfig.json         # TypeScript config
└── package.json          # Dependencies
```

---

## Local Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Install and run

```bash
# Install dependencies
npm install

# Start dev server (uses Turbopack + readlink fix for Windows A: drive)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
```

The static output will be in the `/out` folder.

> **Note for Windows users (A: drive):** The project is configured to use Turbopack and a `readlink` patch (`scripts/fix-readlink.cjs`) to handle a Windows-specific filesystem behavior where `readlink` returns `EISDIR` on non-C: drives. Both `npm run dev` and `npm run build` apply this fix automatically. If you move the project to a C: drive, you can simplify the scripts back to `next dev` and `next build`.

---

## Deploy to Vercel (Recommended)

Vercel is the simplest deployment method for Next.js.

### Option A — Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login
vercel login

# Deploy (follow the prompts)
vercel

# Deploy to production
vercel --prod
```

### Option B — Vercel Dashboard (GitHub)

1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click **"Add New Project"**
4. Import your GitHub repository
5. Vercel auto-detects Next.js — no config needed
6. Click **"Deploy"**

Your site will be live at `https://your-project.vercel.app` in ~2 minutes.

**Environment variables**: None required for this project.

---

## Deploy to GitHub Pages

The project is configured for static export (`output: "export"` in `next.config.ts`), which is required for GitHub Pages.

### Step 1 — Build the static site

```bash
npm run build
```

This generates an `/out` folder with static HTML/CSS/JS.

### Step 2 — Create GitHub repository

```bash
git init
git add .
git commit -m "Initial commit: BQLDA AI Training landing page"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### Step 3 — Enable GitHub Pages via GitHub Actions

Create the file `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - uses: actions/deploy-pages@v4
        id: deployment
```

### Step 4 — Configure GitHub Pages

1. Go to your repo → **Settings** → **Pages**
2. Under **Source**, select **"GitHub Actions"**
3. Push to `main` — the action will deploy automatically

Your site will be at: `https://YOUR_USERNAME.github.io/YOUR_REPO/`

> **Note for subdirectory hosting**: If deploying to a subdirectory (not root domain), add `basePath` to `next.config.ts`:
> ```ts
> basePath: "/YOUR_REPO",
> assetPrefix: "/YOUR_REPO/",
> ```

---

## Brand Colors Reference

| Token | Hex | Usage |
|-------|-----|-------|
| `viettel-red` | `#E30613` | Primary CTA, accents |
| `viettel-red-dark` | `#B30000` | Hover states |
| `brand-black` | `#0A0A0A` | Body text |
| `brand-dark` | `#1A1A1A` | Dark sections |
| `brand-gray1` | `#4A4A4A` | Secondary text |
| `brand-gray2` | `#7F7F7F` | Muted text |
| `brand-gray3` | `#CCCCCC` | Borders |
| `brand-gray4` | `#F5F5F5` | Background sections |

---

## Accessibility

- WCAG AA compliant color contrast
- Semantic HTML landmarks (`header`, `main`, `section`, `footer`)
- All interactive elements have accessible labels
- Keyboard navigation support
- Focus-visible outlines in Viettel Red
- Screen reader friendly (aria-label, aria-expanded, aria-hidden)
- Reduced motion respect (Framer Motion respects `prefers-reduced-motion`)

---

## Contact

- **Giảng viên**: Nguyễn Viết Dự
- **Phone**: 0966.666.568
- **Email**: Dunv@viettel.com.vn
- **Unit**: Ban Quản lý Dự án — Bộ phận Chuyển đổi số — Viettel Networks
