import "./globals.css";
import { ApolloWrapper } from "@/lib/apollo-provider";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "EMR - Rick and Morty",
  description: "Desafio técnico da EMR",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ApolloWrapper>{children}</ApolloWrapper>
      </body>
    </html>
  );
}
