import { CartButton, CoffeItemCard, CoffeListContainer, CoffePrice, CoffeType, CounterContainer } from "./styles";

import { ShoppingCartSimple } from "phosphor-react";
import { CoffeCounter } from "../../../../../../components/CoffeCounter";

import coffeListData from '../../../../../../data/coffes-catalog.json';

interface Coffe {
  id: number;
  name: string;
  type: string[],
  description: string,
  price: number,
  image: string
}

export function CoffeItems() {

  const coffeImgPatch = '/src/assets/coffes-img'

  return (
    <CoffeListContainer>

      {coffeListData.map(item => {
        return (

          <CoffeItemCard key={item.id}>
            <img src={`${coffeImgPatch}/${item.image}`} alt="" />

            <CoffeType>
              {item.type.map(type => {
                return (
                  <span key={type}>{type.toUpperCase()}</span>
                )
              })}
            </CoffeType>

            <h3>{item.name}</h3>

            <p>{item.description}</p>

            <footer>

              <CoffePrice>
                R$ <strong>{item.price}</strong>
              </CoffePrice>

              <CounterContainer>
                <CoffeCounter />

                <CartButton>
                  <ShoppingCartSimple weight="fill" size={22} />
                </CartButton>
              </CounterContainer>

            </footer>

          </CoffeItemCard>
        )
      })}
    </CoffeListContainer>
  )
}