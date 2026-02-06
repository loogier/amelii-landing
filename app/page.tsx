import Link from 'next/link';

export default function Home() {
  const apps = [
    {
      name: 'Amelii',
      description: 'Tu app de notas inteligente y segura con sincronización automática',
      icon: '📝',
      href: '/amelii',
      color: 'teal',
      features: ['Editor enriquecido', 'Sync con Google Drive', 'Cifrado SHA-256'],
      status: 'Disponible'
    },
    {
      name: 'Control Horario',
      description: 'App para registrar horas trabajadas con cálculo automático y PDF',
      icon: '⏰',
      href: '/control-horario',
      color: 'blue',
      features: ['Registro automático', 'Cálculo de horas', 'Exportar a PDF'],
      status: 'Beta Cerrada'
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-4xl py-32 sm:py-48">
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-7xl">
              Mis Apps
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Desarrollando soluciones móviles que hacen tu vida más fácil
            </p>
          </div>
        </div>
      </div>

      {/* Apps Grid */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {apps.map((app) => (
            <Link
              key={app.name}
              href={app.href}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-6xl">{app.icon}</div>
                <span className="inline-flex items-center rounded-full bg-teal-50 dark:bg-teal-900/30 px-3 py-1 text-xs font-medium text-teal-700 dark:text-teal-300">
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
                      className="inline-flex items-center rounded-md bg-gray-100 dark:bg-gray-700 px-2.5 py-1 text-xs font-medium text-gray-600 dark:text-gray-300"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center text-teal-600 dark:text-teal-400 font-semibold group-hover:gap-2 transition-all">
                  Ver más
                  <svg className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

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
