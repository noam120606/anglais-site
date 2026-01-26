import type React from 'react'
import { smoothScrollTo } from '../lib/smoothScroll'

export default function Hero() {
	const handleNav = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
		event.preventDefault()
		const id = href.replace('#', '')
		smoothScrollTo(id, 500)
	}

	return (
		<section
			id="hero"
			className="relative overflow-hidden border-b border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
		>
			<div className="mx-auto max-w-6xl px-4 pb-20 pt-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
				<div className="space-y-6">
					<div className="inline-flex items-center gap-2 rounded-full border border-amber-400/50 bg-amber-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-amber-200">
						<span>University project</span>
						<span className="h-1 w-1 rounded-full bg-amber-300" aria-hidden />
						<span>Yokai Watch</span>
					</div>
					<h1 className="text-4xl font-black leading-tight text-slate-50 sm:text-5xl">
						Discover the spirit world with Yokai Watch: lore, gameplay, and a playful hook for new fans.
					</h1>
					<p className="max-w-2xl text-lg text-slate-300">
						A single-page landing to showcase the universe, characters, and why this cross-cultural franchise still charms players. Every block below is ready for you to rewrite in English.
					</p>
					<div className="flex flex-col gap-4 sm:flex-row">
						<a
							href="#cta"
							className="inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-400/30 transition hover:shadow-amber-400/50"
							onClick={(event) => handleNav(event, '#cta')}
						>
							Download pitch PDF
						</a>
						<a
							href="#roster"
							className="inline-flex items-center justify-center rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-amber-400 hover:text-amber-200"
							onClick={(event) => handleNav(event, '#roster')}
						>
							Meet key yokai
						</a>
					</div>
					<div className="grid gap-4 sm:grid-cols-3">
						{["Lore snapshot", "Core mechanics", "Why it matters"].map((item) => (
							<div
								key={item}
								className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-4 shadow-lg shadow-slate-900/60"
							>
								<p className="text-sm font-semibold text-amber-200">{item}</p>
								<p className="text-sm text-slate-400">Swap this with a bullet list of talking points for your presentation.</p>
							</div>
						))}
					</div>
				</div>
				<div className="relative">
					<div className="absolute inset-0 -translate-y-4 translate-x-6 scale-105 rounded-3xl bg-amber-400/10 blur-3xl" aria-hidden />
					<div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 shadow-2xl shadow-slate-900/60">
						<div className="border-b border-slate-800 bg-slate-900/80 px-6 py-4">
							<p className="text-sm font-semibold text-slate-100">Pitch preview</p>
							<p className="text-xs text-slate-400">Rewrite this block with your own thesis sentence in English.</p>
						</div>
						<div className="space-y-4 p-6 text-sm text-slate-300">
							<div className="rounded-xl border border-slate-800 bg-slate-950/80 p-4">
								<p className="text-xs uppercase tracking-[0.2em] text-amber-200">Hook</p>
								<p className="text-slate-100 font-semibold">"A friendly ghost watch that turns daily life into an adventure."</p>
							</div>
							<div className="rounded-xl border border-slate-800 bg-slate-950/80 p-4">
								<p className="text-xs uppercase tracking-[0.2em] text-amber-200">Audience</p>
								<p className="text-slate-100 font-semibold">Kids, nostalgic teens, and casual RPG players curious about Japanese folklore.</p>
							</div>
							<div className="rounded-xl border border-slate-800 bg-slate-950/80 p-4">
								<p className="text-xs uppercase tracking-[0.2em] text-amber-200">Proof</p>
								<ul className="list-disc space-y-2 pl-4 text-slate-300">
									<li>An anime, games, toys, and AR apps to cite in your slides.</li>
									<li>Positive reception for its playful take on myth and friendship.</li>
									<li>Plenty of yokai archetypes to compare with Western myths.</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
