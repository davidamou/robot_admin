import styled from 'styled-components'
import homeIcon from '../assets/icons/maison.svg'
import statistiqueIcon from '../assets/icons/statistiques.svg'
import historyIcon from '../assets/icons/historique.svg'
import flashIcon from '../assets/icons/verrouiller.svg'
import logOutIcon from '../assets/icons/sortir.svg'
import { Avatar, Spacer } from './globals'

const NavBarContainer = styled.div`
  border-right: 1px solid #dbdbdb;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;

  div {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  @media (max-width: 768px) {
    position: fixed;
    z-index: 100;
    background-color: white;
    width: 100%;
    height: 3.5em;
    bottom: 0;

    div:nth-child(1) {
      flex-direction: row;
      justify-content: space-around;
    }

    div:nth-child(2) {
      display: none;
    }
  }
`

const IconButtons = styled.div`
  width: 1.2em;
  height: 1.2em;
  padding: 1em;
  border-right: ${(props) =>
    props.isSelected ? '2px solid rgb(219, 160, 91)' : 'none'};

  &:hover {
    background-color: rgba(219, 159, 91, 0.141);
  }

  img {
    fill: white;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    border-top: ${(props) =>
      props.isSelected ? '2px solid rgb(219, 160, 91)' : 'none'};
    border-right: none;
  }
`
const Logo = styled.div`
  width: 1.2em;
  height: 1.2em;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  color: rgb(219, 160, 91);
  margin-bottom: 1.2em;
  border-radius: 100%;
  border: 6px solid rgb(219, 160, 91);

  @media (max-width: 768px) {
   margin-bottom: 0;
  }
`

const av1 =
  'https://img.freepik.com/photos-gratuite/robot-futuriste-vole-jolie-illustration-helice-generee-par-ia_188544-10195.jpg?size=626&ext=jpg&uid=R32696892&ga=GA1.2.986361167.1680360118&semt=sph'
const av2 =
  'https://img.freepik.com/photos-gratuite/femme-se-tient-devant-fond-colore-robe-bleue-ceinture-noire_1340-37544.jpg?size=626&ext=jpg&uid=R32696892&ga=GA1.2.986361167.1680360118&semt=sph'
const av3 = 'https://picsum.photos/200'

function NavBar() {
  return (
    <NavBarContainer>
      <div>
        <Spacer />
        <Logo>R</Logo>
        <IconButtons isSelected={true}>
          <img src={homeIcon} alt="Home icon" />
        </IconButtons>
        <Spacer height="0.5em" />
        <IconButtons>
          <img src={statistiqueIcon} alt="Statistique icon" />
        </IconButtons>
        <Spacer height="0.5em" />
        <IconButtons>
          <img src={historyIcon} alt="Historique icon" />
        </IconButtons>
        <Spacer height="0.5em" />
        <IconButtons>
          <img src={flashIcon} alt="Flash icon" />
        </IconButtons>
      </div>
      <div>
        <Avatar>
          <img src={av1} alt="av1" />
        </Avatar>
        <Spacer />
        <Avatar>
          <img src={av2} alt="av2" />
        </Avatar>
        <Spacer />
        <Avatar>
          <img src={av3} alt="av3" />
        </Avatar>
        <Spacer />
        <IconButtons>
          <img src={logOutIcon} alt="sign out" />
        </IconButtons>
        <Spacer />
      </div>
    </NavBarContainer>
  )
}

export default NavBar
