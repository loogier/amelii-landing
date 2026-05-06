export function DataDeletion() {
  return (
    <section
      id="eliminacion-de-datos"
      className="bg-white dark:bg-gray-800 px-6 py-16 sm:py-20 lg:px-8 border-t border-gray-200 dark:border-gray-700"
    >
      <div className="mx-auto max-w-4xl">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl mb-10">
          Eliminación de datos / Data Deletion
        </h2>

        {/* Español */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-teal-600 dark:text-teal-400 mb-4">
            ¿Cómo elimino mi cuenta y datos?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            En la app: elimina las notas y vacía la papelera.
            <br />
            Luego ve a <strong>Configuración</strong> y usa:
          </p>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-1 mb-4">
            <li>Borrar respaldos de Drive</li>
            <li>Borrar todas las notas</li>
          </ul>
          <div className="rounded-lg bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 p-4">
            <p className="text-sm font-semibold text-amber-800 dark:text-amber-300 mb-2">Importante:</p>
            <ul className="list-disc pl-5 text-sm text-amber-700 dark:text-amber-400 space-y-1">
              <li>Al desinstalar Amelii se eliminan los datos locales del dispositivo.</li>
              <li>Los respaldos en Google Drive <strong>no se eliminan automáticamente</strong> al desinstalar la app.</li>
              <li>Para borrar datos en Drive debes usar la opción <strong>Borrar respaldos de Drive</strong> dentro de la app.</li>
            </ul>
          </div>
        </div>

        {/* English */}
        <div>
          <h3 className="text-xl font-semibold text-teal-600 dark:text-teal-400 mb-4">
            How do I delete my account and data?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            In the app, delete your notes and empty the trash.
            <br />
            Then go to <strong>Settings</strong> and use:
          </p>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-1 mb-4">
            <li>Delete Drive backups</li>
            <li>Delete all notes</li>
          </ul>
          <div className="rounded-lg bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 p-4">
            <p className="text-sm font-semibold text-amber-800 dark:text-amber-300 mb-2">Important:</p>
            <ul className="list-disc pl-5 text-sm text-amber-700 dark:text-amber-400 space-y-1">
              <li>Uninstalling Amelii removes local data stored on the device.</li>
              <li>Backups stored in Google Drive are <strong>not automatically deleted</strong> when uninstalling the app.</li>
              <li>To remove data from Drive, use the <strong>Delete Drive backups</strong> option inside the app.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
