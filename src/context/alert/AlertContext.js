import React, { createContext, useReducer } from 'react';
import { REMOVE_ALERT, SET_ALERT } from '../types';
import AlertReducer from './AlertReducer';

let initialState = null;
// Alert Context
export const AlertContext = createContext(initialState);
// Alert Context Provider
const AlertProvider = ({ children }) => {
  let [state, dispatch] = useReducer(AlertReducer, initialState);
  // Function to Display Alert Message
  const displayAlert = (msg, type) => {
    dispatch({
      type: SET_ALERT,
      payload: { msg, type },
    });
    setTimeout(() => {
      dispatch({ type: REMOVE_ALERT });
    }, 5000);
  };
  return (
    <AlertContext.Provider value={{ alert: state, displayAlert }}>
      {children}
    </AlertContext.Provider>
  );
};
export default AlertProvider;
