import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import "./Carousel.css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';


import { Pagination, Navigation } from 'swiper/modules';

import slide_image_1 from "../../assets/certifications/Certificação Microsoft Azure AZ-900.png";
import slide_image_2 from "../../assets/certifications/Certificação Microsoft Azure DP-900.png";
import slide_image_3 from "../../assets/certifications/Certificação Microsoft Azure SC-900.png";
import slide_image_4 from "../../assets/certifications/Certificação Microsoft Azure AI-900.png";


import styled from 'styled-components';

const TextCarousel = styled.h2`
    margin-top: 5%;
    text-align: center;
    color: white;
    font-size: 32px;

    @media (max-width: 480px) {
        margin-top: 12%;
        margin-bottom: 10%;
    }
`;

function CarouselCertifications() {
    const [swiperRef, setSwiperRef] = useState(null);

    let appendNumber = 4;
    let prependNumber = 1;

    const prepend2 = () => {
        swiperRef.prependSlide([
            '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
            '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
        ]);
    };

    const prepend = () => {
        swiperRef.prependSlide(
            '<div class="swiper-slide">Slide ' + --prependNumber + '</div>'
        );
    };

    const append = () => {
        swiperRef.appendSlide(
            '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>'
        );
    };

    const append2 = () => {
        swiperRef.appendSlide([
            '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
            '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
        ]);
    };

    return (
        <div className='container-carousel'>
            <TextCarousel>Certificações</TextCarousel>
            <Swiper
                onSwiper={setSwiperRef}
                slidesPerView={5}
                centeredSlides={true}
                spaceBetween={30}
                initialSlide={1}
                pagination={{
                    type: 'fraction',
                }}
                breakpoints={{
                    1024: {
                        slidesPerView: 5,
                    },
                    768: {
                        slidesPerView: 2, 
                    },
                    480: {
                        slidesPerView: 2, 
                    },
                    200: {
                        slidesPerView: 1, 
                    },
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className='swiper-slide'>
                    <a href={slide_image_1} target='_blank'>
                        <img src={slide_image_1} alt="Certificação Microsoft AZ-900" />
                        <p className="text-carousel">Certificação Microsoft AZ-900</p>
                    </a>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                    <a href={slide_image_2} target='_blank'>
                        <img src={slide_image_2} alt="Certificação Microsoft DP-900" />
                        <p className="text-carousel">Certificação Microsoft DP-900</p>
                    </a>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                    <a href={slide_image_3} target='_blank'>
                        <img src={slide_image_3} alt="Certificação Microsoft SC-900" />
                        <p className="text-carousel">Certificação Microsoft SC-900</p>
                    </a>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                    <a href={slide_image_4} target='_blank'>
                        <img src={slide_image_4} alt="Certificação Microsoft AI-900" />
                        <p className="text-carousel">Certificação Microsoft AI-900</p>
                    </a>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default CarouselCertifications;