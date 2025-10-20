import { motion } from 'framer-motion';
import { navItems, siteBreadcrumbContext } from '../data/siteChrome.js';

function SiteHeader({ breadcrumbs = [], onStartQuiz }) {
  const normalizedBreadcrumbs = breadcrumbs.map((crumb) =>
    typeof crumb === 'string' ? { label: crumb } : crumb
  );

  const StartQuizComponent = onStartQuiz ? 'button' : 'a';
  const startQuizProps = onStartQuiz
    ? { type: 'button', onClick: onStartQuiz }
    : { href: '#start' };

  return (
    <motion.header
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="border-b border-white/10 pb-6"
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <span className="text-2xl font-semibold text-white">Psychology Test</span>
          <nav className="hidden items-center gap-5 text-sm font-medium text-slate-300 md:flex">
            {navItems.map(({ label, href }) => (
              <a key={label} href={href} className="transition hover:text-white">
                {label}
              </a>
            ))}
            <StartQuizComponent
              {...startQuizProps}
              className="rounded-full border border-white/20 bg-white/5 px-4 py-1 text-sm font-semibold text-white transition hover:border-primary hover:bg-primary hover:text-midnight"
            >
              Start quiz
            </StartQuizComponent>
          </nav>
        </div>
        <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-slate-400">
          <span>{siteBreadcrumbContext.region}</span>
          <span className="text-slate-600">|</span>
          <span>{siteBreadcrumbContext.section}</span>
        </div>
      </div>

      {normalizedBreadcrumbs.length > 0 && (
        <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-slate-400">
          {normalizedBreadcrumbs.map((crumb, index) => (
            <span key={crumb.label} className="flex items-center gap-2">
              {index > 0 && <span className="text-slate-600">&gt;</span>}
              <span
                className={
                  index === 0
                    ? 'font-semibold uppercase tracking-widest text-primary-light'
                    : 'text-slate-400'
                }
              >
                {crumb.label}
              </span>
            </span>
          ))}
        </div>
      )}
    </motion.header>
  );
}

export default SiteHeader;
