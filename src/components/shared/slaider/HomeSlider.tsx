// 'use client';

import { products } from '@/constants';
import ProductCard from '../cards/ProductCard';

// import { ChevronLeft, ChevronRight } from 'lucide-react';

// import { products } from '@/constants';
// import { useCallback, useState } from 'react';
// import SwiperCore from 'swiper';
// import 'swiper/css';
// import { Autoplay, Navigation } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import ProductCard from '../cards/ProductCard';

// const HomeSlider = () => {
//   const [swiperRef, setSwiperRef] = useState<SwiperCore>();

//   const handlePrevious = useCallback(() => {
//     swiperRef!.slidePrev();
//   }, [swiperRef]);

//   const handleNext = useCallback(() => {
//     swiperRef?.slideNext();
//   }, [swiperRef]);
//   SwiperCore.use([Autoplay, Navigation]);

//   return (
//     <div className="flex justify-between items-center my-4 space-x-2">
//       <div>
//         <ChevronLeft
//           className="hidden sm:block cursor-pointer size-5"
//           onClick={handlePrevious}
//         />
//       </div>

//       <Swiper
//         //the amount of slides per view
//         breakpoints={{
//           320: { slidesPerView: 1.5, spaceBetween: 10 },
//           480: { slidesPerView: 2, spaceBetween: 10 },
//           600: { slidesPerView: 2.5 },
//           1080: { slidesPerView: 4 },
//         }}
//         preventClicksPropagation={false}
//         preventClicks={true}
//         allowTouchMove
//         freeMode
//         centeredSlides
//         centeredSlidesBounds
//         onSwiper={setSwiperRef}
//         modules={[Autoplay, Navigation]}
//         spaceBetween={15}
//         autoplay={{
//           delay: 3000,
//           pauseOnMouseEnter: true,
//           disableOnInteraction: false,
//         }}
//         loop
//       >
//         {products.map((product) => (
//           <SwiperSlide key={product.name}>
//             <ProductCard product={product} />
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       <div>
//         <ChevronRight
//           className="hidden sm:block cursor-pointer size-5"
//           onClick={handleNext}
//         />
//       </div>

//     </div>
//   );
// };

// export default HomeSlider;

const HomeSlider = () => {
  return (
    <div className="flex flex-col gap-4">
      {products.map((product) => (
        <ProductCard key={product.name} product={product} />
      ))}
    </div>
  );
};

export default HomeSlider;
