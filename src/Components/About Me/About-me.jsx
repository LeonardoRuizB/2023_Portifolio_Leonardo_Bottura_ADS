import React from "react";
import styled from "styled-components";

const DivAbout = styled.div`
    margin-top: 5%;
    height: 30%;
    width: 50%;
    border-radius: 15px;
    padding: 2%;
    background-color: #001361;
    color: white;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5); 

    h2 {
        text-align: center;
        font-size: 30px;
    }

    p {
        margin-top: 2%;
        padding: 1%;
        font-size: 130%;
        text-align: justify;
        line-height: 1.5;
        text-indent: 50px;
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

const CenteredDiv = styled.div`
    display: flex;
    justify-content: center; 
    align-items: center; 
`;

export default function Aboutme() {
    return (
        <CenteredDiv>
            <DivAbout>
                <h2>Sobre mim</h2>
                <p>Olá! Meu nome é Leonardo, e sou de São Paulo, Brasil. Nasci em 2002 e desde pequeno tenho uma paixão por tecnologia, 
                sempre arrumando os eletrônicos da minha família. Recentemente, concluí minha graduação em Análise e Desenvolvimento de Sistemas 
                na Universidade São Judas Tadeu. </p>

                <p>No meu tempo livre, gosto de estudar para sempre estar me aprimorando. Nos fins de semana, 
                é quando aproveito para me divertir com uma boa jogatina. Sou uma pessoa que adora desafios, especialmente aqueles que me tiram da minha zona de conforto, 
                pois acredito que é nesses momentos que cresço e evoluo como desenvolvedor.</p>
            </DivAbout>
        </CenteredDiv>
    );
}