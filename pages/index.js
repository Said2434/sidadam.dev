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
Driving **AI Innovation** and **Startup Ecosystem Growth**. A technologist focused on Deep Learning and high-impact product execution.     </Box>

<Box display={{ md: 'flex' }}>
  <Box flexGrow={1}>
    <Heading as="h2" variant="page-title">
      Saidov Adam
    </Heading>
    <p>AI Engineer</p>
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
      w="200px"  // Adjusted width to 200px
      h="200px"  // Adjusted height to 200px
      display="inline-block"
      borderRadius="full"
      overflow="hidden"
    >
      <Image
        src="/images/Adam.jpg"
        alt="Profile image"
        width="100%"  // Ensures the image fills the container
        height="100%"  // Ensures the image fills the container
        objectFit="cover"  // Makes sure the image covers the circle without distortion
      />
    </Box>
  </Box>
</Box>


      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About Me
        </Heading>
        <Paragraph>
I am **Saidov Adam**, a Vision-driven Technologist and Entrepreneur focused on leveraging **Deep Learning** and **AI** to solve real-world challenges. My technical specialization is in **Computer Vision**, where I utilize frameworks like PyTorch and advanced models (YOLO, UNet, ResNet) for high-impact product development. Beyond the code, I founded and lead **CodeSphere**, a growing tech community in Seoul, organizing 12+ technical meetups and facilitating mentorship for early-stage founders. I have a proven track record leading multidisciplinary teams in demanding hackathon environments, overseeing product planning, technical workflows, and successful project delivery. I am dedicated to fostering innovation and driving collaboration across the global tech landscape.      
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
  <BioYear>2025.04 - 2025.08 AI Engineer — Far Island Company, Seoul, Korea</BioYear>
  <Paragraph>
    • Built and optimized computer vision models for classification, detection, segmentation, and tracking using PyTorch, OpenCV, CNN/RNN, and U-Net. <br />
    • Converted models to ONNX and TensorRT, applying CUDA optimization and FP16/INT8 quantization for faster GPU inference. <br />
    • Managed dataset preparation, including annotation, augmentation, and cleaning, and tracked experiments using MLflow. <br />
    • Packaged and deployed real-time inference pipelines with Docker and integrated LLM tools for internal automation. <br />
  </Paragraph>
</BioSection>

      <BioSection>
  <BioYear>2023.12 - 2025.03 Software Engineer Researcher — Robotics Lab, Sejong University, Seoul</BioYear>
  <Paragraph>
    • Supported experiments with data preparation, model testing, and implementation of research ideas. <br />
    • Reviewed academic papers and summarized key findings for lab discussions. <br />
    • Worked on ML/CV projects including image classification and feature extraction using Python and PyTorch. <br />
    • Assisted ongoing research through dataset preparation, preprocessing, and model evaluation. <br />
  </Paragraph>
</BioSection>
<BioSection>
  <BioYear>2025.07.01 - 2025.07.05 Automation Engineer (n8n Workflows) — Us:Code Hackathon, Daegu, Korea</BioYear>
  <Paragraph>
    • Led a multidisciplinary team to build U-Insight, an AI-powered civic reporting platform with real-time analysis and automated processing. <br />
    • Oversaw product planning and backend development, integrating FastAPI, database logic, and n8n automation workflows. <br />
    • Coordinated all tasks—including backend, UI/UX flow, and presentation delivery—within a strict 5-day deadline and presented the final product to judges. <br />
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
      </List>
    </Box>

    {/* Programming Languages */}
    <Box p={4} shadow="md" borderWidth="1px" borderRadius="lg" bg={useColorModeValue('gray.100', 'gray.700')}>
      <Heading size="sm" mb={2}>Programming Languages</Heading>
      <List spacing={2}>
        <ListItem>Python</ListItem>
        <ListItem>C</ListItem>
          <ListItem>Java</ListItem>
      </List>
    </Box>

    {/* Frameworks */}
    <Box p={4} shadow="md" borderWidth="1px" borderRadius="lg" bg={useColorModeValue('gray.100', 'gray.700')}>
      <Heading size="sm" mb={2}>Frameworks</Heading>
      <List spacing={2}>
        <ListItem>TensorFlow</ListItem>
        <ListItem>PyTorch</ListItem>
               <ListItem>Spring Boot</ListItem>
      </List>
    </Box>
{/* APIa */}
    <Box p={4} shadow="md" borderWidth="1px" borderRadius="lg" bg={useColorModeValue('gray.100', 'gray.700')}>
      <Heading size="sm" mb={2}>APIs</Heading>
      <List spacing={2}>
        <ListItem>FastAPI</ListItem>
        <ListItem>RESTAPI</ListItem>
             
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
