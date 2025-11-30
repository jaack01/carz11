import type { Metadata } from "next";
import { Lato } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";
import "./globals.css";

const lato = Lato({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GKP Auto - Best Refurbished Cars in Gorakhpur, Uttar Pradesh",
  description: "GKP Auto is the leading car dealership in Gorakhpur, UP offering quality refurbished cars, used cars for sale and rent. Find your dream car today!",
  keywords: "used cars Gorakhpur, refurbished cars UP, car dealer Gorakhpur, buy used cars, rent cars Gorakhpur, second hand cars",
  authors: [{ name: "GKP Auto" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://gkpauto.com",
    title: "GKP Auto - Best Refurbished Cars in Gorakhpur",
    description: "Leading car dealership in Gorakhpur offering quality refurbished and used cars.",
    siteName: "GKP Auto",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${lato.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster position="top-right" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
