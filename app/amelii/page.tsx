import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { Security } from '@/components/Security';
import { Screenshots } from '@/components/Screenshots';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Amelii - Tu app de notas inteligente y segura',
  description: 'Crea, organiza y sincroniza tus notas de forma segura con Amelii. Editor enriquecido, sincronización automática con Google Drive, búsqueda avanzada y cifrado de datos.',
  keywords: 'amelii, notas, app de notas, editor de texto, sincronización, google drive, seguridad, cifrado, android',
  openGraph: {
    title: 'Amelii - Tu app de notas inteligente y segura',
    description: 'Crea, organiza y sincroniza tus notas de forma segura con Amelii.',
    type: 'website',
  },
};

export default function AmeliiPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <Hero />
      <Features />
      <Security />
      <Screenshots />
      <FAQ />
      <Footer />
    </main>
  );
}
