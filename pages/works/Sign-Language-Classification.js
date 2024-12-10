import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    SimpleGrid,
    Box,
    Heading
  } from '@chakra-ui/react'
  import { TitleAI, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  import Layout from '../../components/layouts/article'
  import NextLink from 'next/link'
  import { ChevronRightIcon } from '@chakra-ui/icons'
  
  const Work = () => (
    <Layout title="Sign-Language-Classification">
      <Container>
        <TitleAI>
        Sign-Language-Classification <Badge> Real-Time Classification.
        </Badge>
        </TitleAI>
        <P>
  In this innovative project, I designed and developed a comprehensive 
  real-time hand gesture recognition system that utilizes advanced 
  computer vision and machine learning techniques to recognize hand gestures 
  in real time for various applications.
</P>
<List ml={4} my={4}>
  <ListItem>
    <Meta>Platform</Meta>
    <span>Web, Real-time Camera Feed</span>
  </ListItem>
  <ListItem>
    <Meta>Stack</Meta>
    <span>Python, OpenCV, Mediapipe, Scikit-learn</span>
  </ListItem>
  <ListItem>
    <Meta>Model</Meta>
    <span>Random Forest Classifier</span>
  </ListItem>
</List>

<P>The system is built on a four-layered architecture:</P>
<P>1. Data Collection & Recognition Layer</P>
<P>2. Data Processing Layer</P>
<P>3. Model Training Layer</P>
<P>4. Real-Time Testing Layer</P>
<Box my={4}>
  
</Box>

<Box>
  <Link as={NextLink} href="/works/Sign-Language-Classification">
    AI
  </Link>
  <span>
    {' '}
    <ChevronRightIcon />{' '}
  </span>
  <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
    Layer 1 <Badge>Data Collection & Recognition Layer</Badge>
  </Heading>
</Box>

<P>
  In the Data Collection & Recognition Layer, I integrated **Mediapipe** 
  with a webcam to capture real-time images of hand gestures. The system uses:
</P>
<List my={4}>
  <ListItem>
    <Meta>OpenCV (cv2):</Meta> 
    <P>
      For real-time video capture and image processing, enabling frame analysis 
      for gesture recognition.
    </P>
  </ListItem>
  <ListItem>
    <Meta>Mediapipe:</Meta>
    <P>
      For extracting hand landmarks from images, which are used to classify gestures.
    </P>
  </ListItem>
  <ListItem>
    <Meta>NumPy:</Meta>
    <P>
      Used for handling arrays and numerical operations on feature vectors.
    </P>
  </ListItem>
  <ListItem>
    <Meta>Pickle:</Meta>
    <P>
      For storing preprocessed data and trained models, ensuring efficient reuse.
    </P>
  </ListItem>
</List>
<WorkImage  src="/images/works/signLanguageWF.png" alt="Sign-Language-Classification" />

<Box>
  <Link as={NextLink} href="/works/Sign-Language-Classification">
    AI
  </Link>
  <span>
    {' '}
    <ChevronRightIcon />{' '}
  </span>
  <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
    Layer 2 <Badge>Data Processing Layer</Badge>
  </Heading>
</Box>

<P>
  The Data Processing Layer focuses on transforming captured images into usable 
  data. This involves:
</P>
<List my={4}>
  <ListItem>
    <Meta>Mediapipe Hand Landmark Extraction:</Meta> 
    <P>
      Extracts the 3D landmarks of the hand from the webcam feed, representing key 
      points such as fingertips, palms, and knuckles.
    </P>
  </ListItem>
  <ListItem>
    <Meta>Data Preprocessing:</Meta>
    <P>
      The landmarks are then converted into feature vectors using **NumPy** 
      and saved in **Pickle** files for efficient model training.
    </P>
  </ListItem>
</List>

<Box>
  <Link as={NextLink} href="/works/Sign-Language-Classification">
    AI
  </Link>
  <span>
    {' '}
    <ChevronRightIcon />{' '}
  </span>
  <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
    Layer 3 <Badge>Model Training Layer</Badge>
  </Heading>
</Box>

<P>
  The Model Training Layer is responsible for training the systems machine 
  learning model using the preprocessed data. This layer includes:
</P>
<List my={4}>
  <ListItem>
    <Meta>Random Forest Classifier:</Meta> 
    <P>
      The model is trained using a **Random Forest Classifier**, which classifies 
      hand gestures based on the extracted features from the data.
    </P>
  </ListItem>
  <ListItem>
    <Meta>Scikit-learn:</Meta>
    <P>
      This library is used for training and evaluating the model, ensuring optimal 
      performance.
    </P>
  </ListItem>
  <ListItem>
    <Meta>Pickle:</Meta>
    <P>
      The trained model is stored in a **Pickle** file for future use in real-time 
      testing.
    </P>
  </ListItem>
</List>

<Box>
  <Link as={NextLink} href="/works/Sign-Language-Classification">
    AI
  </Link>
  <span>
    {' '}
    <ChevronRightIcon />{' '}
  </span>
  <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
    Layer 4 <Badge>Real-Time Testing Layer</Badge>
  </Heading>
</Box>

<P>
  In the Real-Time Testing Layer, the system classifies hand gestures in real-time 
  using the webcam feed. The testing layer involves:
</P>
<List my={4}>
  <ListItem>
    <Meta>Webcam Feed:</Meta> 
    <P>
      Captures live video from the webcam, continuously processing each frame to 
      detect and classify gestures.
    </P>
  </ListItem>
  <ListItem>
    <Meta>Real-Time Prediction:</Meta>
    <P>
      The trained model classifies hand gestures on the fly, providing real-time 
      feedback to users.
    </P>
  </ListItem>
</List>

<SimpleGrid columns={2} gap={2}>
  <WorkImage src="/images/works/signLanguageR1.png" alt="Sign-Language-Classification" />
  <WorkImage src="/images/works/signLanguageR2.png" alt="Sign-Language-Classification" />
  <WorkImage src="/images/works/signLanguageR3.png" alt="Sign-Language-Classification" />
</SimpleGrid>
</Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
