// ---Dependencys
import React from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';
// ---Util Comps
import ButtonMlg from 'Utils/ButtonMlg';

// ------------------------------------------ COMPONENT-----------------------------------------
const BetMenu = props => {
  const { onNewBet } = props;
  return (
    <>
      <Row style={{ width: '100%' }}>
        <Col className="center-block" xs={24} sm={24} lg={12}>
          <ButtonMlg
            variant="blue"
            size="big"
            htmlType="button"
            onClick={() => onNewBet('league')}
            widthB="80%"
            label="2 probabilidades"
            icon={<PlusOutlined />}
          />
        </Col>
        <Col className="center-block" xs={24} sm={24} lg={12}>
          <ButtonMlg
            variant="blue-outline"
            size="big"
            htmlType="button"
            onClick={onNewBet}
            widthB="80%"
            label="3 probabilidades"
            icon={<PlusOutlined />}
          />
        </Col>
      </Row>
    </>
  );
};

export default BetMenu;
