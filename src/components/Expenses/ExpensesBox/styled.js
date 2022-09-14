import styled from "styled-components";

export const Container = styled.div`
  height: 75%;
  display: flex;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "center"};
  align-items: center;
`;
