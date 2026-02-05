import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { Security } from '@/components/Security';
import { Screenshots } from '@/components/Screenshots';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';

export default function Home() {
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
