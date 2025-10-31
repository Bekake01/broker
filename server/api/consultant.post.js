import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: "live.smtp.mailtrap.io",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "api",
    pass: '92481dc640d692719a419b9fc5cd9265'
  },
});

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const { full_name, email, phone, description } = body;

    const message = `Consultant Request
          Customer Name: ${full_name}
          Customer Email: ${email}
          Phone: ${phone}

          Message:
          ${description}
`

    const html = `
      <div style="font-family:Arial, sans-serif; color:#333;">
        <h2>💬 Transport Consultant Request</h2>
        
        <h3>👤 Customer Information</h3>
        <p><b>Name:</b> ${full_name}<br/>
        <b>Email:</b> ${email}<br/>
        <b>Phone:</b> ${phone}</p>

        <h3>📝 Customer Message</h3>
        <div style="background:#f9f9f9; padding:15px; border-left:4px solid #007bff; margin:10px 0;">
          <p style="margin:0; white-space:pre-wrap;">${description}</p>
        </div>

        <p style="margin-top:20px; font-size:0.9em; color:#555;">
          This message was submitted via the Transport Consultant form on your website.
        </p>
      </div>
    `

    const info = await transporter.sendMail({
      from: 'info@demomailtrap.co',
      to: "info@fltransportinc.com",
      subject: `Consultant Request from ${full_name}`,
      text: message,
      html: html,
    });

    console.log('Consultant email sent successfully', info.messageId)
    return { status: 'success', message: 'Consultant request sent successfully' }
  } catch (error) {
    console.error('Error processing consultant request:', error)
    return { status: 'error', message: 'Server error' }
  }
})