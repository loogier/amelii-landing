import Link from 'next/link';

export const metadata = {
  title: 'Terminos de Uso - Finanzas Plus',
  description: 'Terminos de uso y condiciones de servicio de Finanzas Plus.',
};

export default function FinanzasPlusTermsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="mx-auto max-w-4xl px-6 py-24 sm:py-32">
        <Link
          href="/finanzasplus"
          className="mb-8 inline-flex items-center text-sm font-semibold text-emerald-600 hover:text-emerald-500"
        >
          Volver a Finanzas Plus
        </Link>

        <h1 className="mb-8 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          Terminos de Uso
        </h1>

        <div className="prose prose-lg prose-slate max-w-none dark:prose-invert">
          <p className="text-gray-600 dark:text-gray-300">
            <strong>Ultima actualizacion:</strong> 21 de abril de 2026
          </p>

          <section className="mt-8">
            <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900 dark:text-white">
              Informacion general
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Por favor lee estos Terminos de Uso detenidamente antes de utilizar{' '}
              <strong>Finanzas Plus</strong>, en adelante la Aplicacion, desarrollada por{' '}
              <strong>Richad F.</strong>. Al descargar, instalar o usar la Aplicacion, aceptas
              quedar vinculado por estos terminos. Si no estas de acuerdo, no uses la Aplicacion.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900 dark:text-white">
              1. Uso permitido
            </h2>
            <p className="mb-4 text-gray-600 dark:text-gray-300">
              La Aplicacion esta disenada exclusivamente para uso personal y no comercial. Puedes
              usarla para:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-gray-600 dark:text-gray-300">
              <li>Registrar tus ingresos, gastos, deudas y presupuestos personales</li>
              <li>Organizar y visualizar tu situacion financiera personal</li>
              <li>Exportar y hacer copias de seguridad de tus propios datos</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900 dark:text-white">
              2. Restricciones
            </h2>
            <p className="mb-4 text-gray-600 dark:text-gray-300">Queda expresamente prohibido:</p>
            <ul className="list-disc space-y-2 pl-6 text-gray-600 dark:text-gray-300">
              <li>Usar la Aplicacion con fines ilegales o fraudulentos</li>
              <li>Intentar descompilar, hacer ingenieria inversa o modificar la Aplicacion</li>
              <li>Reproducir, distribuir o sublicenciar la Aplicacion sin autorizacion escrita</li>
              <li>Usar la Aplicacion en nombre de terceros con fines comerciales sin autorizacion</li>
              <li>Intentar vulnerar los mecanismos de seguridad o cifrado de la Aplicacion</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900 dark:text-white">
              3. Responsabilidad sobre los datos
            </h2>
            <p className="mb-4 text-gray-600 dark:text-gray-300">
              Todos los datos que registras en la Aplicacion, como transacciones, cuentas, deudas y
              presupuestos, son de tu exclusiva responsabilidad. La Aplicacion no valida ni verifica
              la exactitud de la informacion que ingresas.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Te recomendamos realizar copias de seguridad periodicas desde la seccion de{' '}
              <em>Configuracion</em> de la Aplicacion. <strong>Richad F. no es responsable por la
              perdida de datos</strong> derivada de un fallo del dispositivo, desinstalacion
              accidental o dano a la base de datos local.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900 dark:text-white">
              4. Precision financiera
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              La Aplicacion es una herramienta de registro y organizacion personal.{' '}
              <strong>No constituye asesoramiento financiero, contable ni legal.</strong> Las cifras
              mostradas dependen exclusivamente de los datos que el usuario ingresa. Richad F. no
              garantiza la exactitud de los calculos ante usos incorrectos o datos incompletos.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900 dark:text-white">
              5. Disponibilidad del servicio
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              La Aplicacion funciona principalmente de forma <strong>offline</strong>. Las funciones
              que requieren conexion a internet, por ejemplo los reportes de errores, dependen de la
              disponibilidad de servicios de terceros como Firebase. Richad F. no garantiza
              disponibilidad continua de dichos servicios y no se responsabiliza por interrupciones
              ajenas a su control.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900 dark:text-white">
              6. Propiedad intelectual
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              La Aplicacion, incluyendo su codigo fuente, diseno, graficos, nombre y logotipo, es
              propiedad de <strong>Richad F.</strong> y esta protegida por las leyes de propiedad
              intelectual aplicables. Nada en estos Terminos te transfiere derechos de propiedad
              sobre la Aplicacion.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900 dark:text-white">
              7. Actualizaciones
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Richad F. puede lanzar actualizaciones de la Aplicacion en cualquier momento. Algunas
              actualizaciones pueden ser necesarias para continuar usando la Aplicacion
              correctamente. El uso continuado tras una actualizacion implica la aceptacion de los
              cambios introducidos.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900 dark:text-white">
              8. Terminacion
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Puedes dejar de usar la Aplicacion en cualquier momento desinstalandola de tu
              dispositivo. Richad F. se reserva el derecho de descontinuar la Aplicacion o cualquiera
              de sus funciones sin previo aviso.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900 dark:text-white">
              9. Limitacion de responsabilidad
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              En la maxima medida permitida por la ley aplicable, Richad F. no sera responsable por
              danos directos, indirectos, incidentales o consecuentes que surjan del uso o la
              imposibilidad de usar la Aplicacion, incluyendo pero no limitado a perdida de datos,
              perdidas financieras o interrupciones del servicio.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900 dark:text-white">
              10. Modificaciones a estos Terminos
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Richad F. puede actualizar estos Terminos de Uso en cualquier momento. La fecha de
              ultima actualizacion indica cuando fueron revisados por ultima vez. El uso continuado
              de la Aplicacion tras los cambios implica tu aceptacion de los nuevos terminos.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900 dark:text-white">
              11. Ley aplicable
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Estos Terminos se rigen por las leyes vigentes en la Republica del Peru. Cualquier
              disputa derivada del uso de la Aplicacion se sometera a la jurisdiccion de los
              tribunales competentes en dicho territorio.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900 dark:text-white">
              12. Contacto
            </h2>
            <p className="mb-4 text-gray-600 dark:text-gray-300">
              Para cualquier consulta sobre estos Terminos de Uso:
            </p>
            <ul className="list-none space-y-2 text-gray-600 dark:text-gray-300">
              <li>
                <strong>Richad F.</strong> -{' '}
                <a
                  href="mailto:loogier.dev@gmail.com"
                  className="text-emerald-600 hover:text-emerald-500"
                >
                  loogier.dev@gmail.com
                </a>
              </li>
            </ul>
          </section>

          <section className="mt-12 rounded-lg bg-emerald-50 p-6 dark:bg-emerald-950/20">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              <strong>Al usar Finanzas Plus, confirmas que has leido y aceptas estos Terminos de Uso.</strong>
            </p>
          </section>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8 dark:border-gray-700">
          <Link
            href="/finanzasplus"
            className="inline-flex items-center text-sm font-semibold text-emerald-600 hover:text-emerald-500"
          >
            Volver a Finanzas Plus
          </Link>
        </div>
      </div>
    </main>
  );
}
