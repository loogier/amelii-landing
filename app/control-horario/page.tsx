import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Control Horario - Registra tus horas trabajadas fácilmente',
  description: 'App para registrar entrada y salida del trabajo con cálculo automático de horas trabajadas y exportación a PDF. Ideal para empleados y autónomos.',
  keywords: 'control horario, registro horas, horas trabajadas, fichaje, control asistencia, pdf horas, android',
  openGraph: {
    title: 'Control Horario - Registra tus horas trabajadas fácilmente',
    description: 'App para registrar entrada y salida del trabajo con cálculo automático de horas trabajadas y exportación a PDF.',
    type: 'website',
  },
};

export default function ControlHorarioPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-7xl py-24 sm:py-32">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center rounded-full bg-blue-50 dark:bg-blue-900/30 px-3 py-1 text-sm font-medium text-blue-700 dark:text-blue-300 mb-6">
                ⏰ Control de asistencia inteligente
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
                Controla tus horas trabajadas
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                Registra tu entrada y salida del trabajo de forma rápida y sencilla. Calcula automáticamente las horas trabajadas y exporta reportes en PDF.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="https://play.google.com/store/apps/details?id=com.loogier.controlhorario"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md bg-blue-600 px-8 py-3.5 text-lg font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors inline-flex items-center gap-2"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  Descargar Beta
                </a>
                <Link
                  href="/"
                  className="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
                >
                  ← Ver todas las apps
                </Link>
              </div>
              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                📱 Actualmente en prueba cerrada en Google Play Store
              </p>
            </div>
            <div className="lg:pl-8">
              <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/20 dark:to-gray-800 p-8 shadow-xl">
                <div className="text-center">
                  <div className="text-8xl mb-4">⏰</div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Próximamente: Screenshots de la app
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
                <div className="text-4xl mb-4">📥</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Registro rápido
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Registra tu entrada y salida con un solo tap. Interfaz simple e intuitiva para uso diario.
                </p>
              </div>
              
              <div className="relative rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🧮</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Cálculo automático
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Calcula automáticamente las horas trabajadas, pausas y horas extras sin complicaciones.
                </p>
              </div>
              
              <div className="relative rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">📄</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Exportar a PDF
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Genera reportes profesionales en PDF para presentar a tu empleador o para tu contabilidad.
                </p>
              </div>
              
              <div className="relative rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Estadísticas
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Visualiza tus horas trabajadas por día, semana o mes con gráficos claros y detallados.
                </p>
              </div>
              
              <div className="relative rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">📍</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Geolocalización
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Registra la ubicación al fichar (opcional) para validar que estás en tu lugar de trabajo.
                </p>
              </div>
              
              <div className="relative rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🔔</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Recordatorios
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Configura notificaciones para que no olvides fichar tu entrada o salida del trabajo.
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
              <div className="text-5xl mb-4">👔</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Empleados
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Lleva un registro personal de tus horas trabajadas para verificar que tu nómina es correcta.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <div className="text-5xl mb-4">💼</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Freelancers
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Registra el tiempo dedicado a cada proyecto y genera reportes para tus clientes.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <div className="text-5xl mb-4">🏢</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Pequeñas empresas
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Solución simple para que tus empleados registren su asistencia sin complicaciones.
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
                ¿Es gratis la app?
                <span className="ml-4 flex-shrink-0">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Sí, Control Horario es completamente gratuita. Todas las funcionalidades están disponibles sin costo.
              </p>
            </details>
            
            <details className="group rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6">
              <summary className="flex cursor-pointer items-center justify-between font-semibold text-gray-900 dark:text-white">
                ¿Cómo puedo acceder a la beta?
                <span className="ml-4 flex-shrink-0">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                La app está en prueba cerrada en Google Play Store. Proximamente estará disponible para todos los usuarios.
              </p>
            </details>
            
            <details className="group rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6">
              <summary className="flex cursor-pointer items-center justify-between font-semibold text-gray-900 dark:text-white">
                ¿Los datos se sincroniza en la nube?
                <span className="ml-4 flex-shrink-0">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Actualmente los datos se almacenan localmente en tu dispositivo. La sincronización en la nube está en desarrollo.
              </p>
            </details>
            
            <details className="group rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6">
              <summary className="flex cursor-pointer items-center justify-between font-semibold text-gray-900 dark:text-white">
                ¿Puedo editar registros pasados?
                <span className="ml-4 flex-shrink-0">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Sí, puedes editar tus registros en cualquier momento si olvidaste fichar o necesitas hacer correcciones.
              </p>
            </details>
            
            <details className="group rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6">
              <summary className="flex cursor-pointer items-center justify-between font-semibold text-gray-900 dark:text-white">
                ¿Es obligatorio activar la geolocalización?
                <span className="ml-4 flex-shrink-0">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                No, la geolocalización es completamente opcional. Puedes usarla si quieres validar tu ubicación al fichar.
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
                Beta cerrada • Android 7.0+ (API 24)
              </p>
            </div>
            <a
              href="https://play.google.com/store/apps/details?id=com.loogier.controlhorario"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-blue-500 transition-colors inline-flex items-center gap-3"
            >
              <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              Acceder a la Beta
            </a>
            <p className="text-sm text-gray-400 max-w-2xl text-center">
              Próximamente disponible para todos los usuarios
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
                    <Link href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">
                      Política de Privacidad
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">
                      Términos de Uso
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-12 border-t border-gray-700 pt-8 text-center">
              <p className="text-sm text-gray-400">
                © 2026 Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
