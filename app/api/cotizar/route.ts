import { NextResponse } from "next/server"
import { Resend } from "resend"

// Check if API key exists
const apiKey = process.env.RESEND_API_KEY
if (!apiKey) {
  console.warn("RESEND_API_KEY is not configured")
}

const resend = apiKey ? new Resend(apiKey) : null

// Map insurance type IDs to readable names
const insuranceTypeNames: Record<string, string> = {
  vida: "Seguro de Vida",
  "gastos-medicos": "Gastos Médicos",
  auto: "Seguro de Auto",
  hogar: "Seguro de Hogar",
  empresarial: "Empresarial",
}

export async function POST(request: Request) {
  try {
    // Check if Resend is configured
    if (!resend) {
      console.error("Resend API key not configured")
      return NextResponse.json(
        { error: "Servicio de correo no configurado" },
        { status: 503 }
      )
    }

    const body = await request.json()
    const { nombre, apellido, email, telefono, tipoSeguro, mensaje } = body

    // Validate required fields
    if (!nombre || !email || !telefono || !tipoSeguro) {
      return NextResponse.json(
        { error: "Faltan campos requeridos" },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Formato de email inválido" },
        { status: 400 }
      )
    }

    const insuranceTypeName = insuranceTypeNames[tipoSeguro] || tipoSeguro
    const fullName = apellido ? `${nombre} ${apellido}` : nombre

    // Send email to agents
    const { data, error } = await resend.emails.send({
      from: process.env.EMAIL_FROM || "Seguros <onboarding@resend.dev>",
      to: process.env.AGENT_EMAILS?.split(",") || ["agent@example.com"],
      subject: `Nueva Solicitud de Cotización - ${insuranceTypeName}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                line-height: 1.6;
                color: #160C04;
                background-color: #FAFAF8;
                padding: 20px;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                background: white;
                border-radius: 12px;
                overflow: hidden;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              }
              .header {
                background: #160C04;
                color: #EBD9B4;
                padding: 30px;
                text-align: center;
              }
              .header h1 {
                margin: 0;
                font-size: 24px;
                font-weight: 600;
              }
              .badge {
                display: inline-block;
                background: #C9A86C;
                color: #160C04;
                padding: 6px 16px;
                border-radius: 20px;
                font-size: 12px;
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                margin-top: 10px;
              }
              .content {
                padding: 30px;
              }
              .field {
                margin-bottom: 20px;
                border-bottom: 1px solid #E5E5E5;
                padding-bottom: 15px;
              }
              .field:last-child {
                border-bottom: none;
              }
              .label {
                font-size: 11px;
                text-transform: uppercase;
                letter-spacing: 1px;
                color: #9CA3AF;
                font-weight: 600;
                margin-bottom: 5px;
              }
              .value {
                font-size: 16px;
                color: #160C04;
                font-weight: 500;
              }
              .footer {
                background: #F9FAFB;
                padding: 20px 30px;
                text-align: center;
                font-size: 12px;
                color: #6B7280;
              }
              .priority {
                background: #C9A86C15;
                border-left: 4px solid #C9A86C;
                padding: 15px;
                margin: 20px 0;
                border-radius: 4px;
              }
              .priority-text {
                color: #C9A86C;
                font-weight: 600;
                font-size: 14px;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>🔔 Nueva Solicitud de Cotización</h1>
                <span class="badge">${insuranceTypeName}</span>
              </div>

              <div class="content">
                <div class="priority">
                  <p class="priority-text">⚡ Responder en menos de 24 horas</p>
                </div>

                <div class="field">
                  <div class="label">Cliente</div>
                  <div class="value">${fullName}</div>
                </div>

                <div class="field">
                  <div class="label">Correo Electrónico</div>
                  <div class="value">
                    <a href="mailto:${email}" style="color: #C9A86C; text-decoration: none;">
                      ${email}
                    </a>
                  </div>
                </div>

                <div class="field">
                  <div class="label">Teléfono</div>
                  <div class="value">
                    <a href="tel:${telefono}" style="color: #C9A86C; text-decoration: none;">
                      ${telefono}
                    </a>
                  </div>
                </div>

                <div class="field">
                  <div class="label">Tipo de Seguro</div>
                  <div class="value">${insuranceTypeName}</div>
                </div>

                ${mensaje ? `
                  <div class="field">
                    <div class="label">Mensaje del Cliente</div>
                    <div class="value" style="white-space: pre-wrap; line-height: 1.6;">
                      ${mensaje}
                    </div>
                  </div>
                ` : ''}

                <div class="field">
                  <div class="label">Fecha y Hora</div>
                  <div class="value">
                    ${new Date().toLocaleString('es-MX', {
                      timeZone: 'America/Tijuana',
                      dateStyle: 'full',
                      timeStyle: 'short'
                    })}
                  </div>
                </div>
              </div>

              <div class="footer">
                <p style="margin: 0;">
                  Este correo fue generado automáticamente desde el sitio web.<br>
                  Por favor, contacta al cliente lo antes posible.
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
Nueva Solicitud de Cotización - ${insuranceTypeName}

Cliente: ${fullName}
Email: ${email}
Teléfono: ${telefono}
Tipo de Seguro: ${insuranceTypeName}

${mensaje ? `Mensaje:\n${mensaje}\n` : ''}

Fecha: ${new Date().toLocaleString('es-MX', { timeZone: 'America/Tijuana' })}

⚡ Responder en menos de 24 horas
      `.trim(),
    })

    if (error) {
      console.error("Error sending email:", error)
      return NextResponse.json(
        { error: `Error al enviar el correo: ${error.message}` },
        { status: 500 }
      )
    }

    return NextResponse.json(
      {
        success: true,
        message: "Cotización enviada exitosamente",
        emailId: data?.id
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error processing quote request:", error)
    return NextResponse.json(
      { error: "Error al procesar la solicitud" },
      { status: 500 }
    )
  }
}
