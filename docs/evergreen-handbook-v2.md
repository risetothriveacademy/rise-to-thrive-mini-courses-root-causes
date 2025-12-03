# Evergreen Handbook — Rise to Thrive Mini Courses (v2)

This is the **single source of truth** for building, launching, and maintaining the 15 Mini Courses and future expansions.

---

## 1) Repo Map
- `course-content/` — 15 mini courses (+ `index.md`)
- `landing-pages/template.html` — Same.new block (placeholders)
- `automation-templates/` — email-sequence + tags-and-routes
- `docs/` — flows, checklists, handbooks (this file)
- `README.md` — overview & conventions
- `CHANGELOG.md` — dated changes
- **Releases/Tags** — snapshots (e.g., `v1.0-phase1`)

---

## 2) Standard Funnel (mini course → foundation)
Ad → **Landing (Same.new)** → **Checkout $49 (GHL/Stripe)** → **Thank You/Access (Same.new video)** → **CTA → Foundation $197** → **Emails (GHL)**  
Diagram: `docs/mini-course-funnel.md`

---

## 3) URL Convention
- Landing: `https://<domain>/mini/<topic>`
- Checkout: `https://<checkout-domain>/checkout/<topic>`
- Access: `https://<domain>/mini/<topic>/thank-you`
- Foundation: `https://<domain>/foundation`
> `<topic>` = kebab-case (e.g., `fear-anxiety`, `grief-loss`). Keep identical across all 15.

---

## 4) Same.new Build (5 steps)
1. New page (or duplicate).  
2. Add **HTML/Custom Code** block.  
3. Paste `/landing-pages/template.html`.  
4. Replace placeholders: `{{TOPIC}}`, `{{HOOK}}`, `{{BULLET_1..3}}`, `{{VIDEO_URL}}`, `{{CHECKOUT_URL}}`, `{{FOUNDATION_URL}}`.  
5. Publish → use live URL in ads/emails.

*(If Page Variables are available, keep placeholders and set values in Page Settings → Variables.)*

---

## 5) GoHighLevel — Tags & Automations
**Tags:**  
`MiniCourse_<Topic>`, `Purchase_Completed`, `Checkout_Abandoned`, `Source_Facebook/Instagram/YouTube/Google`, `Foundation_Main`.

**Workflows:**  
- **Purchase:** Stripe success → add `Purchase_Completed` + `MiniCourse_<Topic>` → Email #1–#3 → redirect to Access.  
- **Abandoned:** Click CTA no purchase → add `Checkout_Abandoned` → Abandoned #1–#3.

Templates: `/automation-templates/email-sequence.txt`.

---

## 6) Pixels & Analytics
Install GA4 + ad pixels on Landing, Checkout, Thank You, Foundation.  
Events: `view_item` (landing), `add_to_cart` (CTA click), `purchase` (thank-you), `view_content` (access video). Optional `funnel_step`.

---

## 7) UTM Scheme
`utm_source` = platform • `utm_medium` = ad/cpc/video • `utm_campaign` = `mc_<topic>`  
Keep UTMs consistent across ad sets.

---

## 8) Releases & Backups
- Tag milestones: `v1.0-phase1` (all content), `v1.1` (first videos live), etc.
- Monthly mirror repo (private) + monthly ZIP to Drive/OneDrive.
- Enable 2FA; protect `main` (PR required).

---

## 9) Onboarding Checklist
- [ ] Read this handbook  
- [ ] Review `docs/mini-course-funnel.md`  
- [ ] Build one landing page using `landing-pages/template.html`  
- [ ] Create product/checkout in GHL/Stripe  
- [ ] Wire tags + email workflows  
- [ ] QA links, pixels, UTMs, emails  
- [ ] Clone for next topic

---

## 10) Roadmap
Phase 2: record/publish videos • Phase 3: scale ads/retargeting • Phase 4: SEO + long-form YouTube
