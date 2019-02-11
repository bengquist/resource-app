import * as React from "react";
import styled from "styled-components";
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

const Login: React.FunctionComponent = () => {
  const [emailInput, setEmailInput] = React.useState("");
  const [passwordInput, setPasswordInput] = React.useState("");

  return (
    <Layout title="Resource | Sign Up">
      <Mutation mutation={USER_SIGNUP}>
        {(loginUser, { loading, error, data }) => (
          <Container>
            <Label>Email</Label>
            <Input onChange={e => setEmailInput(e.target.value)} type="text" />
            <Label>Password</Label>
            <Input
              onChange={e => setPasswordInput(e.target.value)}
              type="password"
            />
            <Button>LOGIN</Button>
          </Container>
        )}
      </Mutation>
    </Layout>
  );
};

export default Login;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.p``;

const Input = styled.input``;

const Button = styled.button`
  margin-top: 20px;
`;
