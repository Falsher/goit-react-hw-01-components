import React from 'react';
import SocialProfile from './components/Social-profile';
import Statistical from './components/statistics/statistics';
import FriendsList from './components/friends-list/friends-list';
import TransactionList from './components/transaction-history/transactionlist';
import user from './user.json';
import transactions from './components/transaction-history/transactions.json';
import friends from './components/friends-list/friends.json';
import statistics from './components/statistics/statistical-data.json';
import imgUser from './components/img/cap.jpg';
const App = () => {
  return (
    <div>
      <h1>goit-react-hw-01-components</h1>
      <SocialProfile
        avatar={imgUser}
        name={user.name}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />

      <Statistical statisticalData={statistics} />

      <FriendsList friendsListData={friends} />

      <TransactionList transactionData={transactions} />
    </div>
  );
};
export default App;
