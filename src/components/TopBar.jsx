import styled from 'styled-components'
import searchIcon from '../assets/icons/chercher.svg'
import cloche from '../assets/icons/cloche.svg'
import { Avatar, IconButton, Spacer } from './globals'

const Container = styled.div`
  border-bottom: 1px solid #dbdbdb;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1em 0;
  align-items: center;
  div {
    display: flex;
    align-items: center;
  }
`

const TextField = styled.div`
  height: 2em;
  border-radius: 8px;
  padding: 0.2em 1em;
  display: flex;
  align-items: center;
  background-color: white;
  img {
    width: 1em;
    margin-right: 0.5em;
    height: 1em;
    opacity: 0.5;
  }
  input {
    height: 100%;
    padding-left: 0.5em;
    border: none;
    font-size: 1rem;
    background-color: transparent;
    outline: none;
  }
`

const profileImage =
  'https://img.freepik.com/photos-gratuite/portrait-futuriste-jeune-femme-adulte-brille-sensualite-generee-par-ia_188544-20368.jpg?size=626&ext=jpg&uid=R32696892&ga=GA1.2.986361167.1680360118&semt=sph'

function TopBar() {
  return (
    <Container>
      <TextField>
        <img src={searchIcon} alt="search icon" />
        <input type="text" placeholder="Search" />
      </TextField>
      <div>
        <IconButton>
          <img src={cloche} alt="cloch icon" />
        </IconButton>
        <Spacer width="1.5em" />
        <Avatar size="2.5em">
          <img src={profileImage} alt="profile" />
        </Avatar>
      </div>
    </Container>
  )
}

export default TopBar
