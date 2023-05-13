import styled from 'styled-components'
import { Button, Padding, Spacer } from '../../styles/globals'

const Container = styled.div`
  background-color: white;
  padding: 1em;
  border-radius: 1em;
`

const Row = styled.div`
  display: flex;
  color: grey;
  font-size: small;
  justify-content: space-between;
`

const Value = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`
const OutlineButton = styled(Button)`
  border: 1px solid #dbdbdb;
  color: #1e1e1e;
  &:hover {
    background-color: rgba(219, 159, 91, 0.141);
  }
`

export function BalanceCard() {
  return (
    <Container>
      <Row>
        <div>Your Balance</div>
      </Row>
      <Spacer />
      <Value>4.583.76 ETH</Value>
      <Spacer />
      <Row>
        <div>36,784978 ETH</div>
      </Row>
      <Spacer height="2em" />
      <OutlineButton type="outline">Top Up Balance</OutlineButton>
    </Container>
  )
}
