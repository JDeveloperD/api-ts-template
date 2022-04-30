import Image from 'next/image';
import Link from 'next/link';
import LogoStyled from './logo.styled';

const Logo = () => {
  return (
    <Link href="/" passHref>
      <LogoStyled.Wrapper>
        <Image
          src="/img/logo/horizontal/gradient.png"
          width={100}
          height={35}
        />
      </LogoStyled.Wrapper>
    </Link>
  );
};

export default Logo;
