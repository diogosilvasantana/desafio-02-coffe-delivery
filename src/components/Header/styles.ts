import styled, { css } from "styled-components";

export const HeaderFixed = styled.div`
  width: 100%;
  position: fixed;
  background: ${props => props.theme["gray-100"]};
  z-index: 9999;
`

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

interface ButtonProps {
  variant?: 'purple' | 'yellow';
}

export const HeaderButton = styled.button<ButtonProps>`
  border: 0;
  border-radius: 6px;
  height: 38px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  cursor:pointer;

  ${props =>  props.variant === 'purple' && css`
    background: ${props.theme["purple-300"]};
    color: ${props.theme["purple-700"]};
  `}

  ${props =>  props.variant === 'yellow' && css`
    background: ${props.theme["yellow-300"]};
    color: ${props.theme["yellow-700"]};
  `}
`