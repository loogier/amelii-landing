import Link from 'next/link';

export const metadata = {
  title: 'Política de Privacidad - Amelii',
  description: 'Política de privacidad de Amelii, la app de notas segura para Android.',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="mx-auto max-w-4xl px-6 py-24 sm:py-32">
        <Link
          href="/"
          className="inline-flex items-center text-sm font-semibold text-teal-600 hover:text-teal-500 mb-8"
        >
          ← Volver al inicio
        </Link>

        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl mb-8">
          Política de Privacidad
        </h1>

        <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-300">
            <strong>Última actualización:</strong> 5 de febrero de 2026
          </p>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              1. Información que Recopilamos
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Amelii recopila únicamente la información necesaria para proporcionar el servicio:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <li><strong>Información de cuenta:</strong> Email de Google (para autenticación)</li>
              <li><strong>Notas:</strong> El contenido de las notas que tú creas</li>
              <li><strong>Metadata:</strong> Fechas de creación y modificación de notas</li>
              <li><strong>Información técnica:</strong> Datos mínimos necesarios para Firebase (UID del usuario)</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              2. Información que NO Recopilamos
            </h2>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <li>Datos de ubicación geográfica</li>
              <li>Contactos del dispositivo</li>
              <li>Fotos, videos o archivos multimedia</li>
              <li>Información del dispositivo más allá de lo necesario para Firebase</li>
              <li>Historial de navegación</li>
              <li>Datos de otras aplicaciones</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              3. Cómo Usamos tu Información
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Utilizamos tu información exclusivamente para:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <li>Proporcionar los servicios de la aplicación (crear, editar, almacenar notas)</li>
              <li>Autenticar tu identidad mediante Google Sign-In</li>
              <li>Sincronizar tus notas entre dispositivos</li>
              <li>Realizar backups en tu Google Drive personal</li>
              <li>Mejorar la seguridad y prevenir abusos</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              4. Cómo Protegemos tu Información
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Implementamos múltiples capas de seguridad:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <li><strong>Autenticación segura:</strong> Google OAuth 2.0</li>
              <li><strong>Reglas de Firestore:</strong> Validación del UID en cada operación</li>
              <li><strong>Cifrado SHA-256:</strong> Validación de integridad en backups</li>
              <li><strong>Logs sanitizados:</strong> Eliminación automática de emails, tokens y API keys</li>
              <li><strong>Timeouts de seguridad:</strong> 30 segundos para prevenir ataques</li>
              <li><strong>Límites de tamaño:</strong> Máximo 100MB por backup, 1MB por nota</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              5. Compartir Información con Terceros
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              <strong>No compartimos, vendemos ni alquilamos tu información personal a terceros.</strong>
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Los únicos servicios de terceros que utilizamos son:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <li><strong>Firebase (Google):</strong> Para autenticación y base de datos en la nube</li>
              <li><strong>Google Drive:</strong> Para almacenar tus backups (en tu cuenta personal, solo tú tienes acceso)</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-300 mt-4">
              Estos servicios están sujetos a sus propias políticas de privacidad y cumplen con estándares internacionales de seguridad.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              6. Acceso a tus Datos
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Solo tú tienes acceso a tus notas:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <li>Las reglas de Firestore garantizan que cada usuario solo puede acceder a sus propias notas</li>
              <li>Los desarrolladores NO pueden leer el contenido de tus notas</li>
              <li>Los backups en Drive están en tu carpeta "appDataFolder" privada</li>
              <li>Ningún otro usuario puede ver tus datos, incluso si está autenticado</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              7. Uso Sin Conexión
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              La app funciona completamente offline. Tus notas se almacenan localmente en tu dispositivo usando ISAR (base de datos local). La sincronización con la nube es opcional y solo ocurre cuando tú lo activas mediante Google Sign-In.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              8. Retención de Datos
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Tus datos se conservan mientras uses la aplicación:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <li><strong>Datos locales:</strong> Se almacenan hasta que desinstales la app o los elimines manualmente</li>
              <li><strong>Datos en Firestore:</strong> Se conservan hasta que los elimines desde la app</li>
              <li><strong>Backups en Drive:</strong> Se eliminan automáticamente al desinstalar la app o puedes borrarlos manualmente desde Configuración</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              9. Tus Derechos
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Tienes derecho a:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <li><strong>Acceder:</strong> Todas tus notas están disponibles en la app</li>
              <li><strong>Modificar:</strong> Edita tus notas en cualquier momento</li>
              <li><strong>Eliminar:</strong> Borra notas individuales o todas desde Configuración</li>
              <li><strong>Exportar:</strong> Comparte notas en formato JSON</li>
              <li><strong>Revocar acceso:</strong> Cierra sesión y elimina los backups de Drive</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              10. Eliminación Completa de Datos
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Para eliminar completamente tus datos:
            </p>
            <ol className="list-decimal pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <li>En la app: Vacía la papelera de notas eliminadas</li>
              <li>Configuración → "Borrar todas las notas"</li>
              <li>Configuración → "Borrar respaldos de Drive"</li>
              <li>Desinstala la aplicación</li>
              <li>(Opcional) Revoca el acceso de Amelii desde tu cuenta de Google</li>
            </ol>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              11. Cookies y Tecnologías de Seguimiento
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              La aplicación móvil NO utiliza cookies. Firebase puede usar identificadores de dispositivo para funciones básicas como autenticación y análisis de rendimiento, pero no se utilizan para rastreo publicitario.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              12. Menores de Edad
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Amelii no recopila intencionalmente información de menores de 13 años. Si eres padre/tutor y crees que tu hijo nos ha proporcionado información personal, contáctanos para eliminarla.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              13. Cambios a esta Política
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Podemos actualizar esta política ocasionalmente. Te notificaremos cualquier cambio significativo mediante una actualización de la app o un aviso dentro de la aplicación. El uso continuado después de los cambios constituye tu aceptación de la nueva política.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              14. Contacto
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Si tienes preguntas sobre esta Política de Privacidad, contáctanos:
            </p>
            <ul className="list-none text-gray-600 dark:text-gray-300 space-y-2">
              <li><strong>Email:</strong> privacy@amelii.app (placeholder - actualizar con email real)</li>
              <li><strong>Desde la app:</strong> Configuración → Ayuda → Enviar Feedback</li>
            </ul>
          </section>

          <section className="mt-12 p-6 bg-teal-50 dark:bg-teal-950/20 rounded-lg">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              <strong>En resumen:</strong> Amelii está diseñada con la privacidad como prioridad. Solo recopilamos lo esencial, protegemos tus datos con múltiples capas de seguridad, y nunca compartimos tu información con terceros. Tus notas son tuyas y solo tuyas.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-semibold text-teal-600 hover:text-teal-500"
          >
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </main>
  );
}
