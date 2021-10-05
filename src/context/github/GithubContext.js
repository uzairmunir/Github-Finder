import axios from 'axios';
import React, { createContext, useReducer } from 'react';
import {
  CLEAR_USERS,
  GET_REPOS,
  GET_USER,
  SEARCH_USERS,
  SET_LOADING,
} from '../types';
import GithubReducer from './Reducer';

// Environment Variables
let githubClientId;
let githubClientSecret;

if (process.env.NODE_ENV !== 'production') {
  githubClientId = process.env.REACT_APP_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_CLIENT_SECRET;
} else {
  githubClientId = process.env.CLIENT_ID;
  githubClientSecret = process.env.CLIENT_SECRET;
}
//Initial State
let initialState = {
  users: [],
  userDetail: {},
  repos: [],
  loading: false,
};
// Creating Github Context
export const GithubContext = createContext(initialState);

//Github Provider
const GithubProvider = ({ children }) => {
  let [state, dispatch] = useReducer(GithubReducer, initialState);
  // Function to Search Users
  const SearchUsers = async (text) => {
    setLoading();
    let res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items,
    });
  };
  // Function to get User Detail
  const getUserDetail = async (username) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    dispatch({
      type: GET_USER,
      payload: res.data,
    });
  };
  //Function to Get User's Repos
  const getRepos = async (username) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=7&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    dispatch({
      type: GET_REPOS,
      payload: res.data,
    });
  };
  // Function to Clear Users Data
  const clearUsers = () => {
    dispatch({
      type: CLEAR_USERS,
    });
  };
  //Function to Set Loading
  const setLoading = () => {
    dispatch({
      type: SET_LOADING,
    });
  };

  //Context Values
  const contextValues = {
    SearchUsers,
    getUserDetail,
    getRepos,
    clearUsers,
    setLoading,
    ...state,
  };

  return (
    <GithubContext.Provider value={contextValues}>
      {children}
    </GithubContext.Provider>
  );
};
export default GithubProvider;
