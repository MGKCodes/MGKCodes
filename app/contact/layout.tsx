import { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumb } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach MGKCodes. Email hello@mgkcodes.com, or find the studio on LinkedIn.",
  alternates: { canonical: "/contact" },
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
