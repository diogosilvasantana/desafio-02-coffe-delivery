import styled from 'styled-components'

export const CoffeListContainer = styled.div`
  padding: 2rem 0;
  margin-bottom: 9rem;
`

export const CoffeContent = styled.main`
  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    font-weight: 900;
    color: ${(props) => props.theme['gray-800']};
    margin-bottom: 3.375rem;
  }
`
