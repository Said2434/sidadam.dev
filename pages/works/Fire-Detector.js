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
    <Layout title="Fire Detector">
        <Container>
            <TitleAI>
                Fire Detector <Badge>Semantic Segmentation</Badge>
            </TitleAI>
            <P>
                This project demonstrates a real-time fire detection system using semantic segmentation. 
                Built with PyTorch, the system identifies fire in images by analyzing pixels, enabling 
                early detection in hazardous situations.
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>Python, Jupyter Notebook</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>PyTorch, UNet, Wandb</span>
                </ListItem>
                <ListItem>
                    <Meta>Model</Meta>
                    <span>UNet Architecture for Semantic Segmentation</span>
                </ListItem>
            </List>

            <P>The system is built on the following workflow:</P>
            <P>1. Environment Setup</P>
            <P>2. Data Preparation</P>
            <P>3. Model Training</P>
            <P>4. Fire Detection</P>
            <Box my={4}>
                <WorkImage
                    src="/images/works/fireDetectorWorkflow.png"
                    alt="Fire Detector Workflow"
                />
            </Box>

            <Box>
                <Link as={NextLink} href="/works/fireDetector">
                    AI
                </Link>
                <span>
                    {' '}
                    <ChevronRightIcon />{' '}
                </span>
                <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
                    Step 1 <Badge>Environment Setup</Badge>
                </Heading>
            </Box>
            <P>
                The environment setup involves configuring Python libraries and tools to run the fire detector. 
                Libraries like PyTorch and Wandb are essential for training and tracking the model.
            </P>
            <List my={4}>
                <ListItem>
                    <Meta>Python Libraries:</Meta> 
                    <P>
                        Install <code>torch</code>, <code>torchvision</code>, <code>wandb</code>, and others.
                    </P>
                </ListItem>
                <ListItem>
                    <Meta>Wandb:</Meta>
                    <P>
                        Used for tracking experiments and visualizing training metrics.
                    </P>
                </ListItem>
            </List>

            <Box>
                <Link as={NextLink} href="/works/fireDetector">
                    AI
                </Link>
                <span>
                    {' '}
                    <ChevronRightIcon />{' '}
                </span>
                <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
                    Step 2 <Badge>Data Preparation</Badge>
                </Heading>
            </Box>
            <P>
                In the data preparation phase, the system organizes images into training and validation datasets. 
                These images are labeled to distinguish areas of fire from non-fire regions.
            </P>
            <List my={4}>
                <ListItem>
                    <Meta>Semantic Segmentation:</Meta>
                    <P>
                        Annotate images to mark fire zones pixel by pixel.
                    </P>
                </ListItem>
                <ListItem>
                    <Meta>Dataset Tools:</Meta>
                    <P>
                        Use tools like <code>LabelMe</code> for image annotation.
                    </P>
                </ListItem>
            </List>

            <Box>
                <Link as={NextLink} href="/works/fireDetector">
                    AI
                </Link>
                <span>
                    {' '}
                    <ChevronRightIcon />{' '}
                </span>
                <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
                    Step 3 <Badge>Model Training</Badge>
                </Heading>
            </Box>
            <P>
                The UNet model is trained on the labeled dataset. During training, the system learns to 
                identify patterns in the image that signify fire.
            </P>
            <List my={4}>
                <ListItem>
                    <Meta>UNet Architecture:</Meta> 
                    <P>
                        A deep learning model designed for precise pixel-level segmentation.
                    </P>
                </ListItem>
                <ListItem>
                    <Meta>Training Process:</Meta>
                    <P>
                        Optimize the model by adjusting hyperparameters like batch size and learning rate.
                    </P>
                </ListItem>
                <ListItem>
                    <Meta>Wandb Tracking:</Meta>
                    <P>
                        Monitor training metrics like loss and accuracy.
                    </P>
                </ListItem>
            </List>
            <WorkImage src="/images/works/fireDetectorTraining.png" alt="Fire Detector Training" />

            <Box>
                <Link as={NextLink} href="/works/fireDetector">
                    AI
                </Link>
                <span>
                    {' '}
                    <ChevronRightIcon />{' '}
                </span>
                <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
                    Step 4 <Badge>Fire Detection</Badge>
                </Heading>
            </Box>
            <P>
                The trained model processes new images or video streams to identify fire. The output highlights 
                fire regions, helping in early detection and response.
            </P>
            <List my={4}>
                <ListItem>
                    <Meta>Prediction Output:</Meta> 
                    <P>
                        Segmented images with fire areas marked in red.
                    </P>
                </ListItem>
                <ListItem>
                    <Meta>Applications:</Meta>
                    <P>
                        Can be used for forest fire detection, industrial safety, and surveillance systems.
                    </P>
                </ListItem>
            </List>
            <WorkImage src="/images/works/fireDetectorResult.png" alt="Fire Detection Example" />

           
        </Container>
    </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
