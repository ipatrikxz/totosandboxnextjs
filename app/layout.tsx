import React from "react";
import "./globals.css";

import NextAuthSessionProvider from "../providers/sessionProvider";
import Navbar from "../components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="eng">
      <head></head>
      <body>
        <NextAuthSessionProvider>
          <Navbar />
          <div className="container">{children}</div>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
