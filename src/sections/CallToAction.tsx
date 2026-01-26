export default function CallToAction() {
  return (
    <section
      id="cta"
      className="border-b border-slate-800 bg-gradient-to-r from-amber-500/10 via-amber-400/10 to-slate-900 py-16"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8 rounded-3xl border border-slate-800 bg-slate-950/70 p-8 shadow-2xl shadow-slate-900/50 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.25em] text-amber-200">Pitch deck</p>
            <h2 className="text-3xl font-black text-slate-50 sm:text-4xl">Wrap with a clear call to action</h2>
            <p className="text-slate-300">
              Link to your English slides, a PDF, or a demo video. Replace the copy, hook up the buttons, and you are ready for submission.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-400/30 transition hover:shadow-amber-400/50"
              >
                Download PDF
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-amber-400 hover:text-amber-200"
              >
                Watch trailer
              </a>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-semibold text-slate-100">Mini syllabus</p>
            <ul className="mt-3 space-y-3 text-sm text-slate-300">
              <li>
                <span className="font-semibold text-amber-200">1.</span> Franchise overview in English (2 min)
              </li>
              <li>
                <span className="font-semibold text-amber-200">2.</span> Three yokai spotlights with cultural notes
              </li>
              <li>
                <span className="font-semibold text-amber-200">3.</span> Gameplay loop and audience fit
              </li>
              <li>
                <span className="font-semibold text-amber-200">4.</span> Why it matters for kids media today
              </li>
            </ul>
            <div className="mt-4 rounded-xl border border-amber-300/40 bg-amber-400/10 p-4 text-sm text-amber-100">
              Quick tip: keep the English simple, define each yokai, and show one citation per section.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
