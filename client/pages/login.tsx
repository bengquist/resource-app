import React, { useState } from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const Login: React.FunctionComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const USER_LOGIN = gql`
    mutation loginUser($email: String!, $password: String!) {
      loginUser(email: $email, password: $password) {
        token
      }
    }
  `;

  return (
    <Layout title="Resource | Login">
      <Mutation mutation={USER_LOGIN}>
        {(loginUser, { loading, error, data }) => (
          <Form
            onSubmit={e => {
              e.preventDefault();
              loginUser({
                variables: { email: email, password: password }
              });
              setEmail("");
              setPassword("");
            }}
          >
            {console.log(data)}
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
            <Button type="submit">LOGIN</Button>
          </Form>
        )}
      </Mutation>
    </Layout>
  );
};

export default Login;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.p``;

const Input = styled.input``;

const Button = styled.button`
  margin-top: 20px;
`;
