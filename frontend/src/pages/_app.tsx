import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink, from } from "@apollo/client";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { useEffect, useState } from "react";
import { AuthContext } from "@/contexts/authContext";


const httpLink = createHttpLink({
  uri: `${process.env.NEXT_PUBLIC_BACKEND_URL}/graphql`,
})

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const errorLink = onError(({ graphQLErrors, operation }) => {
  if (graphQLErrors) {
    for (let err of graphQLErrors) {
      if (err.extensions.code === "UNAUTHENTICATED") {
        localStorage.removeItem("token");
        location.replace("/signin");
      }
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(from([errorLink, httpLink])),
  cache: new InMemoryCache()
});

function App({ Component, pageProps }: AppProps) {
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
  if (token) {
    setAuthenticated(true);
  }
}, []);

  return (
    <AuthContext.Provider value={{authenticated, setAuthenticated}}>
      <ApolloProvider client={client}>
        <Layout>
            <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </AuthContext.Provider>
  );
}

// Disabling SSR
export default dynamic(() => Promise.resolve(App), { ssr: false });
