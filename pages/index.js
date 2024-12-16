import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,

  Button,
  List,
  ListItem,
  useColorModeValue,

  Text,
  SimpleGrid
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Paragraph from '../components/paragraph';
import Layout from '../components/layouts/article';
import Section from '../components/section';
// import Image from 'next/image';
import {
  IoLogoTwitter,
  IoLogoGithub,
  IoLogoLinkedin,
} from 'react-icons/io5'
import Image from 'next/image'

const BioSection = ({ children }) => (
  <Box
    mb={4}
    p={4}
    border="1px"
    borderColor="gray.200"
    borderRadius="md"
    bg={useColorModeValue('gray.100', 'gray.700')}
    shadow="md"
  >
    {children}
  </Box>
);

// BioYear Component Definition
const BioYear = ({ children }) => (
  <Text
    fontWeight="bold"
    fontSize="lg"
    color={useColorModeValue('teal.500', 'teal.300')}
    mb={2}
  >
    {children}
  </Text>
);

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
I don&apos;t just follow the rules, I rewrite them. Data Science and Software Development, with a Stark-level twist 
     </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Saidov Adam
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
              src="/images/adam1.jpg"
              alt="Profile image"
              width="200"
              height="200"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About Me
        </Heading>
        <Paragraph>
        I am a junior student at <strong>Sejong University</strong> and an AI enthusiast specializing in computer vision and deep learning. I have experience in image classification, semantic segmentation, and object detection using PyTorch. My research focuses on applying machine learning to environmental science, particularly using satellite data for forest monitoring and ecosystem analysis. I have worked with advanced models like <strong>YOLO</strong>, <strong>UNet</strong>, and <strong>ResNet</strong> to develop real-world computer vision solutions. I thrive in collaborative environments, am always eager to learn, and believe AI can help solve global challenges.
      
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/ai_projects"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            Check My Projects
          </Button>
        </Box>
      </Section>

     
      {/* Work Experience Section */}
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Work Experience
        </Heading>

        <BioSection>
          <BioYear> 2023.12 - 2024.02 Remote Internship at{' '} <Link href="https://www.technaxis.com/" target="_blank" color="blue.500"> Technaxis</Link>. </BioYear>
            <Paragraph>
            • Contributed to developing an object detection system for quality control and inventory management, leveraging PyTorch, YOLO, and Faster R-CNN.<br />
            • Preprocessed diverse image datasets using OpenCV, enhancing model robustness through normalization and data augmentation techniques.<br />
            • Optimized models for edge devices via pruning, quantization, and CUDA acceleration, ensuring real-time performance.<br />
            • Conducted thorough evaluations using mAP and IoU metrics to validate accuracy and robustness under diverse conditions. <br />
             </Paragraph>
        </BioSection>

        <BioSection>
          <BioYear>2024.09 Seoul Tech Impact Hackathon -{' '} <Link href="https://github.com/thompsgj/dropheart-backend" target="_blank" color="blue.500"> Dropheart </Link>-<Link href="https://d1zpw5mq5bnzyn.cloudfront.net/images/9310e365515c451ea24d3fa2bbc53427.jpeg" target="_blank" color="blue.500" rel="noopener noreferrer">Certificate.</Link> </BioYear>
          <Paragraph>
          • Backend Developer for Dropheart, a web app combining geocaching with CRUD functionality for donations.<br />
            • Built features like profile page, reporting, and collaboration with NGOs and charities to enhance user experience.<br />
            • Integrated data visualization to optimize donation supply and demand distribution.        <br />
                 </Paragraph>
        </BioSection>

        <BioSection>
          <BioYear>2024 - Present Member of Free Code Camp Seoul Coding Meetup.</BioYear>
          <Paragraph>
          • Actively participate in collaborative coding sessions, technical discussions, and hands-on workshops. <br />
• Engage with a diverse community of developers, enhancing programming skills and sharing knowledge on various topics. <br />
• Contribute to open-source projects and initiatives driven by the Free Code Camp community. <br />


                </Paragraph>
        </BioSection>
    
        <Section delay={0.3}>
  <Heading as="h3" variant="section-title">
    My Skills
  </Heading>
  <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6} mt={6}>
    {/* Languages */}
    <Box p={4} shadow="md" borderWidth="1px" borderRadius="lg" bg={useColorModeValue('gray.100', 'gray.700')}>
      <Heading size="sm" mb={2}>Languages</Heading>
      <List spacing={2}>
        <ListItem>Russian - Native</ListItem>
        <ListItem>Uzbek - Native</ListItem>
        <ListItem>English - Advanced</ListItem>
        <ListItem>Korean - Beginner</ListItem>
      </List>
    </Box>

    {/* Programming Languages */}
    <Box p={4} shadow="md" borderWidth="1px" borderRadius="lg" bg={useColorModeValue('gray.100', 'gray.700')}>
      <Heading size="sm" mb={2}>Programming Languages</Heading>
      <List spacing={2}>
        <ListItem>Python</ListItem>
        <ListItem>C</ListItem>
      </List>
    </Box>

    {/* Frameworks */}
    <Box p={4} shadow="md" borderWidth="1px" borderRadius="lg" bg={useColorModeValue('gray.100', 'gray.700')}>
      <Heading size="sm" mb={2}>Frameworks</Heading>
      <List spacing={2}>
        <ListItem>TensorFlow</ListItem>
        <ListItem>PyTorch</ListItem>
      </List>
    </Box>

    {/* Operating Systems */}
    <Box p={4} shadow="md" borderWidth="1px" borderRadius="lg" bg={useColorModeValue('gray.100', 'gray.700')}>
      <Heading size="sm" mb={2}>Operating Systems</Heading>
      <List spacing={2}>
        <ListItem>Linux</ListItem>
        <ListItem>macOS</ListItem>
        <ListItem>Windows</ListItem>
      </List>
    </Box>

    {/* IDEs */}
    <Box p={4} shadow="md" borderWidth="1px" borderRadius="lg" bg={useColorModeValue('gray.100', 'gray.700')}>
      <Heading size="sm" mb={2}>IDEs</Heading>
      <List spacing={2}>
        <ListItem>Google Colab</ListItem>
        <ListItem>Jupyter Notebook</ListItem>
        <ListItem>VS Code</ListItem>
        <ListItem>PyCharm</ListItem>
      </List>
    </Box>
  </SimpleGrid>
</Section>

      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/Said2434" target="_blank">
              <Button
                variant="ghost"
                aaa
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @sidadam
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://x.com/Said116829" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @sidadam
              </Button>
            </Link>
          </ListItem>

          <ListItem>
            <Link href="https://www.linkedin.com/in/saidazam-saidov-a1a950279/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                @sidadam
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
