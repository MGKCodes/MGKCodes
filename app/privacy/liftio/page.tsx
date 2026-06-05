import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "Privacy Policy | Liftio" },
  description:
    "Privacy policy for the Liftio iOS app by MGKCodes Ltd. Learn how Liftio handles your data, including account information, workout data, and subscriptions.",
};

export default function LiftioPrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e0e0e0] font-sans pt-16">
      {/* Header */}
      <header className="px-6 py-8 border-b border-[#1e1e1e]">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-white no-underline hover:text-[#aaa] transition-colors"
        >
          MGKCodes <span className="text-[#888] font-normal">Ltd</span>
        </Link>
      </header>

      {/* Main Content */}
      <main className="max-w-[720px] mx-auto px-6 py-16 pb-24">
        {/* App Logo */}
        <div className="mb-6">
          <Image
            src="/images/apps/liftio/liftio-high-resolution-logo.png"
            alt="Liftio logo"
            width={64}
            height={64}
            className="rounded-xl"
          />
        </div>

        {/* Tag */}
        <span className="inline-block text-xs font-semibold tracking-[1.5px] uppercase text-[#666] mb-4">
          Liftio App
        </span>

        {/* Title */}
        <h1 className="text-4xl font-bold tracking-tight text-white mb-2 leading-tight">
          Privacy Policy
        </h1>
        <p className="text-sm text-[#555] mb-12">
          Last updated: March 2026 &middot; Effective: March 2026
        </p>

        {/* Section 1 - Who We Are */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-white mb-3 tracking-tight">
            1. Who We Are
          </h2>
          <p className="text-[#aaa] text-[15px] leading-relaxed mb-3">
            Liftio is operated by <strong className="text-white">MGKCodes Ltd</strong>, a company
            registered in England and Wales.
          </p>
          <p className="text-[#aaa] text-[15px] leading-relaxed">
            For all privacy-related enquiries, including requests to access,
            correct, or delete your data, contact us at{" "}
            <a
              href="mailto:hello@mgkcodes.com"
              className="text-white underline underline-offset-[3px] hover:text-[#aaa] transition-colors"
            >
              hello@mgkcodes.com
            </a>
            .
          </p>
        </section>

        {/* Section 2 - Who This Policy Applies To */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-white mb-3 tracking-tight">
            2. Who This Policy Applies To
          </h2>
          <p className="text-[#aaa] text-[15px] leading-relaxed mb-3">
            This policy applies to all users of the Liftio iOS application.
          </p>
          <div className="bg-[#111] border border-[#1e1e1e] border-l-[3px] border-l-white rounded-sm px-6 py-5">
            <p className="text-[#ccc] text-[15px]">
              <strong className="text-white">Age requirement:</strong> Liftio is
              intended for users aged <strong className="text-white">13 and over</strong>. We do not
              knowingly collect personal data from children under 13. If you
              believe a child under 13 has provided us with personal data, please
              contact us at{" "}
              <a
                href="mailto:hello@mgkcodes.com"
                className="text-white underline underline-offset-[3px] hover:text-[#aaa] transition-colors"
              >
                hello@mgkcodes.com
              </a>{" "}
              and we will delete it promptly.
            </p>
          </div>
        </section>

        {/* Section 3 - What Data We Collect */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-white mb-3 tracking-tight">
            3. What Data We Collect
          </h2>

          <h3 className="text-[15px] font-semibold text-white mb-2 mt-6">
            3.1 Account Data
          </h3>
          <p className="text-[#aaa] text-[15px] leading-relaxed mb-3">
            When you sign in with Apple, we receive:
          </p>
          <ul className="space-y-1 mb-3">
            {[
              "A unique Apple-generated identifier (used as your account ID — this is not your email address)",
              "Your email address, if you choose to share it with us during Apple Sign-In",
              "Your name, if you choose to share it during Apple Sign-In",
            ].map((item) => (
              <li
                key={item}
                className="text-[#aaa] text-[15px] pl-4 relative before:content-['-'] before:absolute before:left-0 before:text-[#444]"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="text-[#aaa] text-[15px] leading-relaxed">
            Apple may provide a relay email address rather than your real one — we
            store whichever address Apple provides.
          </p>

          <h3 className="text-[15px] font-semibold text-white mb-2 mt-6">
            3.2 Profile Data
          </h3>
          <p className="text-[#aaa] text-[15px] leading-relaxed mb-3">
            Data you voluntarily enter in your profile:
          </p>
          <ul className="space-y-1 mb-3">
            {[
              "Display name",
              "Gender",
              "Date of birth",
              "Height",
              "Weight",
              "Profile photo",
            ].map((item) => (
              <li
                key={item}
                className="text-[#aaa] text-[15px] pl-4 relative before:content-['-'] before:absolute before:left-0 before:text-[#444]"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="text-[#aaa] text-[15px] leading-relaxed">
            Height and weight are stored in metric units (cm and kg) on our
            servers, regardless of your in-app display preference.
          </p>

          <h3 className="text-[15px] font-semibold text-white mb-2 mt-6">
            3.3 Workout and Training Data
          </h3>
          <p className="text-[#aaa] text-[15px] leading-relaxed mb-3">
            Data generated through your use of the app:
          </p>
          <ul className="space-y-1">
            {[
              "Workout history (date, duration, name, notes)",
              "Exercise records (exercise name, muscle group, category)",
              "Set data (weight, reps, rest time)",
              "Personal bests and estimated 1-rep maxes",
            ].map((item) => (
              <li
                key={item}
                className="text-[#aaa] text-[15px] pl-4 relative before:content-['-'] before:absolute before:left-0 before:text-[#444]"
              >
                {item}
              </li>
            ))}
          </ul>

          <h3 className="text-[15px] font-semibold text-white mb-2 mt-6">
            3.4 Subscription Data
          </h3>
          <p className="text-[#aaa] text-[15px] leading-relaxed mb-3">
            We use RevenueCat to manage your subscription. RevenueCat receives:
          </p>
          <ul className="space-y-1 mb-3">
            {[
              "Your Apple-generated user identifier (not your name or email)",
              "Your subscription status (active, expired, trial)",
              "Purchase timestamps",
            ].map((item) => (
              <li
                key={item}
                className="text-[#aaa] text-[15px] pl-4 relative before:content-['-'] before:absolute before:left-0 before:text-[#444]"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="text-[#aaa] text-[15px] leading-relaxed">
            We do not receive or store your payment card details. All payment
            processing is handled by Apple.
          </p>

          <h3 className="text-[15px] font-semibold text-white mb-2 mt-6">
            3.5 Technical Data
          </h3>
          <p className="text-[#aaa] text-[15px] leading-relaxed mb-3">
            We may receive basic technical information when you use the app:
          </p>
          <ul className="space-y-1 mb-3">
            {[
              "App version",
              "iOS version",
              "Device type (e.g. iPhone)",
            ].map((item) => (
              <li
                key={item}
                className="text-[#aaa] text-[15px] pl-4 relative before:content-['-'] before:absolute before:left-0 before:text-[#444]"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="text-[#aaa] text-[15px] leading-relaxed">
            We do not use advertising identifiers (IDFA) or track you across
            other apps or websites.
          </p>
        </section>

        {/* Section 4 - Why We Collect This Data */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-white mb-3 tracking-tight">
            4. Why We Collect This Data (Legal Basis)
          </h2>
          <p className="text-[#aaa] text-[15px] leading-relaxed mb-4">
            Under UK GDPR, we process your data on the following legal bases:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-[15px] border-collapse">
              <thead>
                <tr className="border-b border-[#2a2a2a]">
                  <th className="text-left text-white font-semibold py-2 pr-4">Data</th>
                  <th className="text-left text-white font-semibold py-2 pr-4">Legal Basis</th>
                  <th className="text-left text-white font-semibold py-2">Why</th>
                </tr>
              </thead>
              <tbody className="text-[#aaa]">
                <tr className="border-b border-[#1a1a1a]">
                  <td className="py-2 pr-4">Account data</td>
                  <td className="py-2 pr-4 text-white font-medium">Contract</td>
                  <td className="py-2">Required to provide your subscription and sync your data across devices</td>
                </tr>
                <tr className="border-b border-[#1a1a1a]">
                  <td className="py-2 pr-4">Profile data</td>
                  <td className="py-2 pr-4 text-white font-medium">Contract</td>
                  <td className="py-2">Required to personalise your experience and enable cloud backup</td>
                </tr>
                <tr className="border-b border-[#1a1a1a]">
                  <td className="py-2 pr-4">Workout data</td>
                  <td className="py-2 pr-4 text-white font-medium">Contract</td>
                  <td className="py-2">The core service — cloud backup and restore of your training history</td>
                </tr>
                <tr className="border-b border-[#1a1a1a]">
                  <td className="py-2 pr-4">Subscription data</td>
                  <td className="py-2 pr-4 text-white font-medium">Contract</td>
                  <td className="py-2">Required to verify your active subscription and restore purchases</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Technical data</td>
                  <td className="py-2 pr-4 text-white font-medium">Legitimate interests</td>
                  <td className="py-2">Diagnosing crashes and improving app stability</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 5 - How We Use Your Data */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-white mb-3 tracking-tight">
            5. How We Use Your Data
          </h2>
          <p className="text-[#aaa] text-[15px] leading-relaxed mb-3">
            We use your data to:
          </p>
          <ul className="space-y-1 mb-4">
            {[
              "Provide, maintain, and improve the Liftio app",
              "Sync your workout history to the cloud so you can restore it on a new device",
              "Verify your active subscription on each app launch",
              "Enable you to restore purchases if you reinstall the app",
              "Respond to your support requests",
            ].map((item) => (
              <li
                key={item}
                className="text-[#aaa] text-[15px] pl-4 relative before:content-['-'] before:absolute before:left-0 before:text-[#444]"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="bg-[#111] border border-[#1e1e1e] border-l-[3px] border-l-white rounded-sm px-6 py-5">
            <p className="text-[#ccc] text-[15px] mb-2">
              <strong className="text-white">We do not:</strong>
            </p>
            <ul className="space-y-1">
              {[
                "Sell your data to third parties",
                "Use your data for advertising",
                "Share your data with third parties except as described in Section 6",
                "Use your data to train machine learning models",
              ].map((item) => (
                <li
                  key={item}
                  className="text-[#ccc] text-[15px] pl-4 relative before:content-['-'] before:absolute before:left-0 before:text-[#444]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Section 6 - Third-Party Services */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-white mb-3 tracking-tight">
            6. Third-Party Services
          </h2>
          <p className="text-[#aaa] text-[15px] leading-relaxed mb-4">
            We share data with the following third-party processors to deliver the
            service. Each is bound by a data processing agreement with us.
          </p>

          <h3 className="text-[15px] font-semibold text-white mb-2 mt-6">
            Supabase (Cloud Storage)
          </h3>
          <p className="text-[#aaa] text-[15px] leading-relaxed mb-2">
            Supabase stores your account data, profile data, and workout data in
            the cloud, enabling backup and restore across devices.
          </p>
          <ul className="space-y-1 mb-1">
            <li className="text-[#aaa] text-[15px] pl-4 relative before:content-['-'] before:absolute before:left-0 before:text-[#444]">
              <strong className="text-[#ccc]">Data stored:</strong> Account identifier, profile data, workout data
            </li>
            <li className="text-[#aaa] text-[15px] pl-4 relative before:content-['-'] before:absolute before:left-0 before:text-[#444]">
              <strong className="text-[#ccc]">Location:</strong> EU (primary) / US (replicated)
            </li>
            <li className="text-[#aaa] text-[15px] pl-4 relative before:content-['-'] before:absolute before:left-0 before:text-[#444]">
              <strong className="text-[#ccc]">Privacy policy:</strong>{" "}
              <a
                href="https://supabase.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline underline-offset-[3px] hover:text-[#aaa] transition-colors"
              >
                supabase.com/privacy
              </a>
            </li>
          </ul>

          <h3 className="text-[15px] font-semibold text-white mb-2 mt-6">
            RevenueCat (Subscription Management)
          </h3>
          <p className="text-[#aaa] text-[15px] leading-relaxed mb-2">
            RevenueCat validates your subscription status and manages
            entitlements.
          </p>
          <ul className="space-y-1 mb-1">
            <li className="text-[#aaa] text-[15px] pl-4 relative before:content-['-'] before:absolute before:left-0 before:text-[#444]">
              <strong className="text-[#ccc]">Data shared:</strong> Apple-generated user identifier, subscription status, purchase timestamps
            </li>
            <li className="text-[#aaa] text-[15px] pl-4 relative before:content-['-'] before:absolute before:left-0 before:text-[#444]">
              <strong className="text-[#ccc]">Location:</strong> US
            </li>
            <li className="text-[#aaa] text-[15px] pl-4 relative before:content-['-'] before:absolute before:left-0 before:text-[#444]">
              <strong className="text-[#ccc]">Privacy policy:</strong>{" "}
              <a
                href="https://www.revenuecat.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline underline-offset-[3px] hover:text-[#aaa] transition-colors"
              >
                revenuecat.com/privacy
              </a>
            </li>
          </ul>

          <h3 className="text-[15px] font-semibold text-white mb-2 mt-6">
            Apple (Authentication and Payments)
          </h3>
          <p className="text-[#aaa] text-[15px] leading-relaxed mb-2">
            Apple handles Sign in with Apple and all in-app payment processing.
            Apple&apos;s data practices are governed by their own privacy policy.
          </p>
          <ul className="space-y-1">
            <li className="text-[#aaa] text-[15px] pl-4 relative before:content-['-'] before:absolute before:left-0 before:text-[#444]">
              <strong className="text-[#ccc]">Privacy policy:</strong>{" "}
              <a
                href="https://www.apple.com/legal/privacy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline underline-offset-[3px] hover:text-[#aaa] transition-colors"
              >
                apple.com/legal/privacy
              </a>
            </li>
          </ul>
        </section>

        {/* Section 7 - Data Retention */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-white mb-3 tracking-tight">
            7. Data Retention
          </h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-[15px] border-collapse">
              <thead>
                <tr className="border-b border-[#2a2a2a]">
                  <th className="text-left text-white font-semibold py-2 pr-4">Data</th>
                  <th className="text-left text-white font-semibold py-2">Retention period</th>
                </tr>
              </thead>
              <tbody className="text-[#aaa]">
                <tr className="border-b border-[#1a1a1a]">
                  <td className="py-2 pr-4">Account and profile data</td>
                  <td className="py-2">Retained until you delete your account</td>
                </tr>
                <tr className="border-b border-[#1a1a1a]">
                  <td className="py-2 pr-4">Workout and training data</td>
                  <td className="py-2">Retained until you delete your account</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Subscription records</td>
                  <td className="py-2">Retained as required by Apple / RevenueCat for purchase validation</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[#aaa] text-[15px] leading-relaxed mb-3">
            When you delete your account through the app:
          </p>
          <ol className="space-y-1 mb-4 list-decimal list-inside">
            <li className="text-[#aaa] text-[15px]">
              All your data is permanently deleted from Supabase (your account, profile, workouts, exercises, and sets)
            </li>
            <li className="text-[#aaa] text-[15px]">
              Your subscription entitlement is removed from RevenueCat
            </li>
          </ol>
          <div className="bg-[#111] border border-[#1e1e1e] border-l-[3px] border-l-white rounded-sm px-6 py-5 mb-4">
            <p className="text-[#ccc] text-[15px]">
              Cloud data deletion is permanent and irreversible. We cannot recover your
              data after account deletion.
            </p>
          </div>
          <p className="text-[#aaa] text-[15px] leading-relaxed">
            <strong className="text-[#ccc]">Local data:</strong> Workout data stored
            locally on your device (SQLite) is retained on-device until you
            uninstall the app, even after account deletion. This is intentional —
            your data always remains accessible locally regardless of your
            subscription status.
          </p>
        </section>

        {/* Section 8 - Your Rights Under UK GDPR */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-white mb-3 tracking-tight">
            8. Your Rights Under UK GDPR
          </h2>
          <p className="text-[#aaa] text-[15px] leading-relaxed mb-3">
            As a UK resident, you have the following rights regarding your
            personal data:
          </p>
          <ul className="space-y-1 mb-4">
            {[
              { right: "Right of access", desc: "request a copy of the personal data we hold about you" },
              { right: "Right to rectification", desc: "request correction of inaccurate or incomplete data" },
              { right: "Right to erasure", desc: "request deletion of your data (\"right to be forgotten\")" },
              { right: "Right to restrict processing", desc: "request that we limit how we use your data" },
              { right: "Right to data portability", desc: "request your data in a machine-readable format" },
              { right: "Right to object", desc: "object to processing based on legitimate interests" },
            ].map((item) => (
              <li
                key={item.right}
                className="text-[#aaa] text-[15px] pl-4 relative before:content-['-'] before:absolute before:left-0 before:text-[#444]"
              >
                <strong className="text-white">{item.right}</strong> — {item.desc}
              </li>
            ))}
          </ul>
          <p className="text-[#aaa] text-[15px] leading-relaxed mb-4">
            <strong className="text-[#ccc]">To exercise any of these rights</strong>,
            contact us at{" "}
            <a
              href="mailto:hello@mgkcodes.com"
              className="text-white underline underline-offset-[3px] hover:text-[#aaa] transition-colors"
            >
              hello@mgkcodes.com
            </a>
            . We will respond within 30 days.
          </p>
          <p className="text-[#aaa] text-[15px] leading-relaxed">
            You also have the right to lodge a complaint with the{" "}
            <strong className="text-[#ccc]">Information Commissioner&apos;s Office (ICO)</strong>{" "}
            if you believe your data has been handled improperly:{" "}
            <a
              href="https://ico.org.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline underline-offset-[3px] hover:text-[#aaa] transition-colors"
            >
              ico.org.uk
            </a>{" "}
            &middot; 0303 123 1113
          </p>
        </section>

        {/* Section 9 - Data Security */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-white mb-3 tracking-tight">
            9. Data Security
          </h2>
          <p className="text-[#aaa] text-[15px] leading-relaxed mb-3">
            We take reasonable technical and organisational measures to protect
            your data:
          </p>
          <ul className="space-y-1 mb-4">
            {[
              "Data in transit is encrypted using TLS",
              "Supabase uses row-level security (RLS) policies — your data is accessible only to your authenticated account",
              "Authentication tokens are stored securely on-device using platform-standard storage",
              "No passwords are stored — authentication is delegated entirely to Apple",
            ].map((item) => (
              <li
                key={item}
                className="text-[#aaa] text-[15px] pl-4 relative before:content-['-'] before:absolute before:left-0 before:text-[#444]"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="text-[#aaa] text-[15px] leading-relaxed">
            No method of transmission over the internet or electronic storage is
            100% secure. We cannot guarantee absolute security, but we are
            committed to protecting your data using industry-standard practices.
          </p>
        </section>

        {/* Section 10 - International Data Transfers */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-white mb-3 tracking-tight">
            10. International Data Transfers
          </h2>
          <p className="text-[#aaa] text-[15px] leading-relaxed mb-3">
            Your data may be stored and processed in countries outside the UK,
            including the United States (Supabase, RevenueCat). Where this occurs,
            we rely on:
          </p>
          <ul className="space-y-1">
            {[
              "Standard Contractual Clauses (SCCs) as approved by the UK ICO",
              "The data processor's own certifications and compliance frameworks",
            ].map((item) => (
              <li
                key={item}
                className="text-[#aaa] text-[15px] pl-4 relative before:content-['-'] before:absolute before:left-0 before:text-[#444]"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Section 11 - Changes to This Policy */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-white mb-3 tracking-tight">
            11. Changes to This Policy
          </h2>
          <p className="text-[#aaa] text-[15px] leading-relaxed mb-3">
            We may update this policy from time to time. When we do:
          </p>
          <ul className="space-y-1 mb-4">
            {[
              "The \"Last updated\" date at the top of this page will be revised",
              "If changes are material, we will notify you through the app",
            ].map((item) => (
              <li
                key={item}
                className="text-[#aaa] text-[15px] pl-4 relative before:content-['-'] before:absolute before:left-0 before:text-[#444]"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="text-[#aaa] text-[15px] leading-relaxed">
            Continued use of Liftio after changes are posted constitutes
            acceptance of the revised policy.
          </p>
        </section>

        {/* Section 12 - Contact */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-white mb-3 tracking-tight">
            12. Contact
          </h2>
          <p className="text-[#aaa] text-[15px] leading-relaxed mb-3">
            For any privacy questions, data requests, or concerns:
          </p>
          <ul className="space-y-1 mb-6">
            <li className="text-[#aaa] text-[15px] pl-4 relative before:content-['-'] before:absolute before:left-0 before:text-[#444]">
              Company: <strong className="text-[#ccc]">MGKCodes Ltd</strong>
            </li>
            <li className="text-[#aaa] text-[15px] pl-4 relative before:content-['-'] before:absolute before:left-0 before:text-[#444]">
              Email:{" "}
              <a
                href="mailto:hello@mgkcodes.com"
                className="text-white underline underline-offset-[3px] hover:text-[#aaa] transition-colors"
              >
                hello@mgkcodes.com
              </a>
            </li>
            <li className="text-[#aaa] text-[15px] pl-4 relative before:content-['-'] before:absolute before:left-0 before:text-[#444]">
              Website:{" "}
              <a
                href="https://www.mgkcodes.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline underline-offset-[3px] hover:text-[#aaa] transition-colors"
              >
                mgkcodes.com
              </a>
            </li>
          </ul>
          <Link
            href="/support/liftio"
            className="inline-block bg-white text-black text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-[#e0e0e0] transition-colors"
          >
            Visit Support Page
          </Link>
        </section>

        {/* Divider */}
        <hr className="border-none border-t border-[#1a1a1a] my-10" />

        <p className="text-[13px] text-[#444]">
          This privacy policy applies to the Liftio iOS application only.
        </p>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#1a1a1a] px-6 py-8 text-center">
        <p className="text-[13px] text-[#444]">
          2026 MGKCodes Ltd &mdash;{" "}
          <a
            href="https://mgkcodes.com"
            className="text-[#666] hover:text-[#aaa] transition-colors"
          >
            mgkcodes.com
          </a>{" "}
          &mdash;{" "}
          <a
            href="mailto:hello@mgkcodes.com"
            className="text-[#666] hover:text-[#aaa] transition-colors"
          >
            hello@mgkcodes.com
          </a>
        </p>
      </footer>
    </div>
  );
}
