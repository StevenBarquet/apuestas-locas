// ---Dependencys
import React from 'react';
import { Helmet } from 'react-helmet';
// ---Containers
import NewFeature1 from 'Cont/NewFeature1';

// ------------------------------------------ COMPONENT-----------------------------------------
const NewFeature1Page = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Bomtz | Awesome Feature</title>
      </Helmet>
      <NewFeature1 />
    </React.Fragment>
  );
};

export default NewFeature1Page;
