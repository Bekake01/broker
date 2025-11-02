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
  name: "Quote request",
};
const recipients = [
  "info@fltransportinc.com",
];
export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const { from_location, to_location, ship_date, type, email, phone, full_name, vehicles } = body;


    const vehicleList = vehicles
    .map(
      (v, i) => `
      <tr>
        <td>${i + 1}</td>
        <td>${v.vehicle_year}</td>
        <td>${v.vehicle_type}</td>
        <td>${v.vehicle_model}</td>
        <td>${v.inop ? "Yes" : "No"}</td>
      </tr>
    `
    )
    .join("");

    const message = `Vehicle Transport Request
          From: ${from_location.display} (${from_location.county_name} County)
          To: ${to_location.display} (${to_location.county_name} County)

          Shipping Type: ${type}
          Ship Date: ${ship_date}

          Customer Name: ${full_name}
          Customer Email: ${email}
          Phone: ${phone}

          Vehicles:
          ${vehicles
            .map(
              (v, i) =>
                `${i + 1}. ${v.vehicle_year} ${v.vehicle_type} ${v.vehicle_model} (Inoperable: ${
                  v.inop ? "Yes" : "No"
                })`
            )
            .join("\n")}
`
    const html =  `
      <div style="font-family:Arial, sans-serif; color:#333;">
        <h2>🚗 Vehicle Transport Request</h2>
        <h3 style="margin-bottom:4px;">📍 From Location</h3>
        <p><b>${from_location.city}, ${from_location.state_id} ${from_location.zip}</b> <br/>
        County: ${from_location.county_name}</p>

        <h3 style="margin-bottom:4px;">🏁 To Location</h3>
        <p><b>${to_location.city}, ${to_location.state_id} ${to_location.zip}</b> <br/>
        County: ${to_location.county_name}</p>

        <h3>📅 Shipment Details</h3>
        <p><b>Ship Date:</b> ${ship_date}<br/>
        <b>Type:</b> ${type}</p>

        <h3>👤 Customer Info</h3>
        <p><b>Name:</b> ${full_name}<br/>
        <b>Email:</b> ${email}<br/>
        <b>Phone:</b> ${phone}</p>

        <h3>🚘 Vehicles</h3>
        <table border="1" cellspacing="0" cellpadding="6" style="border-collapse:collapse; width:100%;">
          <thead style="background:#f4f4f4;">
            <tr>
              <th>#</th>
              <th>Year</th>
              <th>Make</th>
              <th>Model</th>
              <th>Inoperable</th>
            </tr>
          </thead>
          <tbody>${vehicleList}</tbody>
        </table>

        <p style="margin-top:20px; font-size:0.9em; color:#555;">
          This data was submitted via the Vehicle Transport Form on your website.
        </p>
      </div>
    `
    
    transport.sendMail({
      from: sender,
      to: recipients,
      subject: "Vehicle transport request",
      text: message,
      html: html,
    });
    return { status: 'success', message: 'Data logged successfully' }
  } catch (error) {
    console.error('Error processing form data:', error)
    return { status: 'error', message: 'Server error' }
  }
})