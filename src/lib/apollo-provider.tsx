"use client";
import { ApolloNextAppProvider } from "@apollo/experimental-nextjs-app-support/ssr";
import { client } from "@/services";

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={client}>
      {children}
    </ApolloNextAppProvider>
  );
}
