import styled from 'styled-components'
import NavBar from '../../components/NavBar'
import TopBar from '../../components/TopBar'
import { Card } from '../../components/Card'
import { BalanceCard } from '../../components/BalanceCard'
import { Padding, Spacer, Button } from '../../styles/globals'
import Recommanded from '../../components/Recommanded'

const data = [
  {
    name: 'Cavelink #8567',
    price: '0.10',
    time: '4h 30m 11s',
    image:
      'https://img.freepik.com/photos-gratuite/robot-lunettes-se-tient-dans-desert_1340-23241.jpg?w=1060&t=st=1683967204~exp=1683967804~hmac=ade8558b1b7f14cef5ef2f719f620ff9a606d7748b7d0ca110d5e9c519ace860',
  },
  {
    name: 'Pallride #2048',
    price: '0.67',
    time: '1h 17m 3s',
    image:
      'https://img.freepik.com/photos-premium/illustration-conceptuelle-technologie-intelligence-artificielle-abstrait-futuriste_860978-420.jpg?size=626&ext=jpg&uid=R32696892&ga=GA1.2.986361167.1680360118&semt=sph',
  },
  {
    name: 'Coregoldy Crypto #1394',
    price: '1.12',
    time: '4h 30m 11s',
    image:
      'https://img.freepik.com/photos-gratuite/robot-robot-se-tiennent-dans-desert_1340-27713.jpg?w=1060&t=st=1683974131~exp=1683974731~hmac=ba2680467a2e85bb63c78f388b926a9bb3889bdb8eb68df09bec334dff5e4ffa',
  },
]

const HomeContainer = styled.div`
  display: flex;
  overflow: hidden;
  height: 100vh;
`
const Container = styled.div`
  width: 100%;
  overflow-y: scroll;
  margin: 0 auto;
`

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const Column = styled.div`
  flex: ${(props) => (props.flex ? props.flex : 1)};
`

const LargeCard = styled.div`
  width: 100%;
  padding: 1.4em 0;
  border-radius: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  background-image: url('image-large.jpg');
  background-size: cover;
  background-position: center;
`

const Row = styled.div`
  display: flex;
  align-items: center;
`
const ActionBanner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h2 {
    font-size: 1.2rem;
  }
  em {
    color: grey;
    font-style: normal;
    font-weight: normal;
    font-size: 0.8rem;
  }
`

const GridView = styled.div`
  display: grid;
  width: 100%;
  grid-gap: 1em;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const BottomSpace = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: initial;
    height: 4.5em;
  }
`

function Home() {
  document.title = 'Home - Alvo'

  return (
    <HomeContainer>
      <NavBar />
      <Container>
        <Padding margin="0 3em">
          <TopBar />
          <Spacer />
          <Content>
            <Column flex={3}>
              <LargeCard>
                <Padding margin="0 2em">
                  <h5>ALVO</h5>
                  <Spacer height=".5em" />
                  <h1>Create your own NFT</h1>
                  <Spacer height=".5em" />
                  <p>One of the most convenient platforms for buying NFTs</p>
                  <Spacer height="1.5em" />
                  <Row>
                    <Button type="primary">Discover Now</Button>
                    <Spacer width="1em" />
                    <Button type="outlin">Create Yours</Button>
                  </Row>
                </Padding>
              </LargeCard>
              <Spacer height="2em" />
              <ActionBanner>
                <Row>
                  <h2>ALL NFTS</h2>
                  <Spacer width="1em" />
                  <em>45,698 items</em>
                </Row>
                <Row></Row>
              </ActionBanner>
              <Spacer height="1em" />
              <GridView>
                {data.map((item, index) => (
                  <Card key={index} {...item} />
                ))}
              </GridView>
            </Column>
            <Spacer width="2em" />
            <Column>
              <BalanceCard />
              <Spacer height="2.5em" />
              <ActionBanner>
                <h2>Recommended</h2>
                <em>See All</em>
              </ActionBanner>
              <Spacer height="1em" />
              <Recommanded />
            </Column>
            <BottomSpace />
          </Content>
        </Padding>
      </Container>
    </HomeContainer>
  )
}

export default Home
