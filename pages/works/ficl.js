import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="FICL">
    <Container>
      <Title>
        FICL FICL Manager{' '}
        <Badge>
          AI-based smart water growth management smart aquaculture solution
        </Badge>
      </Title>
      <P>
        FICL Manager is a comprehensive application designed to streamline the
        management of fish farms and ensure optimal water quality. With the
        assistance of aquaculture experts and advanced machine learning
        algorithms, the app provides valuable insights and recommendations for
        improved farm productivity. Users can easily track farm notes, including
        growth data and water quality information, to make informed decisions
        and enhance their farming operations
      </P>
      <P>
        During my internship at 4Lab Company, our team developed FICL Manager, a
        mobile and web application. Throughout the project, I played a
        significant role in implementing the app`s visual design, ensuring it
        was aesthetically pleasing and responsive across different devices.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>iOS, Android, Windows, MacOS</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React Native, React, Nest.js</span>
        </ListItem>
        <ListItem>
          <Meta>Download</Meta>
          <Link href="https://apps.apple.com/kr/app/ficl-manager/id1673676172?l=en">
            v1.0.4
          </Link>
        </ListItem>
      </List>

      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/ficl1.jpg" alt="FICL" />
        <WorkImage src="/images/works/ficl2.jpg" alt="FICL" />
        <WorkImage src="/images/works/ficl3.jpg" alt="FICL" />
        <WorkImage src="/images/works/ficl4.jpg" alt="FICL" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
