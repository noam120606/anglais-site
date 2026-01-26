const pillars = [
  {
    title: 'Folklore made friendly',
    text: 'Summarize how yokai are reimagined as allies and rivals. Replace this with your academic angle in English.'
  },
  {
    title: 'Slice of life adventure',
    text: 'Explain the mix of daily life and fantasy. Mention why this tone works for younger audiences.'
  },
  {
    title: 'Collect, befriend, trade',
    text: 'Talk about collection mechanics and social play. Point to parallels with other creature-collectors.'
  }
]

export default function About() {
  return (
    <section id="about" className="border-b border-slate-800 bg-slate-950 py-16">
      <div className="mx-auto max-w-6xl px-4 space-y-8">
        <div className="flex flex-col gap-3">
          <p className="text-xs uppercase tracking-[0.25em] text-amber-200">Context</p>
          <h2 className="text-3xl font-black text-slate-50 sm:text-4xl">What makes Yokai Watch distinct?</h2>
          <p className="max-w-3xl text-slate-300">
            Use this area to outline the franchise in English: origins, themes, and why it differs from other RPGs. Keep the tone concise and factual for your university pitch.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-lg shadow-slate-900/60"
            >
              <p className="text-sm font-semibold text-amber-200">{pillar.title}</p>
              <p className="mt-2 text-sm text-slate-300">{pillar.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
