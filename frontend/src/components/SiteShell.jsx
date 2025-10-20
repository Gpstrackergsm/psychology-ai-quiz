import { motion } from 'framer-motion';
import SiteFooter from './SiteFooter.jsx';
import SiteHeader from './SiteHeader.jsx';

function SiteShell({ breadcrumbs = [], children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.4 }}
      className="space-y-12 rounded-[2.5rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-primary/10 backdrop-blur-xl md:p-12"
    >
      <SiteHeader breadcrumbs={breadcrumbs} />
      <main className="space-y-12">{children}</main>
      <SiteFooter />
    </motion.div>
  );
}

export default SiteShell;
