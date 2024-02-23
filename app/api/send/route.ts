import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function GET() {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { data } = await resend.emails.send({
      from: "dtfdatabase@gmail.col",
      to: "codemat.biz@codemat.org",
      subject: "Hello from DTF",
      html: "<p>Message from DTF</p>",
    });
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
