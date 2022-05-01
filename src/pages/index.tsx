import { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { SwiperSlide } from 'swiper/react';
import { ICourse } from '@api/resources';
import { BannerCta, CardCourse } from '@components/block';
import { Grid, Section, Slider } from '@components/containers';
import { PublicThemeCtx } from '@contexts/PublicCtx';

const Home = () => {
  const { courses } = useContext(PublicThemeCtx);
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
            render={(course: ICourse) => (
              <CardCourse key={course.id} {...course} />
            )}
          />
        </Container>
      </Section>
    </>
  );
};

export default Home;
