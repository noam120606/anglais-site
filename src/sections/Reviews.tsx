type ReviewCardProps = {
  name: string
  role: string
  rating: number
  comment: string
  avatar?: string
}

const reviews: ReviewCardProps[] = [
  {
    name: 'Alex Thompson',
    role: 'Gaming Enthusiast',
    rating: 5,
    comment: 'Yo-kai Watch brings a refreshing twist to the monster-collecting genre with its Japanese folklore charm and everyday adventures.',
    avatar: '🎮'
  },
  {
    name: 'Sarah Chen',
    role: 'Anime Fan',
    rating: 4,
    comment: 'The game successfully blends traditional yokai mythology with modern storytelling. Perfect for fans interested in Japanese culture.',
    avatar: '🎌'
  },
  {
    name: 'Mike Rodriguez',
    role: 'RPG Player',
    rating: 3,
    comment: 'While the collection system is engaging, the battle mechanics feel less strategic compared to similar titles in the genre.',
    avatar: '⚔️'
  }
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={star <= rating ? 'text-blue-400' : 'text-slate-700'}
        >
          {star <= rating ? '★' : '☆'}
        </span>
      ))}
    </div>
  )
}

function ReviewCard({ name, role, rating, comment, avatar }: ReviewCardProps) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg shadow-slate-900/60">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-800 text-2xl">
            {avatar}
          </div>
          <div>
            <p className="text-base font-bold text-slate-50">{name}</p>
            <p className="text-sm text-slate-400">{role}</p>
          </div>
        </div>
        <StarRating rating={rating} />
      </div>
      <p className="text-sm text-slate-300">{comment}</p>
    </div>
  )
}

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="border-b border-slate-800 bg-slate-950 py-16"
    >
      <div className="mx-auto max-w-6xl px-4 space-y-8">
        <div className="flex flex-col gap-3">
          <p className="text-xs uppercase tracking-[0.25em] text-blue-400">Reviews</p>
          <h2 className="text-3xl font-black text-slate-50 sm:text-4xl">What players are saying</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </div>
      </div>
    </section>
  )
}
