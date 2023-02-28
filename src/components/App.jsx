import user from 'data-files/user.json';
// import friends from 'data-files/friends.json';
// import transactionst from 'data-files/transactions.json';
// import data from 'data-files/data.json';
import { Profile } from './Profile/Profile';
import { GlobalStyle } from 'GlobalStyles';
import { Container } from './Layout/Container';

export const App = () => {
  return (
    <Container>
      <Profile
      username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}/>
      <GlobalStyle />
    </Container>
  );
};
