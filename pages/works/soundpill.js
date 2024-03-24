import {
  Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Soundpill">
    <Container>
      <Title>
        Soundpill
        <Badge>
          The medical evidence-based sound therapy, music-streaming app
        </Badge>
      </Title>
      <P>
        Experience the innovative power of SoundPill, the ultimate medical
        evidence-based sound therapy app. Developed by experts in medicine, AI,
        statistics, and music therapy, SoundPill supports users in managing
        their physical and mental health based on extensive medical evidence.
      </P>
      <P>
        Immerse yourself in the world of enhanced well-being through the
        innovative SoundPill. SoundPill provides clinically proven sound therapy
        designed by prominent experts in otolaryngology, family medicine,
        cognitive-behavioral therapy, and psychiatry, ensuring safety and
        efficacy in promoting your overall health.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>iOS, Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React Native, NodeJS, mySQL</span>
        </ListItem>
        <ListItem>
          <Meta>Download</Meta>
          <Link href="https://apps.apple.com/us/app/soundpill-sleep-relax-focus/id6450494947">
            v2.0.0
          </Link>
        </ListItem>
      </List>

      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/soundpill1.png" alt="Soundpill" />
        <WorkImage src="/images/works/soundpill2.png" alt="Soundpill" />
        <WorkImage src="/images/works/soundpill3.png" alt="Soundpill" />
        <WorkImage src="/images/works/soundpill4.png" alt="Soundpill" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
