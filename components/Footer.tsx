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
            href="/amelii-release.apk"
            download
            className="rounded-md bg-teal-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-teal-500 transition-colors"
          >
            Descargar APK
          </a>
          <p className="text-sm text-gray-400 max-w-2xl text-center">
            APK optimizado con ProGuard (29.8MB) • Requiere permisos de instalación de fuentes desconocidas
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
              © 2026 Amelii. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
