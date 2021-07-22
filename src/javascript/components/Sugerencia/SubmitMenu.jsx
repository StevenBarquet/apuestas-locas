// ---Dependencys
import React from 'react';
import { Form, Row, Col } from 'antd';
import { AreaChartOutlined } from '@ant-design/icons';
// ---Util Comps
import ButtonMlg from 'Utils/ButtonMlg';

// ------------------------------------------ COMPONENT-----------------------------------------
const SubmitMenu = props => {
  const { onSubmit, formInstance, onChangeForm } = props;
  return (
    <Form
      onFinish={onSubmit}
      onValuesChange={onChangeForm}
      form={formInstance}
      style={{ width: '100%' }}
    >
      <Row>
        <Col className="center-block" xs={24} sm={24} lg={24}>
          <ButtonMlg
            variant="blue-outline"
            size="big"
            htmlType="submit"
            widthB="60%"
            label="Calcular mejor apuesta"
            icon={<AreaChartOutlined />}
          />
        </Col>
      </Row>
    </Form>
  );
};

export default SubmitMenu;
