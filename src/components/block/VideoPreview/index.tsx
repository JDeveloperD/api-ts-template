import { HeadLine, Paragraph, Small } from '@components/typography';
import ViewPreviewStyled from './viewPreview.styled';
import { IoIosTimer } from 'react-icons/io';
import { Button } from '@components/ui';
import { AiOutlineUser } from 'react-icons/ai';

const VideoPreview = () => {
  return (
    <ViewPreviewStyled.Wrapper>
      <ViewPreviewStyled.Video>
        <video
        controls
        autoPlay>
          <track kind='captions' src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
        </video>
      </ViewPreviewStyled.Video>
      <div className='p-3 p-md-4'>
        <HeadLine size={5}>Introduccion a la inteligencia artificial</HeadLine>
        <Small color='gray'>Por David Sandoval</Small>
        <div className='d-flex gap-3'>
          <Paragraph color='secondary'>
            <IoIosTimer />
            2h 11m
          </Paragraph>
          <Paragraph color='secondary'>
          <AiOutlineUser />
            100
          </Paragraph>
          <Paragraph color='secondary'>
            Nivel Intermedio
          </Paragraph>
        </div>
        <Paragraph color='gray' className='d-none d-md-block'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nam minus illum? Minima ratione cumque ab est, voluptatum delectus esse enim accusamus consectetur corporis eum deserunt, molestias qui natus facere!</Paragraph>
        <div className="text-end">
        <span className='d-inline-flex gap-2 align-items-center me-4'>
          <HeadLine color='danger' as="span" size={2} className="mb-0">
            $50.59
          </HeadLine>
          <HeadLine size={5} color='gray' as="del">
            $150.44
          </HeadLine>
        </span>
          <Button color='secondary'>Comprar ahora</Button>
        </div>
      </div>
    </ViewPreviewStyled.Wrapper>
  );
};

export default VideoPreview;
