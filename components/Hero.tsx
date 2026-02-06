import Image from 'next/image';

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
              href="https://play.google.com/store/apps/details?id=com.amelii.notes"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-teal-600 px-8 py-3.5 text-lg font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 transition-colors inline-flex items-center gap-2"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              Descargar en Play Store
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
            <div className="w-full max-w-xs mx-auto overflow-hidden rounded-lg shadow-2xl bg-white dark:bg-gray-900">
              <Image
                src="/screenshots/hero-screenshot.png"
                alt="Captura de pantalla de la app Amelii mostrando lista de notas"
                width={1080}
                height={1920}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
