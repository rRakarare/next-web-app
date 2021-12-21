import { useEffect, useState } from "react";
import {
  Container,
  Button,
  SidebarContainer,
  SideBar,
  SideLink,
  SideLogo,
  SideText,
  Profile,
  ProfileIn,
  ActionButton,
} from "./sidebar_styles";
import { FaHome, FaUserLock, FaUser, FaTags, FaPowerOff } from "react-icons/fa";
import Link from "next/link";
import { useSession } from "next-auth/client";
import { signOut } from "next-auth/client";
import { useRouter } from "next/router";

function Sidebar({ pageProps }) {
  const router = useRouter();
  const [session, loading] = useSession();
  const [click, setClick] = useState(false);
  const [profileClick, setProfileClick] = useState(false);
  const handleClick = () => setClick(!click);

  console.log(router.pathname);

  return (
    <Container>
      <Button clicked={click} onClick={() => handleClick()}>
        Click
      </Button>
      <SidebarContainer>
        <SideBar>
          <Link href="/" passHref>
            <SideLink active={router.pathname === "/"}>
              <SideLogo>
                <FaHome size={"1.6rem"} />
              </SideLogo>
              <SideText click={click}>Projekte</SideText>
            </SideLink>
          </Link>

          <Link href="/" passHref>
            <SideLink>
              <SideLogo>
                <FaTags size={"1.6rem"} />
              </SideLogo>
              <SideText click={click}>Brands</SideText>
            </SideLink>
          </Link>

          <Link href="/" passHref>
            <SideLink>
              <SideLogo>
                <FaUserLock size={"1.6rem"} />
              </SideLogo>
              <SideText click={click}>Admin</SideText>
            </SideLink>
          </Link>
        </SideBar>
        <Profile>
          <SideLogo onClick={() => setProfileClick(!profileClick)}>
            <FaUser size={"1.6rem"} />
          </SideLogo>
          <ProfileIn click={profileClick}>
            {session.user.username}&nbsp;({session.user.role})
          </ProfileIn>
          <Link href="/admin" passHref>
            <ActionButton click={profileClick}>
              <FaUserLock size={"1.3rem"} />
            </ActionButton>
          </Link>
          <ActionButton
            color={"danger"}
            onClick={() => signOut()}
            click={profileClick}
          >
            <FaPowerOff size={"1.3rem"} />
          </ActionButton>
        </Profile>
      </SidebarContainer>
    </Container>
  );
}

export default Sidebar;
