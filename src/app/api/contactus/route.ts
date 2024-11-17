import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const POST = async (request: Request) => {
  const { name, email, address, phone, postCode, category, homeType } =
    await request.json();

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "marsad11223@gmail.com", // Your email
        pass: "qwaa gpky fuxl fzqp", // Your email app password
      },
    });

    // Define the email content
    const mailOptions = {
      from: "marsad11223@gmail.com",
      to: "contact@pulsetechnologysolutions.co.uk", // Recipient's email
      subject: "Contact Form Submission",
      text: `
        Name: ${name}
        Email: ${email}
        Address: ${address}
        Phone: ${phone}
        Post Code: ${postCode}
        Category: ${category}
        Home Type: ${homeType}
      `,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Post Code:</strong> ${postCode}</p>
        <p><strong>Category:</strong> ${category}</p>
        <p><strong>Home Type:</strong> ${homeType}</p>
      `,
    };

    // Send the email
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
