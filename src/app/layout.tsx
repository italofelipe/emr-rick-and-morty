"use client";
import { ApolloWrapper } from "@/lib/apollo-provider";
import { GlobalStyles } from "@/styles/globalStyles";
import { passionOne } from "@/fonts/passionOne";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={passionOne.className}>
      <body>
        <ApolloWrapper>
          <GlobalStyles />
          {children}
        </ApolloWrapper>
      </body>
    </html>
  );
}
