import styled from "styled-components";

export const IntroContainer = styled.section`
  padding: 5.75rem 10rem;
  display: flex;
  gap: 3.5rem;
`;
export const IntroContent = styled.div`
  h1 {
    font-family: "Baloo 2", sans-serif;
    font-size: 3rem;
    line-height: 1.3;
    color: ${(props) => props.theme["gray-900"]};
  }

  h2 {
    margin-top: 1rem;
    color: ${(props) => props.theme["gray-800"]};
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.3;
  }
`;
export const IntroDetails = styled.div`
  margin-top: 4.125rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
