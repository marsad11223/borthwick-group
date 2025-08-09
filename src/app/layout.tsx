import type { Metadata } from "next";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bright Eco Future",
  description: "A sustainable future with eco-friendly solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ToastContainer transition={Slide} />
        {children}
      </body>
    </html>
  );
}
