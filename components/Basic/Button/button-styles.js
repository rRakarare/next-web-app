import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 0.8rem;
  border: none;
  background: ${(props) => props.theme.colors[props.color]};
  cursor: pointer;
  color: ${(props) =>
    props.color === "dark" || props.color === "primary"
      ? "white"
      : props.theme.colors.dark};
  width: ${(props) => props.width};
  text-transform: uppercase;
`;
export const StyledLink = styled.a`
  padding: 1rem;
  font-weight: bold;
`;
