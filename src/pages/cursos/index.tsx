import { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { SwiperSlide } from 'swiper/react';
import { Course } from '@api/resources';
import { BannerCta, CardCourse, FilterCategories, List, VideoPreview } from '@components/block';
import { Grid, Modal, Section, Slider } from '@components/containers';
import PublicThemeCtx from '@contexts/PublicCtx/context';
import useToggle from '@hooks/useToggle';
import { LineDividerText } from '@components/ui';
import { Paragraph, Small } from '@components/typography';
import { AiOutlineStar } from 'react-icons/ai';

const Courses = () => {
  const { courses } = useContext(PublicThemeCtx);
  const [openVideoPreview, toggleOpenVideoPreview] = useToggle();
  return (
    <>
      <Container fluid="xxl">
        <Slider
          items={[1, 2, 3]}
          render={(dataBanner: any, index: number) => (
            <SwiperSlide key={index}>
              <BannerCta {...dataBanner} />
            </SwiperSlide>
          )}
        />
      </Container>
      <Section>
        <Container fluid="xxl">
          <Row>
            <Col lg={3}>
              <aside>
                <List />
                <LineDividerText color='light' className='mb-4' />
                <Paragraph>Cursos Online <AiOutlineStar /> </Paragraph>
                <LineDividerText color='light' className='my-4' />
                <Small color='gray'>FILTRAR RESULTADOS</Small>
                <FilterCategories className='mt-4' />
              </aside>
            </Col>
            <Col lg={9}>
              <Grid
                items={courses}
                columns={3}
                render={(course: Course) => (
                  <CardCourse key={course.id} functionOpenVideoPreview={toggleOpenVideoPreview} {...course} />
                )}
              />
            </Col>
          </Row>
        </Container>
      </Section>
      {openVideoPreview && (
        <Modal closeFunction={toggleOpenVideoPreview}>
          <VideoPreview />
        </Modal>
      )}
    </>
  );
};

export default Courses;
