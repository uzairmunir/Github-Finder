import React from 'react';
import RepoItem from './RepoItem';
import './Repos.css';

const Repos = ({ repos }) => {
  return (
    <div className='repos-container'>
      {repos.map((repo, index) => (
        <RepoItem key={index} repo={repo} />
      ))}
    </div>
  );
};

export default Repos;
