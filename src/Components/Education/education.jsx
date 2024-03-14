import React from "react";
import styled from "styled-components";

const DivEducation = styled.div`
    margin-top: 5%;
    height: 30%;
    width: 50%;
    border-radius: 15px;
    padding: 2%;
    background-color: #001361;
    color: white;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5); 

    h1 {
        text-align: center;
        font-size: 30px;
    }

    h2 {
        margin-top: 5%;
        font-size: 30px;
        text-align: center;
    }

    p {
        padding: 1%;
        font-size: 140%;
        text-align: justify;
        line-height: 1.5;
        text-indent: 50px;
    }

    @media (max-width: 480px) {
        height: 90%;
        width: 90%;
        margin-top: 50px;

        h1 {
            margin-top: 20px;
        }
    }
`;

const CenteredDiv = styled.div`
    display: flex;
    justify-content: center; 
    align-items: center; 
`;

export default function Education() {
    return (
        <CenteredDiv>
            <DivEducation>
                <h1>Educação</h1>
                <h2>Universidade São Judas Tadeu</h2>
                <p>Formado em Análise e Desenvolvimento de Sistemas, em Junho de 2023.</p>
                
                <h2>Centro Universitário - FAM</h2>
                <p>Cursando Ciência da Computação, conclusão em Dezembro de 2025</p>
            </DivEducation>
        </CenteredDiv>
    );
}