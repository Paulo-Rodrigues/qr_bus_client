import styled from 'styled-components';

export const StyledLines = styled.section`
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const StyledList = styled.ul`
  list-style: none;
  margin-left: -10%;
`;

export const StyledLi = styled.li`
  padding: 1rem;
  border: 1px solid #333;
  border-radius: 5px;
  margin: 10px;
`;

export const StyledLinks = styled.div`
  display: inline;
  margin: 5px;

  a {
    color: #fff;
    padding: 7px;
    text-decoration: none;
    border: 3px solid green;
    background-color: green;
    border-radius: 20px;
    margin-left: 30px;
  }
`;