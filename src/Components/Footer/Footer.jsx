import React from "react";
import styled from "styled-components";

const MainFooter = styled.div`
    margin-top: 2%;
    padding: 1px;
    text-align: center;
    background-color: white;
    font-size: 15px;
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