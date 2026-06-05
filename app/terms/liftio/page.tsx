import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "Terms of Service | Liftio" },
  description:
    "Terms of Service for the Liftio iOS app by MGKCodes Ltd. Covers subscriptions, data ownership, acceptable use, and more.",
};

export default function LiftioTermsPage() {
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
          Terms of Service
        </h1>
        <p className="text-sm text-[#555] mb-12">
          Last updated: March 2026 &middot; Effective: March 2026
        </p>

        {/* Section 1 - Agreement */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-white mb-3 tracking-tight">
            1. Agreement to These Terms
          </h2>
          <p className="text-[#aaa] text-[15px] leading-relaxed mb-3">
            By downloading, installing, or using the Liftio application
            (&quot;the App&quot;), you agree to be bound by these Terms of
            Service (&quot;Terms&quot;). If you do not agree to these Terms, do
            not use the App.
          </p>
          <p className="text-[#aaa] text-[15px] leading-relaxed mb-3">
            These Terms form a legally binding agreement between you and{" "}
            <strong className="text-white">MGKCodes Ltd</strong>, a company
            registered in England and Wales (&quot;we&quot;, &quot;us&quot;,
            &quot;our&quot;).
          </p>
          <p className="text-[#aaa] text-[15px] leading-relaxed">
            Contact:{" "}
            <a
              href="mailto:hello@mgkcodes.com"
              className="text-white underline underline-offset-[3px] hover:text-[#aaa] transition-colors"
            >
              hello@mgkcodes.com
            </a>{" "}
            &middot;{" "}
            <a
              href="https://www.mgkcodes.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline underline-offset-[3px] hover:text-[#aaa] transition-colors"
            >
              mgkcodes.com
            </a>
          </p>
        </section>

        {/* Section 2 - Eligibility */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-white mb-3 tracking-tight">
            2. Eligibility
          </h2>
          <p className="text-[#aaa] text-[15px] leading-relaxed mb-3">
            You must be at least{" "}
            <strong className="text-white">13 years old</strong> to use Liftio.
            By using the App, you confirm that you meet this age requirement.
          </p>
          <p className="text-[#aaa] text-[15px] leading-relaxed">
            If you are under 18, you confirm that you have the consent of a
            parent or legal guardian to use the App and agree to these Terms on
            your behalf.
          </p>
        </section>

        {/* Section 3 - Description of the Service */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-white mb-3 tracking-tight">
            3. Description of the Service
          </h2>
          <p className="text-[#aaa] text-[15px] leading-relaxed mb-3">
            Liftio is a gym workout tracking application. The App allows you to:
          </p>
          <ul className="space-y-1 mb-4">
            {[
              "Log workouts, exercises, and sets",
              "Track progress over time with charts and personal bests",
              "Create and manage custom workout templates",
              "Use a rest timer during workouts",
              "Back up your data to the cloud and restore it on a new device",
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
            All workout data is stored locally on your device. Cloud backup is
            available when you sign in with an Apple account.
          </p>
        </section>

        {/* Section 4 - Account and Authentication */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-white mb-3 tracking-tight">
            4. Account and Authentication
          </h2>

          <h3 className="text-[15px] font-semibold text-white mb-2 mt-6">
            4.1 Apple Sign-In
          </h3>
          <p className="text-[#aaa] text-[15px] leading-relaxed">
            Liftio uses Sign in with Apple as its authentication method. We do
            not create or manage passwords. Your account is tied to your Apple
            ID.
          </p>

          <h3 className="text-[15px] font-semibold text-white mb-2 mt-6">
            4.2 Account Security
          </h3>
          <p className="text-[#aaa] text-[15px] leading-relaxed">
            You are responsible for maintaining the security of your Apple ID and
            any device on which Liftio is installed. We are not liable for any
            loss or damage arising from unauthorised access to your account
            through your Apple ID.
          </p>

          <h3 className="text-[15px] font-semibold text-white mb-2 mt-6">
            4.3 One Account Per User
          </h3>
          <p className="text-[#aaa] text-[15px] leading-relaxed">
            Each Liftio account is intended for use by a single individual.
            Sharing account credentials or subscription access is not permitted.
          </p>
        </section>

        {/* Section 5 - Subscriptions and Billing */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-white mb-3 tracking-tight">
            5. Subscriptions and Billing
          </h2>

          <h3 className="text-[15px] font-semibold text-white mb-2 mt-6">
            5.1 Subscription Required
          </h3>
          <p className="text-[#aaa] text-[15px] leading-relaxed">
            Liftio requires an active subscription to use the App. Access to the
            App is granted only while your subscription is active.
          </p>

          <h3 className="text-[15px] font-semibold text-white mb-2 mt-6">
            5.2 Subscription Plans
          </h3>
          <p className="text-[#aaa] text-[15px] leading-relaxed mb-3">
            We offer the following plans:
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-[15px] border-collapse">
              <thead>
                <tr className="border-b border-[#2a2a2a]">
                  <th className="text-left text-white font-semibold py-2 pr-4">Plan</th>
                  <th className="text-left text-white font-semibold py-2 pr-4">Price</th>
                  <th className="text-left text-white font-semibold py-2">Billing cycle</th>
                </tr>
              </thead>
              <tbody className="text-[#aaa]">
                <tr className="border-b border-[#1a1a1a]">
                  <td className="py-2 pr-4">Monthly</td>
                  <td className="py-2 pr-4">£1.99</td>
                  <td className="py-2">Billed monthly</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Annual</td>
                  <td className="py-2 pr-4">£19.99</td>
                  <td className="py-2">Billed annually</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[#aaa] text-[15px] leading-relaxed">
            Prices are in GBP. The actual price charged may vary by region and
            currency, as determined by Apple. The price displayed in the App at
            the time of purchase is the price you will be charged.
          </p>

          <h3 className="text-[15px] font-semibold text-white mb-2 mt-6">
            5.3 Free Trial
          </h3>
          <p className="text-[#aaa] text-[15px] leading-relaxed mb-3">
            New subscribers to the monthly plan receive a{" "}
            <strong className="text-white">1-month free trial</strong>. During
            the free trial:
          </p>
          <ul className="space-y-1">
            {[
              "You have full access to all features of the App",
              "No payment is taken during the trial period",
              "Your subscription will automatically convert to a paid subscription at the end of the trial unless you cancel at least 24 hours before the trial ends",
              "The free trial is available once per Apple ID and cannot be reused",
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
            5.4 Auto-Renewal
          </h3>
          <p className="text-[#aaa] text-[15px] leading-relaxed">
            All subscriptions{" "}
            <strong className="text-white">auto-renew</strong> at the end of
            each billing period unless you cancel. Renewal is charged within 24
            hours before the end of the current period at the same price as the
            original subscription.
          </p>

          <h3 className="text-[15px] font-semibold text-white mb-2 mt-6">
            5.5 How to Cancel
          </h3>
          <p className="text-[#aaa] text-[15px] leading-relaxed mb-3">
            You can cancel your subscription at any time through your Apple ID
            settings:
          </p>
          <ol className="space-y-1 mb-3 list-decimal list-inside">
            <li className="text-[#aaa] text-[15px]">
              Open the <strong className="text-[#ccc]">Settings</strong> app on your iPhone
            </li>
            <li className="text-[#aaa] text-[15px]">
              Tap your name at the top
            </li>
            <li className="text-[#aaa] text-[15px]">
              Tap <strong className="text-[#ccc]">Subscriptions</strong>
            </li>
            <li className="text-[#aaa] text-[15px]">
              Select <strong className="text-[#ccc]">Liftio</strong>
            </li>
            <li className="text-[#aaa] text-[15px]">
              Tap <strong className="text-[#ccc]">Cancel Subscription</strong>
            </li>
          </ol>
          <p className="text-[#aaa] text-[15px] leading-relaxed mb-3">
            Cancellation takes effect at the end of the current billing period.
            You will retain access to the App until that date.
          </p>
          <p className="text-[#aaa] text-[15px] leading-relaxed">
            We cannot cancel subscriptions on your behalf. All subscription
            management is handled by Apple.
          </p>

          <h3 className="text-[15px] font-semibold text-white mb-2 mt-6">
            5.6 Refunds
          </h3>
          <p className="text-[#aaa] text-[15px] leading-relaxed mb-3">
            All purchases are processed by Apple. Refund requests must be made
            directly to Apple:
          </p>
          <ul className="space-y-1 mb-3">
            <li className="text-[#aaa] text-[15px] pl-4 relative before:content-['-'] before:absolute before:left-0 before:text-[#444]">
              Visit{" "}
              <a
                href="https://reportaproblem.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline underline-offset-[3px] hover:text-[#aaa] transition-colors"
              >
                reportaproblem.apple.com
              </a>
            </li>
            <li className="text-[#aaa] text-[15px] pl-4 relative before:content-['-'] before:absolute before:left-0 before:text-[#444]">
              Or contact Apple Support
            </li>
          </ul>
          <p className="text-[#aaa] text-[15px] leading-relaxed">
            We do not have access to your payment information and cannot issue
            refunds directly.
          </p>

          <h3 className="text-[15px] font-semibold text-white mb-2 mt-6">
            5.7 Price Changes
          </h3>
          <p className="text-[#aaa] text-[15px] leading-relaxed mb-3">
            We may change subscription prices from time to time. If we increase
            the price of your subscription:
          </p>
          <ul className="space-y-1">
            {[
              "Apple will notify you in advance",
              "You will need to agree to the new price before renewal",
              "If you do not agree, your subscription will not renew",
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
            5.8 What Happens When Your Subscription Ends
          </h3>
          <p className="text-[#aaa] text-[15px] leading-relaxed mb-3">
            If your subscription expires or is cancelled:
          </p>
          <ul className="space-y-1">
            {[
              "You will no longer be able to access the App's main features",
              "You will be shown a screen where you can renew, restore purchases, or delete your account",
              "Your local workout data stored on your device is not deleted and remains accessible if you resubscribe",
              "Your cloud backup data is retained for a reasonable period to allow resubscription",
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

        {/* Section 6 - Your Data */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-white mb-3 tracking-tight">
            6. Your Data
          </h2>

          <h3 className="text-[15px] font-semibold text-white mb-2 mt-6">
            6.1 Local Data
          </h3>
          <p className="text-[#aaa] text-[15px] leading-relaxed">
            All workout data is stored locally on your device in a SQLite
            database. This data belongs to you and remains on your device
            regardless of your subscription status or account state.
          </p>

          <h3 className="text-[15px] font-semibold text-white mb-2 mt-6">
            6.2 Cloud Data
          </h3>
          <p className="text-[#aaa] text-[15px] leading-relaxed">
            If you sign in with Apple, your data is backed up to our cloud
            servers (Supabase). Cloud backup is provided as a convenience for
            data recovery and device migration. You can export your data at any
            time via the in-app CSV export feature.
          </p>

          <h3 className="text-[15px] font-semibold text-white mb-2 mt-6">
            6.3 Data Ownership
          </h3>
          <p className="text-[#aaa] text-[15px] leading-relaxed">
            You retain ownership of all workout data, profile data, and content
            you create within the App. By using the cloud backup feature, you
            grant us a limited licence to store and transmit your data solely for
            the purpose of providing the backup and restore service.
          </p>

          <h3 className="text-[15px] font-semibold text-white mb-2 mt-6">
            6.4 Data Deletion
          </h3>
          <p className="text-[#aaa] text-[15px] leading-relaxed">
            You can delete your account and all associated cloud data at any time
            through the App. Account deletion is permanent and irreversible. See
            our{" "}
            <Link
              href="/privacy/liftio"
              className="text-white underline underline-offset-[3px] hover:text-[#aaa] transition-colors"
            >
              Privacy Policy
            </Link>{" "}
            for full details on data retention and deletion.
          </p>
        </section>

        {/* Section 7 - Acceptable Use */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-white mb-3 tracking-tight">
            7. Acceptable Use
          </h2>
          <p className="text-[#aaa] text-[15px] leading-relaxed mb-3">
            You agree not to:
          </p>
          <ul className="space-y-1 mb-4">
            {[
              "Reverse-engineer, decompile, or disassemble the App",
              "Attempt to bypass the subscription requirement or any security measures",
              "Use the App for any unlawful purpose",
              "Redistribute, sublicense, or resell the App or any part of it",
              "Interfere with or disrupt the App's servers or infrastructure",
              "Create automated accounts or use bots to interact with the App",
              "Impersonate another person or misrepresent your identity",
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
            We reserve the right to suspend or terminate your account if you
            breach these terms.
          </p>
        </section>

        {/* Section 8 - Intellectual Property */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-white mb-3 tracking-tight">
            8. Intellectual Property
          </h2>

          <h3 className="text-[15px] font-semibold text-white mb-2 mt-6">
            8.1 The App
          </h3>
          <p className="text-[#aaa] text-[15px] leading-relaxed">
            Liftio, including its design, code, branding, and user interface, is
            owned by MGKCodes Ltd. All rights are reserved.
          </p>

          <h3 className="text-[15px] font-semibold text-white mb-2 mt-6">
            8.2 Exercise Illustrations
          </h3>
          <p className="text-[#aaa] text-[15px] leading-relaxed">
            Exercise illustrations used in the App are sourced from{" "}
            <strong className="text-[#ccc]">Everkinetic</strong> and are used
            under the{" "}
            <strong className="text-[#ccc]">
              Creative Commons Attribution-ShareAlike 3.0
            </strong>{" "}
            licence (CC BY-SA 3.0). Attribution is provided in the App&apos;s
            settings screen.
          </p>

          <h3 className="text-[15px] font-semibold text-white mb-2 mt-6">
            8.3 Your Content
          </h3>
          <p className="text-[#aaa] text-[15px] leading-relaxed">
            You retain ownership of any content you create within the App
            (workout names, notes, custom exercises). We do not claim ownership
            of your content.
          </p>
        </section>

        {/* Section 9 - Health and Fitness Disclaimer */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-white mb-3 tracking-tight">
            9. Health and Fitness Disclaimer
          </h2>
          <div className="bg-[#111] border border-[#1e1e1e] border-l-[3px] border-l-white rounded-sm px-6 py-5 mb-4">
            <p className="text-[#ccc] text-[15px]">
              <strong className="text-white">
                Liftio is not a medical device and does not provide medical
                advice.
              </strong>
            </p>
          </div>
          <ul className="space-y-2">
            {[
              "The App is a workout tracking tool only. It does not diagnose, treat, cure, or prevent any disease or medical condition.",
              "Always consult a qualified healthcare professional before beginning any exercise programme, especially if you have a pre-existing medical condition, are pregnant, or have not exercised for an extended period.",
              "You are solely responsible for your own health and safety while using the App. We are not liable for any injury, illness, or health issue that arises from your use of the App or any exercise programme you follow.",
              "Personal best calculations, estimated 1-rep max values, and any other metrics provided by the App are estimates only and should not be used to determine safe lifting limits.",
              "If you experience pain, dizziness, or discomfort during exercise, stop immediately and seek medical attention.",
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

        {/* Section 10 - Limitation of Liability */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-white mb-3 tracking-tight">
            10. Limitation of Liability
          </h2>
          <p className="text-[#aaa] text-[15px] leading-relaxed mb-3">
            To the fullest extent permitted by law:
          </p>
          <ul className="space-y-1 mb-4">
            {[
              "The App is provided on an \"as is\" and \"as available\" basis, without warranties of any kind, whether express or implied.",
              "We do not guarantee that the App will be uninterrupted, error-free, or free of harmful components.",
              "We are not liable for any loss of data, including workout history, arising from device failure, software errors, or circumstances beyond our control.",
              "Our total liability to you for any claim arising from your use of the App shall not exceed the amount you have paid to us in subscription fees in the 12 months preceding the claim.",
              "We are not liable for any indirect, incidental, special, consequential, or punitive damages.",
            ].map((item) => (
              <li
                key={item}
                className="text-[#aaa] text-[15px] pl-4 relative before:content-['-'] before:absolute before:left-0 before:text-[#444]"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="text-[#aaa] text-[15px] leading-relaxed mb-3">
            Nothing in these Terms excludes or limits our liability for:
          </p>
          <ul className="space-y-1">
            {[
              "Death or personal injury caused by our negligence",
              "Fraud or fraudulent misrepresentation",
              "Any other liability that cannot be excluded or limited under English law",
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

        {/* Section 11 - Termination */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-white mb-3 tracking-tight">
            11. Termination
          </h2>

          <h3 className="text-[15px] font-semibold text-white mb-2 mt-6">
            11.1 By You
          </h3>
          <p className="text-[#aaa] text-[15px] leading-relaxed">
            You may stop using the App at any time by cancelling your
            subscription and deleting the App from your device. You may also
            delete your account through the App to remove all cloud data.
          </p>

          <h3 className="text-[15px] font-semibold text-white mb-2 mt-6">
            11.2 By Us
          </h3>
          <p className="text-[#aaa] text-[15px] leading-relaxed mb-3">
            We may suspend or terminate your access to the App if:
          </p>
          <ul className="space-y-1 mb-4">
            {[
              "You breach these Terms",
              "We are required to do so by law",
              "We discontinue the App",
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
            If we discontinue the App, we will provide reasonable notice and
            allow you to export your data before the service ends.
          </p>
        </section>

        {/* Section 12 - Changes to These Terms */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-white mb-3 tracking-tight">
            12. Changes to These Terms
          </h2>
          <p className="text-[#aaa] text-[15px] leading-relaxed mb-3">
            We may update these Terms from time to time. When we do:
          </p>
          <ul className="space-y-1 mb-4">
            {[
              "The \"Last updated\" date at the top of this page will be revised",
              "If changes are material, we will notify you through the App",
              "Continued use of the App after changes are posted constitutes acceptance of the revised Terms",
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
            If you do not agree with the revised Terms, you should stop using the
            App and cancel your subscription.
          </p>
        </section>

        {/* Section 13 - Governing Law */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-white mb-3 tracking-tight">
            13. Governing Law and Disputes
          </h2>
          <p className="text-[#aaa] text-[15px] leading-relaxed mb-3">
            These Terms are governed by and construed in accordance with the laws
            of <strong className="text-white">England and Wales</strong>.
          </p>
          <p className="text-[#aaa] text-[15px] leading-relaxed mb-3">
            Any disputes arising from these Terms or your use of the App shall be
            subject to the exclusive jurisdiction of the courts of England and
            Wales.
          </p>
          <p className="text-[#aaa] text-[15px] leading-relaxed">
            If you are a consumer resident in the UK, nothing in these Terms
            affects your statutory consumer rights.
          </p>
        </section>

        {/* Section 14 - Severability */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-white mb-3 tracking-tight">
            14. Severability
          </h2>
          <p className="text-[#aaa] text-[15px] leading-relaxed">
            If any provision of these Terms is found to be unenforceable or
            invalid by a court of competent jurisdiction, the remaining
            provisions shall continue in full force and effect.
          </p>
        </section>

        {/* Section 15 - Entire Agreement */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-white mb-3 tracking-tight">
            15. Entire Agreement
          </h2>
          <p className="text-[#aaa] text-[15px] leading-relaxed">
            These Terms, together with our{" "}
            <Link
              href="/privacy/liftio"
              className="text-white underline underline-offset-[3px] hover:text-[#aaa] transition-colors"
            >
              Privacy Policy
            </Link>
            , constitute the entire agreement between you and MGKCodes Ltd
            regarding your use of the App.
          </p>
        </section>

        {/* Section 16 - Contact */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-white mb-3 tracking-tight">
            16. Contact
          </h2>
          <p className="text-[#aaa] text-[15px] leading-relaxed mb-3">
            For any questions about these Terms:
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
          These Terms of Service apply to the Liftio iOS application only.
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
