import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nombre, correo, mensaje, empresa, telefono } = body;

    // Validación de campos requeridos
    if (!nombre || !correo || !mensaje) {
      return NextResponse.json(
        { error: 'Todos los campos son requeridos' },
        { status: 400 }
      );
    }

    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correo)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    // Si no hay RESEND_API_KEY, devolver un mock exitoso para desarrollo
    if (!process.env.RESEND_API_KEY) {
      console.log('Formulario de contacto (modo desarrollo):', { nombre, correo, mensaje, empresa, telefono });
      return NextResponse.json({
        success: true,
        message: 'Mensaje enviado correctamente (modo desarrollo)',
        data: { nombre, correo }
      });
    }

    // Instanciar Resend solo cuando hay API key
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Enviar email usando Resend
    const { data, error } = await resend.emails.send({
      from: 'MIMAR GROUP <onboarding@resend.dev>', // Cambiar por tu dominio verificado
      to: ['mimargrouphn@gmail.com'],
      replyTo: correo,
      subject: `Nuevo contacto de ${nombre} - MIMAR GROUP`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #334155; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(to right, #2E53AA, #3D69D6); color: white; padding: 30px; border-radius: 8px 8px 0 0; }
              .content { background: #ffffff; padding: 30px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 8px 8px; }
              .field { margin-bottom: 20px; }
              .label { font-weight: 600; color: #475569; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; }
              .value { margin-top: 5px; color: #0f172a; }
              .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; text-align: center; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0; font-size: 24px;">Nuevo Mensaje de Contacto</h1>
                <p style="margin: 10px 0 0 0; opacity: 0.9;">Formulario del sitio web corporativo</p>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Nombre</div>
                  <div class="value">${nombre}</div>
                </div>
                <div class="field">
                  <div class="label">Correo Electrónico</div>
                  <div class="value"><a href="mailto:${correo}" style="color: #3D69D6;">${correo}</a></div>
                </div>
                ${empresa ? `
                <div class="field">
                  <div class="label">Empresa</div>
                  <div class="value">${empresa}</div>
                </div>
                ` : ''}
                ${telefono ? `
                <div class="field">
                  <div class="label">Teléfono</div>
                  <div class="value">${telefono}</div>
                </div>
                ` : ''}
                <div class="field">
                  <div class="label">Mensaje</div>
                  <div class="value" style="white-space: pre-wrap;">${mensaje}</div>
                </div>
              </div>
              <div class="footer">
                <p>Este mensaje fue enviado desde el formulario de contacto de <strong>MIMAR GROUP</strong></p>
                <p>mimargroup-hn.lat | San Pedro Sula, Honduras</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('Error al enviar email:', error);
      return NextResponse.json(
        { error: 'Error al enviar el mensaje' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Mensaje enviado correctamente',
      data: { id: data?.id }
    });

  } catch (error) {
    console.error('Error en API de contacto:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
