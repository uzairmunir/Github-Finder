import React from 'react';
import './Repos.css';

const RepoItem = ({ repo }) => {
  return (
    <div className='repo-item'>
      <h3>
        <a href={repo.html_url} target='_blank' rel='noreferrer'>
          {repo.name}
        </a>
      </h3>
      <h4>{repo.language}</h4>
    </div>
  );
};

export default RepoItem;
