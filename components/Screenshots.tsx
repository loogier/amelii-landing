import Image from 'next/image';

export function Screenshots() {
  const screenshots = [
    {
      title: 'Editor Enriquecido',
      description: 'Formatea tus notas con herramientas profesionales',
      image: '/screenshots/screenshot-editor.png',
    },
    {
      title: 'Lista de Notas',
      description: 'Organiza y encuentra tus notas rápidamente',
      image: '/screenshots/screenshot-list.png',
    },
    {
      title: 'Búsqueda Rápida',
      description: 'Filtra por fecha y busca con precisión',
      image: '/screenshots/screenshot-search.png',
    },
  ];

  return (
    <section id="screenshots" className="px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-teal-600 dark:text-teal-400">
            Interfaz
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Diseño limpio y moderno
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Material Design 3 con tema claro y oscuro
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {screenshots.map((screenshot, index) => (
            <div key={index} className="flex flex-col">
              <div className="relative rounded-2xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 dark:bg-gray-100/5 dark:ring-gray-100/10">
                <div className="overflow-hidden rounded-lg shadow-xl bg-white dark:bg-gray-900">
                  <Image
                    src={screenshot.image}
                    alt={`${screenshot.title} - ${screenshot.description}`}
                    width={1080}
                    height={1920}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {screenshot.title}
                </h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  {screenshot.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
