import UserList from '../components/UserList/UserList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Goku',
      image:
        'https://media.revistagq.com/photos/5f8959bd54567c4e16ec6a46/master/pass/goku-futbolista.jpg',
      places: 3,
    },
  ];
  return <UserList items={USERS} />;
};

export default Users;
