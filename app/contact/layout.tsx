import { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumb } from "@/lib/schema";

const description =
  "Reach MGKCodes. Email hello@mgkcodes.com, or find the studio on LinkedIn.";

export const metadata: Metadata = {
  title: "Contact",
  description,
  alternates: { canonical: "/contact" },
  openGraph: { title: "Contact | MGKCodes", description, url: "/contact" },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd
        data={breadcrumb([
          { name: "MGKCodes", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      {children}
    </>
  );
}
