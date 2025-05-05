import { motion } from 'framer-motion';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        {/* Left-aligned logo */}
        <motion.div 
          className="logo"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="logo-text">PORTFOLIO</span>
        </motion.div>

        {/* Right-aligned navigation */}
        <nav className="nav">
          <motion.ul 
            className="nav-list"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <li><a href="#work">Work</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </motion.ul>
        </nav>
      </div>
    </header>
  );
}