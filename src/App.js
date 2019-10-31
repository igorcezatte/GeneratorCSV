import React from 'react';
import GlobalStyles from './styles/global';
import Routes from './routes';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <Routes />
      <GlobalStyles />
      <ToastContainer position='bottom-right' autoClose={3000} hideProgressBar={true} />
    </>
  );
}

export default App;
