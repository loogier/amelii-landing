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
  title: "Amelii - Tu app de notas inteligente y segura",
  description: "Crea, organiza y sincroniza tus notas con formato enriquecido. Backup automático en Google Drive, búsqueda rápida y total privacidad. Disponible para Android.",
  keywords: ["notas", "app de notas", "android", "backup", "sincronización", "privacidad", "google drive"],
  authors: [{ name: "Amelii Team" }],
  openGraph: {
    title: "Amelii - Tu app de notas inteligente y segura",
    description: "Crea, organiza y sincroniza tus notas con formato enriquecido. Backup automático en Google Drive.",
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
