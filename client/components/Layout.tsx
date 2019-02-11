import * as React from "react";
import styled from "styled-components";
import Link from "next/link";
import Head from "next/head";

type Props = {
  title?: string;
};

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = "This is the default title"
}) => (
  <Container>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{" "}
        |{" "}
        <Link href="/login">
          <a>Login</a>
        </Link>{" "}
        |{" "}
        <Link href="/signup">
          <a>Sign Up</a>
        </Link>
      </nav>
    </Header>
    {children}
    <Footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </Footer>
  </Container>
);

export default Layout;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Header = styled.div`
  width: 100%;
`;

const Footer = styled.div`
  width: 100%;
`;
