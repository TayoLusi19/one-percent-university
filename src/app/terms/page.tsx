export default function Terms() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
      <div className="max-w-2xl text-left space-y-4 text-gray-700">
        <p>Welcome to The 1% University. By using our SaaS platform, you agree to the following terms and conditions. Please read them carefully.</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><b>Use of Service:</b> You agree to use our platform for lawful purposes only and not to misuse or attempt to disrupt our services.</li>
          <li><b>Account Responsibility:</b> You are responsible for maintaining the confidentiality of your account and password.</li>
          <li><b>Intellectual Property:</b> All content, features, and functionality are the exclusive property of The 1% University, LLC.</li>
          <li><b>Termination:</b> We reserve the right to suspend or terminate accounts that violate these terms.</li>
          <li><b>Changes:</b> We may update these terms at any time. Continued use of the service constitutes acceptance of the new terms.</li>
        </ul>
        <p>For questions, contact us at <a href="mailto:tayolusi@onepercentuniversity.io" className="text-blue-700 underline">tayolusi@onepercentuniversity.io</a>.</p>
      </div>
    </main>
  );
} 