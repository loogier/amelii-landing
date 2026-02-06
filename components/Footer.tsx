export function Footer() {
  return (
    <footer id="download" className="bg-gray-900 px-6 py-12 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Descarga Amelii
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Versión 1.1.4+7 • Android 7.0+ (API 24)
            </p>
          </div>
          <a
            href="https://play.google.com/store/apps/details?id=com.amelii.notes"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-teal-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-teal-500 transition-colors inline-flex items-center gap-3"
          >
            <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
            </svg>
            Descargar en Play Store
          </a>
          <p className="text-sm text-gray-400 max-w-2xl text-center">
            Instalación segura y actualizaciones automáticas desde Google Play
          </p>
        </div>

        <div className="mt-16 border-t border-gray-700 pt-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold text-white">Amelii</h3>
              <p className="mt-4 text-sm text-gray-400">
                Tu app de notas inteligente y segura para Android.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">Enlaces</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="/" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="#features" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Características
                  </a>
                </li>
                <li>
                  <a href="#security" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Seguridad
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
                  <a href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Política de Privacidad
                  </a>
                </li>
                <li>
                  <a href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Términos de Uso
                  </a>
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
  );
}
