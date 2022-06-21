import React from 'react';
import { StyledAbout, StyledCard } from './about';

function About() {
  return (
    <>
      <StyledAbout>
        <StyledCard>
          <h1>Sobre o App</h1>
          <p>QR Bus é um aplicativo desenvolvido para permitir a consulta de linhas
          e trajetos do transporte urbano do município de Pompéia</p>
        </StyledCard>
        <StyledCard>
          <h2>Equipe de desenvolvimento</h2>
          <p>Gilmar<br/>Letícia<br/>Carolina<br/>Carlos<br/>Anderson<br/>Paulo</p>
        </StyledCard>
      </StyledAbout>
    </>
  )
}

export default About;
