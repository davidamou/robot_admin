import styled from 'styled-components'
import { Avatar, Button, Spacer } from '../globals'

const Container = styled.div`
  background-color: white;
  border-radius: 1em;
  padding: 0.8em;
  overflow: hidden;

  p {
    font-size: small;
    color: grey;
  }
`

const Row = styled.div`
  width: 100%;
  height: 10em;
  display: flex;
  justify-content: center;
  position: relative;
`

const BlockLine = styled.div`
  display: flex;
  justify-content: space-between;
`

const ImageContainer = styled.div`
  flex: ${(props) => (props.flex ? props.flex : 1)};
  img {
    border-radius: 1em;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
const Center = styled.div`
  position: absolute;
  bottom: -1.5em;
  width: 3em;
  height: 3em;
  padding: 0.3em;
  border-radius: 100%;
  background-color: white;
`

const OutlineButton = styled(Button)`
  border: 1px solid rgb(219, 160, 91);
  color: rgb(219, 160, 91);
  font-size: 0.8rem;
  &:hover {
    background-color: rgba(219, 159, 91, 0.141);
  }
`

const avatar =
  'https://img.freepik.com/photos-gratuite/visage-femme-constellation-etoiles-dessus_188544-31086.jpg?size=626&ext=jpg&uid=R32696892&ga=GA1.1.986361167.1680360118&semt=sph'
const image1 =
  'https://img.freepik.com/photos-premium/fille-androide-mecanique-enchevetrement-fils-elements-techniques-femme-robot-humanoide-modele-scifi-complexe-personnage-cyberpunk-blanc-fond-sombre-genere-par-ia_187882-4039.jpg?size=626&ext=jpg&uid=R32696892&ga=GA1.2.986361167.1680360118&semt=sph'
const image2 =
  'https://img.freepik.com/photos-premium/portrait-androide-humain-cyborg-ia_692702-21351.jpg?size=626&ext=jpg&uid=R32696892&ga=GA1.2.986361167.1680360118&semt=sph'
const image3 =
  'https://img.freepik.com/photos-premium/portrait-robot-feminin-futuriste-fantasme-abstrait-artistique-cyberpunk_158863-3620.jpg?size=626&ext=jpg&uid=R32696892&ga=GA1.2.986361167.1680360118&semt=sph'

function Recommanded() {
  return (
    <Container>
      <Row>
        <ImageContainer>
          <img src={image1} alt="recommanded1" />
        </ImageContainer>
        <Spacer width="0.5em" />
        <ImageContainer flex={2}>
          <img src={image2} alt="recommanded2" />
        </ImageContainer>
        <Spacer width="0.5em" />
        <ImageContainer>
          <img src={image3} alt="recommanded3" />
        </ImageContainer>
        <Center>
          <Avatar size="3em">
            <img src={avatar} alt="profile" />
          </Avatar>
        </Center>
      </Row>
      <Spacer height="2.5em" />
      <BlockLine>
        <div>
          <h4>Recommanded</h4>
          <p>@cantaran</p>
        </div>
        <OutlineButton>Follow</OutlineButton>
      </BlockLine>
      <Spacer height="1em" />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
        asperiores labore sed iure et laboriosam dolore quas, eos blanditiis
        ipsa adipisci cupiditate natus.
      </p>
    </Container>
  )
}

export default Recommanded
