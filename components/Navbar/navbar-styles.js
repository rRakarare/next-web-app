import styled from "styled-components";

export const Nav = styled.nav`
  height: 70px;
  background: ${(props) => props.theme.colors.light};
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledLink = styled.a`
  padding: 0rem 2rem;
`;
export const StyledDiv = styled.div`
  padding: 0rem 2rem;
  display: inline;
  cursor: pointer;
`;
