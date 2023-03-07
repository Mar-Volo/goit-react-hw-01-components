import styled from 'styled-components';

export const List = styled.ul`
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 15px;
`;

export const Item = styled.li`
  width: 300px;
  display: flex;
  gap: 10px;
  display: flex;
  align-items: center;
  justyfy-content: center;
  box-shadow: 0px 0px 2px #dee5ed;
  border: 1px solid #e7ecf2;
  padding: 10px;
  border-radius: 2px;
`;

export const Icon = styled.img`
  width: 80px;
`;

export const Status = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 50px;
  background-color: ${props => {
    if (!props.isActive) {
      return 'red';
    } else {
      return 'green';
    }
  }};
`;

export const Name = styled.p`
  color: #000;
  font-weight: 700;
  font-size: 26px;
`;
