import React from "react";
import "../../index.css";

import imageLeo from "../../assets/images/Leonardo-Bottura.png";
import imageEmail from "../../assets/logos/email-logo.png";
import imageGithub from "../../assets/logos/github-logo.png";
import imageLinkedin from "../../assets/logos/linkedin-logo.png";
import imageTelegram from "../../assets/logos/telegram-logo.png";
import imageYoutube from "../../assets/logos/youtube-logo.png";
import Typewriter from "./TextWriter";

export default function ContainerTop() {
    return (
        <>
            <div className="container-top">
                <img src={imageLeo} alt="Leonardo Ruiz Bottura"/>
                <h1 className="name">Leonardo Ruiz Bottura</h1>
            </div>

            <h2 id="text-typewriter"><Typewriter/></h2>

            <div className="logos-social">
                <a href="mailto:leobottura17@gmail.com">
                    <img src={imageEmail} alt="Email Leonardo Bottura"/>
                </a>
                <a href="https://github.com/LeonardoRuizB" target="_blank">
                    <img src={imageGithub} alt="GitHub Leonardo Bottura"/>
                </a>
                <a href="https://www.linkedin.com/in/leonardobottura/" target="_blank">
                    <img src={imageLinkedin} alt="Linkedin Leonardo Bottura"/>
                </a>
                <a href="https://t.me/Leonardo_Ruiz156" target="_blank">
                    <img src={imageTelegram} alt="Telegram Leonardo Bottura"/>
                </a>
                <a href="https://www.youtube.com/@leonardoruizbottura" target="_blank">
                    <img src={imageYoutube} alt="Youtube Leonardo Bottura"/>
                </a>
            </div>
        </>
    );
}