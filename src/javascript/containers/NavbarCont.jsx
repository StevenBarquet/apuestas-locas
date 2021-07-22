// ---Dependencys
import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
// ---Redux
import { useSelector, useDispatch } from 'react-redux';
import {
  changeResponsiveFlag,
  updatePath,
  updateParams
} from 'Actions/appInfo';
// ---Components
import NavMenu from 'Comp/NavBar/NavMenu';
import GlobalComponents from 'Comp/NavBar/GlobalComponents';
// ---Others
import logo from 'Images/logo.png';
import isMovilDetector from 'Others/isMovilDetector';

// ------------------------------------------ COMPONENT-----------------------------------------
const NavbarCont = withRouter(props => {
  const currentPath = props.location.pathname;
  const urlParams = props.location.search;
  // Redux States
  const { isMovil } = useSelector(reducers => reducers.appInfoReducer);
  // Redux Actions
  const dispatchR = useDispatch();
  const updateResponsiveData = data => dispatchR(changeResponsiveFlag(data));
  const updateCurrentPath = () => dispatchR(updatePath(currentPath));
  const updateCurrentParams = () => dispatchR(updateParams(urlParams));

  const responsiveData = isMovilDetector();
  useEffect(() => {
    updateResponsiveData(responsiveData);
  }, [responsiveData]);

  useEffect(() => updateCurrentPath(), [currentPath]);
  useEffect(() => updateCurrentParams(), [urlParams]);

  return (
    <>
      <NavMenu currentPath={currentPath} isMovil={isMovil} logo={logo} />
      <GlobalComponents />
    </>
  );
});

export default NavbarCont;
