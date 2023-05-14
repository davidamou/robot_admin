import styled from 'styled-components'
import { Spacer } from '../../styles/globals'
import Avatar from '../Avatar'
import logo from '../../assets/icons/logo.svg'
import { useContext, useState } from 'react'
import { ThemeContext } from '../ThemeProvider'

const NavBarContainer = styled.div`
  border-right: 0.05em solid ${(props) => props.theme.divider};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;

  @media (max-width: 768px) {
    position: fixed;
    z-index: 100;
    background-color: ${(props) => props.theme.background};
    width: 100%;
    height: 3.5em;
    bottom: 0;
  }
`

const NavLink = styled.div`
  width: 1.2em;
  height: 1.2em;
  padding: 0.8em;
  ${(props) =>
    props.isselected ? 'border-right: 2px solid rgb(219, 160, 91)' : null};

  &:hover {
    background-color: rgba(219, 159, 91, 0.141);
  }

  i {
    color: ${(props) => props.isselected? 'rgb(219, 160, 91)' : null};
  }

  @media (max-width: 768px) {
    border-top: ${(props) =>
      props.isSelected ? '2px solid rgb(219, 160, 91)' : 'none'};
    border-right: none;
  }
`
const NavTop = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
`

const NavBottom = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (max-width: 768px) {
    display: none;
  }
`

const Logo = styled.div`
  margin: 1.2em 0;
  width: 1em;
  height: 1em;
  border-radius: 100%;
  border: 4px solid rgb(219, 160, 91);
  border-top: none;
  display: flex;
  padding: 0.2em;
  justify-content: center;
  align-items: center;
  border-left: none;

  img {
    width: 100%;
    object-fit: cover;
    height: 100%;
  }

  @media (max-width: 768px) {
    display: none;
  }
`

const av1 =
  'https://img.freepik.com/photos-gratuite/robot-futuriste-vole-jolie-illustration-helice-generee-par-ia_188544-10195.jpg?size=626&ext=jpg&uid=R32696892&ga=GA1.2.986361167.1680360118&semt=sph'
const av2 =
  'https://img.freepik.com/photos-gratuite/femme-se-tient-devant-fond-colore-robe-bleue-ceinture-noire_1340-37544.jpg?size=626&ext=jpg&uid=R32696892&ga=GA1.2.986361167.1680360118&semt=sph'
const av3 = 'https://picsum.photos/200'

const NavBar = () => {
  const [currentTab, setCurrentTab] = useState(0)
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <NavBarContainer theme={theme}>
      <NavTop>
        <Logo onClick={() => toggleTheme()}>
          <img src={logo} alt="logo" />
        </Logo>
        <NavLink
          isselected={currentTab == 0 ? true : false}
          onClick={() => setCurrentTab(0)}
        >
          <i className="fi fi-rr-home"></i>
        </NavLink>
        <Spacer height="0.5em" />
        <NavLink
          isselected={currentTab == 1 ? true : false}
          onClick={() => setCurrentTab(1)}
        >
          <i className="fi fi-rr-stats"></i>
        </NavLink>
        <Spacer height="0.5em" />
        <NavLink
          isselected={currentTab == 2 ? true : false}
          onClick={() => setCurrentTab(2)}
        >
          <i className="fi fi-rr-ballot-check"></i>
        </NavLink>
        <Spacer height="0.5em" />
        <NavLink
          isselected={currentTab == 3 ? true : false}
          onClick={() => setCurrentTab(3)}
        >
          <i className="fi fi-rr-rocket-lunch"></i>
        </NavLink>
      </NavTop>
      <NavBottom>
        <Avatar url={av1} />
        <Spacer />
        <Avatar url={av2} />
        <Spacer />
        <Avatar url={av3} />
        <Spacer />
        <NavLink>
          <i className="fi fi-rr-exit"></i>
        </NavLink>
        <Spacer />
      </NavBottom>
    </NavBarContainer>
  )
}

export default NavBar
