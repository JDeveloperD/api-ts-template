import { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { SwiperSlide } from 'swiper/react';
import { Course } from '@api/resources';
import { BannerCta, CardCourse, VideoPreview } from '@components/block';
import { Grid, Modal, Section, Slider } from '@components/containers';
import PublicThemeCtx from '@contexts/PublicCtx/context';
import useToggle from '@hooks/useToggle';

const Home = () => {
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
          <Grid
            items={courses}
            columns={4}
            render={(course: Course) => (
              <CardCourse key={course.id} functionOpenVideoPreview={toggleOpenVideoPreview} {...course} />
            )}
          />
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

export default Home;
