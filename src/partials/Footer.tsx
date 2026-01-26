export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-300">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-100">Yokai Watch Landing</p>
          <p className="text-xs text-slate-400">Built for an English class project.</p>
        </div>
        <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.2em] text-slate-400">
          <span>Exploration</span>
          <span>Friendship</span>
          <span>Mythology</span>
        </div>
      </div>
    </footer>
  )
}
