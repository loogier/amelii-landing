import Link from 'next/link';

export const metadata = {
  title: 'Politica de Privacidad - Finanzas Plus',
  description: 'Politica de privacidad de Finanzas Plus.',
};

export default function FinanzasPlusPrivacyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="mx-auto max-w-4xl px-6 py-24 sm:py-32">
        <Link
          href="/finanzasplus"
          className="inline-flex items-center text-sm font-semibold text-emerald-600 hover:text-emerald-500 mb-8"
        >
          Volver a Finanzas Plus
        </Link>

        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl mb-8">
          Politica de Privacidad
        </h1>

        <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-300">
            <strong>Ultima actualizacion:</strong> 21 de abril de 2026
          </p>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Informacion general
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Esta Politica de Privacidad describe como <strong>Finanzas Plus</strong> (en adelante,
              &quot;la Aplicacion&quot;), desarrollada por <strong>Richad F.</strong>, maneja la
              informacion de sus usuarios. Al usar la Aplicacion, aceptas las practicas descritas
              en este documento.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              1. Informacion que recopilamos
            </h2>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
              1.1 Datos financieros personales
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              La Aplicacion te permite registrar transacciones, cuentas, deudas y presupuestos.
              Todos estos datos son almacenados unicamente en tu dispositivo en una base de datos
              cifrada. No se transmiten a ningun servidor externo.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
              1.2 Datos de diagnostico (Crashlytics)
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              La Aplicacion utiliza <strong>Firebase Crashlytics</strong> (Google LLC) para
              detectar y reportar errores. En caso de un fallo, se envia automaticamente
              informacion tecnica como:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <li>Modelo y version del dispositivo Android</li>
              <li>Version del sistema operativo</li>
              <li>Traza del error (stack trace)</li>
              <li>Hora y fecha del fallo</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-300 mt-4">
              Estos reportes no contienen datos financieros personales ni informacion de
              identificacion personal como nombre o correo.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
              1.3 Datos biometricos
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Si activas el desbloqueo con huella dactilar o reconocimiento facial, la Aplicacion
              utiliza la API del sistema operativo Android (<code>BiometricPrompt</code>). Los datos
              biometricos nunca salen del dispositivo y la Aplicacion no tiene acceso a ellos; solo
              recibe un resultado de exito o fallo del sistema.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              2. Permisos utilizados
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="border border-gray-300 px-4 py-3 text-gray-900 dark:border-gray-700 dark:text-white">
                      Permiso
                    </th>
                    <th className="border border-gray-300 px-4 py-3 text-gray-900 dark:border-gray-700 dark:text-white">
                      Motivo
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 text-gray-600 dark:border-gray-700 dark:text-gray-300">
                      INTERNET
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-600 dark:border-gray-700 dark:text-gray-300">
                      Envio de reportes de errores a Firebase Crashlytics
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 text-gray-600 dark:border-gray-700 dark:text-gray-300">
                      ACCESS_NETWORK_STATE
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-600 dark:border-gray-700 dark:text-gray-300">
                      Verificar conectividad antes de enviar reportes de error
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 text-gray-600 dark:border-gray-700 dark:text-gray-300">
                      USE_BIOMETRIC
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-600 dark:border-gray-700 dark:text-gray-300">
                      Desbloqueo opcional con huella dactilar o facial
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 text-gray-600 dark:border-gray-700 dark:text-gray-300">
                      POST_NOTIFICATIONS
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-600 dark:border-gray-700 dark:text-gray-300">
                      Recordatorios de pagos y deudas (opcionales)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 text-gray-600 dark:border-gray-700 dark:text-gray-300">
                      SCHEDULE_EXACT_ALARM
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-600 dark:border-gray-700 dark:text-gray-300">
                      Programar recordatorios a hora exacta
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              3. Como usamos la informacion
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              La informacion recopilada se usa exclusivamente para:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <li>Mostrarte tus propios datos financieros dentro de la Aplicacion</li>
              <li>Mejorar la estabilidad de la Aplicacion mediante reportes de errores anonimos</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-300 mt-4">
              <strong>No vendemos, alquilamos ni compartimos tu informacion personal</strong> con
              terceros con fines comerciales o publicitarios.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              4. Almacenamiento y seguridad
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Todos tus datos financieros se almacenan localmente en tu dispositivo usando una base
              de datos cifrada con <strong>SQLCipher</strong>. La Aplicacion no sincroniza datos a
              la nube de forma automatica. La funcion de copia de seguridad genera un archivo
              cifrado en tu dispositivo que tu decides donde guardar.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              5. Servicios de terceros
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              La Aplicacion integra los siguientes servicios externos:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <li>
                <strong>Firebase Crashlytics</strong> (Google LLC) - Reportes de errores.
                <br />
                Politica de privacidad:{' '}
                <a
                  href="https://firebase.google.com/support/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-600 hover:text-emerald-500"
                >
                  firebase.google.com/support/privacy
                </a>
              </li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              6. Datos de menores
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              La Aplicacion no esta dirigida a menores de 13 anos y no recopila conscientemente
              informacion de menores. Si eres padre o tutor y crees que tu hijo ha proporcionado
              datos, contactanos para eliminarlos.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              7. Tus derechos
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Dado que todos tus datos financieros residen en tu dispositivo, puedes eliminarlos en
              cualquier momento desinstalando la Aplicacion o usando la funcion de <em>eliminar
              todos los datos</em> dentro de la app. Los reportes de errores anonimos en Firebase
              Crashlytics se eliminan segun la politica de retencion de Google (90 dias).
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              8. Cambios a esta politica
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Podemos actualizar esta Politica de Privacidad ocasionalmente. La fecha de ultima
              actualizacion al inicio del documento indica cuando fue revisada por ultima vez. El
              uso continuado de la Aplicacion tras los cambios implica tu aceptacion.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              9. Contacto
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Si tienes preguntas sobre esta politica, puedes contactarnos en:
            </p>
            <ul className="list-none text-gray-600 dark:text-gray-300 space-y-2">
              <li>
                <strong>Richad F.</strong> -{' '}
                <a
                  href="mailto:soporte+finanzasplus@loogier.com"
                  className="text-emerald-600 hover:text-emerald-500"
                >
                  soporte+finanzasplus@loogier.com
                </a>
              </li>
            </ul>
          </section>

          <section className="mt-12 p-6 bg-emerald-50 dark:bg-emerald-950/20 rounded-lg">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              <strong>En resumen:</strong> Finanzas Plus almacena tus datos financieros en tu
              dispositivo, usa Firebase Crashlytics solo para reportes tecnicos de errores y no
              comparte tu informacion personal con fines comerciales.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
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
