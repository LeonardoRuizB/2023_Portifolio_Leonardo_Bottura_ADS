import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import "./Carousel.css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';


import { Pagination, Navigation } from 'swiper/modules';

import slide_image_1 from "../../assets/certificates/USJT_Diploma.png";
import slide_image_2 from "../../assets/certificates/Java_completo.png";
import slide_image_3 from "../../assets/certificates/Oracle _Java_Foundations.png";
import slide_image_4 from "../../assets/certificates/Oracle_ Java_Fundamentals.png";
import slide_image_5 from "../../assets/certificates/Microsserviços.png";
import slide_image_6 from "../../assets/certificates/JavaScript.png";
import slide_image_7 from "../../assets/certificates/Google_cloud.png";
import slide_image_8 from "../../assets/certificates/AWS.png";
import slide_image_9 from "../../assets/certificates/Scrum.png";
import slide_image_10 from "../../assets/certificates/Logica_Pyton.png";
import slide_image_11 from "../../assets/certificates/Metodologias.png";
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

function Carousel() {
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
            <TextCarousel>Certificados</TextCarousel>
            <Swiper
                onSwiper={setSwiperRef}
                slidesPerView={5}
                centeredSlides={true}
                spaceBetween={30}
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
                        <img src={slide_image_1} alt="Diploma Superior Análise e Desenvolvimento de Sistemas" />
                        <p className="text-carousel">Diploma Superior Análise e Desenvolvimento de Sistemas</p>
                    </a>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                    <a href={slide_image_2} target='_blank'>
                        <img src={slide_image_2} alt="Java Completo Programação orientada a objetos" />
                        <p className="text-carousel">Java Completo Programação orientada a objetos</p>
                    </a>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                    <a href={slide_image_3} target='_blank'>
                        <img src={slide_image_3} alt="Java Foundations" />
                        <p className="text-carousel">Java Foundations</p>
                    </a>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                    <a href={slide_image_4} target='_blank'>
                        <img src={slide_image_4} alt="Java Fundamentals" />
                        <p className="text-carousel">Java Fundamentals</p>
                    </a>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                    <a href={slide_image_5} target='_blank'>
                        <img src={slide_image_5} alt="Microsserviços Java com Spring Boot e Spring Cloud" />
                        <p className="text-carousel">Microsserviços Java com Spring Boot e Spring Cloud</p>
                    </a>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                    <a href={slide_image_6} target='_blank'>
                        <img src={slide_image_6} alt="Javascript, jQuery, Ajax e Json" />
                        <p className="text-carousel">Javascript, jQuery, Ajax e Json</p>
                    </a>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                    <a href={slide_image_7} target='_blank'>
                        <img src={slide_image_7} alt="Computing Foundations Academy" />
                        <p className="text-carousel">Google - Computing Foundations Academy</p>
                    </a>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                    <a href={slide_image_8} target='_blank'>
                        <img src={slide_image_8} alt="Academy Cloud Foundations" />
                        <p className="text-carousel">AWS - Academy Cloud Foundations</p>
                    </a>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                    <a href={slide_image_9} target='_blank'>
                        <img src={slide_image_9} alt="Scrum Foundation Professional Certificate" />
                        <p className="text-carousel">Scrum Foundation Professional Certificate</p>
                    </a>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                    <a href={slide_image_10} target='_blank'>
                        <img src={slide_image_10} alt="Logica de programação com python" />
                        <p className="text-carousel">Logica de programação com python</p>
                    </a>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                    <a href={slide_image_11} target='_blank'>
                        <img src={slide_image_11} alt="Metodologias ágeis como melhorar a performance de seu projeto" />
                        <p className="text-carousel">Metodologias ágeis como melhorar a performance de seu projeto</p>
                    </a>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Carousel;