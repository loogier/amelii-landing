# Informe de funciones reales (Control Horario)

Este informe lista solo funciones verificables en el código de la aplicación.

**Registro de horas y cálculo**
- Crear registros con fecha, hora de entrada y salida. (`lib/views/add_record_view.dart`)
- Cálculo automático de horas trabajadas. (`lib/views/add_record_view.dart`)
- Tipos de hora: Normal, Noche, Domingo, Feriado. (`lib/views/add_record_view.dart`, `lib/utils/feriados.dart`)
- Cálculo de horas mixtas por tramo cuando un turno cruza tipos de hora. (`lib/views/add_record_view.dart`)
- Detección de feriados para clasificar el tipo de hora. (`lib/utils/feriados.dart`, `lib/views/add_record_view.dart`)
- Descuento de hora de refrigerio (si está habilitado en configuración). (`lib/views/add_record_view.dart`, `lib/views/configuracion_view.dart`)
- Precio por hora automático según tarifa configurada o edición manual del precio. (`lib/views/add_record_view.dart`, `lib/utils/precios_config.dart`)
- Bonos adicionales y descripción/nota por registro. (`lib/views/add_record_view.dart`)
- Atajos de horarios predefinidos y gestión de atajos personalizados. (`lib/views/add_record_view.dart`)
- Editar registros existentes. (`lib/views/add_record_view.dart`)

**Visualización y filtros**
- Lista principal en vista de tarjetas o vista de tabla. (`lib/views/home_view.dart`)
- Filtros de fecha: Todos, Hoy, Esta Semana, Este Mes, Rango de Fecha. (`lib/views/home_view.dart`)
- Resumen de totales en la parte inferior (horas, base, bonos y total general). (`lib/views/home_view.dart`)
- Mostrar/ocultar monto en tarjetas. (`lib/views/configuracion_view.dart`, `lib/services/hive_service.dart`)
- Mostrar/ocultar resumen inferior. (`lib/views/configuracion_view.dart`, `lib/services/hive_service.dart`)
- Actualización manual por gesto (pull-to-refresh). (`lib/views/home_view.dart`)

**Reportes y exportación**
- Generar reportes PDF por rango de fechas (día único o rango). (`lib/views/home_view.dart`)
- Compartir el PDF desde la app. (`lib/views/home_view.dart`)
- Impresión de reportes PDF (si el dispositivo lo permite). (`lib/views/home_view.dart`)
- Logo de la app incluido en el PDF cuando está disponible. (`lib/views/home_view.dart`, `lib/services/pdf_generator_service.dart`)
- Opción para mostrar nombre de usuario en reportes. (`lib/views/configuracion_view.dart`)

**Backups y restauración**
- Backup automático local al guardar cambios y de forma periódica. (`lib/services/backup_service.dart`, `lib/views/home_view.dart`, `lib/views/ayuda_view.dart`)
- Backup manual desde la pantalla principal. (`lib/views/home_view.dart`)
- Ver y restaurar backups locales. (`lib/views/configuracion_view.dart`, `lib/services/backup_service.dart`)
- Crear backup portable cifrado para compartir. (`lib/services/backup_service.dart`, `lib/views/configuracion_view.dart`)
- Compartir backup con o sin contraseña personalizada. (`lib/views/configuracion_drawer.dart`, `lib/views/ayuda_view.dart`)
- Google Drive: conectar cuenta, sincronizar backup, listar backups y restaurar. (`lib/services/google_drive_backup_service.dart`, `lib/views/configuracion_view.dart`, `lib/views/ayuda_view.dart`)

**Seguridad de acceso**
- Bloqueo al iniciar con PIN, patrón o biometría (huella). (`lib/services/auth_service.dart`, `lib/views/security_entry_view.dart`)
- Configurar y habilitar/deshabilitar métodos de seguridad desde Configuración. (`lib/views/configuracion_view.dart`)

**Notificaciones**
- Recordatorio de “olvido de horas”. (`lib/services/notification_service.dart`, `lib/views/configuracion_view.dart`)
- Configurar hora diaria de notificación. (`lib/views/configuracion_view.dart`, `lib/services/hive_service.dart`)
- Configurar intervalo de recordatorio. (`lib/views/configuracion_view.dart`, `lib/services/hive_service.dart`)
- Envío de notificación de prueba. (`lib/views/configuracion_view.dart`)

**Papelera**
- Envío de registros a papelera antes de borrado definitivo. (`lib/views/home_view.dart`, `lib/services/hive_service.dart`)
- Ver papelera y vaciarla manualmente. (`lib/views/configuracion_view.dart`)
- Auto vaciado de papelera (7/14/30/90 días). (`lib/views/configuracion_view.dart`, `lib/services/hive_service.dart`)

**Ayuda y soporte**
- Centro de ayuda con preguntas frecuentes dentro de la app. (`lib/views/ayuda_view.dart`)
- Enviar feedback por email (sugerencias, reportes de error o preguntas). (`lib/views/feedback_screen.dart`, `lib/services/feedback_service.dart`)
