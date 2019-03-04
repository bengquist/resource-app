import React from "react";
import Link from "next/link";

export default function Header() {
  const cookie = false;

  return (
    <nav style={{ width: "100%" }}>
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
    </nav>
  );
}
