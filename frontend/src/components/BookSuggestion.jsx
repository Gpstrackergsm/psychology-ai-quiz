import { motion } from 'framer-motion';

function BookSuggestion({ recommendation }) {
  if (!recommendation) {
    return (
      <div className="rounded-3xl border border-dashed border-slate-200 bg-slate-50 p-6 text-center text-slate-600">
        We couldn't find a perfect match right now. Try retaking the quiz or come back soon for new recommendations.
      </div>
    );
  }

  const hasCoverImage = Boolean(recommendation.coverImage);
  const summaryText =
    recommendation.summary ||
    `Explore "${recommendation.title}" to support your ${recommendation.category?.toLowerCase() ?? 'well-being'} journey.`;

  const hasPurchaseLink = typeof recommendation.purchaseLink === 'string' && recommendation.purchaseLink.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="grid gap-6 rounded-3xl bg-white p-6 shadow-lg md:grid-cols-[220px,1fr] md:p-8"
    >
      <div className="flex items-center justify-center">
        {hasCoverImage ? (
          <img
            src={recommendation.coverImage}
            alt={`Cover of ${recommendation.title}`}
            className="max-h-60 rounded-2xl shadow-md"
          />
        ) : (
          <div className="flex h-48 w-48 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 via-white to-accent/20 text-5xl font-bold text-primary-dark shadow-inner">
            {recommendation.title.charAt(0)}
          </div>
        )}
      </div>
      <div className="space-y-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">{recommendation.category} Focus</p>
          <h3 className="font-display text-3xl font-bold text-slate-900">{recommendation.title}</h3>
          {recommendation.author && <p className="text-slate-500">by {recommendation.author}</p>}
        </div>
        <p className="text-base text-slate-600">{summaryText}</p>
        {hasPurchaseLink ? (
          <motion.a
            href={recommendation.purchaseLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 font-semibold text-white shadow-lg shadow-accent/40 transition hover:bg-orange-500"
          >
            Buy Now
          </motion.a>
        ) : (
          <p className="text-sm text-slate-500">
            Visit <a className="font-semibold text-primary hover:underline" href="https://www.psychology.com.co/" target="_blank" rel="noopener noreferrer">psychology.com.co</a> to explore this title.
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default BookSuggestion;
