# VA Instructions – Mini-Course Video & Social Assets

Goal:
Create ALL video + social assets WITHOUT ever copying full scripts into this folder.

---

## Where Scripts Live

Teaching scripts are in the main repo, e.g.:

- `mini-courses/ads/course-01-grief-loss-scripts.md`
- `mini-courses/ads/course-02-fear-anxiety-scripts.md`
- etc.

DO NOT move or duplicate them.

---

## High-Level Flow (One Course at a Time)

1. Check `mini-course-index.md` to find:
   - Script file path
   - Asset folder (e.g. `video-assets/courses/01_shame-guilt/`)

2. Copy templates from `video-assets/templates/` into that course folder:
   - `fliki-scenes.template.md` → `fliki-scenes.md`
   - `youtube-description.template.md` → `youtube-description.md`
   - `social-captions.template.md` → `social-captions.md`
   - `ad-script.template.md` → `ad-script.md`

3. Open the script file (in the main repo) side-by-side with these 4 asset files.

4. Fill in placeholders ONLY:
   - {{COURSE_TITLE}}
   - {{ROOT_CAUSE}}
   - {{CTA_URL}}
   - Bullet points summarizing key ideas
   - Single-sentence hooks and CTAs

5. Use `docs/fliki-master-template.md` and paste ONLY the small pieces needed into `fliki-scenes.md`.

6. When finished, move completed files into a `completed/` subfolder inside that course folder (optional but recommended).

---

## DO / DO NOT

✅ DO:
- Summarize or excerpt small portions
- Keep all long-form content in the original script files
- Maintain brand voice: warm, compassionate, faith-based

❌ DO NOT:
- Paste entire 30-min script into any file here
- Change the original script files
- Invent theology that conflicts with the main content

---

## Output Per Course

For each course (01–18), you should end with:

- `video-assets/courses/0X_*/fliki-scenes.md`
- `video-assets/courses/0X_*/youtube-description.md`
- `video-assets/courses/0X_*/social-captions.md`
- `video-assets/courses/0X_*/ad-script.md`

These are handed to:
- Fliki (for video)
- YouTube (for upload)
- Social media scheduler (for posts)
- Ads team (for short ads)
