import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache()
});

function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Layout>
          <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

// Disabling SSR
export default dynamic(() => Promise.resolve(App), { ssr: false });
