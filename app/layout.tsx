import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Elite Auto Detailing Bolton",
  description:
    "Elite Auto Detailing in Bolton. Full valets, mini details, maintenance plans, machine polishing, ceramic coatings and build your detail bookings.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
