// Import Swiper React components
import slide1 from "./resources/2022-06-17_19.14.00.png"
import slide2 from "./resources/2022-10-19_08.52.16.png"
import slide3 from "./resources/2022-12-31_13.27.35.png"
import slide4 from "./resources/2022-12-30_18.27.59.png"
import slide5 from "./resources/2023-01-07_22.34.19.png"
import './swiper.css'

import {Autoplay} from 'swiper';
import { Swiper, SwiperSlide} from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle';

const SwiperThing = () => {
    return (
        <Swiper id="swiper-scroll"
            modules={[Autoplay]}
            loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: false
            }}
        >
            <SwiperSlide><img className="image-slide" src={slide1} alt="Logo" style={{width:"50vw"}}/></SwiperSlide>
            <SwiperSlide><img className="image-slide"  src={slide2} alt="Logo" style={{width:"50vw"}}/></SwiperSlide>
            <SwiperSlide><img className="image-slide"  src={slide3} alt="Logo" style={{width:"50vw"}}/></SwiperSlide>
            <SwiperSlide><img className="image-slide"  src={slide4} alt="Logo" style={{width:"50vw"}}/></SwiperSlide>
            <SwiperSlide><img className="image-slide"  src={slide5} alt="Logo" style={{width:"50vw"}}/></SwiperSlide>
        </Swiper>
    );
};

export default SwiperThing;