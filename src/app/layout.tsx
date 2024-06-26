import type { Metadata } from "next";
import { Inter, Chakra_Petch, Lobster, Permanent_Marker } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const chakra = Chakra_Petch({ subsets: ['latin'], weight: ['500', '400'], style: 'normal', variable: '--font-chakra' });
const lobster = Lobster({ subsets: ['latin'], weight: ['400'], style: 'normal', variable: '--font-lobster' });
const marker = Permanent_Marker({ subsets: ['latin'], weight: ['400'], style: 'normal', variable: '--font-marker' });

export const metadata: Metadata = {
  title: "Cincinnati Spartans",
  description: "E-Sports Team Organization",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={`bg-[url('imgs/topography.svg')] bg-zinc-950 fill-cyan-500 ${chakra.variable} ${lobster.variable} ${marker.variable}`}>
        {children}
      </body>
    </html>
  );
}
