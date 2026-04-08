import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const apps = [
    {
      name: 'Amelii',
      description: 'Tu app de notas inteligente y segura con sincronización automática.',
      icon: '📝',
      href: '/amelii',
      color: 'teal',
      features: ['Editor enriquecido', 'Sync con Google Drive', 'Cifrado SHA-256'],
      status: 'Disponible',
    },
    {
      name: 'Control Horario',
      description: 'App para registrar horas trabajadas con cálculo automático y PDF.',
      icon: '⏰',
      href: '/control-horario',
      color: 'blue',
      features: ['Registro automático', 'Cálculo de horas', 'Exportar a PDF'],
      status: 'Beta cerrada',
    },
    {
      name: 'FinanzasPlus',
      description: 'Organiza ingresos, gastos y metas con una vista clara de tus finanzas.',
      icon: '💸',
      href: '/finanzasplus',
      color: 'emerald',
      features: ['Control de gastos', 'Metas de ahorro', 'Resumen mensual'],
      status: 'Próximamente',
    },
  ];

  const colorStyles: Record<
    string,
    {
      badge: string;
      glow: string;
      link: string;
      ring: string;
    }
  > = {
    teal: {
      badge: 'bg-teal-50 text-teal-700 dark:bg-teal-900/30 dark:text-teal-200',
      glow: 'from-teal-400/20 via-transparent to-emerald-300/20',
      link: 'text-teal-600 dark:text-teal-300',
      ring: 'ring-teal-200/80 dark:ring-teal-500/30',
    },
    blue: {
      badge: 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-200',
      glow: 'from-blue-400/20 via-transparent to-cyan-300/20',
      link: 'text-blue-600 dark:text-blue-300',
      ring: 'ring-blue-200/80 dark:ring-blue-500/30',
    },
    emerald: {
      badge: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-200',
      glow: 'from-emerald-400/20 via-transparent to-lime-300/20',
      link: 'text-emerald-600 dark:text-emerald-300',
      ring: 'ring-emerald-200/80 dark:ring-emerald-500/30',
    },
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-200/40 blur-3xl dark:bg-indigo-500/20" />
          <div className="absolute bottom-0 right-0 h-80 w-80 translate-x-1/3 rounded-full bg-teal-200/40 blur-3xl dark:bg-teal-500/20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.12),transparent_55%)]" />
        </div>

        <header className="mx-auto max-w-7xl px-6 pt-8 lg:px-8">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 overflow-hidden rounded-xl shadow-md ring-1 ring-black/5 dark:ring-white/10">
                <Image
                  src="/ico.jpg"
                  alt="Logo Loogier Apps"
                  width={40}
                  height={40}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
              <div className="leading-tight">
                <p className="text-sm font-semibold text-gray-900 dark:text-white">Loogier Apps</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Productividad móvil</p>
              </div>
            </div>

            <div className="hidden items-center gap-6 text-sm font-medium text-gray-700 dark:text-gray-200 md:flex">
              <a href="#apps" className="hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors">
                Apps
              </a>
              <a href="#value" className="hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors">
                Enfoque
              </a>
              <Link href="/privacy" className="hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors">
                Legal
              </Link>
            </div>
          </nav>
        </header>

        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-sm font-medium text-gray-700 shadow-sm ring-1 ring-gray-200/70 dark:bg-white/10 dark:text-gray-200 dark:ring-white/10">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
                Apps simples, confiables y rápidas.
              </div>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
                Herramientas móviles que mejoran tu día a día.
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                Dos productos enfocados en productividad real: notas seguras y control horario preciso, con diseño claro y flujos eficientes.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#apps"
                  className="rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-gray-800 transition-colors dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
                >
                  Explorar apps
                </a>
                <a
                  href="#value"
                  className="rounded-full px-6 py-3 text-sm font-semibold text-gray-700 ring-1 ring-gray-200 hover:ring-gray-300 transition-colors dark:text-gray-200 dark:ring-white/20"
                >
                  Ver enfoque
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-b from-indigo-500/20 via-transparent to-teal-400/20 blur-2xl" />
              <div className="relative rounded-[2.5rem] border border-white/60 bg-white/90 p-6 shadow-2xl dark:border-white/10 dark:bg-gray-900/70">
                <div className="space-y-4">
                  <div className="rounded-2xl border border-gray-200/70 bg-white p-4 shadow-sm dark:border-gray-700/60 dark:bg-gray-800">
                    <p className="text-xs text-gray-500 dark:text-gray-400">Foco</p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">Productividad personal y laboral</p>
                  </div>
                  <div className="rounded-2xl border border-gray-200/70 bg-white p-4 shadow-sm dark:border-gray-700/60 dark:bg-gray-800">
                    <p className="text-xs text-gray-500 dark:text-gray-400">Principios</p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">Rapidez, claridad y seguridad</p>
                  </div>
                  <div className="rounded-2xl border border-gray-200/70 bg-white p-4 shadow-sm dark:border-gray-700/60 dark:bg-gray-800">
                    <p className="text-xs text-gray-500 dark:text-gray-400">Plataformas</p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">Android con sincronización en la nube</p>
                  </div>
                </div>
                <div className="mt-6 rounded-2xl bg-gradient-to-r from-gray-900 to-gray-700 p-4 text-white shadow-lg dark:from-white dark:to-gray-200 dark:text-gray-900">
                  <p className="text-xs uppercase tracking-wide opacity-70">Estado</p>
                  <p className="mt-2 text-xl font-semibold">3 productos publicados</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Value Section */}
      <section id="value" className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="rounded-2xl border border-gray-200/80 bg-white p-6 shadow-sm dark:border-gray-700/60 dark:bg-gray-900/40">
            <p className="text-sm font-semibold text-gray-900 dark:text-white">Diseño directo</p>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
              Interfaz limpia con atajos claros para que termines en segundos.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200/80 bg-white p-6 shadow-sm dark:border-gray-700/60 dark:bg-gray-900/40">
            <p className="text-sm font-semibold text-gray-900 dark:text-white">Datos seguros</p>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
              Encriptado, backups y controles de acceso en cada app.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200/80 bg-white p-6 shadow-sm dark:border-gray-700/60 dark:bg-gray-900/40">
            <p className="text-sm font-semibold text-gray-900 dark:text-white">Flujos optimizados</p>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
              Menos pasos, menos fricción, más resultados.
            </p>
          </div>
        </div>
      </section>

      {/* Apps Grid */}
      <section id="apps" className="mx-auto max-w-7xl px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {apps.map((app) => {
            const style = colorStyles[app.color] ?? colorStyles.teal;
            return (
              <Link
                key={app.name}
                href={app.href}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${style.glow}`} />
                <div className="flex items-start justify-between mb-4">
                  <div className="text-6xl">{app.icon}</div>
                  <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${style.badge}`}>
                    {app.status}
                  </span>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                  {app.name}
                </h2>

                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {app.description}
                </p>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {app.features.map((feature) => (
                      <span
                        key={feature}
                        className={`inline-flex items-center rounded-md bg-gray-100 dark:bg-gray-700 px-2.5 py-1 text-xs font-medium text-gray-600 dark:text-gray-300 ring-1 ring-inset ${style.ring}`}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className={`flex items-center font-semibold group-hover:gap-2 transition-all ${style.link}`}>
                    Ver más
                    <svg className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Footer */}
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
