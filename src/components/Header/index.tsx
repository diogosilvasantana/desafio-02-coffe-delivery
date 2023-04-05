import { HeaderButtonContainer, HeaderButton, HeaderContainer, HeaderContent } from "./styles";

import { MapPin, ShoppingCart } from 'phosphor-react'
import logoImg from '../../assets/logo.svg'

export function Header() {
  return (
   <HeaderContainer>
    <HeaderContent>

    <img src={logoImg} alt="" />

    <HeaderButtonContainer>

      <HeaderButton>
        <MapPin size={22}/>
        Porto Alegre, RS
      </HeaderButton>

      <HeaderButton>
        <ShoppingCart size={22}/>
      </HeaderButton>

    </HeaderButtonContainer>

    </HeaderContent>
   </HeaderContainer>
  )
}