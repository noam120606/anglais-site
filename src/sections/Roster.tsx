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
    hook: 'Jibanyan is a charming red cat yokai who adores chocolate bars and bravely fights to prove he\'s not just an ordinary cat.',
    tag: 'Charming Tribe',
    imageUrl: '/img/characters/jibanyan.webp'
  },
  {
    name: 'Whisper',
    role: 'Guide and comic mentor',
    hook: 'Freaky Yokai, Explains the watch and yokai etiquette. Note the humor used to teach lore.',
    tag: 'Slippery Tribe',
    imageUrl: '/img/characters/whisper.webp'
  },
  {
    name: 'Komasan',
    role: 'Country-to-city traveler',
    hook: 'Highlights culture shock and curiosity. Good example for a cultural note.',
    tag: 'Charming Tribe',
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
        <span className="rounded-full border border-blue-400/40 bg-blue-400/10 px-3 py-1 text-xs font-semibold text-blue-300">
          {tag}
        </span>
      </div>
      <p className="text-sm text-slate-300">{hook}</p>
      <div className="mt-auto flex justify-center">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={name}
            className="mt-3 h-48 w-full rounded-xl object-contain border border-slate-800 bg-slate-800/50"
          />
        ) : (
          <div className="mt-3 flex h-48 w-full items-center justify-center rounded-xl border border-slate-800 bg-slate-800/50 text-sm text-slate-500">
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
          <p className="text-xs uppercase tracking-[0.25em] text-blue-400">Characters</p>
          <h2 className="text-3xl font-black text-slate-50 sm:text-4xl">Introduce 2 main characters</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <CharacterCard key="nate" {...{
            name: 'Nate',
            role: 'The Protagonist',
            hook: 'Nate Adams is a curious boy who solves problems with the help of Yo-kai.',
            tag: 'Player',
            imageUrl: '/img/characters/nate.webp'
          }} />
          <CharacterCard key="katie" {...{
            name: 'Katie',
            role: 'The Protagonist',
            hook: 'Katie Forester is a kind and brave girl who uses her Yo-kai Watch to help others.',
            tag: 'Player',
            imageUrl: '/img/characters/katie.webp'
          }} />
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl font-black text-slate-50 sm:text-4xl">Introduce 3 key yokai</h2>
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
