import { CardProduct, FormLogin } from '@components/block';
import { Grid, Section } from '@components/containers';
import { Spiner, Button } from '@components/ui';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { NextPage } from 'next';
import { Container } from 'react-bootstrap';

const dataTest = [
  {
    id: 1,
    name: 'David'
  },
  {
    id: 2,
    name: 'Sandoval'
  },
  {
    id: 3,
    name: 'Joselyn'
  }
];
const UI: NextPage = () => {
  return (
    <div>
      <Section>
        <Container fluid="xxl" >
          <h1>Inputs</h1>
          <h4>Input default</h4>
          <FormLogin />

          <h1>Spiners</h1>
          <h5>Prop size=sm </h5>
          <Spiner sm />
          <h5>Default size </h5>
          <Spiner />
          <h5>Custom size</h5>
          <Spiner style={{ width: '3rem', height: '3rem' }} />

          <h1>Buttons</h1>
          <h5>Outlined</h5>
          <Button
          color='light'
          variant='outlined'
          className='me-2'
          isLoading={true}
          componentLoading={<Spiner sm />}
        >
          <AiOutlineShoppingCart />
        </Button>
        <Button
          color='primary'
          isLoading={true}
          componentLoading={<>
          <Spiner sm />
            <span className='ps-2'>Cargando...</span>
          </>}
        >Obtener Membresía</Button>
        </Container>
      </Section>
      <Section>
        <Container fluid="xxl">
          <Grid
            columns={3}
            component={<CardProduct />}
            items={dataTest}
          />
        </Container>
      </Section>
    </div>
  );
};

export default UI;
