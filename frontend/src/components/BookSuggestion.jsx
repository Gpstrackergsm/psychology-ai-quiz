import { motion } from 'framer-motion';
import placeholderCover from '../assets/mindmatch-book-cover.svg';

function BookSuggestion({ recommendation }) {
  if (!recommendation) {
    return (
      <div className="rounded-3xl border border-dashed border-slate-200 bg-slate-50 p-6 text-center text-slate-600">
        We couldn't find a perfect match right now. Try retaking the quiz or come back soon for new recommendations.
      </div>
    );
  }

  const hasCover = Boolean(recommendation.coverImage);
  const coverImageSrc = hasCover ? recommendation.coverImage : placeholderCover;
  const coverAltText = hasCover
    ? `Cover of ${recommendation.title}`
    : `Illustrated cover representing a ${recommendation.category?.toLowerCase() ?? 'featured'} read`;
  const ctaLabel = recommendation.ctaLabel ?? 'View book details';

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="grid gap-6 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm md:grid-cols-[180px,1fr] md:p-8"
    >
      <div className="flex items-center justify-center">
        <img
          src={coverImageSrc}
          alt={coverAltText}
          loading="lazy"
          className="max-h-56 rounded-2xl border border-slate-200 object-cover shadow-sm"
        />
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">{recommendation.category} focus</p>
          <h3 className="font-display text-2xl font-bold text-slate-900 md:text-3xl">{recommendation.title}</h3>
          {recommendation.author && <p className="text-sm text-slate-500">by {recommendation.author}</p>}
        </div>
        <p className="text-sm text-slate-600 md:text-base">{recommendation.summary}</p>
        <motion.a
          href={recommendation.purchaseLink}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition hover:bg-primary-dark"
        >
          {ctaLabel}
        </motion.a>
      </div>
    </motion.article>
  );
}

export default BookSuggestion;
