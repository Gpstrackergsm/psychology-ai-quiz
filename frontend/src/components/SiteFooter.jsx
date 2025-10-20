import { motion } from 'framer-motion';
import {
  aboutLinks,
  getHelpLinks,
  magazineCovers,
  siteDisclaimer,
  socialChannels
} from '../data/siteChrome.js';

function SiteFooter() {
  return (
    <div className="space-y-6">
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.4 }}
        className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6 text-slate-300 shadow-xl shadow-black/20 backdrop-blur"
      >
        <p className="text-sm leading-relaxed">{siteDisclaimer}</p>
        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
          {socialChannels.map((channel) => (
            <span key={channel}>{channel}</span>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="space-y-4 text-xs text-slate-400"
      >
        <div className="flex flex-wrap gap-3">
          {aboutLinks.map((link) => (
            <span key={link}>{link}</span>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          {getHelpLinks.map((link) => (
            <span key={link}>{link}</span>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 text-[11px] uppercase tracking-widest text-slate-500">
          {magazineCovers.map((label) => (
            <span key={label}>{label}</span>
          ))}
        </div>
        <p className="text-[11px] text-slate-500">Psychology Test © 2025 Sussex Publishers, LLC</p>
      </motion.section>
    </div>
  );
}

export default SiteFooter;
