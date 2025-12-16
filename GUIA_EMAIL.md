# 📧 Guía: Recibir Emails del Formulario en tu Gmail

## 🚀 Opción 1: EmailJS (RECOMENDADA - Sin Backend)

EmailJS es **GRATIS** hasta 200 emails/mes y super fácil de configurar.

### Paso 1: Crear cuenta en EmailJS

1. Ve a [https://www.emailjs.com](https://www.emailjs.com)
2. Click en "Sign Up" (Registrarse gratis)
3. Usa tu Gmail para registrarte

### Paso 2: Conectar tu Gmail

1. En el Dashboard, ve a **"Email Services"**
2. Click en **"Add New Service"**
3. Selecciona **"Gmail"**
4. Click en **"Connect Account"** y autoriza tu Gmail
5. Copia el **Service ID** (ej: `service_abc123`)

### Paso 3: Crear Template de Email

1. Ve a **"Email Templates"**
2. Click en **"Create New Template"**
3. Pega este template:

```
Asunto: Nueva Cotización - {{nombre}}

De: {{nombre}}
Teléfono: {{telefono}}
Email: {{email}}
Dirección: {{direccion}}
Servicio: {{servicio}}

Mensaje:
{{mensaje}}

---
Enviado desde el formulario de CamiCan
```

4. Guarda y copia el **Template ID** (ej: `template_xyz789`)

### Paso 4: Obtener tu Public Key

1. Ve a **"Account"** → **"General"**
2. Copia tu **Public Key** (ej: `AbCdEfGhIjKlMnOp`)

### Paso 5: Instalar EmailJS

```bash
cd /home/eplynuxdev/Downloads/CAMARAS_IBAGUE
npm install @emailjs/browser
```

### Paso 6: Configurar Variables de Entorno

Crea el archivo `.env.local`:

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=tu_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=tu_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=tu_public_key
```

### Paso 7: Actualizar el Formulario

El código ya está listo en `contact-form.tsx`, solo necesitas:

1. Agregar las variables de entorno
2. El formulario enviará automáticamente los emails

---

## 🔧 Opción 2: Resend (Más Profesional)

Resend es perfecto para producción (100 emails/día gratis).

### Configuración Resend:

1. **Crear cuenta**: [https://resend.com](https://resend.com)
2. **Obtener API Key**
3. **Crear API Route** en Next.js:

```typescript
// app/api/send-email/route.ts
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const data = await request.json();

  try {
    const response = await resend.emails.send({
      from: 'CamiCan <onboarding@resend.dev>',
      to: 'tu-email@gmail.com',
      subject: `Nueva Cotización - ${data.nombre}`,
      html: `
        <h2>Nueva Solicitud de Cotización</h2>
        <p><strong>Nombre:</strong> ${data.nombre}</p>
        <p><strong>Teléfono:</strong> ${data.telefono}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Dirección:</strong> ${data.direccion}</p>
        <p><strong>Servicio:</strong> ${data.servicio}</p>
        <p><strong>Mensaje:</strong> ${data.mensaje}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
```

4. **Instalar**: `npm install resend`
5. **Variables de entorno**: `RESEND_API_KEY=tu_api_key`

---

## 📱 Opción 3: Google Forms (Más Simple)

Si quieres algo instantáneo:

1. Crea un Google Form con los campos del formulario
2. Activa "Recibir notificaciones por email"
3. Usa la URL del form en un iframe o link

---

## ✅ Recomendación Final

**Para tu caso, usa EmailJS:**

- ✅ No necesitas servidor
- ✅ Gratis hasta 200 emails/mes
- ✅ Configuración en 5 minutos
- ✅ Funciona perfectamente en Vercel
- ✅ Los emails llegan directamente a tu Gmail

**Siguiente paso:** Sigue la configuración de EmailJS (Opción 1) y dime cuando tengas:
- Service ID
- Template ID  
- Public Key

Te ayudo a integrarlos en el código. 🚀
