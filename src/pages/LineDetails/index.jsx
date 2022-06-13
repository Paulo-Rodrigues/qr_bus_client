import React from 'react';
import axios from 'axios';
import { StyledLine, StyledTable  } from './styledLine';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function LineDetails() {
  const params = useParams();

  const [line, setLine] = useState(null);

  useEffect(() => {
    axios.get(`https://frozen-lowlands-61303.herokuapp.com/bus_lines/${params.id}`)
         .then(response => setLine(response.data))
  }, [params.id] )

  if (!line) return null;

  return (
    <>
      <StyledLine>
        <StyledTable>
          <thead>
            <tr>
                <th>{line.bus_line.name} | </th>
                <th>{line.bus_line.from} {`>`} </th>
                <th>{line.bus_line.to}</th>
            </tr>
          </thead>

          <tbody>
            { line.bustracks.map( track => {
              return (
                <tr>
                  <td>{ track.start_time }</td>
                  <td>{ track.end_time }</td>
                  <td>$7.00</td>
                </tr>
              )
            }) }
          </tbody>
        </StyledTable>
        <div>
          <Link to="/">Voltar</Link>
        </div>
      </StyledLine>
    </>
  )
}

export default LineDetails;
