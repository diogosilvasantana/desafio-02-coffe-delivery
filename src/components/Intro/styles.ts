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
    font-weight: 900;
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

  span {
    padding: 0.625rem 0;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 0.5rem;
    font-size: 1rem;
  }
`;

interface IntroDetailsIconsProps {
  variant?: 'cart' | 'package' | 'timer' | 'coffe';
}

export const IntroDetailsIcon = styled.div<IntroDetailsIconsProps>`
  width: 32px;
  height: 32px;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${props => props.theme.white};

  background: ${props => 
    props.variant === 'cart' ? props.theme["yellow-700"] :
    props.variant === 'package' ? props.theme["gray-700"] :
    props.variant === 'timer' ? props.theme["yellow-500"] :
    props.variant === 'coffe' ? props.theme["purple-500"]:
    props.theme["gray-900"]} ;
`