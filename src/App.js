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
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />

      <Statistical
        labelOne={statistics[0].label}
        percentageOne={statistics[0].percentage}
        labelTwo={statistics[1].label}
        percentageTwo={statistics[1].percentage}
        labelThree={statistics[2].label}
        percentageThree={statistics[2].percentage}
        labelFor={statistics[3].label}
        percentageFor={statistics[3].percentage}
      />
      {friends.map(friend => (
        <FriendsList
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
      <table class="transaction-history">
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transaction => (
            <TransactionList
              type={transaction.type}
              amount={transaction.amount}
              currency={transaction.currency}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default App;
