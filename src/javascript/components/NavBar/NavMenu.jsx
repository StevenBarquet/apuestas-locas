// ---Dependencys
import React, { useState } from 'react';
import { MenuFoldOutlined, MenuOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';

// ------------------------------------------ COMPONENT-----------------------------------------
function NavMenu(props) {
  const { isMovil, logo, currentPath } = props;
  const [menuVisible, setMenuVisible] = useState(false);

  function changeMenuVisibility() {
    setMenuVisible(!menuVisible);
  }
  if (isMovil)
    return (
      <Row className="nav-div">
        <Col xs={24} sm={24} lg={8}>
          <Link to="/">
            <div className="to-home">
              <img src={logo} alt="Shelly" width="100%" />
            </div>
          </Link>
        </Col>
        <Col xs={24} sm={24} lg={16}>
          <Row>
            <Col xs={24} sm={24} lg={5}>
              <div
                className="nav-btn"
                onClick={changeMenuVisibility}
                role="button"
                tabIndex="0"
              >
                {menuVisible ? <MenuFoldOutlined /> : <MenuOutlined />}
              </div>
            </Col>
            {menuVisible ? <JustButtons currentPath={currentPath} /> : null}
          </Row>
        </Col>
      </Row>
    );
  return (
    <Row className="nav-div">
      <Col xs={24} sm={24} lg={8}>
        <Link to="/">
          <div className="to-home">
            <img src={logo} alt="Shelly" width="100%" />
          </div>
        </Link>
      </Col>
      <Col xs={24} sm={24} lg={16}>
        <Row>
          <JustButtons currentPath={currentPath} />
        </Row>
      </Col>
    </Row>
  );
}

function JustButtons(props) {
  const { currentPath } = props;
  return (
    <>
      <Col xs={24} sm={24} lg={4}>
        <Link to="/">
          <div
            className={currentPath === '/' ? 'nav-btn nav-border' : 'nav-btn'}
          >
            Inicio
          </div>
        </Link>
      </Col>
      <Col xs={24} sm={24} lg={4}>
        <Link to="/sugerencia">
          <div
            className={
              currentPath === '/sugerencia' ? 'nav-btn nav-border' : 'nav-btn'
            }
          >
            Sugerencia
          </div>
        </Link>
      </Col>
      <Col xs={24} sm={24} lg={4}>
        <Link to="/someFeature1">
          <div
            className={
              currentPath === '/someFeature1' ? 'nav-btn nav-border' : 'nav-btn'
            }
          >
            Proximamente...
          </div>
        </Link>
      </Col>
      <Col xs={24} sm={24} lg={4}>
        <Link to="/someFeature2">
          <div
            className={
              currentPath === '/someFeature2' ? 'nav-btn nav-border' : 'nav-btn'
            }
          >
            Proximamente...
          </div>
        </Link>
      </Col>
    </>
  );
}

export default NavMenu;
