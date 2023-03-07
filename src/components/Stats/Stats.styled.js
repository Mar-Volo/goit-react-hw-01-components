import styled from 'styled-components';

export const Section = styled.section`
  margin-bottom: 25px;
`;

export const Title = styled.h2`
  width: 300px;
  font-weight: 900;
  font-size: 28px;
  text-transform: uppercase;
  text-align: center;
  padding: 25px;
`;
export const List = styled.ul`
  width: 300px;
  display: flex;
  color: #586166;
  li {
    width: 90px;
    display: flex;
    flex-basis: calc(100% / 5);
    flex-direction: column;
    padding: 10px;
    align-items: center;
    justyfy-content: center;
  }
`;
export const Label = styled.span`
  color: #cef9fd;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 5px;
  text-shadow: 1px 1px 2px black;
`;

export const Percent = styled.span`
  color: #cef9fd;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 5px;
  text-shadow: 1px 1px 2px black;
`;
