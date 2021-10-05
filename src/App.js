import React from 'react';
import AlertProvider from './context/alert/AlertContext';
import GithubProvider from './context/github/GithubContext';
import RouteConfig from './RouteConfig';

const App = () => {
  return (
    <>
      <GithubProvider>
        <AlertProvider>
          <RouteConfig />
        </AlertProvider>
      </GithubProvider>
    </>
  );
};

export default App;
