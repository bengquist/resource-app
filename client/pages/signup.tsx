import * as React from "react";
import Layout from "../components/Layout";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const USER_SIGNUP = gql`
  mutation {
    loginUser(email: "huh", password: "ayy") {
      name
    }
  }
`;

const Signup: React.FunctionComponent = () => {
  const [emailInput, setEmailInput] = React.useState("");
  const [passwordInput, setPasswordInput] = React.useState("");

  return (
    <Layout title="Resource | Sign Up">
      <Mutation mutation={USER_SIGNUP}>
        {(signupUser, { loading, error, data }) => (
          <>
            {" "}
            <p>Email</p>
            <input type="text" />
            <p>Password</p>
            <input type="password" />
            <br />
            <br />
            <button>SIGN UP</button>
          </>
        )}
      </Mutation>
    </Layout>
  );
};

export default Signup;
