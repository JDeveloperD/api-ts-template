import { BannerCta, CardCourse } from '@components/block';
import { Grid, Section, Slider } from '@components/containers';
import type { NextPage } from 'next';
import { Container } from 'react-bootstrap';

export const getServerSideProps = async () => {
  return {
    props: {}
  };
};

const Home: NextPage = () => {
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
            items={[1, 2, 3, 4, 5, 6, 7, 8]}
            columns={4}
            component={<CardCourse />}
          />
        </Container>
      </Section>
    </>
  );
};

export default Home;
