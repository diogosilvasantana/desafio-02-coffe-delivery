import { Minus, Plus } from "phosphor-react";
import { CounterContainer } from "./styles";
import { useState } from "react";

export function CoffeCounter() {
  const [coffeCount, setCoffeCount] = useState(1);

  function handleAddCoffe() {
    setCoffeCount((state) => {
      return state + 1
    });
  }

  function handleRemoveCoffe() {
    setCoffeCount((state) => {
      return state - 1
    });
  }

  return (
    <CounterContainer>
      <button onClick={handleRemoveCoffe} disabled={coffeCount === 1}>
        <Minus size={16} weight="bold" />
      </button>

      <span>{coffeCount}</span>

      <button onClick={handleAddCoffe}>
        <Plus size={16} weight="bold" />
      </button>
    </CounterContainer>
  )
}