import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import thumbAttendance from '../public/images/works/attandance.webp'
import thumbImageClassification from '../public/images/works/imageClassification1.webp'
import thumbSignLanguageClassification from '../public/images/works/sign_language_classification_thumb.webp';
import thumbfireDetector from '../public/images/works/rife.webp';
import thumbObjectDetection from '../public/images/works/object.webp';

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        AI Projects
      </Heading>
      {/* <p>Comming Soon</p> */}
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="attandance"
            title="Attendance"
            thumbnail={thumbAttendance}
          >
            Automated Face Recognition Attendance
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="imageClassification"
            title="Image classification web app"
            thumbnail={thumbImageClassification}
          >
            An image classification web app with streamlit and gradio
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="Fire-Detector"
            title="Fire-Detector"
            thumbnail={thumbfireDetector}
          >
        A project using Semantic Segmentation and PyTorch to detect fire in images      
        </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="Object-Detection"
            title="Object-Detection"
            thumbnail={thumbObjectDetection}
          >
Real-time sports analytics system using YOLOv8 for detecting players, referees, and goalkeepers in live match footage.          </WorkGridItem>
        </Section>
 
        <Section delay={0.1}>
          <WorkGridItem id="Sign-Language-Classification" 
          thumbnail={thumbSignLanguageClassification}
           title="Sign-Language-Classification">
            Real-Time Classification.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
