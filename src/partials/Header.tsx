import type React from 'react'
import { useState } from 'react'
import { smoothScrollTo } from '../lib/smoothScroll'

const links = [
  { href: '#hero', label: 'Intro' },
  { href: '#about', label: 'Universe' },
  { href: '#roster', label: 'Yokai' },
  { href: '#gameplay', label: 'Gameplay' },
  { href: '#reviews', label: 'Reviews' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  const handleNav = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault()
    const id = href.replace('#', '')
    smoothScrollTo(id, 500)
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-20 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-blue-600 text-slate-950 font-black">
            <img src="/img/logo-small.png" alt="Yo-Kai Watch Logo" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-blue-400">Yokai Watch</p>
            <p className="text-sm text-slate-200">Fan landing for uni project</p>
          </div>
        </div>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-100 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-blue-400"
              onClick={(event) => handleNav(event, link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-slate-100"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          <span className="text-sm font-semibold">{open ? 'Close' : 'Menu'}</span>
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-800 bg-slate-900/90 px-4 py-3 md:hidden">
          <div className="flex flex-col gap-3 text-sm font-medium text-slate-100">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-2 py-2 transition hover:bg-slate-800 hover:text-blue-400"
                onClick={(event) => handleNav(event, link.href)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#cta"
              className="rounded-md bg-blue-500 px-3 py-2 text-center text-white font-semibold"
              onClick={(event) => handleNav(event, '#cta')}
            >
              Download PDF
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
