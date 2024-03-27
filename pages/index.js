import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,

  Button,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'

import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
} from 'react-icons/io5'
import Image from 'next/image'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m a ML Software Developerbased in Korea!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Kori Jamal
          </Heading>
          <p>ML Software Developer </p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src="/images/kori.jpg"
              alt="Profile image"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Hi 👋 I am an AI and Full-stack developer based in South Korea with a
          passion for AI, machine learning, computer vision, healthcare, and
          software development! I like to work on all aspects of a project, from
          planning, designing, and collaborating to developing complete
          pipelines and applications.
        </Paragraph>
        <Paragraph>
          My main aim is to contribute to our society by building creative,
          efficient, and optimized products using cutting-edge AI and deep
          learning techniques. When not online, I love hanging out with my
          camera and take pictures of marvelous Seoul.
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/web_projects"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My portfolio
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2001</BioYear>
          Born in Andijan, Uzbekistan.
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Got accepted to Computer Science major in Gachon university
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Did internship at 4Lab Inc
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          Did internship at Manageon Inc
        </BioSection>

        <BioSection>
          <BioYear>2023</BioYear>
          Completed the Bachelor&apos;s Program in Computer Engineering from Gachon
          University (가천대학교)
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          Working as a Software Developer at Digital Nutrition Inc., South Korea
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art, Music, Photography, Leica, Machine Learning and of course
          wrestling!
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/korijamal" target="_blank">
              <Button
                variant="ghost"
                aaa
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @korijamal
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/SirojiddinKamo6" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @korijamal
              </Button>
            </Link>
          </ListItem>

          <ListItem>
            <Link href="https://www.instagram.com/korijamal" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @korijamal
              </Button>
            </Link>
          </ListItem>
        </List>
        <Paragraph>
          Feel free to contact me on the above links to join me in my coding
          journey.
        </Paragraph>
        <Paragraph>
         Always open to good opportunities, discussions and
          collaborations.
        </Paragraph>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
