import { MapPinLine } from 'phosphor-react'
import {
  AddressContent,
  CheckoutContainer,
  AddressAndPaymentContainer,
  OrdersContainer,
  OrdersCard,
  AddressHeader,
  AddressForm,
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <AddressAndPaymentContainer>
        <h1>Complete seu pedido</h1>

        <AddressContent>
          <AddressHeader>
            <div>
              <MapPinLine size={22} />
            </div>
            <div>
              <h3>Endereço de entrega</h3>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </AddressHeader>

          <AddressForm>
            <input type="text" placeholder="CEP" />
            <input type="text" placeholder="Rua" />
            <input type="text" placeholder="Número" />
            <input type="text" placeholder="Complemento" />
            <input type="text" placeholder="Bairro" />
            <input type="text" placeholder="Cidade" />
            <input type="text" maxLength={2} placeholder="UF" />
          </AddressForm>
        </AddressContent>
      </AddressAndPaymentContainer>

      <OrdersContainer>
        <h1>Cafés selecionados</h1>

        <OrdersCard></OrdersCard>
      </OrdersContainer>
    </CheckoutContainer>
  )
}
