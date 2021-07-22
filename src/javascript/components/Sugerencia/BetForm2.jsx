// ---Dependencys
import React from 'react';
import { Form, Row, Col, InputNumber, Input } from 'antd';
// --- AUX COMPONENTS
function JoiInputNumber(props) {
  const { label, name } = props;
  return (
    <Form.Item
      label={label}
      name={name}
      rules={[{ required: true, message: 'Campo requerido' }]}
    >
      <InputNumber style={{ width: 80 }} />
    </Form.Item>
  );
}
function JoiInputText(props) {
  const { label, name } = props;
  return (
    <Form.Item
      label={label}
      name={name}
      rules={[{ required: true, message: 'Campo requerido' }]}
    >
      <Input />
    </Form.Item>
  );
}
// --- FORM SECTIONS
function NameSection(props) {
  const { parentIndex } = props;
  return (
    <Col xs={24} sm={24} lg={24}>
      <Row gutter={[20, 0]}>
        <Col xs={24} sm={24} lg={24}>
          <h2>{`Partido ${parentIndex + 1}`}</h2>
        </Col>
        <Col xs={24} sm={24} lg={24}>
          <JoiInputText
            label="Nombre"
            name={['request', parentIndex, 'name']}
          />
        </Col>
      </Row>
    </Col>
  );
}
function OddSection(props) {
  const { parentIndex } = props;
  return (
    <Col xs={24} sm={24} lg={12}>
      <Row gutter={[20, 0]}>
        <Col xs={24} sm={24} lg={24}>
          <JoiInputNumber
            label="Probabilidad ganar"
            name={['request', parentIndex, 'probabilidad', 0]}
          />
        </Col>
        <Col xs={24} sm={24} lg={24}>
          <JoiInputNumber
            label="Probabilidad perder"
            name={['request', parentIndex, 'probabilidad', 1]}
          />
        </Col>
      </Row>
    </Col>
  );
}
function BetSection(props) {
  const { parentIndex } = props;
  return (
    <Col xs={24} sm={24} lg={12}>
      <Row gutter={[20, 0]}>
        <Col xs={24} sm={24} lg={24}>
          <JoiInputNumber
            label="Multiplicador al ganar"
            name={['request', parentIndex, 'apuestas', 0]}
          />
        </Col>
        <Col xs={24} sm={24} lg={24}>
          <JoiInputNumber
            label="Multiplicador al perder"
            name={['request', parentIndex, 'apuestas', 1]}
          />
        </Col>
      </Row>
    </Col>
  );
}
// --------------------------------------- FORM COMPONENT --------------------------------------
function BetForm2(props) {
  const { defaultValues, formInstance, parentIndex } = props;
  return (
    <div className="form-container">
      <Form initialValues={defaultValues} form={formInstance}>
        <Row gutter={[20, 10]}>
          <NameSection parentIndex={parentIndex} />
          <Col xs={24} sm={24} lg={24}>
            <Row gutter={[20, 0]}>
              <OddSection parentIndex={parentIndex} />
              <BetSection parentIndex={parentIndex} />
            </Row>
          </Col>
          {/* Finish Form */}
        </Row>
      </Form>
    </div>
  );
}

export default BetForm2;
