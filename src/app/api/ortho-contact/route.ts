import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = 'fhatzerian@gmail.com';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { nombre, clinica, barrio, matricula, telefono, email, mensaje, website } = body;

    // Honeypot anti-spam
    if (website) {
      return NextResponse.json({ ok: true });
    }

    const { data, error } = await resend.emails.send({
      from: 'STICK Web <onboarding@resend.dev>',
      to: TO_EMAIL,
      replyTo: email,
      subject: `Nueva consulta de ortodoncista: ${nombre}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #171d38; padding: 24px; border-radius: 12px 12px 0 0;">
            <p style="color: #dcf09a; font-size: 20px; font-weight: 900; margin: 0;">STICK Alineadores</p>
          </div>
          <div style="background: #f9fafb; padding: 24px; border-radius: 0 0 12px 12px; border: 1px solid #e5e7eb; border-top: none;">
            <h2 style="color: #171d38; margin: 0 0 16px;">Nueva consulta de ortodoncista</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 14px; width: 110px;">Nombre</td>
                <td style="padding: 8px 0; color: #111827; font-size: 14px; font-weight: 600;">${nombre}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Email</td>
                <td style="padding: 8px 0; color: #111827; font-size: 14px;"><a href="mailto:${email}" style="color: #3d4f8a;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Teléfono</td>
                <td style="padding: 8px 0; color: #111827; font-size: 14px;">${telefono}</td>
              </tr>
              ${barrio ? `<tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Barrio/Zona</td>
                <td style="padding: 8px 0; color: #111827; font-size: 14px;">${barrio}</td>
              </tr>` : ''}
              ${clinica ? `<tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Clínica</td>
                <td style="padding: 8px 0; color: #111827; font-size: 14px;">${clinica}</td>
              </tr>` : ''}
              ${matricula ? `<tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Matrícula</td>
                <td style="padding: 8px 0; color: #111827; font-size: 14px;">${matricula}</td>
              </tr>` : ''}
              ${mensaje ? `<tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 14px; vertical-align: top;">Mensaje</td>
                <td style="padding: 8px 0; color: #111827; font-size: 14px;">${mensaje}</td>
              </tr>` : ''}
            </table>
            <hr style="margin: 20px 0; border: none; border-top: 1px solid #e5e7eb;" />
            <p style="color: #9ca3af; font-size: 12px; margin: 0;">
              Enviado desde el formulario de contacto de <a href="https://stickalineadores.com.ar" style="color: #3d4f8a;">stickalineadores.com.ar</a>
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('[STICK] Resend error:', error);
      return NextResponse.json({ ok: false, error }, { status: 500 });
    }

    console.log('[STICK] Email enviado:', data);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[STICK] Error en contacto ortodoncista:', err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
