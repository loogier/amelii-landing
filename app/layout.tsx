import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mis Apps - Soluciones móviles",
  description: "Portfolio de aplicaciones móviles. Amelii: app de notas inteligente con sincronización automática. Más apps próximamente.",
  keywords: ["apps android", "aplicaciones móviles", "amelii", "notas", "desarrollo móvil"],
  authors: [{ name: "Loogier Apps" }],
  openGraph: {
    title: "Mis Apps - Soluciones móviles",
    description: "Portfolio de aplicaciones móviles para Android",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
