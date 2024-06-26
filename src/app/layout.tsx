import "@styles/globals.css";

import type { Metadata } from "next";
import Logo from "@assets/icons/Logo.svg";
import App from "./App";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <div className="h-full">
            <div className="w-full h-full flex flex-col justify-center content-center flex-wrap">
              <Logo />
            </div>
          </div>
        </header>
        <nav></nav>
        <App>{children}</App>
      </body>
    </html>
  );
}
