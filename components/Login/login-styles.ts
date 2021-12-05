import styled from "styled-components";

export const Form = styled.form`
  background: ${(props) => props.theme.colors.light + 40};
  display: flex;
  width: 300px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2rem;
  border-radius: 0.3rem;
`;

export const FormWrap = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.colors.dark};
`;

export const Input = styled.input`
  display: block;
  border: none;
  height: 40px;
  margin: 1rem 0 1rem 0;
  width: 100%;
  padding: 0 1rem;
  border-radius: 0.2rem;

  ::placeholder {
    color: white;
  }
`;
