// ---Dependencys
import React from 'react';
import { Helmet } from 'react-helmet';
// ---Containers
import Sugerencia from 'Cont/Sugerencia';

// ------------------------------------------ COMPONENT-----------------------------------------
const SugerenciaPage = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Bomtz | Sugerir mejor apuesta</title>
      </Helmet>
      <Sugerencia />
    </React.Fragment>
  );
};

export default SugerenciaPage;
