import styled from "styled-components";

export const LayoutContainer = styled.div`
  position: relative;
  top: 6.5rem;
  max-width: 74rem;
  height: calc(100vh - 10rem);
  margin: auto;
  background: ${(props) => props.theme["gray-100"]};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;
