import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Наставник — сервис карьерных консультаций",
  description: "Помогаем не искать работу, а строить карьеру. Карьерные консультации, разбор резюме, подготовка к собеседованиям.",
  keywords: "карьерные консультации, резюме, собеседования, карьера, работа, HR, консультант",
  authors: [{ name: "Артём" }],
  openGraph: {
    title: "Наставник — сервис карьерных консультаций",
    description: "Помогаем не искать работу, а строить карьеру. Карьерные консультации, разбор резюме, подготовка к собеседованиям.",
    type: "website",
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    title: "Наставник — сервис карьерных консультаций",
    description: "Помогаем не искать работу, а строить карьеру.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navigation />
        <main>{children}</main>
        
        {/* Plausible Analytics */}
        <Script
          data-domain="nastavnik.ru"
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />
        
        {/* Google Tag Manager */}
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-XXXXXXX');
            `,
          }}
        />
      </body>
    </html>
  );
}
