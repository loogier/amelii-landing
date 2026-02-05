export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-7xl">
            <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Amelii
            </span>
          </h1>
          <p className="mt-6 text-xl leading-8 text-gray-600 dark:text-gray-300 sm:text-2xl">
            Tu app de notas inteligente y segura
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-gray-500 dark:text-gray-400">
            Crea, organiza y sincroniza tus notas con formato enriquecido. Backup automático en Drive, búsqueda rápida y total privacidad.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#download"
              className="rounded-md bg-teal-600 px-8 py-3.5 text-lg font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 transition-colors"
            >
              Descargar APK
            </a>
            <a
              href="#features"
              className="text-lg font-semibold leading-6 text-gray-900 dark:text-white hover:text-teal-600 transition-colors"
            >
              Ver características <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        {/* App Preview Placeholder */}
        <div className="mt-16 flow-root sm:mt-24">
          <div className="relative rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 dark:bg-gray-100/5 dark:ring-gray-100/10 lg:rounded-2xl lg:p-4">
            <div className="aspect-[9/16] w-full max-w-xs mx-auto overflow-hidden rounded-lg bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950 dark:to-cyan-950 shadow-2xl">
              <div className="flex h-full flex-col items-center justify-center p-8 text-center">
                <div className="rounded-full bg-teal-600 p-4 mb-4">
                  <svg className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                  Screenshot de la app
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
