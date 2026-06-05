import { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumb, faqPage, studioFaq } from "@/lib/schema";

const description =
  "How MGKCodes works. An independent, solo-run software studio that takes products from idea to launch in-house.";

export const metadata: Metadata = {
  title: "Studio",
  description,
  alternates: { canonical: "/studio" },
  openGraph: { title: "Studio | MGKCodes", description, url: "/studio" },
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
