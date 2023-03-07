import PropTypes from 'prop-types';
import { List } from './Friends.styled';
import { Item, Icon, Status, Name } from './Friends.styled';
export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(friend => {
        return (
          <Item key={friend.id}>
            <Status isActive={friend.isOnline}>{friend.isOnline}</Status>
            <Icon src={friend.avatar} alt={friend.name} width="48px" />
            <Name>{friend.name}</Name>
          </Item>
        );
      })}
    </List>
  );
};

FriendList.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
