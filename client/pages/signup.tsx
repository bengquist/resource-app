import React, { useState } from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const Signup: React.FunctionComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const USER_SIGNUP = gql`
    mutation signupUser($email: String!, $password: String!) {
      signupUser(email: $email, password: $password) {
        email
      }
    }
  `;

  return (
    <Layout title="Resource | Sign Up">
      <Mutation mutation={USER_SIGNUP}>
        {(signupUser, { loading, error, data }) => (
          <Form
            onSubmit={e => {
              e.preventDefault();
              signupUser({
                variables: { email: email, password: password }
              });
              setEmail("");
              setPassword("");
            }}
          >
            <Label>Email</Label>
            <Input
              value={email}
              onChange={e => setEmail(e.target.value)}
              type="text"
            />
            <Label>Password</Label>
            <Input
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password"
            />
            <Button type="submit">SIGN UP</Button>
          </Form>
        )}
      </Mutation>
    </Layout>
  );
};

export default Signup;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.p``;

const Input = styled.input``;

const Button = styled.button`
  margin-top: 20px;
`;
