import { StyledButton, StyledLink } from "./button-styles";

export const Button = (props) => {
  if (props.asLink) {
    return <StyledLink {...props}>{props.children}</StyledLink>;
  } else {
    return <StyledButton {...props}>{props.children}</StyledButton>;
  }
};
