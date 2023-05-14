import { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../ThemeProvider'

const Container = styled.div`
  grid-column: 1fr;
  overflow: hidden;
  background-color: ${props => props.theme.cavans};
  border-radius: 1em;
  h3 {
    font-size: 1.1rem;
  }
  img {
    width: 100%;
    object-fit: cover;
    height: 100%;
    transition: transform 0.3s ease-in-out;
  }

  &:hover {
    cursor: pointer;
    img {
      transform: scale(1.1);
    }
  }
`

const ImageContainer = styled.div`
  width: 100%;
  height: 14em;
  border-radius: 1em;
  overflow: hidden;
`

const Padding = styled.div`
  overflow: hidden;
  margin: ${(props) => (props.margin ? props.margin : '1em')};
`

const Spacer = styled.div`
  height: ${(props) => (props.height ? props.height : '1em')};
  width: ${(props) => (props.width ? props.width : '1em')};
`

const Row = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  justify-content: space-between;
  color: ${(props) => props.color};
` 

export function Card({ image, name, price, time }) {
  const { theme } = useContext(ThemeContext)

  return (
    <Container theme={theme}>
      <Padding margin=".8em">
        <ImageContainer>
          <img src={image} alt={name} />
        </ImageContainer>
        <Spacer height="1em" />
        <h3>{name}</h3>
        <Spacer height="1em" />
        <Row color={theme.secondary}>
          <div>Current Bid</div>
          <div>Current Bid</div>
        </Row>
        <Spacer height=".5em" />
        <Row>
          <div>{price} ETH</div>
          <div>4h 30m 11s</div>
        </Row>
      </Padding>
    </Container>
  )
}
