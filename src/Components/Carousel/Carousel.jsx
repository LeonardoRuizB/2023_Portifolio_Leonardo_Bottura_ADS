import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import "./Carousel.css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';


import { Pagination, Navigation } from 'swiper/modules';

import slide_image_1 from "../../assets/certificates/USJT - Diploma Superior Análise e Desenvolvimento de Sistemas-1.png";
import slide_image_2 from "../../assets/certificates/Udemy - Java Completo Programação orientada a objetos + Projetos-1.png";
import slide_image_3 from "../../assets/certificates/Oracle - Java Foundations-1.png";
import slide_image_4 from "../../assets/certificates/Oracle - Java Fundamentals-1.png";
import slide_image_5 from "../../assets/certificates/Udemy - Microsserviços Java com Spring Boot e Spring Cloud-1.png";
import slide_image_6 from "../../assets/certificates/Udemy - Aprenda Javascript, jQuery, Ajax e Json do Zero na Prática-1.png";
import slide_image_7 from "../../assets/certificates/Google Cloud - Computing Foundations Academy-1.png";
import slide_image_8 from "../../assets/certificates/AWS - Academy Cloud Foundations-1.png";
import slide_image_9 from "../../assets/certificates/CertiProf - Scrum Foundation Professional Certificate SFPC-1.png";
import slide_image_10 from "../../assets/certificates/Extensão - Logica de programação com python-1.png";
import slide_image_11 from "../../assets/certificates/Extensão - Metodologias ágeis como melhorar a performance de seu projeto-1.png";

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
                        slidesPerView: 5, // Reduz o número de slides em telas maiores
                    },
                    768: {
                        slidesPerView: 1, // Reduz ainda mais em telas médias
                    },
                    480: {
                        slidesPerView: 1, // Apenas um slide visível em dispositivos menores
                    },
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className='swiper-slide'>
                    <img src={slide_image_1} alt="Diploma Superior Análise e Desenvolvimento de Sistemas" />
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                    <img src={slide_image_2} alt="Java Completo Programação orientada a objetos" />
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                    <img src={slide_image_3} alt="Java Foundations" />
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                    <img src={slide_image_4} alt="Java Fundamentals" />
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                    <img src={slide_image_5} alt="Microsserviços Java com Spring Boot e Spring Cloud" />
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                    <img src={slide_image_6} alt="Javascript, jQuery, Ajax e Json" />
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                    <img src={slide_image_7} alt="Computing Foundations Academy" />
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                    <img src={slide_image_8} alt="Academy Cloud Foundations" />
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                    <img src={slide_image_9} alt="Scrum Foundation Professional Certificate" />
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                    <img src={slide_image_10} alt="Logica de programação com python" />
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                    <img src={slide_image_11} alt="Metodologias ágeis como melhorar a performance de seu projeto" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Carousel;