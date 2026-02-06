import Link from 'next/link';

export const metadata = {
  title: 'Términos de Uso - Amelii',
  description: 'Términos de uso y condiciones de servicio de Amelii.',
};

export default function TermsPage() {
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
          Términos de Uso
        </h1>

        <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-300">
            <strong>Última actualización:</strong> 5 de febrero de 2026
          </p>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              1. Aceptación de los Términos
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Al descargar, instalar o usar la aplicación Amelii ("la App"), aceptas estar sujeto a estos Términos de Uso. Si no estás de acuerdo con estos términos, no uses la App.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              2. Descripción del Servicio
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Amelii es una aplicación móvil para Android que proporciona:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <li>Creación y edición de notas con formato enriquecido</li>
              <li>Almacenamiento local de notas en tu dispositivo</li>
              <li>Sincronización opcional con Google Drive y Firestore</li>
              <li>Backup automático de notas en Google Drive</li>
              <li>Búsqueda y organización de notas</li>
              <li>Notificaciones y recordatorios</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              3. Licencia de Uso
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Te otorgamos una licencia personal, no exclusiva, no transferible y revocable para usar Amelii para fines personales. Esta licencia NO te permite:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <li>Modificar, descompilar o realizar ingeniería inversa de la App</li>
              <li>Copiar, distribuir o revender la App</li>
              <li>Usar la App para fines ilegales o no autorizados</li>
              <li>Intentar acceder a los datos de otros usuarios</li>
              <li>Sobrecargar o interrumpir el servicio</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              4. Cuenta de Usuario
            </h2>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
              4.1 Autenticación
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Para usar las funciones de sincronización y backup, debes iniciar sesión con una cuenta de Google. Eres responsable de:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <li>Mantener la seguridad de tu cuenta de Google</li>
              <li>Todas las actividades que ocurran bajo tu cuenta</li>
              <li>Notificarnos inmediatamente sobre cualquier uso no autorizado</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
              4.2 Uso sin Cuenta
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Puedes usar Amelii sin iniciar sesión, pero las funciones de sincronización y backup en la nube no estarán disponibles. Las notas se almacenarán solo localmente en tu dispositivo.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              5. Contenido del Usuario
            </h2>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
              5.1 Propiedad
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Tú eres el propietario exclusivo de todas las notas que crees en Amelii. No reclamamos ningún derecho sobre tu contenido.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
              5.2 Responsabilidad del Contenido
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Eres responsable del contenido que creas. No debes usar la App para:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <li>Almacenar contenido ilegal, difamatorio o que viole derechos de terceros</li>
              <li>Almacenar malware, virus o código malicioso</li>
              <li>Violar leyes locales, nacionales o internacionales</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
              5.3 Límites de Almacenamiento
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Para garantizar el rendimiento y seguridad, aplicamos los siguientes límites:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <li>Máximo 100,000 notas por backup</li>
              <li>Máximo 1MB por nota individual</li>
              <li>Máximo 100MB de tamaño total de backup</li>
              <li>Máximo 500 caracteres para títulos</li>
              <li>Máximo 100,000 caracteres por contenido de nota</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              6. Servicios de Terceros
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Amelii utiliza servicios de terceros:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <li><strong>Firebase (Google):</strong> Para autenticación y base de datos</li>
              <li><strong>Google Drive:</strong> Para almacenar backups</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-300 mt-4">
              El uso de estos servicios está sujeto a sus propios términos y condiciones. No somos responsables por cambios, interrupciones o problemas con estos servicios de terceros.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              7. Disponibilidad del Servicio
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Nos esforzamos por mantener Amelii disponible, pero:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <li>No garantizamos que la App esté libre de errores o interrupciones</li>
              <li>Podemos suspender el servicio temporalmente para mantenimiento</li>
              <li>No somos responsables por la disponibilidad de servicios de terceros (Firebase, Google Drive)</li>
              <li>Podemos modificar o discontinuar funciones con previo aviso</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              8. Backups y Pérdida de Datos
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Aunque implementamos backups automáticos y validación de integridad:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <li><strong>Es tu responsabilidad</strong> mantener copias de seguridad de tu información importante</li>
              <li>No somos responsables por pérdida de datos debido a fallos técnicos, errores del usuario o problemas con servicios de terceros</li>
              <li>Los backups en Google Drive están sujetos a los límites y términos de Google</li>
              <li>Recomendamos hacer backups manuales regularmente de información crítica</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              9. Privacidad
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              El uso de la App está sujeto a nuestra{' '}
              <Link href="/privacy" className="text-teal-600 hover:text-teal-500 font-semibold">
                Política de Privacidad
              </Link>
              , que forma parte de estos Términos de Uso. Por favor, léela cuidadosamente.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              10. Propiedad Intelectual
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Amelii, su diseño, código fuente, logos y todos los derechos de propiedad intelectual son propiedad exclusiva del desarrollador. Todos los derechos no expresamente otorgados están reservados.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              11. Descargo de Responsabilidad
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              LA APP SE PROPORCIONA "TAL CUAL" Y "SEGÚN DISPONIBILIDAD". EN LA MEDIDA PERMITIDA POR LA LEY:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <li>No proporcionamos garantías de ningún tipo, expresas o implícitas</li>
              <li>No garantizamos que la App cumpla con tus requisitos específicos</li>
              <li>No garantizamos que la App esté libre de errores o malware</li>
              <li>No somos responsables por daños indirectos, incidentales o consecuentes</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              12. Limitación de Responsabilidad
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              En la medida máxima permitida por la ley, nuestra responsabilidad total por cualquier reclamo relacionado con la App no excederá la cantidad que hayas pagado por la App (siendo esta gratuita, la responsabilidad es cero).
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              13. Indemnización
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Aceptas indemnizar y eximir de responsabilidad al desarrollador de Amelii de cualquier reclamo, daño, pérdida o gasto (incluyendo honorarios legales) que surja de:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <li>Tu uso de la App</li>
              <li>Tu violación de estos Términos</li>
              <li>Tu violación de derechos de terceros</li>
              <li>El contenido que almacenes en la App</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              14. Terminación
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Podemos suspender o terminar tu acceso a la App en cualquier momento, sin previo aviso, si:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <li>Violas estos Términos de Uso</li>
              <li>Usas la App de manera fraudulenta o abusiva</li>
              <li>Lo requiere la ley</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-300 mt-4">
              Puedes dejar de usar la App en cualquier momento desinstalándola de tu dispositivo.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              15. Modificaciones a los Términos
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Nos reservamos el derecho de modificar estos términos en cualquier momento. Te notificaremos cambios significativos mediante una actualización de la app o aviso dentro de la aplicación. El uso continuado después de los cambios constituye tu aceptación de los nuevos términos.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              16. Ley Aplicable
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Estos términos se regirán e interpretarán de acuerdo con las leyes de tu jurisdicción local, sin referencia a sus conflictos de disposiciones legales.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              17. Resolución de Disputas
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Cualquier disputa relacionada con estos términos o la App se resolverá mediante negociación de buena fe. Si no se puede resolver, se someterá a arbitraje o a los tribunales competentes de tu jurisdicción.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              18. Separabilidad
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Si alguna disposición de estos términos se considera inválida o inaplicable, las demás disposiciones seguirán en pleno vigor y efecto.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              19. Acuerdo Completo
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Estos Términos de Uso, junto con la Política de Privacidad, constituyen el acuerdo completo entre tú y Amelii respecto al uso de la App.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              20. Contacto
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Si tienes preguntas sobre estos Términos de Uso, contáctanos:
            </p>
            <ul className="list-none text-gray-600 dark:text-gray-300 space-y-2">
              <li><strong>Email:</strong> legal@amelii.app (placeholder - actualizar con email real)</li>
              <li><strong>Desde la app:</strong> Configuración → Ayuda → Enviar Feedback</li>
            </ul>
          </section>

          <section className="mt-12 p-6 bg-teal-50 dark:bg-teal-950/20 rounded-lg">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              <strong>Al usar Amelii, confirmas que has leído, entendido y aceptas estos Términos de Uso y la Política de Privacidad.</strong>
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
