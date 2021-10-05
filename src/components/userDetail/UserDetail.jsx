import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import {
  GithubContext,
  getUserDetail,
  getRepos,
} from '../../context/github/GithubContext';
import Repos from '../repos/Repos';
import './UserDetail.css';
import spinner from '../../images/spiner.gif';

const UserDetail = () => {
  const { login } = useParams();
  const { getUserDetail, getRepos, userDetail, loading, repos } =
    useContext(GithubContext);
  useEffect(() => {
    getUserDetail(login);
    getRepos(login);
  }, []);

  if (loading) {
    return <img src={spinner} className='spinner' />;
  }
  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = userDetail;

  return (
    <>
      <div className='user-detail-container'>
        <Link to='/'>
          <button className='back-btn'>Back To Search Results</button>
        </Link>
        Hireable:{' '}
        {hireable ? (
          <i className='fas fa-check text-success'></i>
        ) : (
          <i className='fas fa-times-circle text-danger'></i>
        )}
        <div className='user-info'>
          <div className='row1'>
            <img src={avatar_url} alt='user-img' className='user-img' />
            <h2>{name}</h2>
            {location && <h3>Location: {location}</h3>}
          </div>
          <div className='row2'>
            {bio && (
              <>
                <h2>Bio</h2>
                <h3>{bio}</h3>
              </>
            )}
            <a
              className='profile-btn'
              href={html_url}
              target='_blank'
              rel='noreferrer'
            >
              GitHub Profile
            </a>
            <ul>
              <li>{login && <>UserName: {login}</>}</li>
              <li>{company && <>Company: {company}</>}</li>
              <li>{blog && <>Website: {blog}</>}</li>
            </ul>
          </div>
        </div>
        <div className='badges-container'>
          <div className='badge badge-primary'>Followers: {followers}</div>
          <div className='badge badge-success'>Following: {following}</div>
          <div className='badge badge-light'>Public Repos: {public_repos}</div>
          <div className='badge badge-dark'>Public Gists: {public_gists}</div>
        </div>
      </div>
      <Repos repos={repos} />
    </>
  );
};

export default UserDetail;
