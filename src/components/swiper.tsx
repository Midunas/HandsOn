import * as React from 'react';
import { styled } from '@mui/material';
import Img from 'components/img';
import { Swiper as SwiperJS, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

type SwiperProps = {
  images: string[],
};

const StyledSwiper = styled(SwiperJS)({
  height: 250,
});

const Swiper: React.FC<SwiperProps> = ({ images }) => (
  <StyledSwiper
    pagination={{
      dynamicBullets: true,
    }}
    navigation
    modules={[Pagination, Navigation]}
  >
    {images.map((imgSrc) => (
      <SwiperSlide key={imgSrc}>
        <Img src={imgSrc} sx={{ height: '100%', width: '100%' }} />
      </SwiperSlide>
    ))}
  </StyledSwiper>
);

export default Swiper;
