import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { useSession } from "next-auth/client";
import { signOut } from "next-auth/client";

const Nav = styled.nav`
  height: 80px;
  background: #000;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLink = styled.a`
  padding: 0rem 2rem;
`;
const StyledDiv = styled.div`
  padding: 0rem 2rem;
  display: inline;
  cursor: pointer;
`;

function LoginLogout(session, loading) {

  if (loading) {
    return <div>Loading</div>
  }

  return !session ? (
    <Link href="/login" passHref>
      <StyledLink>Login</StyledLink>
    </Link>
  ) : (
    <StyledDiv onClick={() => signOut()}>Logout</StyledDiv>
  );
}

function Navbar() {
  const [session, loading] = useSession();

  return (
    <Nav>
      <div>
        <Link href="/" passHref>
          <StyledLink>Logo</StyledLink>
        </Link>
      </div>
      <div>
        <Link href="/" passHref>
          <StyledLink>Home</StyledLink>
        </Link>
        <Link href="/about" passHref>
          <StyledLink>About</StyledLink>
        </Link>
        <Link href="/contact" passHref>
          <StyledLink>Contact</StyledLink>
        </Link>
        {LoginLogout(session, loading)}
      </div>
    </Nav>
  );
}

export default Navbar;
