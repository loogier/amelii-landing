# Loogier Apps Portfolio

Portfolio de aplicaciones móviles construido con Next.js 16, TypeScript y Tailwind CSS.

🌐 **Sitio en producción:** [loogier.com](https://loogier.com)

## 🚀 Características

- ✅ Diseño moderno y responsivo
- ✅ Estructura multi-app escalable
- ✅ Tema claro y oscuro automático
- ✅ Optimizado para SEO
- ✅ Componentes reutilizables
- ✅ TypeScript para seguridad de tipos
- ✅ Tailwind CSS para estilos
- ✅ Deploy automático con Vercel
- ✅ Dominio personalizado con SSL

## 📱 Apps Incluidas

### **Amelii** - App de notas inteligente
- Landing page completa: [loogier.com/amelii](https://loogier.com/amelii)
- Descarga: Google Play Store
- Características: Editor enriquecido, sincronización con Google Drive, cifrado SHA-256

## 📋 Estructura del Sitio

1. **Homepage** (`/`): Portfolio con lista de todas las apps
2. **Amelii** (`/amelii`): Landing page completa con 6 secciones
   - Hero: Presentación principal con CTA
   - Features: 6 características principales
   - Security: Implementaciones de seguridad
   - Screenshots: Galería de imágenes
   - FAQ: 8 preguntas frecuentes con acordeón
   - Footer: Descarga en Play Store
3. **Privacy** (`/privacy`): Política de privacidad (14 secciones)
4. **Terms** (`/terms`): Términos de uso (20 secciones)

## 🛠️ Desarrollo Local

### Prerrequisitos

- Node.js 18+ instalado
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/loogier/amelii-landing.git
cd amelii-landing

# Instalar dependencias
npm install
```

### Ejecutar en desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Build local

```bash
npm run build
npm start
```

## 🌐 Producción

**Sitio en vivo:** [loogier.com](https://loogier.com)

### Deploy Automático

El sitio está configurado con **Vercel** para deploy automático:
- ✅ Push a `main` → Deploy automático
- ✅ SSL/HTTPS activado
- ✅ CDN global
- ✅ Dominio personalizado configurado

### URLs de Producción

- Homepage: https://loogier.com
- Amelii: https://loogier.com/amelii
- Privacy: https://loogier.com/privacy
- Terms: https://loogier.com/terms## 📝 Agregar Nuevas Apps

Para agregar una nueva app al portfolio:

1. **Edita `app/page.tsx`** y agrega un objeto al array `apps`:

```tsx
{
  name: 'Tu Nueva App',
  description: 'Descripción breve y atractiva',
  icon: '🎯', // Emoji que represente tu app
  href: '/nombre-app',
  color: 'blue',
  features: ['Feature 1', 'Feature 2', 'Feature 3'],
  status: 'Disponible' // o 'Próximamente'
}
```

2. **Crea la carpeta de la app:**
```bash
mkdir app/nombre-app
```

3. **Crea `app/nombre-app/page.tsx`** con tu landing page completa

4. **Commit y push:**
```bash
git add .
git commit -m "feat: Agregar nueva app"
git push
```

Vercel desplegará automáticamente en https://loogier.com/nombre-app

## 📦 Estructura del Proyecto

```
landingpages/
├── app/
│   ├── layout.tsx          # Layout principal con metadata global
│   ├── page.tsx            # Homepage con portfolio de apps
│   ├── globals.css         # Estilos globales
│   ├── amelii/
│   │   └── page.tsx        # Landing page de Amelii
│   ├── privacy/
│   │   └── page.tsx        # Política de privacidad
│   └── terms/
│       └── page.tsx        # Términos de uso
├── components/
│   ├── Hero.tsx            # Componente Hero de Amelii
│   ├── Features.tsx        # Características
│   ├── Security.tsx        # Seguridad
│   ├── Screenshots.tsx     # Galería de screenshots
│   ├── FAQ.tsx             # Preguntas frecuentes
│   └── Footer.tsx          # Footer con descarga
├── public/
│   └── screenshots/        # Screenshots de apps
└── README.md
```

## 🎨 Personalización

### Actualizar Screenshots

1. Coloca tus screenshots en `public/screenshots/`
2. Actualiza el componente `components/Screenshots.tsx`
3. Usa el componente Image de Next.js para optimización automática

### Cambiar Colores del Tema

El tema usa el color teal (#00897B). Para cambiarlo:

1. Abre los componentes individuales
2. Reemplaza `teal-600`, `teal-500`, etc. por tu color preferido
3. O modifica `tailwind.config.ts` para agregar colores personalizados

## 🎨 Tecnologías

- **Framework**: Next.js 16 con App Router
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Fuentes**: Geist Sans y Geist Mono
- **Hosting**: Vercel
- **Dominio**: loogier.com
- **SSL**: Automático vía Vercel
- **CDN**: Global edge network

## 📊 SEO y Performance

- ✅ Metadata optimizada por página
- ✅ OpenGraph tags configurados
- ✅ Imágenes optimizadas con Next.js Image
- ✅ Build estático para máxima velocidad
- ✅ Lighthouse Score: 90+

## 🚀 Roadmap

- [x] Homepage con portfolio de apps
- [x] Landing page completa de Amelii
- [x] Páginas legales (Privacy & Terms)
- [x] Deploy en producción
- [x] Dominio personalizado
- [ ] Segunda app lista para agregar
- [ ] Analytics (opcional)
- [ ] Blog/actualizaciones (opcional)

## 📄 Licencia

© 2026 Loogier Apps. Todos los derechos reservados.

---

**Desarrollado por** [loogier](https://github.com/loogier)  
**Visita el sitio:** [loogier.com](https://loogier.com)
