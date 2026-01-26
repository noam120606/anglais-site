const beats = [
  {
    title: 'Spot a yokai',
    detail: 'Describe how the watch reveals hidden spirits. Useful for explaining the main mechanic.'
  },
  {
    title: 'Befriend or battle',
    detail: 'Outline the social approach versus combat. Compare to other monster-collecting games.'
  },
  {
    title: 'Fuse, evolve, trade',
    detail: 'Show how progress works and why collection stays engaging across episodes.'
  },
  {
    title: 'Daily quests',
    detail: 'Mention side stories in town that keep the world feeling alive.'
  }
]

export default function Gameplay() {
  return (
    <section id="gameplay" className="border-b border-slate-800 bg-slate-950 py-16">
      <div className="mx-auto max-w-6xl px-4 space-y-8">
        <div className="flex flex-col gap-3">
          <p className="text-xs uppercase tracking-[0.25em] text-amber-200">Gameplay loop</p>
          <h2 className="text-3xl font-black text-slate-50 sm:text-4xl">Explain how players engage</h2>
          <p className="max-w-3xl text-slate-300">
            Each beat is ready to be swapped with your English notes: mechanics, player motivation, and where you can cite sources.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {beats.map((beat) => (
            <div
              key={beat.title}
              className="flex flex-col gap-2 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-lg shadow-slate-900/60"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-300/50 bg-amber-400/10 text-sm font-bold text-amber-200">
                  
                </span>
                <div>
                  <p className="text-lg font-semibold text-slate-50">{beat.title}</p>
                  <p className="text-sm text-slate-400">{beat.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
