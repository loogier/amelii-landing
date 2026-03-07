import Link from 'next/link';

export const metadata = {
  title: 'Politica de Privacidad - Control Horario',
  description: 'Politica de privacidad de Control Horario, la app para registrar horas trabajadas.',
};

export default function ControlHorarioPrivacyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="mx-auto max-w-4xl px-6 py-24 sm:py-32">
        <Link
          href="/control-horario"
          className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-500 mb-8"
        >
          ← Volver a Control Horario
        </Link>

        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl mb-8">
          Politica de Privacidad
        </h1>

        <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-300">
            <strong>Ultima actualizacion:</strong> 4 de marzo de 2026
          </p>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Información general
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Control Horario es una aplicación diseñada para que puedas registrar y gestionar tus
              horas de trabajo de forma privada y segura. Todos tus datos se almacenan localmente en
              tu dispositivo. Esta política describe qué información utiliza la app y cómo la protege.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              1. Información que recopilamos
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Control Horario recopila solo la información que tú introduces directamente:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <li><strong>Registros de tiempo:</strong> fechas, horas de entrada y salida, pausas, tipo de hora y notas opcionales</li>
              <li><strong>Cálculos y totales:</strong> horas trabajadas, bonos y montos según tu tarifa configurada</li>
              <li><strong>Preferencias:</strong> ajustes de la app como recordatorios, atajos y opciones de vista</li>
              <li><strong>Credenciales de seguridad:</strong> PIN o patrón de desbloqueo, almacenados cifrados en el dispositivo</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              2. Información que NO recopilamos
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              La app no accede ni recopila:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <li>Contactos del dispositivo</li>
              <li>Mensajes, llamadas o historial de navegación</li>
              <li>Fotos, videos o archivos multimedia</li>
              <li>Datos bancarios o de pago</li>
              <li>Ubicación geográfica</li>
              <li>Datos biométricos (la biometría se gestiona exclusivamente por el sistema operativo Android, la app nunca accede a tus datos biométricos)</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              3. Uso de la información
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              La información se usa exclusivamente para:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <li>Registrar y calcular tus horas trabajadas</li>
              <li>Generar reportes y PDFs exportables por rango de fechas</li>
              <li>Gestionar backups y restauraciones locales y en Google Drive</li>
              <li>Enviar notificaciones de recordatorio de fichar si las activas</li>
              <li>Proteger el acceso a la app mediante PIN, patrón o biometría</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              4. Almacenamiento de datos
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Todos tus datos se almacenan localmente en tu dispositivo usando una base de datos Hive
              cifrada. Los datos nunca se envian a servidores externos ni a terceros.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              La app realiza backups locales automáticos y manuales. Puedes restaurar cualquier backup
              desde los ajustes de la aplicación.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              5. Google Drive (opcional)
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              La app ofrece la posibilidad de sincronizar backups con tu cuenta personal de Google
              Drive. Esta función es completamente opcional:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <li>Solo se activa si tu la configuras desde los ajustes</li>
              <li>Los backups se suben cifrados a una carpeta privada de tu Google Drive, a la que solo tu puedes acceder</li>
              <li>La app solicita permisos de Google Drive unicamente para leer y escribir en esa carpeta</li>
              <li>No accedemos ni leemos ningún otro archivo de tu Google Drive</li>
              <li>Puedes desconectar Google Drive en cualquier momento desde la configuración de la app o desde tu cuenta de Google</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-300 mt-4">
              El uso de los servicios de Google esta sujeto a la{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-500"
              >
                Politica de Privacidad de Google
              </a>
              .
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              6. Backups portables y cifrado
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Puedes exportar un backup portable cifrado con AES-256 y compartirlo o guardarlo donde
              prefieras. Puedes protegerlo con una contraseña personalizada. El descifrado requiere
              esa misma contraseña, por lo que solo tú controlas el acceso a ese backup.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              7. Seguridad
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              La app implementa varias capas de seguridad para proteger tus datos:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <li><strong>Cifrado local:</strong> base de datos cifrada con AES-256</li>
              <li><strong>Claves seguras:</strong> las claves de cifrado se almacenan en Android Keystore, el almacén seguro del sistema operativo</li>
              <li><strong>PIN y patrón:</strong> almacenados usando PBKDF2 con sal aleatoria; jamás se guarda el valor en texto plano</li>
              <li><strong>Biometría:</strong> gestionada por el sistema Android (BiometricPrompt API); la app nunca accede a los datos biométricos del dispositivo</li>
              <li><strong>Acceso con contraseña:</strong> los backups cifrados portables usan AES-256-GCM con clave derivada de tu contraseña</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              8. Permisos del dispositivo
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              La app puede solicitar los siguientes permisos:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <li><strong>Notificaciones:</strong> para enviarte recordatorios de fichar (opcional, activado por el usuario)</li>
              <li><strong>Alarmas exactas:</strong> para garantizar que los recordatorios lleguen a la hora configurada</li>
              <li><strong>Inicio con el dispositivo:</strong> para restaurar los recordatorios tras un reinicio</li>
              <li><strong>Biometría:</strong> para el desbloqueo de la app con huella o reconocimiento facial (opcional)</li>
              <li><strong>Google Drive:</strong> para sincronizar backups en tu cuenta personal (opcional)</li>
              <li><strong>Optimización de batería:</strong> la app puede solicitar quedar exenta de la optimización de batería de Android para asegurar el envío puntual de notificaciones</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              9. Notificaciones
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Si activas los recordatorios, la app envía notificaciones locales a la hora e intervalo
              que tú configures. Estas notificaciones no requieren conexión a internet y no se
              procesan en ningún servidor externo. Puedes desactivarlas en cualquier momento desde
              los ajustes de la app o desde los ajustes de notificaciones del sistema.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              10. Papelera y eliminación de datos
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Los registros eliminados pueden enviarse a la papelera antes del borrado definitivo.
              Puedes vaciarla manualmente o configurar el vaciado automático por antigüedad. Al
              desinstalar la app, todos los datos locales se eliminan del dispositivo. Si tienes
              backups en Google Drive, puedes eliminarlos desde tu cuenta de Google.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              11. Compartir información con terceros
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              No compartimos, vendemos ni alquilamos tu información personal a terceros. La única
              interacción con un servicio externo es Google Drive, y solo si tú activas esa función
              voluntariamente. En ese caso, aplica la política de privacidad de Google.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              12. Cambios a esta política
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Podemos actualizar esta política ocasionalmente. Publicaremos los cambios en esta
              página con la fecha de la última actualización. Te recomendamos revisarla periódicamente.
            </p>
          </section>

          <section className="mt-8" id="eliminar-cuenta">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              13. Eliminación de cuenta y datos
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Control Horario no crea cuentas propias en servidores del desarrollador.
              Para eliminar completamente tu cuenta y datos asociados, sigue estos pasos:
            </p>
            <ol className="list-decimal pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <li><strong>Eliminar datos locales:</strong> Desinstala la aplicación del dispositivo. Todos los registros almacenados localmente se eliminarán de forma permanente.</li>
              <li><strong>Eliminar backup de Google Drive:</strong> Si activaste la copia de seguridad, accede a <a href="https://drive.google.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Drive</a> → carpeta <em>Copia de seguridad de Apps</em> → elimina la carpeta de Control Horario. Alternativamente, desde la app ve a <em>Configuración → Backup en Drive → Eliminar backup</em>.</li>
              <li><strong>Revocar acceso OAuth de Google:</strong> Accede a <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">myaccount.google.com/permissions</a> → busca <em>Control Horario</em> → pulsa <em>Eliminar acceso</em>.</li>
            </ol>
            <p className="text-gray-600 dark:text-gray-300 mt-4">
              Una vez completados estos pasos, no queda ningún dato tuyo accesible por la aplicación ni por el desarrollador.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              14. Contacto
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Si tienes preguntas sobre esta Politica de Privacidad, contactanos:
            </p>
            <ul className="list-none text-gray-600 dark:text-gray-300 space-y-2">
              <li><strong>Email:</strong> soporte+controlhorario@loogier.com</li>
            </ul>
          </section>

          <section className="mt-12 p-6 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              <strong>En resumen:</strong> Control Horario esta disenada para que registres tus horas
              de trabajo con el minimo acceso posible a tu informacion. Todos tus datos permanecen en
              tu dispositivo. Google Drive solo se usa si tu lo activas, y los backups viajan cifrados.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <Link
            href="/control-horario"
            className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-500"
          >
            ← Volver a Control Horario
          </Link>
        </div>
      </div>
    </main>
  );
}
