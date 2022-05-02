import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import LogoStyled from './logo.styled';

interface LogoProps {
  size?: 'lg'
}

const Logo: FC<LogoProps> = ({ size }) => {
  return (
    <Link href="/" passHref>
      <LogoStyled.Wrapper size={size}>
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
