import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Häke-simulaattori",
  description: "Harjoitelkaa hätäkeskukseen soittamista roolileikin avulla.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
