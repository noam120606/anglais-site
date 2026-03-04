const spinoffs = [
  {
    title: 'Yo-kai Watch 2',
    detail: 'Yo-kai Watch 2 (2014) continues shortly after the first game. The story begins when the Yo-kai Watch is stolen, and everyone forgets the existence of Yo-kai. With the help of new companions, the hero travels back in time to discover the origin of the Yo-kai Watch and prevent a historic conflict between two Yo-kai factions. This sequel expands the world, introduces many new Yo-kai, and deepens the lore of the series.',
    imgURL: "/img/spinoffs/yokai_watch_2.webp",
  },
  {
    title: 'Yo-kai Watch 3',
    detail: 'Yo-kai Watch 3 (2016) takes place after the events of the second game. The story is divided between two protagonists: Nate in Springdale and Hailey Anne in Japan. The game blends humor, mystery, and adventure, featuring aliens, treasure hunts, and new battle systems. It concludes the original trilogy with a much larger world and a more complex narrative, bringing together characters and themes from the previous games.',
    imgURL: "/img/spinoffs/yokai_watch_3.jpg",
  },
  {
    title: 'Yo-kai Watch 4',
    detail: 'Yo-kai Watch 4 (2019) is the fourth main entry in the series developed by Level-5. It represents a major evolution of the franchise and acts as a soft reboot after the original trilogy. Unlike Yo-kai Watch 1–3, this game features a fully 3D action-based battle system instead of the rotating medal combat system. Players directly control characters and Yo-kai during battles, making combat more dynamic and modern.',
    imgURL: "/img/spinoffs/yokai_watch_4.jpg",
  },
  {
    title: 'Yo-kai Watch Blasters Series',
    detail: 'Yo-kai Watch Blasters: Red Cat Corps & White Dog Squad (2015) transforms the traditional RPG gameplay into an action-based multiplayer game. Players directly control Yo-kai and form a Blasters team to battle large bosses. The sequel Blasters 2: Secret of the Legendary Treasure Bambalaya (2017) adds treasure hunting, dungeon exploration, and new Yo-kai.',
    imgURL: "/img/spinoffs/yokai_watch_blasters.jpg",
  }
]

export default function Spinoff() {
  return (
    <section id="spinoff" className="border-b border-slate-800 bg-slate-950 py-16">
      <div className="mx-auto max-w-6xl px-4 space-y-8">
        <div className="flex flex-col gap-3">
          <p className="text-xs uppercase tracking-[0.25em] text-blue-400">Series Evolution</p>
          <h2 className="text-3xl font-black text-slate-50 sm:text-4xl">Sequels and Spin-offs</h2>
        </div>
        <p className="max-w-3xl text-slate-300">
          The Yo-kai Watch franchise has expanded into multiple sequels and spin-offs, each bringing new mechanics, stories, and gameplay innovations to the beloved series.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {spinoffs.map((spinoff) => (
            <div
              key={spinoff.title}
              className="flex flex-col gap-2 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-lg shadow-slate-900/60"
            >
              <div className="flex items-start gap-3">
                <div className="shrink-0">
                  <img src={spinoff.imgURL} alt={spinoff.title} className="h-28 w-20 rounded-lg object-cover border border-blue-400/50" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-slate-50 mb-2">{spinoff.title}</p>
                  <p className="text-sm text-slate-400 leading-relaxed">{spinoff.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}