# 🚀 Guía de Despliegue en Vercel - CamiCan

## ✅ Estado del Proyecto

✓ Build exitoso
✓ Sin errores críticos
✓ Optimizado para producción
✓ SEO configurado

## 📋 Pasos para Desplegar

### Método 1: GitHub + Vercel (Recomendado)

#### 1. Preparar el repositorio

```bash
# Asegúrate de estar en la rama main
git status

# Si hay cambios pendientes, guárdalos
git add .
git commit -m "feat: Preparado para despliegue en Vercel"
git push origin main
```

#### 2. Conectar con Vercel

1. Ve a [vercel.com](https://vercel.com)
2. Click en "Sign Up" o "Login" (con GitHub)
3. Autoriza Vercel a acceder a tus repositorios
4. Click en "Add New Project"
5. Busca y selecciona el repositorio `CAM_IBG`

#### 3. Configurar el proyecto

Vercel detectará automáticamente:
- **Framework**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

Simplemente click en **"Deploy"**

#### 4. Esperar el deploy (2-3 minutos)

Vercel:
- ✓ Instalará dependencias
- ✓ Ejecutará el build
- ✓ Optimizará assets
- ✓ Generará una URL pública

---

### Método 2: Vercel CLI (Avanzado)

```bash
# 1. Instalar Vercel CLI
npm install -g vercel

# 2. Login
vercel login

# 3. Deploy (desde la raíz del proyecto)
cd /home/eplynuxdev/Downloads/CAMARAS_IBAGUE
vercel

# 4. Seguir las instrucciones interactivas:
# - Set up and deploy? Yes
# - Which scope? [Tu cuenta]
# - Link to existing project? No
# - Project name? camican (o el que prefieras)
# - Directory? ./ (por defecto)
# - Override settings? No

# 5. Para deploy a producción
vercel --prod
```

---

## 🔧 Configuración Post-Deploy

### 1. Variables de Entorno (Opcional)

Si necesitas variables de entorno:

1. Ve a tu proyecto en Vercel Dashboard
2. Settings → Environment Variables
3. Agrega:
   ```
   NEXT_PUBLIC_SITE_URL = https://tu-dominio.vercel.app
   ```

### 2. Dominio Personalizado

Para usar tu propio dominio:

1. Settings → Domains
2. Agrega tu dominio (ej: `camican.com`)
3. Configura DNS según instrucciones de Vercel

---

## 📱 Actualizaciones Continuas

Cada vez que hagas push a `main`:

```bash
git add .
git commit -m "Actualización de contenido"
git push origin main
```

✨ **Vercel desplegará automáticamente** en 2-3 minutos

---

## 🎯 URLs Importantes

Después del deploy tendrás:

- **Producción**: `https://camican.vercel.app` (o tu dominio)
- **Dashboard**: `https://vercel.com/[tu-usuario]/camican`
- **Analytics**: Dashboard → Analytics
- **Logs**: Dashboard → Deployments → Ver logs

---

## 🐛 Solución de Problemas

### Error: "Build failed"
```bash
# Verifica que el build funcione localmente
npm run build

# Si hay errores, corrígelos antes de deploy
```

### Error: "No se encuentran dependencias"
```bash
# Asegúrate que package.json y package-lock.json estén en el repo
git add package.json package-lock.json
git commit -m "fix: Agregar archivos de dependencias"
git push
```

### Imágenes no se ven
- Verifica que las imágenes estén en `/public`
- Usa rutas relativas: `/imagen.jpg`

---

## 📊 Optimizaciones Incluidas

✅ **Performance**
- Server Components por defecto
- Imágenes optimizadas
- CSS minificado
- Bundle size optimizado

✅ **SEO**
- Sitemap.xml generado
- Robots.txt configurado
- Meta tags completos
- Open Graph tags

✅ **Analytics**
- Vercel Analytics listo
- Web Vitals tracking

---

## 🎉 ¡Listo!

Tu sitio estará disponible en:
- URL temporal: `https://[proyecto]-[usuario].vercel.app`
- Con tu dominio: `https://tu-dominio.com`

**Tiempo estimado total: 5-10 minutos** ⚡
