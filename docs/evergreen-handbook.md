# Evergreen Handbook — Rise to Thrive Mini Courses

This is the canonical playbook for building, launching, and maintaining the 15 Mini Courses and future expansions. Treat this as the *single source of truth*.

---

## 1) Repo Map (What lives where)
- `course-content/` — The 15 mini courses (Phase 1 content).  
- `landing-pages/template.html` — Same.new block with placeholders.  
- `automation-templates/` — Email sequence + tags/routes.  
- `docs/` — Ops docs, flowcharts, checklists (this file).  
- `README.md` — High-level intro and conventions.  
- `CHANGELOG.md` — What changed, when.  
- **Tags/Releases** — Snapshot milestones (e.g., `v1.0-phase1`).

---

## 2) Funnel Flow (Summary)
Ad → **Mini Course Landing (Same.new)** → **Checkout $49 (GHL/Stripe)** → **Thank You/Access (Same.new video page)** → **CTA to Foundation Course ($197)** → **Emails (GHL)**

See diagram: `docs/mini-course-funnel.md`.

---

## 3) Page / URL Structure (Naming Convention)
- Landing: `https://<your-domain>/mini/<topic>`
- Checkout: `https://<your-checkout-domain>/checkout/<topic>`
- Thank You/Access: `https://<your-domain>/mini/<topic>/thank-you`
- Foundation Landing: `https://<your-domain>/foundation`

> Keep identical across all 15 topics. Replace `<topic>` with kebab-case (e.g., `fear-anxiety`, `grief-loss`).

---

## 4) Same.new — How to Build a Landing Page (5 steps)
1. Create new page (or duplicate a previous mini course page).  
2. Add **HTML/Custom Code** block.  
3. Paste `/landing-pages/template.html`.  
4. Replace placeholders:
   - `{{TOPIC}}`, `{{HOOK}}`, `{{BULLET_1..3}}` (copy from `course-content/<file>.md`)
   - `{{VIDEO_URL}}` (hosted video URL)
   - `{{CHECKOUT_URL}}` (GHL/Stripe checkout URL)
   - `{{FOUNDATION_URL}}` (Foundation page)
5. Publish → copy live URL → use in ads and emails.

*(If your Same.new supports page variables, keep placeholders and set values in Page Settings → Variables.)*

---

## 5) GoHighLevel — Required Tags & Automations
**Tags**  
- `MiniCourse_<Topic>` (e.g., `MiniCourse_Fear`)  
- `Purchase_Completed`  
- `Checkout_Abandoned`  
- `Source_Facebook` / `Source_Instagram` / `Source_YouTube` / `Source_Google`  
- `Foundation_Main`

**Automations**
- **Purchase workflow:** on successful Stripe payment → tag `Purchase_Completed` + `MiniCourse_<Topic>` → send **Email #1–#3** (see `/automation-templates/email-sequence.txt`) → redirect to **Thank You/Access**.
- **Abandoned workflow:** click CTA but no payment → tag `Checkout_Abandoned` → send **Abandoned #1–#3**.

---

## 6) Pixels & Analytics
- **GA4** and **Meta/Google/YouTube** pixels on Landing, Checkout, Thank You, Foundation.
- **Events:**
  - `view_item` (Landing view)
  - `add_to_cart` (CTA click on Landing)
  - `purchase` (Thank You after Stripe success)
  - `view_content` (Access page video view)
  - Optional: `funnel_step` custom event per step.

---

## 7) UTM Conventions
- `utm_source` = platform (`facebook`, `instagram`, `youtube`, `google`)  
- `utm_medium` = `ad`, `cpc`, `video`  
- `utm_campaign` = `mc_<topic>` (e.g., `mc_fear_anxiety`)  

Keep UTMs identical across ad sets for clean attribution.

---

## 8) Release & Versioning
- Create a release for major milestones:  
  - `v1.0-phase1` — All 15 Phase 1 contents + templates  
  - `v1.1` — First three videos live  
- Attach zipped `/docs` and `/landing-pages` in the Release (optional backup).

---

## 9) Backups (Paranoia-Proof)
- Monthly **mirror clone** to a private backup repo (or GitLab).  
- Monthly **ZIP export** to Google Drive/OneDrive.  
- Enable **2FA**; protect `main` branch (require PR + 1 review).  

---

## 10) Onboarding Checklist (for new helpers)
- [ ] Read this `evergreen-handbook.md`  
- [ ] Review `docs/mini-course-funnel.md` (diagram)  
- [ ] Build one mini course landing using `landing-pages/template.html`  
- [ ] Create product & checkout in GHL/Stripe  
- [ ] Wire tags & automations using `/automation-templates`  
- [ ] QA: links, pixels, UTMs, email triggers  
- [ ] Clone for next topic

---

## 11) Roadmap (next)
- Phase 2: record/publish videos; wire previews on landing pages  
- Phase 3: scale ads; build retargeting audiences  
- Phase 4: SEO posts per root cause; YouTube long-form teaching
