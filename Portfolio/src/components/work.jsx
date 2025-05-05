// In each section component (Work.jsx, About.jsx etc):
import { motion } from 'framer-motion';

export default function Work() {
  return (
    <motion.section
      id="work"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      {/* Your content */}
    </motion.section>
  );
}