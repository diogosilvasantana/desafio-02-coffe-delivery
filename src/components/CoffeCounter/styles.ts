import styled from "styled-components";

export const CounterContainer = styled.div`
  background: ${props => props.theme["gray-400"]};
  padding: 0.75rem 0.5rem;
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;

  button {
    border: 0;
    line-height: 0;
    background: transparent;
    color: ${props => props.theme["purple-500"]};
    cursor: pointer;

    &:hover {
      color: ${props => props.theme["purple-700"]};
    }

    &:disabled {
      color: ${props => props.theme["gray-500"]};
      cursor: not-allowed;
    }
  }

  span {
    font-size: 1rem;
    line-height: 0;
  }
`