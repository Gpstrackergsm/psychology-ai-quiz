import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const BookSuggestion = ({ book, category }) => {
  if (!book) {
    return (
      <div className="bg-white/80 border border-dashed border-slate-200 rounded-2xl p-8 text-center text-slate-500">
        We couldn't find a matching book just yet. Please try again later.
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="grid gap-8 md:grid-cols-[240px_1fr] bg-white rounded-3xl shadow-lg overflow-hidden"
      id="books"
    >
      <div className="h-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center p-6">
        <img
          src={book.coverUrl}
          alt={`Cover of ${book.title}`}
          className="max-h-72 rounded-xl shadow-md"
          loading="lazy"
        />
      </div>
      <div className="p-8 space-y-4">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-semibold">
            {category}
          </p>
          <h3 className="text-3xl font-bold text-slate-900">{book.title}</h3>
          <p className="text-slate-500 text-sm">By {book.author}</p>
        </div>
        <p className="text-slate-600 leading-relaxed">{book.description}</p>
        <div className="flex flex-wrap gap-4 pt-2">
          <a
            href={book.purchaseUrl}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-full bg-primary text-white font-semibold shadow-md hover:bg-primary/90 transition"
          >
            Buy Now
          </a>
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
              `My MindMatch result is ${category}. I'm reading ${book.title}!`
            )}`}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary/10 transition"
          >
            Share on Twitter
          </a>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              book.purchaseUrl
            )}`}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-full border border-slate-200 text-slate-600 hover:bg-slate-100 transition"
          >
            Share on Facebook
          </a>
        </div>
      </div>
    </motion.div>
  );
};

BookSuggestion.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    description: PropTypes.string,
    coverUrl: PropTypes.string,
    purchaseUrl: PropTypes.string
  }),
  category: PropTypes.string.isRequired
};

export default BookSuggestion;
