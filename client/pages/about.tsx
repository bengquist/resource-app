import * as React from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const USERS_QUERY = gql`
  mutation CreateReviewForEpisode($ep: Episode!, $review: ReviewInput!) {
    createReview(episode: $ep, review: $review) {
      stars
      commentary
    }
  }
`;

const AboutPage: React.FunctionComponent = () => (
  <Layout title="About | Next.js + TypeScript Example">
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
