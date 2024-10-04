import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbManageon from '../public/images/works/manageon.png'
import thumbFICL from '../public/images/works/ficl.png'
import thumbEvflex from '../public/images/works/evflex.png'
import thumbSoundpill from '../public/images/works/soundpill.png'


const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Web Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="manageon"
            title="Manageon"
            thumbnail={thumbManageon}
          >
            Official Homepage of Manageon
          </WorkGridItem>
        </Section>
        <Section  delay={0.1}>
          <WorkGridItem id="ficl" title="FICL" thumbnail={thumbFICL}>
            AI-based smart water growth management smart aquaculture solution
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="evflex" title="EVFLEX" thumbnail={thumbEvflex}>
            EV Cars Charging Service
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="soundpill" thumbnail={thumbSoundpill} title="SoundPill">
            The medical evidence-based sound therapy, music-streaming app
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      
      {/* <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="pichu2" thumbnail={thumbPichu2} title="Pichu*Pichu">
            Twitter client app for iPhone Safari
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id="freedbtagger"
            thumbnail={thumbFreeDBTagger}
            title="freeDBTagger"
          >
            Automatic audio file tagging tool using FreeDB for Windows
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem id="amembo" thumbnail={thumbAmembo} title="Amembo">
            P2P private file sharing tool with MSN Messenger integration for
            Windows
          </WorkGridItem>
        </Section>
      </SimpleGrid> */}
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
