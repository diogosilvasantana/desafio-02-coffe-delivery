import {
  HeaderButtonContainer,
  HeaderButton,
  HeaderContainer,
  HeaderContent,
  HeaderFixed,
  BadgeQuantityButton,
} from './styles'

import { MapPin, ShoppingCart } from 'phosphor-react'
import logoImg from '../../assets/logo.svg'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <HeaderFixed>
      <HeaderContainer>
        <HeaderContent>
          <Link to="/">
            <img src={logoImg} alt="" />
          </Link>

          <HeaderButtonContainer>
            <HeaderButton variant="purple">
              <MapPin weight="fill" size={22} />
              Porto Alegre, RS
            </HeaderButton>

            <Link to="/checkout">
              <HeaderButton variant="yellow">
                <ShoppingCart weight="fill" size={22} />
                <BadgeQuantityButton>3</BadgeQuantityButton>
              </HeaderButton>
            </Link>
          </HeaderButtonContainer>
        </HeaderContent>
      </HeaderContainer>
    </HeaderFixed>
  )
}
