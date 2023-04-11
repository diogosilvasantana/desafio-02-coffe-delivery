import styled from 'styled-components'

export const CheckoutContainer = styled.section`
  width: 100%;
  padding: 2rem 0;
  margin-bottom: 9rem;
  display: grid;
  grid-template-columns: 40rem 1fr;
  gap: 2rem;
`

export const AddressAndPaymentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 1.125rem;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 900;
  }
`

export const AddressContent = styled.div`
  margin-top: 1rem;
  width: 100%;
  background: ${(props) => props.theme['gray-200']};
  padding: 2.5rem;
  border-radius: 6px;
`

export const AddressHeader = styled.header`
  display: flex;
  align-items: start;
  justify-content: start;
  gap: 0.5rem;

  div {
    svg {
      margin-top: -0.1rem;
      color: ${(props) => props.theme['yellow-700']};
    }

    h3 {
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.3;
    }

    span {
      font-size: 0.875rem;
      line-height: 1.3;
    }
  }
`

export const AddressForm = styled.form`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 0.75rem;

  input {
    background: ${(props) => props.theme['gray-300']};
    color: ${(props) => props.theme['gray-700']};
    padding: 0.75rem;
    font-size: 0.875rem;
    border: solid 1px ${(props) => props.theme['gray-400']};
    border-radius: 4px;

    &::placeholder {
      color: ${(props) => props.theme['gray-600']};
    }

    &:first-child,
    &:nth-child(3),
    &:nth-child(5) {
      width: 12.5rem;
    }

    &:nth-child(2) {
      width: 35rem;
    }

    &:nth-child(4) {
      width: 21.75rem;
    }

    &:nth-child(6) {
      width: 17.25rem;
    }

    &:last-child {
      width: 3.75rem;
    }
  }
`

export const OrdersContainer = styled.div`
  width: 100%;

  h1 {
    font-size: 1.125rem;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 900;
  }
`

export const OrdersCard = styled.div`
  margin-top: 1rem;
  width: 100%;
  background: ${(props) => props.theme['gray-200']};
  padding: 2.5rem;
  border-radius: 6px 36px 6px 36px;
`
