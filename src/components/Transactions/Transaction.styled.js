import styled from 'styled-components';

export const Table = styled.table`
  width: 900px;
`;
export const THead = styled.thead`
  background-color: #00bcd5;
  text-transform: uppercase;
  color: #fff;
  font-size: 12px;
  letter-spacing: 0.1em;

  th {
    padding: 10px;
    width: 300px;
  }
`;
export const TBody = styled.tbody`
  background-color: #ffffff;
  font-size: 12px;
  color: #a3a8ae;
  tr {
    &:nth-child(even) {
      background-color: #ecf1f4;
    }
    td {
      padding: 10px;
      vertical-align: inherit;
      text-align: center;
    }
  }
`;
