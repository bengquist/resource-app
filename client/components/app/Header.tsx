import React from "react";
import Link from "next/link";
import styled from "styled-components";

function Header() {
  const cookie = false;

  return (
    <Container>
      <Link href="/">
        <a>Home</a>
      </Link>{" "}
      |{" "}
      {cookie ? (
        <Link href="/login">
          <a>Log Out</a>
        </Link>
      ) : (
        <>
          <Link href="/login">
            <a>Log In</a>
          </Link>{" "}
          |{" "}
          <Link href="/signup">
            <a>Sign Up</a>
          </Link>
        </>
      )}
    </Container>
  );
}

export default Header;

const Container = styled.div`
  background-color: #bcbcbc;
  width: 100%;
`;
