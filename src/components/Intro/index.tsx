import { IntroContainer, IntroContent, IntroDetails } from "./styles";

import coffeIntroImg from '../../assets/coffe-intro.svg'

export function Intro() {
  return (
    <IntroContainer>
      
      <IntroContent>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>

        <h2>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h2>

        <IntroDetails>
          <span>Compra simples e segura</span>
          <span>Embalagem mantém o café intacto</span>
          <span>Entrega rápida e rastreada</span>
          <span>O café chega fresquinho até você</span>
        </IntroDetails>

      </IntroContent>

      <img src={coffeIntroImg} alt="" />
    </IntroContainer>
  )
}