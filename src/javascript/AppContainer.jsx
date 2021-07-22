// ---Dependencys
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// ---Pages
import HomePage from 'Pages/HomePage';
import SugerenciaPage from 'Pages/SugerenciaPage';
import NewFeature1 from 'Pages/NewFeature1Page';
import NewFeature2 from 'Pages/NewFeature2Page';
import Error404Page from 'Pages/Error404Page';
// ---Containers
import NavbarCont from 'Cont/NavbarCont';

function AppContainer() {
  return (
    <BrowserRouter>
      <NavbarCont />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/sugerencia" component={SugerenciaPage} />
        <Route exact path="/someFeature1" component={NewFeature1} />
        <Route exact path="/someFeature2" component={NewFeature2} />
        <Route exact path="*" component={Error404Page} />
      </Switch>
    </BrowserRouter>
  );
}

export default AppContainer;
