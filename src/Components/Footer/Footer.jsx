import React from "react";
import styled from "styled-components";

const MainFooter = styled.div`
    margin-top: 2%;
    padding: 1%;
    text-align: center;
    background-color: white;
    font-size: 15px;

    @media screen and (max-width: 480px) {
        padding: 3%;
      }
`;

const TextFooter = styled.p`
    color: blue;
`;

const LinkGit = styled.a`
    color: blue;
`;

export default function Footer() {
    return (
        <>
            <MainFooter>
                <TextFooter>Created by <LinkGit href="https://github.com/LeonardoRuizB" target="_blank">@LeonardoRuizB</LinkGit> - React Js</TextFooter>
            </MainFooter>
        </>
    );
}