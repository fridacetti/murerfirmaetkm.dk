import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();

  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev", // Skift til dit godkendte domæne hos Resend
      to: "alre0003@stud.ek.dk", // Eller din egen mail hvis du vil modtage beskeder
      subject: "Ny kontaktformular besked",
      html: `<p>Navn: ${body.name}</p>
             <p>Email: ${body.email}</p>
             <p>Telefon: ${body.phone}</p>
             <p>Besked: ${body.message}</p>`,
    });
    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}
