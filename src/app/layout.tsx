"use client";
import { ApolloWrapper } from "@/lib/apollo-provider";
import { GlobalStyles } from "@/styles/globalStyles";
import { passionOne } from "@/fonts/passionOne";

/* export const metadata: Metadata = {
  title: "EMR - Rick and Morty",
  description: "Desafio técnico da EMR",
}; */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
