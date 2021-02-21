import Profile from './comnponents/Profile/Profile';
import Statistics from './comnponents/Statistics/Statistics';
import FriendList from './comnponents/FriendList/FriendList';
import TransactionHistory from './comnponents/TransactionHistory/TransactionHistory';

import user from './comnponents/data/user.json';
import statisticalData from './comnponents/data/statistical-data.json';
import friends from './comnponents/data/friends.json';
import transactions from './comnponents/data/transactions.json';

const App = () => {
  return (
    <div className="container">
      <div className="section">
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />

        <Statistics title="Upload stats" stats={statisticalData} />
        <Statistics stats={statisticalData} />
      </div>

      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
