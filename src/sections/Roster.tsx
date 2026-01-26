type CharacterCardProps = {
  name: string
  role: string
  hook: string
  tag: string
  imageUrl?: string
}

const characters: CharacterCardProps[] = [
  {
    name: 'Jibanyan',
    role: 'Mascot cat yokai',
    hook: 'Comic relief with loyalty themes. Swap this for your own English summary.',
    tag: 'Charm tribe',
    imageUrl: '/img/characters/jibanyan.webp'
  },
  {
    name: 'Whisper',
    role: 'Guide and comic mentor',
    hook: 'Explains the watch and yokai etiquette. Note the humor used to teach lore.',
    tag: 'Support',
    imageUrl: '/img/characters/whisper.webp'
  },
  {
    name: 'Komasan',
    role: 'Country-to-city traveler',
    hook: 'Highlights culture shock and curiosity. Good example for a cultural note.',
    tag: 'Fire tribe',
    imageUrl: '/img/characters/komasan.webp'
  }
]

function CharacterCard({ name, role, hook, tag, imageUrl }: CharacterCardProps) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-lg shadow-slate-900/60">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-lg font-bold text-slate-50">{name}</p>
          <p className="text-sm text-slate-400">{role}</p>
        </div>
        <span className="rounded-full border border-amber-300/40 bg-amber-400/10 px-3 py-1 text-xs font-semibold text-amber-200">
          {tag}
        </span>
      </div>
      <p className="text-sm text-slate-300">{hook}</p>
      <div className="mt-auto">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={name}
            className="mt-3 h-32 w-32 rounded-xl object-cover border border-slate-800 bg-slate-800/50"
          />
        ) : (
          <div className="mt-3 flex h-32 w-32 items-center justify-center rounded-xl border border-slate-800 bg-slate-800/50 text-sm text-slate-500">
            Image placeholder
          </div>
        )}
      </div>
    </div>
  )
}

export default function Roster() {
  return (
    <section id="roster" className="border-b border-slate-800 bg-slate-950 py-16">
      <div className="mx-auto max-w-6xl px-4 space-y-8">
        <div className="flex flex-col gap-3">
          <p className="text-xs uppercase tracking-[0.25em] text-amber-200">Characters</p>
          <h2 className="text-3xl font-black text-slate-50 sm:text-4xl">Introduce 3 key yokai</h2>
          <p className="max-w-3xl text-slate-300">
            Keep it short: who they are, why they matter for the story, and what cultural idea each yokai represents. Replace the cards with your own picks.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {characters.map((character) => (
            <CharacterCard key={character.name} {...character} />
          ))}
        </div>
      </div>
    </section>
  )
}
