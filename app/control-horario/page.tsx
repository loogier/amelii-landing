import { Metadata } from 'next';


import Link from 'next/link';





export const metadata: Metadata = {


  title: 'Control Horario - Registra tus horas trabajadas fácilmente',


  description: 'App para registrar entrada y salida del trabajo con cálculo automático de horas trabajadas y exportación a PDF.',


  keywords: 'control horario, registro horas, horas trabajadas, fichaje, control asistencia, pdf horas, android',


  openGraph: {


    title: 'Control Horario - Registra tus horas trabajadas fácilmente',


    description: 'App para registrar entrada y salida del trabajo con cálculo automático de horas trabajadas y exportación a PDF. Ideal para empleados y autónomos.',


    type: 'website',


  },


};





export default function ControlHorarioPage() {


  return (


    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">


      
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-200/40 blur-3xl dark:bg-blue-500/20" />
          <div className="absolute bottom-0 right-0 h-80 w-80 translate-x-1/3 rounded-full bg-cyan-200/40 blur-3xl dark:bg-cyan-500/20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_55%)]" />
        </div>

        <header className="mx-auto max-w-7xl px-6 pt-8 lg:px-8">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold text-white shadow-md">
                CH
              </div>
              <div className="leading-tight">
                <p className="text-sm font-semibold text-gray-900 dark:text-white">Control Horario</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Asistencia inteligente</p>
              </div>
            </div>

            <div className="hidden items-center gap-6 text-sm font-medium text-gray-700 dark:text-gray-200 md:flex">
              <a href="#features" className="hover:text-blue-600 dark:hover:text-blue-300 transition-colors">
                Funciones
              </a>
              <a href="#faq" className="hover:text-blue-600 dark:hover:text-blue-300 transition-colors">
                Preguntas
              </a>
              <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-300 transition-colors">
                Todas las apps
              </Link>
            </div>

            <a
              href="/app-arm64-v8a-release.apk"
              download
              className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-blue-500 transition-colors"
            >
              Descargar
            </a>
          </nav>
        </header>

        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 dark:bg-blue-900/30 px-3 py-1 text-sm font-medium text-blue-700 dark:text-blue-300 mb-6">
                <span className="inline-block h-2 w-2 rounded-full bg-blue-600" />
                Control de asistencia inteligente
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
                Controla tus horas con precisión y respaldo
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                Registra entrada y salida en segundos, calcula horas por tipo de turno y entrega reportes listos en PDF.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="/app-arm64-v8a-release.apk"
                  download
                  className="rounded-md bg-blue-600 px-8 py-3.5 text-lg font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors inline-flex items-center gap-2"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  Descargar APK v1.0.1
                </a>
                <Link
                  href="/"
                  className="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
                >
                   Ver todas las apps
                </Link>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/70 dark:bg-white/10 px-3 py-1 ring-1 ring-gray-200/70 dark:ring-white/10">
                  APK directo disponible
                </span>
                <span>Android 7.0+ (API 24)</span>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-gray-200/80 bg-white/80 p-4 shadow-sm dark:border-gray-700/70 dark:bg-gray-900/40">
                  <p className="text-sm text-gray-500 dark:text-gray-400">Tipos de hora</p>
                  <p className="text-xl font-semibold text-gray-900 dark:text-white">Normal, noche, festivo</p>
                </div>
                <div className="rounded-2xl border border-gray-200/80 bg-white/80 p-4 shadow-sm dark:border-gray-700/70 dark:bg-gray-900/40">
                  <p className="text-sm text-gray-500 dark:text-gray-400">Reportes</p>
                  <p className="text-xl font-semibold text-gray-900 dark:text-white">PDF por día o rango</p>
                </div>
                <div className="rounded-2xl border border-gray-200/80 bg-white/80 p-4 shadow-sm dark:border-gray-700/70 dark:bg-gray-900/40">
                  <p className="text-sm text-gray-500 dark:text-gray-400">Seguridad</p>
                  <p className="text-xl font-semibold text-gray-900 dark:text-white">PIN, patrón, biometría</p>
                </div>
              </div>
            </div>

            <div className="lg:pl-8">
              <div className="relative mx-auto max-w-md">
                <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-b from-blue-500/20 via-transparent to-cyan-400/20 blur-2xl" />
                <div className="relative rounded-[2.5rem] border border-blue-100 bg-white/90 p-6 shadow-2xl dark:border-white/10 dark:bg-gray-900/70">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-blue-600 dark:text-blue-300">Hoy</span>
                    <span className="rounded-full bg-blue-50 px-2 py-0.5 text-xs text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                      8h 30m
                    </span>
                  </div>

                  <div className="mt-6 space-y-3">
                    <div className="rounded-2xl border border-gray-200/70 bg-white p-4 shadow-sm dark:border-gray-700/60 dark:bg-gray-800">
                      <p className="text-xs text-gray-500 dark:text-gray-400">Entrada</p>
                      <p className="text-lg font-semibold text-gray-900 dark:text-white">08:04</p>
                    </div>
                    <div className="rounded-2xl border border-gray-200/70 bg-white p-4 shadow-sm dark:border-gray-700/60 dark:bg-gray-800">
                      <p className="text-xs text-gray-500 dark:text-gray-400">Salida</p>
                      <p className="text-lg font-semibold text-gray-900 dark:text-white">16:34</p>
                    </div>
                  </div>

                  <div className="mt-6 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 p-4 text-white shadow-lg">
                    <p className="text-xs uppercase tracking-wide text-white/80">Resumen semanal</p>
                    <div className="mt-2 flex items-end justify-between">
                      <p className="text-2xl font-semibold">42h 15m</p>
                      <p className="text-sm text-white/80">+2h vs. semana pasada</p>
                    </div>
                  </div>

                  <p className="mt-6 text-center text-xs text-gray-500 dark:text-gray-400">
                    Próximamente: capturas reales de la app
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




      {/* Features Section */}


      <div id="features" className="bg-white dark:bg-gray-900 py-24 sm:py-32">


        <div className="mx-auto max-w-7xl px-6 lg:px-8">


          <div className="mx-auto max-w-2xl text-center">


            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">


              Funcionalidades principales


            </h2>


            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">


              Todo lo que necesitas para llevar un control preciso de tus horas de trabajo


            </p>


          </div>


          <div className="mx-auto mt-16 max-w-7xl">


            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="relative rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4"></div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Registro rpido
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Registra tu entrada y salida con un solo tap. Interfaz simple e intuitiva para uso diario.
                </p>
              </div>

              <div className="relative rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4"></div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Tipos de hora y cálculo
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Soporta horas normal, noche, domingo y feriado, con cálculo mixto por tramo.
                </p>
              </div>

              <div className="relative rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4"></div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Exportar a PDF
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Genera reportes profesionales en PDF por da o rango de fechas.
                </p>
              </div>

              <div className="relative rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4"></div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Backups y restauración
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Crea backups locales automáticos y manuales. Puedes restaurar y sincronizar con Google Drive.
                </p>
              </div>

              <div className="relative rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4"></div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Seguridad de acceso
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Protege la app con PIN, patrón o biometría para mantener tus registros seguros.
                </p>
              </div>

              <div className="relative rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4"></div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Recordatorios
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Configura recordatorios de olvido de horas con hora e intervalo personalizables.
                </p>
              </div>
            </div>


          </div>


        </div>


      </div>





      {/* Use Cases Section */}


      <div className="bg-gradient-to-b from-white to-blue-50 dark:from-gray-800 dark:to-gray-900 py-24 sm:py-32">


        <div className="mx-auto max-w-7xl px-6 lg:px-8">


          <div className="mx-auto max-w-2xl text-center mb-16">


            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">


              ¿Para quién es esta app?


            </h2>


          </div>


          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">


            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">


              <div className="text-5xl mb-4"></div>


              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">


                Empleados


              </h3>


              <p className="text-gray-600 dark:text-gray-300">


                Lleva un registro personal de tus horas trabajadas para verificar que tu nmina es correcta.


              </p>


            </div>


            


            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">


              <div className="text-5xl mb-4"></div>


              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">


                Freelancers


              </h3>


              <p className="text-gray-600 dark:text-gray-300">


                Registra el tiempo dedicado a cada proyecto y genera reportes para tus clientes.


              </p>


            </div>


            


            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">


              <div className="text-5xl mb-4"></div>


              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">


                Pequeas empresas


              </h3>


              <p className="text-gray-600 dark:text-gray-300">


                Solucin simple para que tus empleados registren su asistencia sin complicaciones.


              </p>


            </div>


          </div>


        </div>


      </div>





      {/* FAQ Section */}


      <div id="faq" className="bg-white dark:bg-gray-900 py-24 sm:py-32">


        <div className="mx-auto max-w-4xl px-6 lg:px-8">


          <div className="mx-auto max-w-2xl text-center mb-16">


            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">


              Preguntas frecuentes


            </h2>


          </div>


          <div className="space-y-6">
            <details className="group rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6">
              <summary className="flex cursor-pointer items-center justify-between font-semibold text-gray-900 dark:text-white">
                ¿Cómo se calculan las horas trabajadas?
                <span className="ml-4 flex-shrink-0"></span>
              </summary>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                La app calcula automáticamente las horas por tipo: normal, noche, domingo y feriado. Si un turno cruza tipos, aplica cálculo mixto por tramo.
              </p>
            </details>

            <details className="group rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6">
              <summary className="flex cursor-pointer items-center justify-between font-semibold text-gray-900 dark:text-white">
                ¿Puedo editar registros pasados?
                <span className="ml-4 flex-shrink-0"></span>
              </summary>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Sí. Puedes editar registros existentes cuando necesites corregir horarios, notas o montos.
              </p>
            </details>

            <details className="group rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6">
              <summary className="flex cursor-pointer items-center justify-between font-semibold text-gray-900 dark:text-white">
                ¿Hay backups y restauración?
                <span className="ml-4 flex-shrink-0"></span>
              </summary>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Sí. Hay backups locales automáticos y manuales. También puedes crear backups portables cifrados y, si lo configuras, sincronizar con Google Drive.
              </p>
            </details>

            <details className="group rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6">
              <summary className="flex cursor-pointer items-center justify-between font-semibold text-gray-900 dark:text-white">
                ¿Puedo exportar reportes en PDF?
                <span className="ml-4 flex-shrink-0"></span>
              </summary>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Sí. Puedes generar reportes por da o rango de fechas, compartir el PDF e imprimirlo si tu dispositivo lo permite.
              </p>
            </details>

            <details className="group rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6">
              <summary className="flex cursor-pointer items-center justify-between font-semibold text-gray-900 dark:text-white">
                ¿La app tiene recordatorios?
                <span className="ml-4 flex-shrink-0"></span>
              </summary>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Sí. Puedes configurar recordatorios de olvido de horas, la hora diaria y el intervalo desde Configuración.
              </p>
            </details>
          </div>


        </div>


      </div>





      {/* Footer / Download Section */}


      <footer className="bg-gray-900 px-6 py-12 lg:px-8">


        <div className="mx-auto max-w-7xl">


          <div className="flex flex-col items-center gap-8">


            <div className="text-center">


              <h2 className="text-3xl font-bold text-white sm:text-4xl">


                Descarga Control Horario


              </h2>


              <p className="mt-4 text-lg text-gray-300">


                APK v1.0.1  Android 7.0+ (API 24)


              </p>


            </div>


            <a
              href="/app-arm64-v8a-release.apk"
              download


              className="rounded-md bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-blue-500 transition-colors inline-flex items-center gap-3"


            >


              <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">


                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />


              </svg>


              Descargar APK v1.0.1


            </a>


            <p className="text-sm text-gray-400 max-w-2xl text-center">


              Prximamente disponible para todos los usuarios


            </p>


          </div>





          <div className="mt-16 border-t border-gray-700 pt-8">


            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">


              <div>


                <h3 className="text-sm font-semibold text-white">Control Horario</h3>


                <p className="mt-4 text-sm text-gray-400">


                  Registra tus horas trabajadas de forma fácil y profesional.


                </p>


              </div>


              <div>


                <h3 className="text-sm font-semibold text-white">Enlaces</h3>


                <ul className="mt-4 space-y-2">


                  <li>


                    <Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors">


                      Inicio


                    </Link>


                  </li>


                  <li>


                    <a href="#features" className="text-sm text-gray-400 hover:text-white transition-colors">


                      Características


                    </a>


                  </li>


                  <li>


                    <a href="#faq" className="text-sm text-gray-400 hover:text-white transition-colors">


                      FAQ


                    </a>


                  </li>


                </ul>


              </div>


              <div>


                <h3 className="text-sm font-semibold text-white">Legal</h3>


                <ul className="mt-4 space-y-2">


                  <li>


                    <Link href="/control-horario/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">


                      Política de Privacidad


                    </Link>


                  </li>


                  <li>


                    <Link href="/control-horario/terms" className="text-sm text-gray-400 hover:text-white transition-colors">


                      Términos de Uso


                    </Link>


                  </li>


                </ul>


              </div>


            </div>


            <div className="mt-12 border-t border-gray-700 pt-8 text-center">


              <p className="text-sm text-gray-400">


                 2026 Todos los derechos reservados.


              </p>


            </div>


          </div>


        </div>


      </footer>


    </main>


  );


}





