import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Mi Marca | Catálogo",
  description: "Catálogo de productos",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}