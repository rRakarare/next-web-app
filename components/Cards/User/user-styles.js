import styled from "styled-components";

export const Card = styled.div`
  background: ${(props) => props.theme.colors.light};
  width: 300px;
  height: 90px;
  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    transition: all 0.1s;
  }
`;

export const CardHeader = styled.div`
  background: ${(props) => props.theme.colors.light};
  color: ${(props) => props.theme.colors.primary};
  border-bottom: 1px solid white;
  margin: 0.3rem 0.6rem;
  padding: 0.3rem 0;
  font-weight: 500;
`;

export const CardMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.3rem 0.6rem;
`;
