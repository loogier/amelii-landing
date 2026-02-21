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

          ? Volver a Control Horario

        </Link>



        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl mb-8">

          Politica de Privacidad

        </h1>



        <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">

          <p className="text-gray-600 dark:text-gray-300">

            <strong>Ultima actualizacion:</strong> 5 de febrero de 2026

          </p>



          <section className="mt-8">

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">

              1. Informacion que recopilamos

            </h2>

            <p className="text-gray-600 dark:text-gray-300 mb-4">

              Control Horario recopila solo la informacion necesaria para el funcionamiento de la app:

            </p>

            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">

              <li><strong>Registros de tiempo:</strong> fechas, horas de entrada y salida, pausas, tipo de hora y notas</li>

              <li><strong>Calculos y totales:</strong> horas trabajadas, bonos y montos segun tu tarifa</li>

              <li><strong>Preferencias:</strong> configuraciones como recordatorios, atajos y opciones de vista</li>

            </ul>

          </section>



          <section className="mt-8">

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">

              2. Informacion que NO recopilamos

            </h2>

            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">

              <li>Contactos del dispositivo</li>

              <li>Mensajes, llamadas o historial de navegacion</li>

              <li>Fotos, videos o archivos multimedia</li>

              <li>Datos bancarios o de pago</li>

              <li>Ubicacion en segundo plano sin tu accion</li>

            </ul>

          </section>



          <section className="mt-8">

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">

              3. Uso de la informacion

            </h2>

            <p className="text-gray-600 dark:text-gray-300 mb-4">

              Usamos la informacion solo para:

            </p>

            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">

              <li>Registrar y calcular tus horas trabajadas</li>

              <li>Generar reportes y PDFs por rango de fechas</li>

              <li>Gestionar backups y restauraciones locales</li>

              <li>Enviar notificaciones de recordatorio si las activas</li>

            </ul>

          </section>



          <section className="mt-8">

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">

              4. Almacenamiento de datos

            </h2>

            <p className="text-gray-600 dark:text-gray-300 mb-4">

              Los datos se almacenan localmente en tu dispositivo. La app realiza backups locales

              automaticos y manuales, y permite restaurarlos desde configuracion.

            </p>

            <p className="text-gray-600 dark:text-gray-300">

              Si decides conectar Google Drive, la app sincroniza y restaura backups en tu cuenta.

              Esta sincronizacion es opcional y se activa solo si tu la configuras.

            </p>

          </section>



          <section className="mt-8">

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">

              5. Backups portables y cifrado

            </h2>

            <p className="text-gray-600 dark:text-gray-300">

              Puedes crear un backup portable cifrado y compartirlo. La proteccion puede usar una

              contrasena personalizada si asi lo eliges.

            </p>

          </section>



          <section className="mt-8">

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">

              6. Notificaciones

            </h2>

            <p className="text-gray-600 dark:text-gray-300">

              La app puede enviar recordatorios de olvido de horas. Puedes activar, desactivar y

              configurar la hora e intervalo desde configuracion.

            </p>

          </section>



          <section className="mt-8">

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">

              7. Seguridad de acceso

            </h2>

            <p className="text-gray-600 dark:text-gray-300">

              Puedes proteger el acceso con PIN, patron o biometria. Estas opciones son configurables

              y pueden habilitarse o deshabilitarse desde la app.

            </p>

          </section>



          <section className="mt-8">

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">

              8. Compartir informacion con terceros

            </h2>

            <p className="text-gray-600 dark:text-gray-300">

              No compartimos, vendemos ni alquilamos tu informacion personal a terceros. Solo se

              comparte un backup con Google Drive si tu activas esa funcion.

            </p>

          </section>



          <section className="mt-8">

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">

              9. Papelera y eliminacion

            </h2>

            <p className="text-gray-600 dark:text-gray-300">

              Los registros eliminados pueden enviarse a papelera antes del borrado definitivo.

              Puedes vaciarla manualmente o configurar el vaciado automatico.

            </p>

          </section>



          <section className="mt-8">

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">

              10. Cambios a esta politica

            </h2>

            <p className="text-gray-600 dark:text-gray-300">

              Podemos actualizar esta politica ocasionalmente. Publicaremos los cambios en esta pagina.

            </p>

          </section>



          <section className="mt-8">

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">

              11. Contacto

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

              <strong>En resumen:</strong> Control Horario esta disenada para registrar horas de trabajo

              con el minimo de datos posible y con backups bajo tu control.

            </p>

          </section>

        </div>



        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">

          <Link

            href="/control-horario"

            className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-500"

          >

            ? Volver a Control Horario

          </Link>

        </div>

      </div>

    </main>

  );

}





