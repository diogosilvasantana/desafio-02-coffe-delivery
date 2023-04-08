import { CoffeItems } from './components/CoffeItems'
import { CoffeContent, CoffeListContainer } from './styles'

export function CoffeList() {
  return (
    <CoffeListContainer>
      <CoffeContent>
        <h2>Nossos cafés</h2>

        <CoffeItems />
      </CoffeContent>
    </CoffeListContainer>
  )
}
