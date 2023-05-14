import styled from 'styled-components'
import cloche from '../../assets/icons/cloche.svg'
import { IconButton, Spacer } from '../../styles/globals'
import Avatar from '../Avatar'
import { useContext } from 'react'
import { ThemeContext } from '../ThemeProvider'
import TextField from '../TextField'

const Container = styled.div`
  border-bottom: 0.05em solid ${(props) => props.theme.divider};
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  padding: 0.8em 0;
  align-items: center;
`

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
`

const profileImage =
  'https://img.freepik.com/photos-gratuite/portrait-futuriste-jeune-femme-adulte-brille-sensualite-generee-par-ia_188544-20368.jpg?size=626&ext=jpg&uid=R32696892&ga=GA1.2.986361167.1680360118&semt=sph'

const TopBar = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <Container theme={theme}>
      <TextField hint="Search" icon="fi fi-rr-search" />
      <Content>
        <IconButton>
          <i class="fi fi-rr-bell"></i>
        </IconButton>
        <Spacer width="1em" />
        <Avatar url={profileImage} />
      </Content>
    </Container>
  )
}

export default TopBar
