import { Metadata } from "next";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for MGKCodes website and services.",
};

export default function TermsPage() {
  return (
    <div className="pt-16">
      <Section className="bg-theme">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-semibold text-theme mb-8">
            Terms of Service
          </h1>
          <div className="prose prose-lg">
            <p className="text-muted">
              Last updated: February 2026
            </p>
            <h2 className="text-2xl font-semibold text-theme mt-8 mb-4">
              Services
            </h2>
            <p>
              MGKCodes provides web development, software solutions, and related
              services. All projects are subject to individual agreements between
              MGKCodes and the client.
            </p>
            <h2 className="text-2xl font-semibold text-theme mt-8 mb-4">
              Payment Terms
            </h2>
            <p>
              Payment terms are agreed upon before project commencement. Specific
              terms will be outlined in individual project agreements.
            </p>
            <h2 className="text-2xl font-semibold text-theme mt-8 mb-4">
              Contact Us
            </h2>
            <p>
              If you have any questions about these Terms of Service, please
              contact us at hello@mgkcodes.com.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}
