const beats = [
  {
    title: 'Spot a yokai',
    detail: 'The Yo-kai Watch device reveals invisible spirits hidden in everyday locations. This core mechanic encourages exploration and observation.',
    imgURL: "/img/gameplay/spot_yokai.jpg",
  },
  {
    title: 'Befriend or battle',
    detail: 'Players can choose to befriend Yo-kai through conversation or engage them in strategic battles.',
    imgURL: "/img/gameplay/yokai_watch_heart.jpg",
  },
  {
    title: 'Fuse, evolve, trade',
    detail: 'Yo-kai can evolve, fuse together, or be traded with friends to expand your collection.',
    imgURL: "/img/gameplay/yokai_watch_fusion.webp",
  },
  {
    title: 'Daily quests',
    detail: 'Side quests and town events create a living world beyond the main story.',
    imgURL: "/img/gameplay/yokai_watch_quests.jpg",
  }
]

export default function Gameplay() {
  return (
    <section id="gameplay" className="border-b border-slate-800 bg-slate-950 py-16">
      <div className="mx-auto max-w-6xl px-4 space-y-8">
        <div className="flex flex-col gap-3">
          <p className="text-xs uppercase tracking-[0.25em] text-blue-400">Gameplay loop</p>
          <h2 className="text-3xl font-black text-slate-50 sm:text-4xl">Explain how players engage</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {beats.map((beat) => (
            <div
              key={beat.title}
              className="flex flex-col gap-2 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-lg shadow-slate-900/60"
            >
              <div className="flex items-center gap-3">
                <div className="shrink-0">
                  <img src={beat.imgURL} alt={beat.title} className="h-10 w-10 rounded-full object-cover border border-blue-400/50" />
                </div>
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
