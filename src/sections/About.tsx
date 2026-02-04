const pillars = [
  {
    title: 'Folklore made friendly',
    text: 'Drawing from centuries of Japanese mythology, Yo-kai Watch reimagines traditional yokai as colorful characters that children can befriend. This modern interpretation bridges cultural heritage with contemporary gaming, making folklore accessible to a global audience.'
  },
  {
    title: 'Slice of life adventure',
    text: 'Beyond the main narrative, Yo-kai Watch emphasizes everyday moments and social interactions within the town of Springdale. This slice-of-life approach differentiates it from traditional RPGs by grounding fantastical elements in relatable, mundane experiences.'
  },
  {
    title: 'Collect, befriend, trade',
    text: 'The collection system encourages players to befriend over 200 Yo-kai through negotiation and battles. Trading mechanics promote social interaction, echoing the success of Pokémon while introducing unique friendship-based gameplay that reflects Japanese cultural values of community and relationships.'
  }
]

export default function About() {
  return (
    <section id="about" className="border-b border-slate-800 bg-slate-950 py-16">
      <div className="mx-auto max-w-6xl px-4 space-y-8">
        <div className="flex flex-col gap-3">
          <p className="text-xs uppercase tracking-[0.25em] text-blue-400">Univers</p>
          <h2 className="text-3xl font-black text-slate-50 sm:text-4xl">What makes Yokai Watch distinct ?</h2>
          <p className="max-w-3xl text-slate-300">
            Developed by Level-5, Yo-kai Watch was released in Japan in July 2013 on the Nintendo 3DS. At a time when Pokémon dominated the monster-collection genre, the game aimed to offer a different approach rooted in Japanese culture and everyday life. The story is set in the seemingly ordinary town of Springdale, where invisible supernatural creatures called Yo-kai secretly influence human behavior, causing minor problems such as laziness, bad luck, or misunderstandings. The player discovers the Yo-kai Watch, a device that makes these beings visible and allows humans to befriend them, revealing a hidden world inspired by traditional Japanese folklore but presented with a modern, comedic tone.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-lg shadow-slate-900/60"
            >
              <p className="text-sm font-semibold text-blue-400">{pillar.title}</p>
              <p className="mt-2 text-sm text-slate-300">{pillar.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
