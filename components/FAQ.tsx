'use client';

import { useState } from 'react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: '¿Es gratis?',
      answer: 'Sí, Amelii es completamente gratuita. Sin compras dentro de la app ni suscripciones.',
    },
    {
      question: '¿Mis notas son privadas?',
      answer: 'Absolutamente. Solo tú puedes acceder a tus notas. Las reglas de Firestore garantizan que cada usuario solo puede acceder a sus propias notas mediante validación del UID. Ni siquiera los desarrolladores pueden leer tus datos.',
    },
    {
      question: '¿Necesito internet para usar la app?',
      answer: 'No. La app funciona completamente offline. Puedes crear, editar y eliminar notas sin conexión. Los cambios se sincronizan automáticamente cuando te conectes.',
    },
    {
      question: '¿Cómo funciona el backup?',
      answer: 'Los backups se realizan automáticamente en Google Drive después de crear o editar una nota. El sistema implementa reintentos automáticos con backoff exponencial si hay problemas de conexión. Cada backup incluye validación SHA-256 para garantizar la integridad.',
    },
    {
      question: '¿Qué pasa si elimino una nota por error?',
      answer: 'Las notas eliminadas se mueven a la papelera local. Puedes restaurarlas desde la app antes de eliminarlas permanentemente.',
    },
    {
      question: '¿Cuántas notas puedo tener?',
      answer: 'La app está optimizada para manejar miles de notas. Los límites de seguridad son: máximo 100,000 notas por backup, 1MB por nota individual, y 100MB de tamaño total de backup. Son límites muy generosos que cubren casos de uso extremos.',
    },
    {
      question: '¿Funciona en varios dispositivos?',
      answer: 'Sí. Con el backup de Google Drive, puedes acceder a tus notas desde cualquier dispositivo Android donde instales la app. El sistema implementa resolución inteligente de conflictos con timestamps.',
    },
    {
      question: '¿Cómo elimino mi cuenta y datos?',
      answer: 'En la app: elimina todas las notas de la papelera. Luego ve a Configuración > "Borrar respaldos de Drive" y "Borrar todas las notas". Los datos en Drive se eliminan automáticamente al desinstalar la app.',
    },
  ];

  return (
    <section id="faq" className="bg-gray-50 dark:bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-teal-600 dark:text-teal-400">
            FAQ
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Preguntas frecuentes
          </p>
        </div>
        <div className="mt-16 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-lg bg-white dark:bg-gray-800 shadow-sm ring-1 ring-gray-200 dark:ring-gray-700"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-gray-900 dark:text-white">
                  {faq.question}
                </span>
                <svg
                  className={`h-5 w-5 text-gray-500 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
