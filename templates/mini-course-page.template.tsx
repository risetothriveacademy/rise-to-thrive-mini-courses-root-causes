import Link from "next/link";

// TEMPLATE INSTRUCTIONS:
// 1. Replace {{COURSE_TITLE}} with the emotional title
// 2. Replace {{COURSE_SLUG}} with the slug
// 3. Replace {{VIDEO_EMBED_URL}} with the actual video URL
// 4. Replace {{WORKBOOK_URL}} with the workbook PDF URL
// 5. Update NEXT_PUBLIC_STRIPE_URL_{{slug}} in .env

const CHECKOUT_URL = process.env.NEXT_PUBLIC_STRIPE_URL_{{COURSE_SLUG}} || "#";

export const metadata = {
  title: "{{COURSE_TITLE}} — Mini-Course",
  description: "Focused 30-minute lesson + workbook. Faith-based recovery: {{COURSE_TITLE}}.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-[#3B3B3B]">
      <section className="bg-gradient-to-b from-[#0097B2] via-[#0EA5E9] to-[#10B981]">
        <div className="mx-auto max-w-6xl px-6 py-14 text-white">
          <h1 className="text-3xl md:text-4xl font-extrabold">{{COURSE_TITLE}}</h1>
          <p className="mt-2 opacity-90 max-w-2xl">
            30-minute cinematic lesson with a practical workbook. Part of the Rise To Thrive Mini-Course Library.
          </p>
          <div className="mt-6">
            <Link href="#details" className="inline-flex rounded-2xl bg-white/10 px-5 py-2 font-semibold ring-1 ring-white/30 hover:bg-white/15">
              See Details
            </Link>
          </div>
        </div>
      </section>

      <section id="details" className="mx-auto max-w-6xl px-6 py-10 grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold">Lesson Video</h2>
            <div className="mt-3 aspect-video w-full rounded-xl overflow-hidden">
              {/* Replace with actual video embed */}
              <iframe
                src="{{VIDEO_EMBED_URL}}"
                className="w-full h-full"
                allowFullScreen
                title="{{COURSE_TITLE}}"
              />
            </div>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold">Workbook</h2>
            <p className="mt-2 text-sm text-gray-700">
              Download or open the fillable workbook to apply the teaching to your story.
            </p>
            <div className="mt-4">
              <Link
                href="{{WORKBOOK_URL}}"
                target="_blank"
                className="inline-flex items-center justify-center rounded-xl bg-[#0097B2] px-5 py-2 text-sm font-semibold text-white hover:bg-[#057a8f]"
              >
                Download Workbook (PDF)
              </Link>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold">Enroll</h2>
            <p className="mt-2 text-sm text-gray-700">
              Instant access after purchase. Your receipt and access email will arrive within minutes.
            </p>
            <div className="mt-4">
              <Link
                href={CHECKOUT_URL}
                className="inline-flex w-full items-center justify-center rounded-xl bg-[#DB910F] px-5 py-2 text-sm font-semibold text-white hover:bg-[#c4810d]"
              >
                Enroll Now — $49
              </Link>
            </div>
            <p className="mt-2 text-xs text-gray-500">Secure checkout via Stripe.</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold">Continue Your Healing</h2>
            <ul className="mt-2 text-sm text-gray-700 list-disc pl-5 space-y-1">
              <li>
                <a
                  href="https://risetothriveacademy.com/foundation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0097B2] underline hover:no-underline"
                >
                  Start the 5‑Day Foundation Course
                </a>
              </li>
              <li>
                <Link href="/minicourses" className="text-[#0097B2] underline hover:no-underline">
                  View All Mini-Courses
                </Link>
              </li>
              <li>
                <Link href="/" className="text-[#0097B2] underline hover:no-underline">
                  All Programs
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
