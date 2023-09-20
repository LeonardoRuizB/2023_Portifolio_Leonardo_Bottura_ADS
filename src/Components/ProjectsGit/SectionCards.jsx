import React from "react";
import Card from "./ProjectsGit";
import styled from "styled-components";


const SectionC = styled.div`
  margin-top: 50px;
  margin-bottom: 60px;
`;

const CardWrapper = styled.div`
  display: flex;
  align-items: top;
  flex-wrap: wrap;
  margin-right: 80px;
  margin-left: 80px;  
  gap: 40px;

  @media (max-width: 480px) {
    margin-right: 20px;
    margin-left: 20px;
  }
`;

const CardsTitle = styled.h2`
  text-align: center;
  font-size: 32px;
  color: white;
  margin-bottom: 2%;

  @media (max-width: 480px) {
    margin-bottom: 10%;
  }
`;

export default function SectionCards() {
  return (
    <SectionC>
      <CardsTitle>Meus Projetos</CardsTitle>
      <CardWrapper>
        <Card />
      </CardWrapper>
    </SectionC>
  );
}