export default function Privacy() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <div className="max-w-2xl text-left space-y-4 text-gray-700">
        <p>Your privacy is important to us. This policy explains how we collect, use, and protect your information when you use The 1% University platform.</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><b>Information Collection:</b> We collect only the information necessary to provide and improve our services.</li>
          <li><b>Use of Information:</b> Your data is used solely for providing our SaaS features and communicating with you.</li>
          <li><b>Data Security:</b> We implement industry-standard security measures to protect your information.</li>
          <li><b>Third Parties:</b> We do not sell or share your personal information with third parties except as required by law.</li>
          <li><b>Changes:</b> We may update this policy. Continued use of the service means you accept the revised policy.</li>
        </ul>
        <p>For privacy questions, contact us at <a href="mailto:tayolusi@onepercentuniversity.io" className="text-blue-700 underline">tayolusi@onepercentuniversity.io</a>.</p>
      </div>
    </main>
  );
} 