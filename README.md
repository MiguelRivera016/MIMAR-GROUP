# MIMAR GROUP - Sitio Web Corporativo Oficial

Sitio web oficial del grupo empresarial MIMAR GROUP, construido con Next.js 15, React 19 y TypeScript.

## 🚀 Tecnologías

- **Framework:** Next.js 15.5.6 (App Router)
- **UI Library:** React 19.1.0
- **Lenguaje:** TypeScript 5
- **Estilos:** Tailwind CSS 3
- **Animaciones:** Framer Motion
- **Emails:** Resend API
- **Tipografías:** Poppins & Playfair Display (Google Fonts)

## 📋 Características

### ✨ Funcionalidades Implementadas

- ✅ **Diseño Responsive Completo**
  - Navegación móvil con menú hamburguesa
  - Optimización para tablets y desktop
  - Touch-friendly en dispositivos móviles

- ✅ **Optimización de Performance**
  - Next.js Image para optimización automática de imágenes
  - Code splitting y lazy loading
  - Compresión y minificación habilitadas
  - Headers de seguridad configurados

- ✅ **SEO Avanzado**
  - Metadata completa con Open Graph
  - Sitemap dinámico
  - Schema.org para datos estructurados
  - URLs canónicas

- ✅ **Formulario de Contacto**
  - Validación en tiempo real
  - API backend con Resend
  - Estados de loading/success/error
  - Integración con WhatsApp

- ✅ **Animaciones Profesionales**
  - Fade-in al scroll
  - Hover effects sutiles
  - Transiciones suaves
  - Microinteracciones

- ✅ **Secciones del Sitio**
  - Hero corporativo
  - Empresas del grupo
  - Testimonios y casos de éxito
  - Equipo directivo
  - Timeline histórico
  - Formulario de contacto avanzado

## 🏗️ Estructura del Proyecto

```
MIMAR-GROUP/
├── app/                        # Next.js App Router
│   ├── api/                    # API Routes
│   │   └── contact/            # Endpoint de contacto
│   ├── contacto/               # Página de contacto
│   ├── divisiones/             # [Legacy] Divisiones
│   ├── empresas/               # Empresas del grupo
│   ├── nosotros/               # Sobre nosotros
│   ├── privacidad/             # Política de privacidad
│   ├── proyectos/              # Proyectos y prensa
│   ├── layout.tsx              # Layout raíz
│   ├── page.tsx                # Página de inicio
│   └── globals.css             # Estilos globales
│
├── components/                 # Componentes React
│   ├── CompaniesGrid.tsx       # Grid de empresas
│   ├── FadeInView.tsx          # Animación scroll
│   ├── Footer.tsx              # Footer corporativo
│   ├── HeroCorporate.tsx       # Hero principal
│   ├── Navbar.tsx              # Navegación
│   ├── Testimonials.tsx        # Testimonios
│   └── ValuesStrip.tsx         # Valores corporativos
│
├── public/                     # Archivos estáticos
│   ├── assets/
│   │   ├── branding/           # Logo
│   │   └── images/             # Imágenes
│   └── favicon.ico
│
├── next.config.js              # Configuración Next.js
├── tailwind.config.ts          # Configuración Tailwind
├── tsconfig.json               # Configuración TypeScript
└── package.json                # Dependencias
```

## 🛠️ Instalación y Desarrollo

### Requisitos Previos

- Node.js 18+
- npm o pnpm

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/MiguelRivera016/MIMAR-GROUP.git

# Navegar al directorio
cd MIMAR-GROUP

# Instalar dependencias
npm install

# Configurar variables de entorno (opcional)
cp .env.example .env
# Editar .env y agregar tu RESEND_API_KEY
```

### Variables de Entorno

Crear un archivo `.env` en la raíz del proyecto:

```env
# API Key de Resend para envío de emails
RESEND_API_KEY=re_tu_api_key_aqui
```

> **Nota:** El formulario funciona en modo desarrollo sin API key (solo logs en consola).

### Comandos de Desarrollo

```bash
# Desarrollo (http://localhost:3000)
npm run dev

# Build de producción
npm run build

# Iniciar servidor de producción
npm run start
```

## 🎨 Sistema de Diseño

### Paleta de Colores

```javascript
colors: {
  group: {
    50: "#EFF4FF",
    500: "#3D69D6",
    600: "#2E53AA",
    700: "#234080",
  },
  gold: {
    50: "#FFF7E8",
    400: "#E9AD37",
    600: "#D9991F",
  },
  ink: {
    600: "#475569",
    700: "#334155",
    900: "#0f172a",
  }
}
```

### Componentes de Utilidad

```css
.container-pro     → Max-width 1200px con padding adaptativo
.btn-primary       → Botón azul corporativo
.btn-ghost         → Botón outline
.section-pad       → Padding vertical responsivo
.shadow-card       → Sombra personalizada para cards
.rounded-xl2       → Border radius 1rem
```

## 🔐 Seguridad

Headers HTTP configurados en `next.config.js`:

- `X-Frame-Options: SAMEORIGIN`
- `X-Content-Type-Options: nosniff`
- `Strict-Transport-Security`
- `Referrer-Policy: origin-when-cross-origin`
- `Permissions-Policy`

## 📧 Configuración de Emails

El sitio usa [Resend](https://resend.com) para el envío de emails del formulario de contacto.

1. Crear cuenta en [resend.com](https://resend.com)
2. Obtener API key
3. Agregar a `.env`:
   ```
   RESEND_API_KEY=re_tu_api_key
   ```
4. Verificar dominio en Resend (opcional, para producción)
5. Actualizar el email `from` en `/app/api/contact/route.ts`

## 🚀 Deployment

### Vercel (Recomendado)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

O conectar el repositorio de GitHub directamente en [vercel.com](https://vercel.com).

### Variables de Entorno en Producción

Configurar en el dashboard de Vercel:

```
RESEND_API_KEY=re_tu_api_key_de_produccion
```

## 📱 Sitios Relacionados

- **MIMAR Solutions:** [mimarsolutions.lat](https://mimarsolutions.lat)
- **MIMAR GROUP:** [mimargroup-hn.lat](https://mimargroup-hn.lat)

## 🤝 Contribución

Este es un proyecto privado de MIMAR GROUP. Para consultas o sugerencias:

- Email: mimargrouphn@gmail.com
- WhatsApp: +504 9387-0479

## 📄 Licencia

© 2024 MIMAR GROUP. Todos los derechos reservados.

---

## 📝 Notas de Desarrollo

### Mejoras Implementadas

- [x] Menú de navegación móvil responsivo
- [x] Optimización de imágenes con Next.js Image
- [x] Headers de seguridad configurados
- [x] API de formulario de contacto con validación
- [x] Animaciones con Framer Motion
- [x] Componente de Testimonios/Casos de Éxito
- [x] Página Nosotros mejorada con equipo directivo
- [x] Documentación completa del proyecto

### Roadmap Futuro

- [ ] Blog/Centro de Noticias
- [ ] Sistema de gestión de contenido (CMS)
- [ ] Internacionalización (ES/EN)
- [ ] Portal de clientes
- [ ] Google Analytics integration
- [ ] Tests automatizados (Vitest + Playwright)
- [ ] TypeScript en modo estricto

## 🆘 Soporte

Para problemas técnicos:

1. Revisar la documentación de [Next.js](https://nextjs.org/docs)
2. Consultar [Tailwind CSS](https://tailwindcss.com/docs)
3. Contactar al equipo técnico de MIMAR GROUP

---

**Desarrollado con 💙 por MIMAR GROUP**
