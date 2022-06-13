import React from 'react';
import { StyledLines, StyledList, StyledLi, StyledLinks } from './styledLines';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Lines() {
  const [ lines, setLines ] = useState(null);

  useEffect(() => {
    axios.get('https://frozen-lowlands-61303.herokuapp.com')
         .then(response => setLines(response.data))
  }, [])

  if (!lines) return null;

  return (
    <>
      <StyledLines>
        <h1>Linhas</h1>
        <StyledList>
          { lines.map(line => {
            return (
              <StyledLi key={`${line.id + Math.random()}`}>
                <p>{ line.name }</p>
                { `${line.from} até ${line.to}` }
                <StyledLinks>
                  <Link to={`/bus_lines/${line.id}`}>Detalhes</Link>
                </StyledLinks>
              </StyledLi>
            )
          }) }
        </StyledList>
      </StyledLines>
    </>
  )
}

export default Lines;
