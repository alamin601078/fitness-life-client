
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {


  return (
    <div className='w-full h-1/2 mb-24' >
      <Swiper
      
               spaceBetween={30}
               centeredSlides={true}
               autoplay={{
                 delay: 2500,
                 disableOnInteraction: false,
               }}
               pagination={{
                 clickable: true,
               }}
               navigation={true}
               modules={[Autoplay, Pagination, Navigation]}
               className="mySwiper"
      >
        <SwiperSlide><div ><img src="https://i.ibb.co/DY7BzSv/athletic-man-practicing-gymnastics-keep-fit.jpg" alt="" /></div></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/2kPXN2w/58386621-9429176.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/Jcn6bw3/21784320-6519119.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/gmXLHZr/58386383-9427866.jpg" alt="" /></SwiperSlide>
      </Swiper>
    </div>
  );
}