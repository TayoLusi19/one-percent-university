import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: 'easeOut' },
  }),
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center font-sans">
      {/* Header */}
      <header className="w-full flex justify-between items-center px-8 py-6 border-b bg-white/80 backdrop-blur-md sticky top-0 z-10">
        <div className="text-2xl font-extrabold tracking-tight text-blue-700">The 1% University</div>
        <nav className="space-x-8 text-base font-medium">
          <Link href="#features" className="hover:text-blue-700 transition-colors">Features</Link>
          <Link href="/terms" className="hover:text-blue-700 transition-colors">Terms</Link>
          <Link href="/privacy" className="hover:text-blue-700 transition-colors">Privacy</Link>
          <Link href="#contact" className="hover:text-blue-700 transition-colors">Contact</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.7 }}
        variants={fadeIn}
        custom={0}
        className="flex-1 flex flex-col items-center justify-center text-center px-4 py-16 md:py-24"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-gray-900">
          SaaS Platform for <span className="text-blue-700">Career Development Tracking</span>
        </h1>
        <p className="text-lg md:text-2xl mb-10 max-w-2xl text-gray-600">
          Track your job applications, build your resume, and map your progress toward your next IT role—all in one place.
        </p>
        <motion.a
          href="#features"
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.97 }}
          className="inline-block bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:bg-blue-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        >
          Get Started
        </motion.a>
      </motion.section>

      {/* Features Section */}
      <motion.section
        id="features"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeIn}
        custom={1}
        className="w-full max-w-5xl py-16 px-4"
      >
        <h2 className="text-3xl font-bold mb-10 text-center text-gray-900">Features</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: 'Job Application Tracker',
              desc: 'Easily organize and monitor your job applications and follow-ups.',
            },
            {
              title: 'Resume Builder',
              desc: 'Create and update your professional resume with our intuitive builder.',
            },
            {
              title: 'Progress Roadmap',
              desc: 'Visualize your learning and job search journey with clear milestones.',
            },
            {
              title: 'Self-paced IT Skill Modules',
              desc: 'Access curated resources to build in-demand IT skills at your own pace.',
            },
          ].map((feature, i) => (
            <motion.div
              key={feature.title}
              className="bg-white rounded-2xl shadow-md p-8 border border-gray-100 hover:shadow-xl transition-shadow flex flex-col gap-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.7, ease: 'easeOut' }}
              whileHover={{ scale: 1.03, boxShadow: '0 8px 32px 0 rgba(34, 139, 230, 0.10)' }}
            >
              <h3 className="font-semibold text-xl mb-1 text-blue-700">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeIn}
        custom={2}
        className="w-full max-w-2xl py-12 px-4 text-center"
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Contact</h2>
        <p className="text-gray-600">For questions or support, email us at <a href="mailto:info@onepercentuniversity.com" className="text-blue-700 underline">info@onepercentuniversity.com</a></p>
      </motion.section>

      {/* Footer */}
      <footer className="w-full border-t p-4 text-center text-sm text-gray-400 mt-8">
        &copy; {new Date().getFullYear()} The 1% University, LLC. All rights reserved.
      </footer>
    </main>
  );
}
