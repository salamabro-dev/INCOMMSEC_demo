import { NextResponse, NextRequest } from "next/server";
import formData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";

// To handle a POST request to /api
export async function POST(req = NextRequest) {
  const mailgun = new Mailgun(formData);
  const client = mailgun.client({ username: "api", key: API_KEY });

  const { name, email, message } = req.body;

  const messageData = {
    from: "Contact Form <mailgun@sandboxeea6f3e2b17c4408ae748e1bdc8e0bfc.mailgun.org>",
    to: "sontruong@hotmail.co.uk",
    subject: "THIS IS A TEST",
    text: `
    Hello, 
    You have a new form entry from: ${name} ${email}.
    ${message}
    `,
  };
  try {
    const emailRes = await client.messages.create(DOMAIN, messageData);
    console.log(emailRes);
  } catch (err) {
    console.error("Error sending email", err);
  }
  const data = await req.json();
  console.log(data);
  return NextResponse.json({ submitted: "true" }, { status: 200 });
}
