import styled, { keyframes } from 'styled-components'
import { Spacer } from '../../styles/globals'
import Avatar from '../Avatar'
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
    bottom: -1em;
    border-top: 0.05em solid ${(props) => props.theme.divider};
    border-right: none;
  }
`

const NavLink = styled.a`
  width: 1.2em;
  height: 1.2em;
  padding: 0.8em;
  ${(props) =>
    props.isselected ? 'border-right: 2px solid rgb(219, 160, 91)' : null};

  &:hover {
    background-color: rgba(219, 159, 91, 0.141);
  }

  i {
    color: ${(props) => (props.isselected ? 'rgb(219, 160, 91)' : null)};
  }

  @media (max-width: 768px) {
    border-top: ${(props) =>
      props.isselected ? '2px solid rgb(219, 160, 91)' : 'none'};
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

const menuAnimation = keyframes`
from {
  transform: translateY(1em);
  opacity: 0;
}
to {
  opacity: 1;
  transform: translateY(0);
}
`

const NavBottom = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 1em;
  @media (max-width: 768px) {
    margin-bottom: 0;
    animation: ${menuAnimation} 0.3s ease-in-out forwards;
    display: ${(props) => (props.showMenu ? 'flex' : 'none')};
    position: fixed;
    bottom: 3em;
    right: 0.5em;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.4);
    border-radius: 12em;
    padding-top: 0.8em;
    background-color: ${(props) => props.theme.cavans};
  }
`

const MenuButton = styled(NavLink)`
  display: none;
  @media (max-width: 768px) {
    display: initial;
  }
  `

const Logo = styled.div`
  margin: 1.2em 0;
  width: 1em;
  height: 1em;
  font-size: 1.2em;
  font-weight: bold;
  border-radius: 100%;
  border: 4px solid rgb(219, 160, 91);
  border-top: none;
  display: flex;
  padding: 0.2em;
  justify-content: center;
  align-items: center;
  border-left: none;

  &:hover {
    cursor: default;
  }

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
  const [showMenu, setShowMenu] = useState(false)

  return (
    <NavBarContainer theme={theme}>
      <NavTop>
        <Logo onClick={() => toggleTheme()}>R</Logo>
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
        <MenuButton onClick={() => setShowMenu(!showMenu)}>
          <i class="fi fi-bs-menu-dots"></i>
        </MenuButton>
      </NavTop>
      <NavBottom theme={theme} showMenu={showMenu}>
        <Avatar url={av1} />
        <Spacer />
        <Avatar url={av2} />
        <Spacer />
        <Avatar url={av3} />
        <Spacer />
        <NavLink>
          <i className="fi fi-rr-exit"></i>
        </NavLink>
      </NavBottom>
    </NavBarContainer>
  )
}

export default NavBar
