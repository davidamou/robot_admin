import { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../ThemeProvider'

const Container = styled.div`
  height: 2em;
  border-radius: 8px;
  padding: 0.2em 0.4em;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.cavans};

  i{
    margin: 0.4em;
    height: 100%;
    display: flex;
    align-items: center;
  }

  input {
    height: 100%;
    width: 100%;
    padding-left: 0.5em;
    border: none;
    font-size: 1rem;
    background-color: transparent;
    outline: none;
    color: ${(props) => props.theme.forground};
  }

  @media (max-width: 768px) {
    width: 50%;
  }
`

export default function TextField({ icon, hint }) {
  const { theme } = useContext(ThemeContext)

  return (
    <Container theme={theme}>
      <i className={icon}></i>
      <input type="text" name="" id="" placeholder={hint} />
    </Container>
  )
}
