import React, { useContext } from 'react';
import { users, GithubContext } from '../../context/github/GithubContext';
import UserItem from './UserItem';
import './Users.css';
import spinner from '../../images/spiner.gif';

const Users = () => {
  const { users, loading } = useContext(GithubContext);
  if (loading) {
    return <img className='spinner' src={spinner} />;
  }
  return (
    <div className='users-container'>
      {users.map((userItem, index) => (
        <UserItem key={index} userItem={userItem} />
      ))}
    </div>
  );
};

export default Users;
