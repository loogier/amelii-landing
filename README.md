# Amelii Landing Page

Landing page moderna para la app de notas Amelii, construida con Next.js 16, TypeScript y Tailwind CSS.

## 🚀 Características

- ✅ Diseño moderno y responsivo
- ✅ Tema claro y oscuro automático
- ✅ Optimizado para SEO
- ✅ Componentes reutilizables
- ✅ TypeScript para seguridad de tipos
- ✅ Tailwind CSS para estilos
- ✅ Build optimizado para producción

## 📋 Secciones

1. **Hero**: Presentación principal con CTA de descarga
2. **Features**: 6 características principales de la app
3. **Security**: Capas de seguridad implementadas
4. **Screenshots**: Galería de imágenes de la app
5. **FAQ**: Preguntas frecuentes con acordeón interactivo
6. **Footer**: Enlaces y descarga del APK

## 🛠️ Desarrollo Local

### Prerrequisitos

- Node.js 18+ instalado
- npm o yarn

### Instalación

```bash
# Ya está instalado, pero si necesitas reinstalar:
npm install
```

### Ejecutar en desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Build para producción

```bash
npm run build
npm start
```

## 🌐 Despliegue en Vercel (Gratis)

### Opción 1: Desde GitHub (Recomendado)

1. **Sube el código a GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/amelii-landing.git
   git push -u origin main
   ```

2. **Conecta con Vercel:**
   - Ve a [vercel.com](https://vercel.com)
   - Sign in con GitHub
   - Click "Import Project"
   - Selecciona tu repositorio
   - Vercel detectará automáticamente Next.js
   - Click "Deploy"

3. **Configuración automática:**
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

4. **Tu sitio estará en vivo en:**
   - `https://amelii-landing.vercel.app` (o el nombre que elijas)

### Opción 2: Desde CLI de Vercel

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy a producción
vercel --prod
```

### Variables de Entorno (si las necesitas después)

Crea un archivo `.env.local`:

```env
# Añade aquí tus variables si es necesario
```

## 📝 Personalización

### Agregar Screenshots Reales

1. Coloca tus screenshots en `public/screenshots/`
2. Actualiza el componente `components/Screenshots.tsx`
3. Reemplaza los placeholders con:
   ```tsx
   <Image 
     src="/screenshots/imagen.png" 
     alt="Screenshot"
     width={300}
     height={600}
   />
   ```

### Actualizar APK para Descarga

1. Coloca tu APK en `public/amelii-release.apk`
2. El botón de descarga ya apunta a esa ruta

### Cambiar Colores

El tema usa el color teal (#00897B). Para cambiarlo:

1. Abre `tailwind.config.ts`
2. Modifica los colores en el theme
3. O reemplaza `teal-600` por otro color en los componentes

## 📦 Estructura del Proyecto

```
landingpages/
├── app/
│   ├── layout.tsx     # Layout principal con metadata
│   ├── page.tsx       # Página principal
│   └── globals.css    # Estilos globales
├── components/
│   ├── Hero.tsx       # Sección hero
│   ├── Features.tsx   # Características
│   ├── Security.tsx   # Seguridad
│   ├── Screenshots.tsx # Screenshots
│   ├── FAQ.tsx        # Preguntas frecuentes
│   └── Footer.tsx     # Footer con descarga
├── public/            # Archivos estáticos
└── README.md
```

## 🎨 Tecnologías

- **Framework**: Next.js 16 con App Router
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Fuentes**: Geist Sans y Geist Mono
- **Deploy**: Vercel

## 📄 Licencia

Proyecto desarrollado para Amelii.

## 🤝 Contribuir

1. Fork el proyecto
2. Crea tu rama (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

**Próximos pasos:**
1. ✅ Proyecto creado y corriendo
2. 📸 Agrega screenshots reales de la app
3. 📱 Coloca el APK en `/public/amelii-release.apk`
4. 🚀 Deploy a Vercel
5. 🌐 Comparte tu link!
