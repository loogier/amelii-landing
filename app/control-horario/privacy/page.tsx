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
              Informacion general
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Control Horario es una aplicacion disenada para que puedas registrar y gestionar tus
              horas de trabajo de forma privada y segura. Todos tus datos se almacenan localmente en
              tu dispositivo. Esta politica describe que informacion utiliza la app y como la protege.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              1. Informacion que recopilamos
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Control Horario recopila solo la informacion que tu introduces directamente:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <li><strong>Registros de tiempo:</strong> fechas, horas de entrada y salida, pausas, tipo de hora y notas opcionales</li>
              <li><strong>Calculos y totales:</strong> horas trabajadas, bonos y montos segun tu tarifa configurada</li>
              <li><strong>Preferencias:</strong> ajustes de la app como recordatorios, atajos y opciones de vista</li>
              <li><strong>Credenciales de seguridad:</strong> PIN o patron de desbloqueo, almacenados cifrados en el dispositivo</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              2. Informacion que NO recopilamos
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              La app no accede ni recopila:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <li>Contactos del dispositivo</li>
              <li>Mensajes, llamadas o historial de navegacion</li>
              <li>Fotos, videos o archivos multimedia</li>
              <li>Datos bancarios o de pago</li>
              <li>Ubicacion geografica</li>
              <li>Datos biometricos (la biometria se gestiona exclusivamente por el sistema operativo Android, la app nunca accede a tus datos biometricos)</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              3. Uso de la informacion
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              La informacion se usa exclusivamente para:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <li>Registrar y calcular tus horas trabajadas</li>
              <li>Generar reportes y PDFs exportables por rango de fechas</li>
              <li>Gestionar backups y restauraciones locales y en Google Drive</li>
              <li>Enviar notificaciones de recordatorio de fichar si las activas</li>
              <li>Proteger el acceso a la app mediante PIN, patron o biometria</li>
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
              La app realiza backups locales automaticos y manuales. Puedes restaurar cualquier backup
              desde los ajustes de la aplicacion.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              5. Google Drive (opcional)
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              La app ofrece la posibilidad de sincronizar backups con tu cuenta personal de Google
              Drive. Esta funcion es completamente opcional:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <li>Solo se activa si tu la configuras desde los ajustes</li>
              <li>Los backups se suben cifrados a una carpeta privada de tu Google Drive, a la que solo tu puedes acceder</li>
              <li>La app solicita permisos de Google Drive unicamente para leer y escribir en esa carpeta</li>
              <li>No accedemos ni leemos ningun otro archivo de tu Google Drive</li>
              <li>Puedes desconectar Google Drive en cualquier momento desde la configuracion de la app o desde tu cuenta de Google</li>
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
              prefieras. Puedes protegerlo con una contrasena personalizada. El descifrado requiere
              esa misma contrasena, por lo que solo tu controlas el acceso a ese backup.
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
              <li><strong>Claves seguras:</strong> las claves de cifrado se almacenan en Android Keystore, el almacen seguro del sistema operativo</li>
              <li><strong>PIN y patron:</strong> almacenados usando PBKDF2 con sal aleatoria; jamas se guarda el valor en texto plano</li>
              <li><strong>Biometria:</strong> gestionada por el sistema Android (BiometricPrompt API); la app nunca accede a los datos biometricos del dispositivo</li>
              <li><strong>Acceso con contrasena:</strong> los backups cifrados portables usan AES-256-GCM con clave derivada de tu contrasena</li>
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
              <li><strong>Biometria:</strong> para el desbloqueo de la app con huella o reconocimiento facial (opcional)</li>
              <li><strong>Google Drive:</strong> para sincronizar backups en tu cuenta personal (opcional)</li>
              <li><strong>Optimizacion de bateria:</strong> la app puede solicitar quedar exenta de la optimizacion de bateria de Android para asegurar el envio puntual de notificaciones</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              9. Notificaciones
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Si activas los recordatorios, la app envia notificaciones locales a la hora e intervalo
              que tu configures. Estas notificaciones no requieren conexion a internet y no se
              procesan en ningun servidor externo. Puedes desactivarlas en cualquier momento desde
              los ajustes de la app o desde los ajustes de notificaciones del sistema.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              10. Papelera y eliminacion de datos
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Los registros eliminados pueden enviarse a la papelera antes del borrado definitivo.
              Puedes vaciarla manualmente o configurar el vaciado automatico por antiguedad. Al
              desinstalar la app, todos los datos locales se eliminan del dispositivo. Si tienes
              backups en Google Drive, puedes eliminarlos desde tu cuenta de Google.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              11. Compartir informacion con terceros
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              No compartimos, vendemos ni alquilamos tu informacion personal a terceros. La unica
              interaccion con un servicio externo es Google Drive, y solo si tu activas esa funcion
              voluntariamente. En ese caso, aplica la politica de privacidad de Google.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              12. Cambios a esta politica
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Podemos actualizar esta politica ocasionalmente. Publicaremos los cambios en esta
              pagina con la fecha de la ultima actualizacion. Te recomendamos revisarla periodicamente.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              13. Contacto
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
