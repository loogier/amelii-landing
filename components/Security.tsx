export function Security() {
  const securityFeatures = [
    {
      title: 'Autenticación Google',
      description: 'Inicia sesión de forma segura con tu cuenta de Google. Sin contraseñas que recordar.',
    },
    {
      title: 'Cifrado SHA-256',
      description: 'Todos los backups incluyen validación de integridad SHA-256 para garantizar que tus datos no se corrompan.',
    },
    {
      title: 'Reglas de Firestore',
      description: 'Cada operación se valida con reglas estrictas. Solo tú puedes acceder a tus notas mediante validación del UID.',
    },
    {
      title: 'Sin Terceros',
      description: 'Ni nosotros ni nadie más puede leer tus notas. Los datos son exclusivamente tuyos.',
    },
    {
      title: 'Logs Sanitizados',
      description: 'Los logs de la app eliminan automáticamente emails, tokens y API keys para proteger tu privacidad.',
    },
    {
      title: 'Límites de Seguridad',
      description: 'Timeouts de 30s, límites de tamaño (100MB) y rate limiting previenen ataques DoS y abusos.',
    },
  ];

  return (
    <section id="security" className="bg-teal-50 dark:bg-teal-950/20 px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-teal-600 dark:text-teal-400">
            Seguridad
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Tu privacidad es nuestra prioridad
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Múltiples capas de seguridad para proteger tus datos en todo momento
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          {securityFeatures.map((feature) => (
            <div
              key={feature.title}
              className="flex gap-x-4 rounded-xl bg-white dark:bg-gray-800 p-6 ring-1 ring-inset ring-gray-200 dark:ring-gray-700"
            >
              <div className="flex-none rounded-lg bg-teal-600 p-2 ring-1 ring-inset ring-teal-600/20">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="text-base leading-7">
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
