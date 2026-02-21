import Link from 'next/link';



export const metadata = {

  title: 'Terminos de Uso - Control Horario',

  description: 'Terminos de uso y condiciones de servicio de Control Horario.',

};



export default function ControlHorarioTermsPage() {

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

          Terminos de Uso

        </h1>



        <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">

          <p className="text-gray-600 dark:text-gray-300">

            <strong>Ultima actualizacion:</strong> 5 de febrero de 2026

          </p>



          <section className="mt-8">

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">

              1. Aceptacion de los terminos

            </h2>

            <p className="text-gray-600 dark:text-gray-300">

              Al usar Control Horario ("la App"), aceptas estos Terminos de Uso. Si no estas de acuerdo,

              no uses la App.

            </p>

          </section>



          <section className="mt-8">

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">

              2. Descripcion del servicio

            </h2>

            <p className="text-gray-600 dark:text-gray-300 mb-4">

              Control Horario permite registrar horas de entrada, salida y pausas, calcular el total de

              horas trabajadas, aplicar tipos de hora (normal, noche, domingo, feriado) y generar reportes

              en PDF.

            </p>

          </section>



          <section className="mt-8">

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">

              3. Uso permitido

            </h2>

            <p className="text-gray-600 dark:text-gray-300 mb-4">

              Puedes usar la App para fines personales o laborales, siempre que sea legal. No puedes:

            </p>

            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">

              <li>Modificar, descompilar o realizar ingenieria inversa de la App</li>

              <li>Usar la App para actividades ilegales</li>

              <li>Intentar acceder a datos de otros usuarios</li>

              <li>Interferir con el funcionamiento normal de la App</li>

            </ul>

          </section>



          <section className="mt-8">

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">

              4. Backups y restauracion

            </h2>

            <p className="text-gray-600 dark:text-gray-300 mb-4">

              La app crea backups locales automaticos y permite crear backups portables cifrados.

              Puedes restaurarlos desde configuracion. Si conectas Google Drive, tambien puedes

              sincronizar y restaurar backups en tu cuenta.

            </p>

          </section>



          <section className="mt-8">

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">

              5. Seguridad de acceso

            </h2>

            <p className="text-gray-600 dark:text-gray-300">

              Puedes proteger el acceso con PIN, patron o biometria. Es tu responsabilidad mantener

              seguro tu dispositivo y tus metodos de acceso.

            </p>

          </section>



          <section className="mt-8">

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">

              6. Notificaciones

            </h2>

            <p className="text-gray-600 dark:text-gray-300">

              La app puede enviar recordatorios configurables para evitar el olvido de fichajes. Puedes

              activar o desactivar estas notificaciones en cualquier momento.

            </p>

          </section>



          <section className="mt-8">

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">

              7. Responsabilidad del usuario

            </h2>

            <p className="text-gray-600 dark:text-gray-300">

              Eres responsable de la exactitud de los registros que ingresas y de mantener copias de

              seguridad si lo consideras necesario.

            </p>

          </section>



          <section className="mt-8">

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">

              8. Disponibilidad y cambios

            </h2>

            <p className="text-gray-600 dark:text-gray-300">

              Podemos modificar, suspender o discontinuar funciones de la App en cualquier momento. Nos

              esforzamos por mantener la disponibilidad, pero no garantizamos que el servicio sea ininterrumpido.

            </p>

          </section>



          <section className="mt-8">

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">

              9. Propiedad intelectual

            </h2>

            <p className="text-gray-600 dark:text-gray-300">

              La App, su diseno y su codigo fuente son propiedad del desarrollador. Todos los derechos

              no expresamente otorgados quedan reservados.

            </p>

          </section>



          <section className="mt-8">

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">

              10. Limitacion de responsabilidad

            </h2>

            <p className="text-gray-600 dark:text-gray-300">

              En la medida permitida por la ley, la App se proporciona "tal cual" sin garantias de ningun tipo.

              No somos responsables por danos indirectos o perdida de datos.

            </p>

          </section>



          <section className="mt-8">

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">

              11. Cambios a estos terminos

            </h2>

            <p className="text-gray-600 dark:text-gray-300">

              Podemos actualizar estos terminos ocasionalmente. Publicaremos los cambios en esta pagina.

            </p>

          </section>



          <section className="mt-8">

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">

              12. Contacto

            </h2>

            <p className="text-gray-600 dark:text-gray-300 mb-4">

              Si tienes preguntas sobre estos Terminos de Uso, contactanos:

            </p>

            <ul className="list-none text-gray-600 dark:text-gray-300 space-y-2">

              <li><strong>Email:</strong> soporte+controlhorario@loogier.com</li>

            </ul>

          </section>



          <section className="mt-12 p-6 bg-blue-50 dark:bg-blue-950/20 rounded-lg">

            <p className="text-sm text-gray-600 dark:text-gray-300">

              <strong>Al usar Control Horario, confirmas que has leido y aceptas estos Terminos de Uso.</strong>

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





