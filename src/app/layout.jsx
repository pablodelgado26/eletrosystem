import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "EletroSystem — Tecnologia & Instalações Elétricas",
  description: "EletroSystem: especialistas em instalações elétricas, criação de sites e desenvolvimento de aplicativos. Soluções completas para o seu negócio em São Paulo.",
  keywords: "instalações elétricas, criação de sites, desenvolvimento de apps, engenharia elétrica, São Paulo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
