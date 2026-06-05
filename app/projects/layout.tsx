import { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumb } from "@/lib/schema";

const description =
  "Live products and what's in development at MGKCodes. frunt and Liftio, each built end to end in-house.";

export const metadata: Metadata = {
  title: "Projects",
  description,
  alternates: { canonical: "/projects" },
  openGraph: { title: "Projects | MGKCodes", description, url: "/projects" },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd
        data={breadcrumb([
          { name: "MGKCodes", path: "/" },
          { name: "Projects", path: "/projects" },
        ])}
      />
      {children}
    </>
  );
}
