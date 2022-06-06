import React from 'react';
import { StyledLines } from './styledLines';
import axios from 'axios';
import { useState, useEffect } from 'react';

function Lines() {
  const [ dogneo, setDogneo ] = useState(null);

  useEffect(() => {
    axios.get('https://dog.ceo/api/breeds/image/random')
         .then(response => setDogneo(response.data))
  }, [])

  if (!dogneo) return null;

  return (
    <>
      <StyledLines>
        <h1>Lista de Linhas</h1>
        <img src={dogneo.message} alt="dogneo" />
      </StyledLines>
    </>
  )
}

export default Lines;
