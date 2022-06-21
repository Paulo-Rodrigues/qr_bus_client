import styled from 'styled-components';

export const StyledAbout = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  justify-content: center;
`
export const StyledCard = styled.div`
  padding: 1rem;
  width: 70%;
  border: 1px solid #fff;
  border-radius: 5px;
  background-color: #333;
  color: #fff;

  h1, h2 {
    text-align: center;
    padding: 10px;
    border-bottom: 1px solid #fff;
  }

  p {
    text-align: center;
  }
`;