import { CardCourse } from '@components/block';
import type { NextPage } from 'next';

export const getServerSideProps = async () => {
  return {
    props: {}
  };
};

const Home: NextPage = () => {
  return (
    <>
      <div>Contenido</div>
      <CardCourse />
    </>
  );
};

export default Home;
