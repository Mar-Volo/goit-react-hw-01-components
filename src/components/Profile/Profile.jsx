import PropTypes from 'prop-types';
import {
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
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Card>
      <AvatarBox>
        <Avatar src={avatar} alt={username} />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </AvatarBox>

      <Stats>
        <StatsItem>
          <ItemLabel>Followers</ItemLabel>
          <ItemQuant>{stats.followers}</ItemQuant>
        </StatsItem>
        <StatsItem>
          <ItemLabel>Views</ItemLabel>
          <ItemQuant>{stats.views}</ItemQuant>
        </StatsItem>
        <StatsItem>
          <ItemLabel>Likes</ItemLabel>
          <ItemQuant>{stats.likes}</ItemQuant>
        </StatsItem>
      </Stats>
    </Card>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
  location: PropTypes.string.isRequired,
};
