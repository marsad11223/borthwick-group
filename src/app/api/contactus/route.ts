import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const POST = async (request: Request) => {
  const { email, name, message } = await request.json();

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "marsad11223@gmail.com",
        pass: "qwaa gpky fuxl fzqp",
      },
    });

    // Define email options
    const mailOptions = {
      from: "marsad11223@gmail.com",
      to: "contact@pulsetechnologysolutions.co.uk",
      subject: "Contact Form Submission",
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully!" });
  } catch (error: unknown) {
    console.log(error, "error");
    let errorMessage = "An unknown error occurred";

    // Check if the error is an instance of Error and has a message
    if (error instanceof Error) {
      errorMessage = error?.message;
    }

    console.error("Error sending email:", errorMessage);
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
};
