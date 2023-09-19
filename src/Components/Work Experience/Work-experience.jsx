import React from "react";
import styled from "styled-components";

import image from "../../assets/images/zeppelin-pneus.png";

const DivWork = styled.div`
    margin-top: 5%;
    height: 40%;
    width: 60%;
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

export default function WorkExperience() {
    return (
        <CenteredDivWork>
            <DivWork>
                <h2>Experiência Profissional</h2>
                <ImageFlex>
                    <img src={image} alt="Zeppelin Pneus" />
                    <TitleWork>Zeppelin Pneus e Rodas Ltda Me (Assistente Administrativo)</TitleWork>
                </ImageFlex>
                <h3>( jan/2017 - abr/2023 ) - 6 Anos e 4 Meses</h3>
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
                    <li>2019 / 2023 - Vendedor e Assistente Administrativo</li>
                    <p>Durante esse período acabei saindo do gerenciamento do site, comecei a focar em vender e me tornar um assistente administrativo,
                        ajudando o controle de boletos, pagamentos de funcionários, fiz uma planilha de entrada de vendas no Excel usando PROCV,
                        onde conseguimos eliminar a maneira antiga que era escrever em uma folha, diminuindo diversos erros.</p>
                </div>
            </DivWork>
        </CenteredDivWork>
    );
}