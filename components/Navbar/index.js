import React from "react";
import Link from "next/link";
import Image from "next/image";

import { useSession } from "next-auth/client";
import { signOut } from "next-auth/client";
import { StyledDiv, StyledLink, Nav } from "./navbar-styles.js";

function Navbar() {
  const [session, loading] = useSession();
  console.log(session.user.role);
  return (
    <Nav>
      <div>
        <Link href="/" passHref>
          <StyledLink>
            <Image src={"/analyzer.svg"} alt="logo" width={100} height={70} />
          </StyledLink>
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
        <StyledDiv onClick={() => signOut()}>Logout</StyledDiv>
        {session.user.role === "ADMIN" ? (
          <Link href="/admin" passHref>
            <StyledLink>Admin</StyledLink>
          </Link>
        ) : null}
      </div>
    </Nav>
  );
}

export default Navbar;
