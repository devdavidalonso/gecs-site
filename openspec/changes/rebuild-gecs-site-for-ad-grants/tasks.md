## 1. Setup Project

- [x] 1.1 Initialize a new Angular workspace with standalone components (`ng new gecs-site --standalone`)
- [x] 1.2 Add Tailwind CSS configuration (`npm install -D tailwindcss postcss autoprefixer && npx tailwindcss init -p`)
- [x] 1.3 Configure Angular to use Tailwind (add `@tailwind` directives in `src/styles.css` and update `angular.json`)
- [x] 1.4 Install Angular Signals package if needed (`npm install @angular/signals`)
- [x] 1.5 Set up CI linting and formatting (ESLint + Prettier) for code quality

## 2. Core Layout & Hero Section

- [x] 2.1 Create `AppComponent` as a standalone root component with semantic `<header>`, `<main>`, `<footer>`
- [x] 2.2 Implement `HeroComponent` (standalone) displaying the mission statement above the fold
- [x] 2.3 Apply Tailwind utility classes to achieve a mobile‑first responsive layout for the hero
- [x] 2.4 Use Angular Signals for hero state (e.g., dynamic mission text, optional rotating banners)
- [x] 2.5 Ensure hero section meets WCAG AA contrast and accessibility guidelines

## 3. Navigation

- [x] 3.1 Create `NavComponent` (standalone) with semantic `<nav>` and links: "Sobre", "Nossos Centros", "Atividades", "Contato", "Doações"
- [x] 3.2 Implement Angular router with lazy‑loaded feature modules for each section
- [x] 3.3 Style navigation with Tailwind; ensure mobile hamburger menu works via Signals for toggle state
- [x] 3.4 Add proper `aria-label`s and keyboard navigation support

## 4. Donation Call‑to‑Action

- [x] 4.1 Create `DonateButtonComponent` (standalone) with high‑contrast Tailwind styling
- [x] 4.2 Wire button to a valid HTTPS donation endpoint (`https://doeonline.org/espiritacairbar/doe/amigogecs`)
- [x] 4.3 Add micro‑interaction using Angular Signals for click feedback
- [x] 4.4 Validate that the CTA is not flagged as e‑commerce by Google Ad Grants policies

## 5. Content Pages (Static for MVP)

- [x] 5.1 Create static pages (`AboutComponent`, `CentersComponent`, `ActivitiesComponent`, `ContactComponent`) as standalone components
- [x] 5.2 Populate each page with unique, original copy (no duplicated content)
- [x] 5.3 Apply Tailwind responsive design and semantic HTML5 tags

## 6. Performance & SEO Optimizations

- [x] 6.1 Enable Angular Ivy and production builds with `ng build --configuration production`
- [x] 6.2 Configure lazy loading for heavy routes and images
- [x] 6.3 Add `meta` tags (title, description) per page using Angular's `Title` and `Meta` services
- [x] 6.4 Generate and include a sitemap.xml file
- [ ] 6.5 Verify LCP, CLS, FID metrics with Lighthouse; iterate on Tailwind purge and image optimization

## 7. Accessibility & Testing

- [ ] 7.1 Run a11y audit using Chrome DevTools / `npm run a11y` (integrate `@fission-ai/a11y-debugging` skill)
- [x] 7.2 Write unit tests for each component using Jasmine/Karma (focus on signal state changes)
- [ ] 7.3 Add end‑to‑end Cypress tests for navigation flow and CTA interaction
- [x] 7.4 Ensure all interactive elements have visible focus states and proper ARIA attributes

## 8. Deployment Preparation

- [x] 8.1 Configure Firebase Hosting (or Cloud Run) with automatic HTTPS
- [x] 8.2 Set up environment variables for future Go API endpoints
- [x] 8.3 Create a CI pipeline that builds, tests, and deploys on merge to `main`
- [ ] 8.4 Verify final site passes Google PageSpeed Insights > 90 on mobile

---

## Route Map

- `/` → Home (Hero, Mission, CTA)
- `/sobre-nos` → About (Institucional)
- `/nosso-patrono-espiritual` → Patron (Patrono Espiritual)
- `/transparencia` → Transparência
- `/centros` → Centers (Nossos Centros)
- `/centros/:id` → Center detail (4 centros reais)
- `/atividades` → Activities (Atividades)
- `/atividades/:id` → Activity detail (5 atividades reais)
- `/grade-de-horarios` → Horários (programação semanal)
- `/novidades` → News (Novidades)
- `/contato` → Contact (Fale Conosco)
- `/quero-ajudar` → Help (Doações, PIX e voluntariado)
- `/` (fallback) → 404

## Component Creation Plan

| Component | Purpose | Route | Notes |
|---|---|---|---|
| AppComponent | Root layout with header/footer | – | Holds NavComponent and router-outlet |
| HeroComponent | Mission statement hero section | `/` | Uses Signals for dynamic text |
| NavComponent | Main navigation bar | – | Accessible ARIA, mobile hamburger, dropdowns |
| DonateButtonComponent | Call‑to‑action button | `https://doeonline.org/espiritacairbar/doe/amigogecs` | External HTTPS link, high contrast |
| AboutComponent | Institucional page | `/sobre-nos` | Static content, SEO meta |
| PatronComponent | Patron page | `/nosso-patrono-espiritual` | Static content |
| CentersComponent | Nossos Centros page | `/centros` | List of 4 centers |
| CenterDetailComponent | Center detail | `/centros/:id` | Real center content |
| ActivitiesComponent | Atividades page | `/atividades` | List of 5 activities |
| ActivityDetailComponent | Activity detail | `/atividades/:id` | Real activity content |
| HorariosComponent | Grade de horários | `/grade-de-horarios` | Weekly schedule table |
| NewsComponent | Novidades page | `/novidades` | Blog‑style list |
| TransparenciaComponent | Transparência page | `/transparencia` | Documents download |
| HelpComponent | Quero ajudar page | `/quero-ajudar` | Donations, PIX, volunteering |
| ContactComponent | Fale Conosco page | `/contato` | Form with validation |
| NotFoundComponent | 404 fallback | `**` | – |

---

**Open Questions** (resolve before implementation):
- Which domain/sub‑domain will host the new site? (needed for TLS setup)
- Do we need a fallback static fallback page for bots that cannot run JS?
- Are there any third‑party scripts (analytics, chat) that must be integrated now?

*If any of these affect the design or specs, let me know so we can adjust before proceeding.*
