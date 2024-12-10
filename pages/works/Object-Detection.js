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
    <Layout title="YOLOv8 Object Detection">
        <Container>
            <TitleAI>
                YOLOv8 Object Detection <Badge>Real-Time Detection</Badge>
            </TitleAI>
            <P>
                This project demonstrates a state-of-the-art real-time object detection system 
                built using the YOLOv8 framework. The system is capable of detecting objects in 
                images and videos with high accuracy and speed, making it suitable for 
                real-world applications like traffic monitoring and robotics.
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>Python, Jupyter Notebook</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>PyTorch, OpenCV, YOLOv8</span>
                </ListItem>
                <ListItem>
                    <Meta>Model</Meta>
                    <span>YOLOv8 Object Detection Framework</span>
                </ListItem>
            </List>

            <P>The system is built on the following workflow:</P>
            <P>1. Data Collection & Preparation</P>
            <P>2. Model Training</P>
            <P>3. Model Evaluation</P>
            <P>4. Real-Time Prediction</P>
            <Box my={4}>
                
            </Box>

            <Box>
                <Link as={NextLink} href="/works/yolov8">
                    AI
                </Link>
                <span>
                    {' '}
                    <ChevronRightIcon />{' '}
                </span>
                <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
                    Step 1 <Badge>Data Collection & Preparation</Badge>
                </Heading>
            </Box>
            <P>
                The data preparation process involves structuring a dataset with images and corresponding 
                labels. The labels follow the YOLO format, specifying bounding boxes and object classes. 
                Tools like <strong>LabelImg</strong> are used to annotate images.
            </P>
            <List my={4}>
                <ListItem>
                    <Meta>Training Data:</Meta> 
                    <P>
                        A custom dataset like <code>Detect-Traffic-Sign-6</code> containing images of traffic signs.
                    </P>
                </ListItem>
                <ListItem>
                    <Meta>Validation Data:</Meta>
                    <P>
                        A separate dataset to evaluate model performance after training.
                    </P>
                </ListItem>
            </List>

            <Box>
                <Link as={NextLink} href="/works/yolov8">
                    AI
                </Link>
                <span>
                    {' '}
                    <ChevronRightIcon />{' '}
                </span>
                <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
                    Step 2 <Badge>Model Training</Badge>
                </Heading>
            </Box>
            <P>
                The YOLOv8 model is trained by feeding it batches of labeled images. The training 
                process involves:
            </P>
            <List my={4}>
                <ListItem>
                    <Meta>Hyperparameter Tuning:</Meta>
                    <P>
                        Configuring parameters like learning rate, batch size, and epochs to optimize performance.
                    </P>
                </ListItem>
                <ListItem>
                    <Meta>Neural Network:</Meta>
                    <P>
                        YOLOv8’s architecture processes input images to predict bounding boxes and class labels.
                    </P>
                </ListItem>
            </List>
            <SimpleGrid columns={2} gap={2}>
            <WorkImage src="/images/works/yolovT1.png" alt="YOLOv8 Training" />
            <WorkImage src="/images/works/yoloT2.png" alt="YOLOv8 Training" />
            </SimpleGrid>
            <Box>
                <Link as={NextLink} href="/works/yolov8">
                    AI
                </Link>
                <span>
                    {' '}
                    <ChevronRightIcon />{' '}
                </span>
                <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
                    Step 3 <Badge>Model Evaluation</Badge>
                </Heading>
            </Box>
            <P>
                After training, the model is evaluated using a validation dataset. Metrics like 
                <strong>mAP (mean Average Precision)</strong>, precision, and recall are used to assess performance.
            </P>
            <List my={4}>
                <ListItem>
                    <Meta>Visualization:</Meta>
                    <P>
                        Results are visualized with bounding boxes and labels for validation data.
                    </P>
                </ListItem>
            </List>
            <WorkImage src="/images/works/yolovEvo.png" alt="YOLOv8 Evaluation" />

            <Box>
                <Link as={NextLink} href="/works/yolov8">
                    AI
                </Link>
                <span>
                    {' '}
                    <ChevronRightIcon />{' '}
                </span>
                <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
                    Step 4 <Badge>Real-Time Prediction</Badge>
                </Heading>
            </Box>
            <P>
                The trained model is integrated with OpenCV to process real-time video streams. Each frame 
                is analyzed to detect and classify objects on the fly.
            </P>
            <List my={4}>
                <ListItem>
                    <Meta>Webcam Integration:</Meta> 
                    <P>
                        The system connects to a webcam to detect objects in real-time.
                    </P>
                </ListItem>
                <ListItem>
                    <Meta>Applications:</Meta>
                    <P>
                        Suitable for tasks like traffic monitoring, security systems, and robotics.
                    </P>
                </ListItem>
            </List>

            <SimpleGrid columns={2} gap={2}>
                <WorkImage src="/images/works/yolovRes.png" alt="Real-Time Prediction" />
            </SimpleGrid>
        </Container>
    </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
