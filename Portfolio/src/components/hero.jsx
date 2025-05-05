import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <motion.section 
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="hero-title"
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Crafting digital<br />
        experiences with<br />
        purpose
      </motion.h1>
      
      <motion.div 
        className="hero-buttons"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <a href="#work" className="btn-primary">View Work</a>
        <a href="#contact" className="btn-outline">Get in Touch</a>
      </motion.div>
    </motion.section>
  );
}