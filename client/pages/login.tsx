import cookie from "cookie";
import React, { useState } from "react";
import styled from "styled-components";
import Layout from "../components/app/Layout";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import redirect from "../lib/redirect";

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
      <Mutation
        mutation={USER_LOGIN}
        onCompleted={data => {
          // Store the token in cookie
          document.cookie = cookie.serialize("token", data.loginUser.token, {
            maxAge: 30 * 24 * 60 * 60 // 30 days
          });

          // Force a reload of all the current queries now that the user is
          // logged in
          if (data.loginUser.token) {
            redirect({}, "/");
          }
        }}
        onError={error => {
          // If you want to send error to external service?
          console.log(error);
        }}
      >
        {(loginUser, { loading, error, data }) => {
          return (
            <Form
              onSubmit={e => {
                e.preventDefault();
                loginUser({
                  variables: { email, password }
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
              <Button type="submit">LOGIN</Button>
            </Form>
          );
        }}
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
