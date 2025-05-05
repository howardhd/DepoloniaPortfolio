import { motion } from 'framer-motion';
import { FaGraduationCap, FaSchool, FaUniversity } from 'react-icons/fa';

export default function about() {
  return (
    <motion.section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-black"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-red-600 bg-clip-text text-transparent mb-4">
            Education Journey
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My academic path from elementary to higher education
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-red-600/20 via-red-600 to-red-600/20"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {/* Elementary */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="relative pl-16 md:pl-0 md:flex md:even:flex-row-reverse"
            >
              <div className="md:w-1/2 md:px-8 md:even:pr-16 md:odd:pl-16">
                <div className="flex items-center mb-2">
                  <div className="absolute -left-2 md:left-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full bg-red-600 flex items-center justify-center border-4 border-black z-10">
                    <FaSchool className="text-white text-lg" />
                  </div>
                  <h3 className="text-xl font-bold text-white ml-4 md:ml-0 md:text-center">
                    Elementary School
                  </h3>
                </div>
                <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 shadow-lg shadow-red-900/10">
                  <h4 className="text-red-400 font-medium mb-1">2005 - 2011</h4>
                  <h3 className="text-white text-lg font-semibold mb-2">
                    Sunshine Elementary School
                  </h3>
                  <p className="text-gray-400">
                    Learned foundational skills in mathematics, science, and language arts. 
                    Participated in various extracurricular activities including art and sports.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* High School */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="relative pl-16 md:pl-0 md:flex md:even:flex-row-reverse"
            >
              <div className="md:w-1/2 md:px-8 md:even:pr-16 md:odd:pl-16">
                <div className="flex items-center mb-2">
                  <div className="absolute -left-2 md:left-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full bg-red-600 flex items-center justify-center border-4 border-black z-10">
                    <FaSchool className="text-white text-lg" />
                  </div>
                  <h3 className="text-xl font-bold text-white ml-4 md:ml-0 md:text-center">
                    High School
                  </h3>
                </div>
                <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 shadow-lg shadow-red-900/10">
                  <h4 className="text-red-400 font-medium mb-1">2011 - 2015</h4>
                  <h3 className="text-white text-lg font-semibold mb-2">
                    Metropolitan High School
                  </h3>
                  <p className="text-gray-400">
                    Focused on STEM subjects while developing leadership skills. 
                    Served as class president and participated in science fairs.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Senior High */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="relative pl-16 md:pl-0 md:flex md:even:flex-row-reverse"
            >
              <div className="md:w-1/2 md:px-8 md:even:pr-16 md:odd:pl-16">
                <div className="flex items-center mb-2">
                  <div className="absolute -left-2 md:left-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full bg-red-600 flex items-center justify-center border-4 border-black z-10">
                    <FaGraduationCap className="text-white text-lg" />
                  </div>
                  <h3 className="text-xl font-bold text-white ml-4 md:ml-0 md:text-center">
                    Senior High School
                  </h3>
                </div>
                <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 shadow-lg shadow-red-900/10">
                  <h4 className="text-red-400 font-medium mb-1">2015 - 2017</h4>
                  <h3 className="text-white text-lg font-semibold mb-2">
                    Tech Valley Senior High (STEM Track)
                  </h3>
                  <p className="text-gray-400">
                    Specialized in Science, Technology, Engineering, and Mathematics. 
                    Developed programming skills and participated in robotics competitions.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* College */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              className="relative pl-16 md:pl-0 md:flex md:even:flex-row-reverse"
            >
              <div className="md:w-1/2 md:px-8 md:even:pr-16 md:odd:pl-16">
                <div className="flex items-center mb-2">
                  <div className="absolute -left-2 md:left-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full bg-red-600 flex items-center justify-center border-4 border-black z-10">
                    <FaUniversity className="text-white text-lg" />
                  </div>
                  <h3 className="text-xl font-bold text-white ml-4 md:ml-0 md:text-center">
                    College
                  </h3>
                </div>
                <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 shadow-lg shadow-red-900/10">
                  <h4 className="text-red-400 font-medium mb-1">2017 - 2021</h4>
                  <h3 className="text-white text-lg font-semibold mb-2">
                    University of Technology
                  </h3>
                  <p className="text-gray-400 mb-2">
                    Bachelor of Science in Computer Science
                  </p>
                  <ul className="text-gray-400 list-disc pl-5 space-y-1">
                    <li>Specialized in Frontend Development</li>
                    <li>Graduated with Honors (Magna Cum Laude)</li>
                    <li>President of the Web Development Club</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 bg-gradient-to-r from-black to-gray-900/50 p-8 rounded-xl border border-gray-800"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Beyond Academics</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
              <h4 className="text-red-400 font-medium mb-2">Certifications</h4>
              <ul className="space-y-2 text-gray-400">
                <li>• Advanced Frontend Development (2022)</li>
                <li>• UI/UX Design Specialization (2021)</li>
                <li>• React.js Professional Certification (2020)</li>
              </ul>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
              <h4 className="text-red-400 font-medium mb-2">Achievements</h4>
              <ul className="space-y-2 text-gray-400">
                <li>• Hackathon Winner - TechCrunch 2020</li>
                <li>• Dean's List - All Semesters</li>
                <li>• Best Thesis Award - Computer Science Dept.</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}