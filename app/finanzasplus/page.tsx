import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'FinanzasPlus - Control simple para tus finanzas personales',
  description:
    'FinanzasPlus te ayuda a registrar gastos, visualizar ingresos y seguir metas de ahorro desde una sola app.',
  keywords:
    'finanzasplus, finanzas personales, gastos, ingresos, presupuesto, ahorro, app android',
  openGraph: {
    title: 'FinanzasPlus - Control simple para tus finanzas personales',
    description:
      'Registra movimientos, revisa resúmenes mensuales y mantén tus finanzas bajo control con una interfaz clara.',
    type: 'website',
  },
};

const features = [
  {
    title: 'Registro rápido',
    description:
      'Añade ingresos y gastos en segundos con categorías claras y movimientos ordenados por fecha.',
  },
  {
    title: 'Visión mensual',
    description:
      'Consulta balances, tendencias y totales del mes para detectar hábitos y ajustar tu presupuesto.',
  },
  {
    title: 'Metas de ahorro',
    description:
      'Define objetivos concretos y sigue tu avance con indicadores simples y fáciles de revisar.',
  },
  {
    title: 'Control por categorías',
    description:
      'Separa alimentación, transporte, ocio o cualquier rubro importante para entender mejor tus gastos.',
  },
  {
    title: 'Resumen claro',
    description:
      'Obtén una lectura rápida de tu estado financiero sin navegar entre pantallas complejas.',
  },
  {
    title: 'Privacidad local',
    description:
      'Tus datos financieros permanecen bajo tu control con un enfoque centrado en simplicidad y seguridad.',
  },
];

const highlights = [
  { label: 'Objetivo', value: 'Control diario de ingresos y gastos' },
  { label: 'Enfoque', value: 'Claridad, rapidez y seguimiento' },
  { label: 'Disponibilidad', value: 'Próximo lanzamiento' },
];

const faqs = [
  {
    question: '¿FinanzasPlus ya está disponible para descargar?',
    answer:
      'Todavía no. La página ya está publicada para presentar el producto, pero la descarga se habilitará cuando la primera versión esté lista.',
  },
  {
    question: '¿Qué tipo de movimientos podré registrar?',
    answer:
      'La propuesta contempla ingresos, gastos y metas de ahorro con una organización pensada para uso personal diario.',
  },
  {
    question: '¿Está orientada a uso personal o empresarial?',
    answer:
      'La landing está planteada para finanzas personales: seguimiento de presupuesto, gastos recurrentes y progreso de ahorro.',
  },
];

export default function FinanzasPlusPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-200/40 blur-3xl dark:bg-emerald-500/20" />
          <div className="absolute bottom-0 right-0 h-80 w-80 translate-x-1/3 rounded-full bg-lime-200/40 blur-3xl dark:bg-lime-500/20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.12),transparent_55%)]" />
        </div>

        <header className="mx-auto max-w-7xl px-6 pt-8 lg:px-8">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-sm font-bold text-white shadow-md">
                FP
              </div>
              <div className="leading-tight">
                <p className="text-sm font-semibold text-gray-900 dark:text-white">FinanzasPlus</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Finanzas personales</p>
              </div>
            </div>

            <div className="hidden items-center gap-6 text-sm font-medium text-gray-700 dark:text-gray-200 md:flex">
              <a href="#features" className="hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors">
                Funciones
              </a>
              <a href="#faq" className="hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors">
                Preguntas
              </a>
              <Link href="/" className="hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors">
                Todas las apps
              </Link>
            </div>
          </nav>
        </header>

        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-600" />
                Presupuesto y seguimiento sin fricción
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
                Una forma clara de entender tu dinero cada mes
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                FinanzasPlus está pensada para registrar movimientos, revisar hábitos de gasto y mantener metas de ahorro visibles desde una sola pantalla.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#features"
                  className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-emerald-500 transition-colors"
                >
                  Ver funciones
                </a>
                <Link
                  href="/"
                  className="rounded-full px-6 py-3 text-sm font-semibold text-gray-700 ring-1 ring-gray-200 hover:ring-gray-300 transition-colors dark:text-gray-200 dark:ring-white/20"
                >
                  Volver al catálogo
                </Link>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 ring-1 ring-gray-200/70 dark:bg-white/10 dark:ring-white/10">
                  Lanzamiento próximo
                </span>
                <span>Android</span>
                <span>Uso personal</span>
              </div>
            </div>

            <div className="lg:pl-8">
              <div className="relative mx-auto max-w-xl">
                <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-b from-emerald-500/20 via-transparent to-lime-400/20 blur-2xl" />
                <div className="relative rounded-[2.5rem] border border-white/60 bg-white/90 p-6 shadow-2xl dark:border-white/10 dark:bg-gray-900/70">
                  <div className="grid gap-4 sm:grid-cols-2">
                    {highlights.map((item) => (
                      <div
                        key={item.label}
                        className="rounded-2xl border border-gray-200/70 bg-white p-4 shadow-sm dark:border-gray-700/60 dark:bg-gray-800"
                      >
                        <p className="text-xs text-gray-500 dark:text-gray-400">{item.label}</p>
                        <p className="mt-2 text-lg font-semibold text-gray-900 dark:text-white">{item.value}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-lime-500 p-5 text-white shadow-lg">
                    <p className="text-xs uppercase tracking-wide opacity-80">Resumen esperado</p>
                    <p className="mt-2 text-2xl font-semibold">Más visibilidad, menos improvisación</p>
                    <p className="mt-2 text-sm text-emerald-50">
                      Una landing temprana para presentar el producto mientras se prepara su primera versión pública.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="features" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Funciones pensadas para revisar tus finanzas sin esfuerzo
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            La página presenta el producto con un enfoque directo: control diario, lectura rápida y organización útil.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{feature.title}</h3>
              <p className="mt-3 text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-24 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="rounded-2xl border border-gray-200/80 bg-slate-50 p-6 shadow-sm dark:border-gray-700/60 dark:bg-gray-800/50">
              <p className="text-sm font-semibold text-gray-900 dark:text-white">Menos complejidad</p>
              <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
                Sin pantallas cargadas ni métricas innecesarias: solo la información útil para decidir.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200/80 bg-slate-50 p-6 shadow-sm dark:border-gray-700/60 dark:bg-gray-800/50">
              <p className="text-sm font-semibold text-gray-900 dark:text-white">Rutina sostenible</p>
              <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
                El objetivo es que registrar tus movimientos sea lo bastante rápido para mantener el hábito.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200/80 bg-slate-50 p-6 shadow-sm dark:border-gray-700/60 dark:bg-gray-800/50">
              <p className="text-sm font-semibold text-gray-900 dark:text-white">Información accionable</p>
              <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
                Ver en qué gastas y cuánto ahorras permite corregir antes, no al final del mes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-6 py-24 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Preguntas frecuentes
          </h2>
        </div>

        <div className="mt-16 space-y-4">
          {faqs.map((item) => (
            <div
              key={item.question}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.question}</h3>
              <p className="mt-3 text-gray-600 dark:text-gray-300">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-gray-900 dark:bg-black">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="flex flex-col items-center gap-4">
            <p className="text-center text-sm text-gray-400">
              © {new Date().getFullYear()} Todos los derechos reservados
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">
                Política de Privacidad
              </Link>
              <Link href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">
                Términos de Uso
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}