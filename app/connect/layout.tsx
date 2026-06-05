import { Metadata } from "next";

// Personal QR landing page. Kept out of search (noindex) and separate from the
// studio brand, so it uses an absolute title and carries no studio breadcrumb.
export const metadata: Metadata = {
  title: { absolute: "Connect. Matthew Kay, MGKCodes Ltd." },
  description: "Quick links. Matthew Kay, MGKCodes Ltd.",
  robots: { index: false, follow: true },
};

export default function ConnectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
