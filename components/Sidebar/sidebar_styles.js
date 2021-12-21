import styled from "styled-components";

import { FaPowerOff } from "react-icons/fa";

export const Container = styled.div`
  position: fixed;
  background: ${(props) => props.theme.colors.light};
`;

export const Button = styled.button`
  background: ${(props) => props.theme.colors.dark};
  border: none;
  width: 2rem;
  height: 2rem;
  border-radius: 15%;
  margin: 0.75rem 0 0 0.75rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &::before,
  &::after {
    content: "";
    background-color: white;
    height: 2px;
    width: 1.3rem;
    position: absolute;
    transition: all 0.3s ease;
  }
  &::before {
    top: ${(props) => (props.clicked ? "" : ".75rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "" : "1.2rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;

export const SidebarContainer = styled.div`
  background: ${(props) => props.theme.colors.light};
  width: 3.5rem;
  height: 100vh;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export const SideBar = styled.div`
  position: absolute;
  left: 0;
  top: 6rem;
  background: ${(props) => props.theme.colors.light};
  border-radius: 0 5px 5px 0;
`;

export const SideLink = styled.a`
  display: flex;
  width: 100%;
  border-right: ${(props) => (props.active ? "3px" : "0px")} solid
    ${(props) => props.theme.colors.primary};

  padding: 0.5rem 0;
  cursor: pointer;
  &:hover {
    border-right: 3px solid ${(props) => props.theme.colors.dark};
  }
`;

export const SideLogo = styled.div`
  width: 3.5rem;
  color: ${(props) => props.theme.colors.dark};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SideText = styled.span`
  overflow: hidden;
  margin-left: ${(props) => (props.click ? "1rem" : "0")};
  width: ${(props) => (props.click ? "10rem" : "0")};
  transition: all 0.3s ease;
`;

export const Profile = styled.div`
  padding: 0.5rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  bottom: 10rem;
  background: ${(props) => props.theme.colors.light};
  cursor: pointer;
  border-radius: 0 5px 5px 0;
`;

export const ProfileIn = styled.div`
  vertical-align: middle;
  overflow: hidden;
  margin-left: ${(props) => (props.click ? "1rem" : "0")};
  width: ${(props) => (props.click ? "10rem" : "0")};
  transition: all 0.3s ease;
  &:hover {
    text-decoration: underline;
  }
`;

export const ActionButton = styled.a`
  display: ${(props) => (props.click ? "block" : "none")};
  margin-right: 1rem;
  color: ${(props) => props.theme.colors[props.color]};
`;
