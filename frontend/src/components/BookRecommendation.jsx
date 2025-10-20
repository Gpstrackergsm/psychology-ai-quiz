import { useEffect, useMemo, useState } from 'react';
import BookSuggestion from './BookSuggestion.jsx';
import fallbackCatalog from '../data/bookCatalogFallback.js';

const FALLBACK_LIMIT = 3;

function normalizeCategory(category) {
  return typeof category === 'string' ? category.trim().toLowerCase() : '';
}

function selectFallback(category) {
  if (!fallbackCatalog.length) {
    return null;
  }

  if (!category) {
    return fallbackCatalog[0];
  }

  const normalizedCategory = normalizeCategory(category);
  const directMatch = fallbackCatalog.find(
    (entry) => normalizeCategory(entry.category) === normalizedCategory
  );

  return directMatch ?? fallbackCatalog[0];
}

function BookRecommendation({ category }) {
  const [recommendation, setRecommendation] = useState(null);
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState(null);

  const fallbackRecommendation = useMemo(() => selectFallback(category), [category]);

  useEffect(() => {
    let isActive = true;
    const normalizedCategory = normalizeCategory(category);

    if (!normalizedCategory) {
      setRecommendation(null);
      setStatus('idle');
      setErrorMessage(null);
      return () => {
        isActive = false;
      };
    }

    const controller = new AbortController();

    async function fetchRecommendations() {
      setStatus('loading');
      setErrorMessage(null);

      try {
        const response = await fetch(`/api/books?category=${encodeURIComponent(category)}`, {
          signal: controller.signal
        });

        if (!response.ok) {
          throw new Error(`Unexpected response: ${response.status}`);
        }

        const payload = await response.json();
        const books = Array.isArray(payload?.books)
          ? payload.books
          : Array.isArray(payload)
          ? payload
          : [];

        const topRecommendation = books.find((book) => book && typeof book === 'object');

        if (!topRecommendation) {
          throw new Error('No recommendations returned from the service.');
        }

        if (isActive) {
          setRecommendation(topRecommendation);
          setStatus('succeeded');
        }
      } catch (error) {
        if (isActive) {
          console.error('Failed to fetch book recommendations', error);
          setRecommendation(null);
          setStatus('error');
          setErrorMessage('Showing a curated MindMatch pick while we refresh live suggestions.');
        }
      }
    }

    fetchRecommendations();

    return () => {
      isActive = false;
      controller.abort();
    };
  }, [category]);

  if (status === 'loading' && !recommendation) {
    const fallbacks = fallbackCatalog.slice(0, FALLBACK_LIMIT);
    return (
      <div className="space-y-4 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm md:p-8">
        <div className="h-6 w-48 animate-pulse rounded-full bg-slate-200" />
        <div className="h-4 w-64 animate-pulse rounded-full bg-slate-200" />
        <div className="grid gap-3 sm:grid-cols-3">
          {fallbacks.map((fallback) => (
            <div key={`${fallback.category}-${fallback.title}`} className="space-y-2">
              <div className="h-40 rounded-2xl border border-dashed border-slate-200 bg-slate-50" />
              <div className="h-3 w-32 animate-pulse rounded-full bg-slate-200" />
              <div className="h-3 w-24 animate-pulse rounded-full bg-slate-100" />
            </div>
          ))}
        </div>
        <p className="text-xs text-slate-500">Gathering fresh recommendations…</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <BookSuggestion recommendation={recommendation ?? fallbackRecommendation} />
      {errorMessage && (
        <p className="text-xs font-medium text-amber-600">{errorMessage}</p>
      )}
    </div>
  );
}

export default BookRecommendation;
