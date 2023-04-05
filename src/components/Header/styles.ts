import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 2rem 10rem;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const HeaderButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const HeaderButton = styled.button`
  background: ${props => props.theme["purple-300"]};
  border: 0;
  border-radius: 6px;
  height: 38px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  cursor:pointer;
`