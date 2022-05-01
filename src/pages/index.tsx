import { ICourse } from '@api/resources';
import { BannerCta, CardCourse } from '@components/block';
import { Grid, Section, Slider } from '@components/containers';
import { Container } from 'react-bootstrap';
import { useContext } from 'react';
import { PublicThemeCtx } from '@contexts/PublicCtx';

const Home = () => {
  const { courses } = useContext(PublicThemeCtx);
  return (
    <>
      <Container fluid="xxl">
        <Slider
          items={[1, 2, 3]}
          element={<BannerCta />}
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
