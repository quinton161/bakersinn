import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from '../lib/registry'
import Navigation from "../components/Navigation";
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Baker's Inn",
  description: "Fresh baked goods delivered to your door",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <Navigation />
          <main style={{ paddingTop: '80px' }}>
            {children}
          </main>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
