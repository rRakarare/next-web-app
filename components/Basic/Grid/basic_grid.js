import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.cols}, 1fr);
  grid-gap: 20px;
  grid-auto-rows: minmax(100px, auto);
`;
