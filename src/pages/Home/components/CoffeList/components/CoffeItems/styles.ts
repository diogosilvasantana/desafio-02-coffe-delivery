import styled from "styled-components";

export const CoffeListContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.5rem 2rem;
`

export const CoffeItemCard = styled.div`
  padding: 1.25rem;
  background: ${props => props.theme["gray-200"]};
  border-radius: 6px 36px 6px 36px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

  img {
    margin-top: -2.5rem;
  }

  h3 {
    margin-top: 1rem;
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.25rem;
    font-weight: 900;
    color: ${props => props.theme["gray-800"]};
  }

  p {
    margin-top: 0.5rem;
    font-size: 0.875rem;
    line-height: 1.3;
    text-align: center;
    color: ${props => props.theme["gray-600"]};
  }

  footer {
    margin-top: 2rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const CoffeType = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  flex-wrap: wrap;

  span {
    background: ${props => props.theme["yellow-300"]};
    color: ${props => props.theme["yellow-700"]};
    border-radius: 20px;
    margin-top: 0.75rem;
    padding: 0.25rem 0.5rem;
    font-size: 0.625rem;
    font-weight: bold;
    line-height: 1.3;
  }
`

export const CoffeItemFooter = styled.footer`
  margin-top: 2rem;
  display: flex;
`

export const CoffePrice = styled.span`

  font-size: 0.875rem;

  strong {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.5rem;
  }
`

export const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const CartButton = styled.button`
  background: ${props => props.theme["purple-700"]};
  color: ${props => props.theme["gray-200"]};
  border: none;
  width: 2.375rem;
  height: 2.375rem;
  border-radius: 6px;
  line-height: 0;
  cursor: pointer;

  &:hover {
    background: ${props => props.theme["purple-500"]};
  }
`