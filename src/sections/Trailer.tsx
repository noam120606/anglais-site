export default function Trailer() {
  return (
    <section id="trailer" className="border-b border-slate-800 bg-slate-950 py-16">
      <div className="mx-auto max-w-6xl px-4 space-y-8">
        <div className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-[0.25em] text-blue-400">Trailer</p>
            <h2 className="text-3xl font-black text-slate-50 sm:text-4xl">Watch the game Trailer</h2>
        </div>
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
            {/* YouTube embed iframe - Remplace YOUR_VIDEO_ID par l'ID de ta vidéo YouTube */}
            <iframe
                src="https://www.youtube.com/embed/PIfR5gWRlqo"
                title="Official Trailer"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
      </div>
    </section>
  );
};