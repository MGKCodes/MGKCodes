import { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumb, faqPage, studioFaq } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Studio",
  description:
    "How MGKCodes works. An independent, solo-run software studio that takes products from idea to launch in-house.",
  alternates: { canonical: "/studio" },
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd
        data={breadcrumb([
          { name: "MGKCodes", path: "/" },
          { name: "Studio", path: "/studio" },
        ])}
      />
      <JsonLd data={faqPage(studioFaq)} />
      {children}
    </>
  );
}
