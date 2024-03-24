import {
  Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center,
  SimpleGrid
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Evflex">
    <Container>
      <Title>
        EVFLEX (Manageon) <Badge>EV Cars Charging Service</Badge>
      </Title>
      <P>
        EVFLEX represents a cutting-edge electric vehicle charging platform that
        simplifies the entire charging process. With its intuitive application,
        users can effortlessly initiate and terminate charging sessions, while
        staying updated on their charging progress through real-time
        notifications. Offering a range of convenient options for authorization
        and payment, including credit card integration, KakaoPay, and cash
        top-ups, EVFLEX ensures a hassle-free and seamless charging experience.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>iOS, Android, Windows, MacOS</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React Native, NodeJS, mySQL</span>
        </ListItem>
        <ListItem>
          <Meta>Link</Meta>
          <Link href="https://www.evflex.co.kr/">
            website
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Download</Meta>
          <Link href="https://apps.apple.com/kr/app/evflex-%EB%A7%A4%EB%8B%88%EC%A7%80%EC%98%A8-%EC%A0%84%EA%B8%B0%EC%B0%A8-%EC%B6%A9%EC%A0%84%EC%84%9C%EB%B9%84%EC%8A%A4/id6450326488?l=en-GB">
            v1.2.2
          </Link>
        </ListItem>
      </List>
      <WorkImage src="/images/works/evflex1.png" alt="evflex" />
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/evflex4.jpeg" alt="FICL" />
        <WorkImage src="/images/works/evflex5.jpeg" alt="FICL" />
        <WorkImage src="/images/works/evflex2.jpeg" alt="FICL" />
        <WorkImage src="/images/works/evflex3.jpeg" alt="FICL" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
