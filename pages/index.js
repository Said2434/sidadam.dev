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
        Hello, I&apos;m a Data Scientist and Software Developer based in Chicago!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Kori Jamal
          </Heading>
          <p>Data Scientist and Software Developer </p>
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
          Hi 👋 I’m Sirojiddin Kamoljonov, but you can call me Kori—because let’s face it, it’s way easier to pronounce! I’m a Data Scientist + Software Developer who loves diving into data like it’s the latest Netflix series.
        </Paragraph>
        <Paragraph>
        I studied at Gachon University in Korea and am now in Chicago, tackling Data Science at IIT. With a background in computer engineering, I specialize in making sense of complex data, building intelligent solutions, and occasionally convincing my code to cooperate. Proficient in Python, TensorFlow, and PyTorch, I’m here to solve real-world problems and have some fun along the way!
        </Paragraph>
        I’m actively looking to expand my career in AI development and data science, and I’m excited to solve real-world problems through technology.
        <Paragraph>
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
    Got accepted to Computer Science major in Gachon University.
  </BioSection>
  <BioSection>
    <BioYear>2022</BioYear>
    Did an internship at 4Lab Inc.
  </BioSection>
  <BioSection>
    <BioYear>2023</BioYear>
    Did an internship at Manageon Inc.
  </BioSection>
  <BioSection>
    <BioYear>2023</BioYear>
    Completed the Bachelor&apos;s Program in Computer Engineering from Gachon University (가천대학교).
  </BioSection>
  <BioSection>
    <BioYear>2023</BioYear>
    Joined LG as a Software Developer.
  </BioSection>
  <BioSection>
    <BioYear>2024</BioYear>
    Got accepted to IIT Chicago for a Data Science program.
  </BioSection>
</Section>


      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art, Music, Photography, Gaming, Machine Learning and of course
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
