import {
  IntroContainer,
  IntroContent,
  IntroDetails,
  IntroDetailsIcon,
  IntroSection,
} from "./styles";

import coffeIntroImg from "../../../../assets/coffe-intro.svg";

import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

export function Intro() {
  return (
    <IntroSection>

    <IntroContainer>
      <IntroContent>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>

        <h2>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </h2>

        <IntroDetails>
          <span>
            <IntroDetailsIcon variant="cart">
              <ShoppingCart weight="fill" />
            </IntroDetailsIcon>
            Compra simples e segura
          </span>

          <span>
            <IntroDetailsIcon variant="package">
              <Package weight="fill" />
            </IntroDetailsIcon>
            Embalagem mantém o café intacto
          </span>

          <span>
            <IntroDetailsIcon variant="timer">
              <Timer weight="fill" />
            </IntroDetailsIcon>
            Entrega rápida e rastreada
          </span>

          <span>
            <IntroDetailsIcon variant="coffe">
              <Coffee weight="fill" />
            </IntroDetailsIcon>
            O café chega fresquinho até você
          </span>
        </IntroDetails>
      </IntroContent>

      <img src={coffeIntroImg} alt="" />
    </IntroContainer>
    </IntroSection>
  );
}
