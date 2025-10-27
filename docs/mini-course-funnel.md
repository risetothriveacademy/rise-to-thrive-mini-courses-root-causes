# Mini-Course Funnel Flow (Rise to Thrive)

This is the standard, conversion-optimized flow for every $49 Mini Course, with a built-in upsell to the Foundation Course.

## Flow (Mermaid)

```mermaid
flowchart LR
  A[Ad: FB/IG/YouTube/Google<br/>CTA: Learn More / Start Healing] --> B[Mini Course Landing Page<br/>Same.new / Netlify<br/>Hook + 60–90s preview + 3 bullets + CTA]
  B -->|Click CTA| C[Checkout $49<br/>GHL/Stripe<br/>Product: MiniCourse_<Topic>]
  C -->|Success| D[Thank You / Access Page<br/>Full 9–12 min lesson video]
  D -->|Primary CTA| E[Foundation Course Landing<br/>$197]
  C -.->|Tag: Purchase_Completed + MiniCourse_<Topic>| G[(GHL)]
  B -.->|Click but no pay| F[Abandoned Sequence]
  F -.->|Tags: Checkout_Abandoned| G
  E -.->|Upsell emails + retargeting| G

  subgraph Automations (GHL)
    G1[Email #1 (Immediately): Access link]:::email
    G2[Email #2 (Next morning): Apply tools]:::email
    G3[Email #3 (Day 3): CTA → Foundation]:::email
    G4[Abandoned #1 (Same day)]:::email
    G5[Abandoned #2 (Day 1): value + reminder]:::email
    G6[Abandoned #3 (Day 3): testimonial + close]:::email
  end

  C --> G1
  G1 --> G2 --> G3
  B --> F --> G4 --> G5 --> G6

  classDef email fill:#0097B2,color:#fff,stroke:#00697d,stroke-width:1px;
