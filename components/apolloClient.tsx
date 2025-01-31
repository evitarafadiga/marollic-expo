import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "http://52.23.232.18:8080/query", 
  }),
  cache: new InMemoryCache(),
});

export default client;