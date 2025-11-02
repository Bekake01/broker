// import nodemailer from 'nodemailer'

// const transporter = nodemailer.createTransport({
//   host: "live.smtp.mailtrap.io",
//   port: 587,
//   secure: false, // true for 465, false for other ports
//   auth: {
//     user: "api",
//     pass: "6e62200d58032f76afec2d5edf68913a"
//   },
// });

import Nodemailer from "nodemailer";
import { MailtrapTransport } from "mailtrap";

const TOKEN = "6e62200d58032f76afec2d5edf68913a";

const transport = Nodemailer.createTransport(
  MailtrapTransport({
    token: TOKEN,
  })
);

const sender = {
  address: "hello@fltransportinc.com",
  name: "Consultant request",
};
const recipients = [
  "info@fltransportinc.com",
];

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

    await transport.sendMail({
      from: sender,
      to: recipients,
      subject: `Consultant Request from ${full_name}`,
      text: message,
      html: html,
    });
    return { status: 'success', message: 'Consultant request sent successfully' }
  } catch (error) {
    console.error('Error processing consultant request:', error.message)
    return { status: 'error', message: 'Server error' }
  }
})