// ---Dependencys
import React from 'react';
import { Helmet } from 'react-helmet';
// ---Containers
import NewFeature2 from 'Cont/NewFeature2';

// ------------------------------------------ COMPONENT-----------------------------------------
const NewFeature2Page = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Bomtz | Awesome Feature</title>
      </Helmet>
      <NewFeature2 />
    </React.Fragment>
  );
};

export default NewFeature2Page;
