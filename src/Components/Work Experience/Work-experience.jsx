import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from "styled-components";

import image1 from "../../assets/logos/Logo-Bradesco.png";
import image2 from "../../assets/images/zeppelin-pneus.png";

import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
import { Pagination, Navigation } from 'swiper/modules';

const DivWork = styled.div`
    height: auto;
    width: 100%;
    border-radius: 15px;
    padding: 2%;
    background-color: #001361;
    color: white;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5); 

    h2 {
        text-align: center;
        font-size: 30px;
    }

    li {
        margin-top: 25px;
        font-size: 20px;
    }

    p {
        margin-top: 10px;
        font-size: 20px;
        line-height: 1.5;
        text-indent: 50px;
        text-align: justify;
    }

    h3 {
        margin-top: 25px;
        text-align: center;
    }

    img {
        margin-top: 2%;
        margin-left: 1%;
        width: 100px;
        height: 100%;

        @media (max-width: 480px) {
            margin-top: 2%;
        }
    }

    @media (max-width: 480px) {
        height: 90%;
        width: 90%;
        margin-top: 50px;

        h2 {
            margin-top: 20px;
        }
    }
`;

const TitleWork = styled.h3`
    margin-left: 5%;
    margin-top: 25px;
    text-align: center;
    font-size: 25px;

    @media (max-width: 480px) {
        margin-left: 3%;
        font-size: 20px;
    }
`;

const CenteredDivWork = styled.div`
    display: flex;
    justify-content: center; 
    align-items: center; 
`;

const ImageFlex = styled.div`
    display: flex;
    align-items: center; 

    @media (max-width: 480px) {
        margin-top: 4%;
    }
`;

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

export default function WorkExperience() {
    const [swiperRef, setSwiperRef] = useState(null);

    return (
        <div>
        <TextCarousel>Experiência Profissional</TextCarousel>

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
                    slidesPerView: 2,
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
            <CenteredDivWork>
                <SwiperSlide className='swiper-slide'>
                    <DivWork>
                        <ImageFlex>
                            <img src={image1} alt="Zeppelin Pneus" />
                            <TitleWork>Banco Bradesco S/A (Estagiário de Sistemas)</TitleWork>
                        </ImageFlex>
                        <h3>( Junho/2024 até o momento )</h3>
                        <div>
                            <li>2024 - Inicio Capacitação</li>
                            <p>
                                Participei de uma capacitação de dois meses em MAINFRAME (COBOL), onde consegui entregar os projetos com qualidade e dentro do prazo.
                            </p>
                            <p>
                                Após essa fase, iniciei o treinamento em JAVA, e por já ter estudado a linguagem anteriormente, consegui acompanhar bem o conteúdo e me destacar em algumas atividades.
                            </p>
                        </div>
                    </DivWork>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                    <DivWork>
                        <ImageFlex>
                            <img src={image2} alt="Zeppelin Pneus" />
                            <TitleWork>Zeppelin Pneus e Rodas Ltda Me (Assistente Administrativo)</TitleWork>
                        </ImageFlex>
                        <h3>( Janeiro/2017 até Junho/2024 )</h3>
                        <div>
                            <li>2017 - Marketing Digital e Suporte TI</li>
                            <p>Iniciei minha jornada como Marketing digital fazendo o site da empresa, parte de cadastramento de produtos, banners
                                e promoções, também atuei como suporte técnico de TI, fazendo a manutenção e inspeção dos equipamentos eletronicos.</p>
                        </div>
                        <div>
                            <li>2018 - Vendedor e Marketing Digital</li>
                            <p>Ainda fazendo funções as anteriores, mas agora eu também estava vendendo, usando o conhecimento que adquiri na produção do site para vender os produtos.</p>
                        </div>
                        <div>
                            <li>2019 até o final - Vendedor e Assistente Administrativo</li>
                            <p>Durante esse período acabei saindo do gerenciamento do site, comecei a focar em vender e me tornar um assistente administrativo,
                                ajudando o controle de boletos, pagamentos de funcionários, fiz uma planilha de entrada de vendas no Excel usando Comandos avançados do excel,
                                onde conseguimos eliminar a maneira antiga que era escrever em uma folha, diminuindo diversos erros.
                            </p>
                        </div>
                    </DivWork>
                </SwiperSlide>
            </CenteredDivWork>
        </Swiper>
        </div>
    );
}