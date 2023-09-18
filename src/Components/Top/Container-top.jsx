import React from "react";
import "../../index.css";

import imageLeo from "../../assets/images/Leonardo-Bottura.png";
import imageEmail from "../../assets/logos/email-logo.png";
import imageGithub from "../../assets/logos/github-logo.png";
import imageLinkedin from "../../assets/logos/linkedin-logo.png";
import imageTelegram from "../../assets/logos/telegram-logo.png";
import imageYoutube from "../../assets/logos/youtube-logo.png";
import Typewriter from "./TextWriter";
import styled from "styled-components";

const ImageTop = styled.img`
    height: 90px;
    padding: 10px;
    margin-right: 10px;
`;

const IconTop = styled.a`
    padding: 10px;
    position: relative;

    &::after {
        content: " ";
        width: 0%;
        height: 4px;
        background-color: white;
        position: absolute;
        bottom: 0;
        left: 0;  
        transition: 0.2s ease-in-out;
    }

    &:hover::after {
        width: 100%

    }
`;

export default function ContainerTop() {
    return (
        <>
            <div className="container-top">
                <img src={imageLeo} alt="Leonardo Ruiz Bottura"/>
                <h1 className="name">Leonardo Ruiz Bottura</h1>
            </div>

            <h2 id="text-typewriter"><Typewriter/></h2>

            <div className="logos-social">
                <IconTop href="mailto:leobottura17@gmail.com">
                    <ImageTop src={imageEmail} alt="Email Leonardo Bottura"/>
                </IconTop>
                <IconTop href="https://github.com/LeonardoRuizB" target="_blank">
                    <ImageTop src={imageGithub} alt="GitHub Leonardo Bottura"/>
                </IconTop>
                <IconTop href="https://www.linkedin.com/in/leonardobottura/" target="_blank">
                    <ImageTop src={imageLinkedin} alt="Linkedin Leonardo Bottura"/>
                </IconTop>
                <IconTop href="https://t.me/Leonardo_Ruiz156" target="_blank">
                    <ImageTop src={imageTelegram} alt="Telegram Leonardo Bottura"/>
                </IconTop>
                <IconTop href="https://www.youtube.com/@leonardoruizbottura" target="_blank">
                    <ImageTop src={imageYoutube} alt="Youtube Leonardo Bottura"/>
                </IconTop>
            </div>
        </>
    );
}