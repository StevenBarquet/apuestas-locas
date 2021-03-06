// ---Dependencys
import React from 'react';
import { Helmet } from 'react-helmet';
// ---Containers
import Home from 'Cont/Home';

// ------------------------------------------ COMPONENT-----------------------------------------
const HomePage = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Rabbit | Home</title>
      </Helmet>
      <Home />
    </React.Fragment>
  );
};

export default HomePage;
