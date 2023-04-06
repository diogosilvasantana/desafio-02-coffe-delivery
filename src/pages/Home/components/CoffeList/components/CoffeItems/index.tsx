import { CartButton, CoffeItemCard, CoffeItemFooter, CoffeListContainer, CoffePrice, CoffeTypeLabel, CounterContainer } from "./styles";

import traditionalCoffeImg from '../../../../../../assets/coffes-img/traditional.svg'
import { ShoppingCart } from "phosphor-react";
import { CoffeCounter } from "../../../../../../components/CoffeCounter";

export function CoffeItems() {
  return (
    <CoffeListContainer>

      <CoffeItemCard>
        <img src={traditionalCoffeImg} alt="" />

        <CoffeTypeLabel>TRADICIONAL</CoffeTypeLabel>

        <h3>Expresso Tradicional</h3>

        <p>O tradicional café feito com água quente e grãos moídos</p>

        <footer>

          <CoffePrice>
            R$ <strong>9,90</strong>
          </CoffePrice>

          <CounterContainer>
            <CoffeCounter />

            <CartButton>
              <ShoppingCart weight="fill" size={22} />
            </CartButton>
          </CounterContainer>

        </footer>

      </CoffeItemCard>



      <CoffeItemCard />
      <CoffeItemCard />
      <CoffeItemCard />
      <CoffeItemCard />
      <CoffeItemCard />
      <CoffeItemCard />

    </CoffeListContainer>
  )
}