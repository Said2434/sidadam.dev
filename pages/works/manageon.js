import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Manageon">
    <Container>
      <Title>
        Manageon <Badge>Official Homepage of Manageon</Badge>
      </Title>
      <P>
      Under the dynamic environment of Manageon, I recently led the migration of our company&apos;s homepage from PHP to JavaScript, leveraging the power of Next.js. With a keen eye for detail, I introduced new features, engaging animations, and stylish design elements, resulting in an enhanced user experience
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.manageon.co.kr">
            https://www.manageon.co.kr <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows, macOS, Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS, Next.js, Tailwind</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/manageon1.png" alt="Manageon" />
      <WorkImage src="/images/works/manageon2.png" alt="Manageon" />
     
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
