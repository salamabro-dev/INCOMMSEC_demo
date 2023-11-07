import { NextResponse, NextRequest } from "next/server";
import formData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";

// To handle a POST request to /api
export async function POST(request = NextRequest) {
  const mailgun = new Mailgun(formData);
  const client = mailgun.client({ username: "api", key: API_KEY });

  const data = await request.json();

  const { name, email, message } = data;

  const messageData = {
    from: "Incommsec enquiry <mailgun@sandboxeea6f3e2b17c4408ae748e1bdc8e0bfc.mailgun.org>",
    to: "sontruong@hotmail.co.uk",
    subject: "Enquiry",
    text: `

    Name: ${name}

    Email:${email}
    
    Message: ${message}
    `,
  };
  try {
    const emailRes = await client.messages.create(DOMAIN, messageData);
    console.log(emailRes);
  } catch (err) {
    console.error("Error sending email", err);
  }

  console.log(data);
  return NextResponse.json({ submitted: "true" }, { status: 200 });
}
