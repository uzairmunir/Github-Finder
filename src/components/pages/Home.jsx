import React from 'react';
import Alert from '../alert/Alert';
import Search from '../search/Search';
import Users from '../users/Users';
import './Home.css';

const Home = () => {
  return (
    <div className='home'>
      <Alert />
      <Search />
      <Users />
    </div>
  );
};

export default Home;
