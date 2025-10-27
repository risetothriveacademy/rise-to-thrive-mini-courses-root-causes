# Rise to Thrive — Mini Courses (Root Causes)
Faith-based, trauma-informed 1-day mini courses addressing 15 root causes of mental distress. Each mini course includes teaching content, a simple landing page, ad assets, and a short email automation. All mini courses point to the Foundation Course.

## Structure
/course-content
  01-grief-loss.md
  02-fear-anxiety.md
  03-trauma-shock.md
  04-shame-guilt.md
  05-rejection-abandonment.md
  06-control-perfectionism.md
  07-financial-distress.md
  08-physical-biological.md
  09-relational-conflict.md
  10-identity-purpose.md
  11-spiritual-strongholds.md
  12-generational-patterns.md
  13-isolation-disconnection.md
  14-injustice-betrayal.md
  15-unforgiveness-bitterness.md

/ads-assets
  /video-scripts
  /image-prompts
  /captions

/landing-pages
  template.html

/automation-templates
  email-sequence.txt
  tags-and-routes.md

## Workflow (Option 1 + Clone)
1) Build one mini course end-to-end (Phases 1–4), QA it, then clone.
2) Same.new clones the landing layout; GHL clones the checkout + emails.
3) Stripe Product: “Mini Course – <Topic>” at $49 (sale from $99).
4) All mini courses end with CTA → Foundation Course.

## Conventions
- Bible: NLV (user preference). Cite: Book Chap:Verses (NLV).
- Brand colors (primary): #DB910F (Gold), #0097B2 (Blue-Green), #6C604B (Charcoal), #3B3B3B (Dark Gray), #775237 (Brown).
- Filenames: two-digit numeric prefix + kebab topic.
- GHL Tags: MiniCourse_<Topic>, Source_<Platform>, Funnel_MiniCourse.
- UTM: utm_source, utm_medium, utm_campaign=mc_<topic>.
- Video: 1 lesson, 9–12 min. Instagram cutdown: 60–90s.

## Same.new Notes
- Use /landing-pages/template.html as the content block.
- Replace placeholders: {{TOPIC}}, {{HOOK}}, {{BULLET_1..3}}, {{VIDEO_URL}}, {{CHECKOUT_URL}}, {{FOUNDATION_URL}}.
- Keep structure identical to enable bulk cloning.

## GHL Notes
- Product: Stripe → “Mini Course – <Topic>” $49.
- Workflow: Purchase → Thank You → Redirect to {{VIDEO_URL}} → Tag → Email #1–#3 (automation-templates/email-sequence.txt).
- Segments: Paid vs. Abandoned checkout. Upsell: Foundation Course.

## GA4 / Pixels
- Reuse GA4 from Foundation. Events: view_item, add_to_cart (click CTA), purchase, view_content (video), funnel_step.
