import * as React from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const USERS_QUERY = gql`
  query UsersQuery {
    users {
      name
    }
  }
`;

const AboutPage: React.FunctionComponent = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
    <Query query={USERS_QUERY}>
      {({ loading, error, data }) => <>{console.log(data)}</>}
    </Query>
  </Layout>
);

export default AboutPage;
