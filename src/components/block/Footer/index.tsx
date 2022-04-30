import { HeadLine, Paragraph, Small } from '@components/typography';
import { Logo } from '@components/ui';
import { Container, Row, Col } from 'react-bootstrap';
import FooterStyled from './footer.styled';
import { IoMailOutline, IoPhonePortraitOutline, IoLocationOutline } from 'react-icons/io5';
import { FormEmail } from '../Forms';

const Footer = () => {
  return (
    <FooterStyled.Wrapper>
      <Container fluid="xxl">
        <Row>
          <Col sm={6} lg={3}>
            <Logo size="lg" />
            <Paragraph color='gray' className='mt-3'>
            Lorem ipsum dolor amet, consectetur adipiscing elit. Eget nisl nunc quam ac sed turpis volutpat. Cursus sed massa non nisi, placerat.
            </Paragraph>
          </Col>
          <Col sm={6} lg={2} xl={3}>
            <HeadLine size={4} color='light'>Acerca de</HeadLine>
            <Paragraph color="gray">¿Por que Agro Club?</Paragraph>
            <Paragraph color="gray">Blog</Paragraph>
            <Paragraph color="gray">Contacto</Paragraph>
            <Paragraph color="gray">Membresias</Paragraph>
            <Paragraph color="gray">Especialistas</Paragraph>
          </Col>
          <Col sm={6} lg={3}>
            <HeadLine size={4} color='light'>Contactanos</HeadLine>
            <Paragraph color="gray"> <IoMailOutline /> hello@agrouclub.pe</Paragraph>
            <Paragraph color="gray"> <IoPhonePortraitOutline /> +91 98765 43210</Paragraph>
            <Paragraph color="gray"> <IoLocationOutline /> 772 Agroavenida Av.Guashinton, Calle 222</Paragraph>
          </Col>
          <Col sm={6} lg={4} xl={3}>
            <HeadLine size={4} color='light'>Suscribete ahora!</HeadLine>
            <FormEmail placeholder="Enviar email" />
          </Col>
        </Row>
      </Container>
      <FooterStyled.Copy>
        <Container fluid="xxl" className='text-center'>
          <Row className='g-3'>
            <Col lg={6} className="text-md-start">
              <Small color="gray">
                &copy; {new Date().getFullYear()} Agro Club. Todos los derechos reservados
              </Small>
            </Col>
            <Col lg={6} className='text-md-end'>
              <Small color="gray">
                Terminos y condiciones | Politica de privacidad
              </Small>
            </Col>
          </Row>
        </Container>
      </FooterStyled.Copy>
    </FooterStyled.Wrapper>
  );
};

export default Footer;
