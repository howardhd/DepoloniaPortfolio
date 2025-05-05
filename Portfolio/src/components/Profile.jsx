import { motion } from 'framer-motion';

export default function Profile() {
  return (
    <motion.div 
      className="profile-sidebar"
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div className="profile-image-container">
        {/* Replace with your image */}
        <div className="profile-image-placeholder" />
      </div>
      
      <div className="profile-details">
        <h2>Your Name</h2>
        <p>Frontend Developer</p>
        <div className="profile-links">
          <a href="#">Twitter</a>
          <a href="#">GitHub</a>
          <a href="#">LinkedIn</a>
        </div>
      </div>
    </motion.div>
  );
}