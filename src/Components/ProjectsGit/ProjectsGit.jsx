import React from "react";
import { useState } from "react";
import styled from "styled-components";

import imageEco from "../../assets/logos/EcoChoice-Logo.png";
import imageComuni from "../../assets/logos/comunidade-mais.png";
import imageHealth from "../../assets/logos/logo-HealthStock.png";
import imagePoke from "../../assets/logos/pokedex.png";
import imageFashion from "../../assets/logos/logo-fahion-live.png";
import imageChocomel from "../../assets/logos/logo-chocomel.png";

const CardBody = styled.div`
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5); 
    background-color: #001361;
    border-radius: 20px;
    color: white;
    width: 280px;
    margin: 0 auto;
    transition: all 0.2s ease-in-out;
  
    &::hover {
        transform: scale(1.03);
        box-shadow: 0 0px 2em #9842ba;
    }
`;

const CardImage = styled.img`
    // object-fit: contain;
    height: 200px;
    width: 100%;
    border-radius: 20px 20px 0px 0px;
    background-color: white;
`;

const CardText = styled.div`
    padding: 5px 25px 2px 25px;
    line-height: 18px;
`;

const CardTitle = styled.h3`
    text-align: center;
    margin-top: 8px;
    font-size: 20px;
    font-weight: bold;
    line-height: 1.3;
`;

const CardDescription = styled.p`
    text-indent: 25px;
    text-align: justify;
    line-height: 1.5;
    margin-top: 15px;
    margin-bottom: 20px;
    font-size: 18px;
    font-weight: 300;
`;

const CardLink = styled.a`
    text-decoration: none;
    color: white;
`;

export default function Card() {
    const [CardMetas] = useState([
        {
            title: "Projeto Chocomel",
            description:
                "Desenvolvido em ReactJs, projeto Full-Stack utilizando o ReactJs e o Firebase, fiz um projeto Web Full-Stack com back end feito pelo Firebase, fiz um site Web para minha amiga que tem uma doceria para treinar meus conhecimentos.",
            image: imageChocomel,
            link: "https://github.com/LeonardoRuizB/2023_Projeto_Pokedex_JavaScript",
        },
        {
            title: "Projeto EcoChoice Sustentabilidade",
            description:
                "Modelagem de Software - Desenvolvido para ajudar as pessoas a tomarem decisões mais sustentáveis ao fazerem compras, contribuindo diretamente para a ODS 12 - (Garantir padrões de produção e consumo sustentáveis).",
            image: imageEco,
            link: "https://github.com/LeonardoRuizB/2023_Projeto_EcoChoice_Sustentabilidade_Comparacao",
        },
        {
            title: "Hackathon Accenture - Projeto Comunidade+",
            description:
                "Desenvolvido em React - O aplicativo serve para promover e divulgar o empreendimento da favela como microempreendedor individual, e mostrar que ele pode ter o apoio da comunidade local ou externa, por meio do apadrinhamento,",
            image: imageComuni,
            link: "https://github.com/LeonardoRuizB/2022_Projeto_Hackathon_Accenture_Microempreendedores_Favela",
        },
        {
            title: "Projeto Fahsion Live",
            description:
                "Desenvolvido em JavaScript - Queria treinar meu JavaScript, mas desenvolvendo um site, Comecei esse projeto no Intensivão da Hashtag code, mas estava muito cru o site, eu adicionei diversas funcionalidades, gostei de fazer, pois foi um projeto em que eu consegui usar bastante a minha criatividade.",
            image: imageFashion,
            link: "https://github.com/LeonardoRuizB/2023_Projeto_Fashion_Live_moda",
        },
        {
            title: "Projeto HealthStock",
            description:
                "Desenvolvido em TypeScript na A3 da faculdade - Um sistema de marketplace com o objetivo de promover o encontro de insumos hospitalares, melhorando e facilitando a comercialização desses produtos (Front-End).",
            image: imageHealth,
            link: "https://github.com/LeonardoRuizB/Projeto_HealthStock_Front",
        },
        {
            title: "Projeto Pokédex",
            description:
                "Desenvolvido em JavaScript - Projeto desenvolvido logo após eu terminar um Curso de JavaScript, Ajax e Jquery, eu queria colocar meus conhecimentos em prática em um projeto símples e meu amigo me indicou que eu fizesse uma Pokédex para treinar Conectar API e JavaScript.",
            image: imagePoke,
            link: "https://github.com/LeonardoRuizB/2023_Projeto_Pokedex_JavaScript",
        },
    ]);

    return (
        <>
            {CardMetas.map((card, index) => (
                <CardBody key={index}>
                    <CardLink href={card.link} target="_blank">
                        <CardImage src={card.image} />
                        <CardText>
                            <CardTitle>{card.title}</CardTitle>
                            <CardDescription>{card.description}</CardDescription>
                        </CardText>
                    </CardLink>
                </CardBody>
            ))}
        </>
    );
}