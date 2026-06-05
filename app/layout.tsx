import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { MotionConfig } from "framer-motion";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const description =
  "An independent software studio. Building frunt and Liftio, idea to launch.";

export const metadata: Metadata = {
  metadataBase: new URL("https://mgkcodes.com"),
  title: "MGKCodes",
  description,
  openGraph: {
    title: "MGKCodes",
    description,
    url: "https://mgkcodes.com",
    siteName: "MGKCodes",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MGKCodes",
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={ibmPlexSans.variable}>
      <body className="font-sans">
        <MotionConfig reducedMotion="user">
          <Header />
          <main>{children}</main>
          <Footer />
        </MotionConfig>
      </body>
    </html>
  );
}
