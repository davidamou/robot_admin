import styled from 'styled-components'
import { Button, Padding, Spacer } from '../../styles/globals'
import { useContext } from 'react'
import { ThemeContext } from '../ThemeProvider'

const Container = styled.div`
  background-color: ${(props) => props.theme.cavans};
  padding: 1em;
  border-radius: 1em;
`

const Row = styled.div`
  display: flex;
  color: ${(props) => props.theme.secondary};
  font-size: small;
  justify-content: space-between;
`

const Value = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`
const OutlineButton = styled(Button)`
  border: 0.01em solid ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.forground};
  &:hover {
    background-color: rgba(219, 159, 91, 0.141);
  }
`

const BalanceCard = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <Container theme={theme}>
      <Row theme={theme}>
        <div>Your Balance</div>
      </Row>
      <Spacer />
      <Value>4.583.76 ETH</Value>
      <Spacer />
      <Row>
        <div>36,784978 ETH</div>
      </Row>
      <Spacer height="2em" />
      <OutlineButton theme={theme} type="outline">Top Up Balance</OutlineButton>
    </Container>
  )
}

export default BalanceCard
