import React from "react";
import styled from "styled-components";

const MainFooter = styled.div`
    margin-top: 2%;
    padding: 1%;
    text-align: center;
    background-color: white;

    @media screen and (max-width: 480px) {
        padding: 3%;
      }
`;

const TextFooter = styled.p`
    font-size: 100%;
    color: blue;
`;

const LinkGit = styled.a`
    color: rgb(0, 0, 255);
    text-decoration: underline;

    &:hover {
        color: #4a90e2;
    }
`;

export default function Footer() {
    return (
        <>
            <MainFooter>
                <TextFooter>&copy; 2023 Created by <LinkGit href="https://github.com/LeonardoRuizB" target="_blank">@LeonardoRuizB</LinkGit> - React Js.</TextFooter>
            </MainFooter>
        </>
    );
}