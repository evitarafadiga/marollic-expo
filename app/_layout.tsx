import { Stack } from "expo-router";
import '../global.css';
import { ApolloProvider } from "@apollo/client";
import client from "@/components/apolloClient";

export default function RootLayout() {
  return (
    <ApolloProvider client={client}>
      <Stack />
    </ApolloProvider>
  )
}
