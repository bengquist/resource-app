import * as React from "react";
import Layout from "../components/Layout";
import gql from "graphql-tag";

const AboutPage: React.FunctionComponent = () => (
  <Layout title="Resource | Login">
    <p>Email</p>
    <input type="text" />
    <p>Password</p>
    <input type="password" />
    <br />
    <br />
    <button>LOGIN</button>
    {/* <Query query={USERS_QUERY}>
      {({ loading, error, data }) =>
        !loading &&
        data.users.map((user: { name: string }) => <p>{user.name}</p>)
      }
    </Query> */}
  </Layout>
);

export default AboutPage;
