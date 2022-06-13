import styled from 'styled-components';

export const StyledLine = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    margin-top: 2rem;
    padding: 1rem 2rem;
    border-radius: 20px;
    background-color: green;

    a {
      color: #fff;
      text-decoration: none;
    }
  }
`
export const StyledTable = styled.table`
margin-top: 5rem;
  color: #fff; 
  border: 1px solid #fff;

  th{
    padding: 10px;
  }

  td {
    border: 1px solid #fff;
    padding: 8px;
  }
`;
