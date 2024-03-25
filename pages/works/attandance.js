import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid
} from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Evflex">
    <Container>
      <Title>
      AttiinDance <Badge>Automated Face Recognition Attendance</Badge>
      </Title>
      <P>
       coming soon
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>iOS, Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React Native, Django, mySQL</span>
        </ListItem>
        <ListItem>
          <Meta>Link</Meta>
          <Link href="https://www.evflex.co.kr/">
            website
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Download</Meta>
          <span>It is not on Production</span>
        </ListItem>
      </List>
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/attandance2.jpg" alt="Attandance" />
        <WorkImage src="/images/works/attandance3.jpg" alt="Attandance" />
        <WorkImage src="/images/works/attandance4.jpg" alt="Attandance" />
        <WorkImage src="/images/works/attandance5.jpg" alt="Attandance" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
