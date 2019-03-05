import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject
} from "apollo-boost";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import fetch from "isomorphic-unfetch";
// import console = require("console");

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null;

const isBrowser: boolean = (process as any).browser;

interface Options {
  getToken: () => string;
}

// Polyfill fetch() on the server (used by apollo-client)
if (!isBrowser) {
  global.fetch = fetch;
}

function create(initialState: any, { getToken }: Options) {
  const authLink = setContext((_, { headers }) => {
    const token = getToken();

    const newHeaders = {
      headers: {
        ...headers,
        cookie: token ? `token=${token}` : "",
        authentication: token ? token : ""
      }
    };

    return newHeaders;
  });

  const httpLink = createHttpLink({
    uri: "http://localhost:4000/graphql",
    credentials: "same-origin",
    headers: authLink.cookie ? authLink : {}
  });

  // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
  return new ApolloClient({
    connectToDevTools: isBrowser,
    ssrMode: !isBrowser, // Disables forceFetch on the server (so queries are only run once)
    link: authLink.concat(httpLink),
    cache: new InMemoryCache().restore(initialState || {})
  });
}

export default function initApollo(initialState: any, options: Options) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!isBrowser) {
    return create(initialState, options);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState, options);
  }

  return apolloClient;
}
