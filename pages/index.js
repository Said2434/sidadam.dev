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
    <p>Data Scientist and Software Developer</p>
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
          <BioYear>2024.10 - 2025.06 Undergraduate Researcher — Computer Vision Lab, Sejong University  </BioYear>
          <Paragraph>
          • Learned and applied core tools including Python, PyTorch, and OpenCV for vision-based research. <br />
          •Collected and labeled datasets for model training and evaluation. <br />
          •Assisted in running experiments, debugging, and testing deep learning pipelines. <br />
          •Read and summarized research papers to support project understanding. <br />
          •Created small visualization and automation scripts for analyzing results. <br />
          •Participated in early-stage projects on image classification (e.g., medical imagery) and object detection/segmentation (e.g., vehicle and human detection).       <br />
                 </Paragraph>
        </BioSection>
        <BioSection>
          <BioYear>2025.06 – 2025.08 Computer Vision Developer — Far Island Company, Gangnam  </BioYear>
          <Paragraph>
           • Supported development of computer vision models for internal AI-driven applications. <br />
           •Preprocessed and annotated datasets, improving training efficiency and data quality. <br />
           •Utilized PyTorch and OpenCV for model prototyping and experimentation. <br />
           •Collaborated with senior engineers to debug and optimize algorithms. <br />
           •Contributed to model visualization and documentation for project reports. <br />
           •Gained practical experience in a startup-oriented AI environment in Gangnam.   <br />
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
