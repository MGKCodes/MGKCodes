import { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumb } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Live products and what's in development at MGKCodes. frunt and Liftio, each built end to end in-house.",
  alternates: { canonical: "/projects" },
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
