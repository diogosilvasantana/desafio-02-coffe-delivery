import { HeaderButtonContainer, HeaderButton, HeaderContainer, HeaderContent } from "./styles";

import { MapPin, ShoppingCart } from 'phosphor-react'
import logoImg from '../../assets/logo.svg'

export function Header() {
  return (
   <HeaderContainer>
    <HeaderContent>

    <img src={logoImg} alt="" />

    <HeaderButtonContainer>
      <HeaderButton variant="purple">
        <MapPin weight="fill" size={22}/>
        Porto Alegre, RS
      </HeaderButton>

      <HeaderButton variant="yellow">
        <ShoppingCart weight="fill" size={22}/>
      </HeaderButton>

    </HeaderButtonContainer>

    </HeaderContent>
   </HeaderContainer>
  )
}