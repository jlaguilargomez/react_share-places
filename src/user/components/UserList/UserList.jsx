import './UserList.css';

import UserItem from './../UserItem/UserItem';

const UserList = ({ items }) => {
  if (items.length === 0) {
    return (
      <div className="center">
        <h2>No users found</h2>
      </div>
    );
  }

  return (
    <ul className="users-list">
      {items.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          placeCount={user.places}
        />
      ))}
    </ul>
  );
};

export default UserList;
