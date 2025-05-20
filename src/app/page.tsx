import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-between">
      <header className="w-full flex justify-between items-center p-6 border-b">
        <div className="text-2xl font-bold">The 1% University</div>
        <nav className="space-x-6">
          <Link href="#features" className="hover:underline">Features</Link>
          <Link href="/terms" className="hover:underline">Terms</Link>
          <Link href="/privacy" className="hover:underline">Privacy</Link>
          <Link href="#contact" className="hover:underline">Contact</Link>
        </nav>
      </header>
      <section className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">SaaS Platform for Career Development Tracking</h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl">Track your job applications, build your resume, and map your progress toward your next IT role—all in one place.</p>
        <a href="#features" className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition">Get Started</a>
      </section>
      <section id="features" className="w-full max-w-4xl py-16 px-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Features</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow">
            <h3 className="font-semibold text-lg mb-2">Job Application Tracker</h3>
            <p>Easily organize and monitor your job applications and follow-ups.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow">
            <h3 className="font-semibold text-lg mb-2">Resume Builder</h3>
            <p>Create and update your professional resume with our intuitive builder.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow">
            <h3 className="font-semibold text-lg mb-2">Progress Roadmap</h3>
            <p>Visualize your learning and job search journey with clear milestones.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow">
            <h3 className="font-semibold text-lg mb-2">Self-paced IT Skill Modules</h3>
            <p>Access curated resources to build in-demand IT skills at your own pace.</p>
          </div>
        </div>
      </section>
      <section id="contact" className="w-full max-w-2xl py-12 px-4 text-center">
        <h2 className="text-xl font-bold mb-4">Contact</h2>
        <p>For questions or support, email us at <a href="mailto:info@onepercentuniversity.com" className="text-blue-600 underline">info@onepercentuniversity.com</a></p>
      </section>
      <footer className="w-full border-t p-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} The 1% University, LLC. All rights reserved.
      </footer>
    </main>
  );
}
