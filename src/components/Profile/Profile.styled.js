import styled from 'styled-components';

// container styles
const Card = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justyfy-content: center;
  padding: 0 15px;
  box-shadow: 0px 0px 2px #dee5ed;
  border: 1px solid #e7ecf2;
  border-radius: 2px;
`;

//  User photo
const AvatarBox = styled.div`
  width: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  justyfy-content: center;
  background-color: white-smoke;
  padding: 15px;
`;

const Avatar = styled.img`
  width: 200px;
  border-radius: 50%;
  margin-bottom: 15px;
  background-color: #e7ecf2;
`;
// About user
const Name = styled.p`
  color: #000;
  font-weight: 700;
  font-size: 26px;
  margin-bottom: 10px;
`;
const Tag = styled.p`
  color: #646060;
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: 500;
`;
const Location = styled.p`
  color: #646060;
  font-size: 20px;
  font-weight: 500;
`;

// user stats-list
const Stats = styled.ul`
  display: flex;
  width: inherit;
  align-items: center;
  justify-content: center;
  background-color: #f3f6f9;
  //   border: 1px solid grey;
`;
const StatsItem = styled.li`
  padding: 10px;
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justyfy-content: center;
  border: 1px solid #dee5ed;
`;
const ItemLabel = styled.span`
  color: #646060;
  font-size: 12px;
  font-weight: 800;
  margin-bottom: 5px;
`;
const ItemQuant = styled.span`
  color: #000;
  font-size: 20px;
  font-weight: 600;
`;

export {
  Card,
  Avatar,
  Name,
  Tag,
  Location,
  Stats,
  StatsItem,
  ItemLabel,
  ItemQuant,
  AvatarBox,
};
