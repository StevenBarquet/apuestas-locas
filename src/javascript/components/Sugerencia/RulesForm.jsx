// ---Dependencys
import React from 'react';
import { Form, Row, Col, InputNumber } from 'antd';
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
// --- FORM SECTIONS
function FormSection() {
  return (
    <Col xs={24} sm={24} lg={24}>
      <Row gutter={[20, 0]}>
        <Col xs={24} sm={24} lg={24}>
          <h2>Parámetros de apuesta</h2>
        </Col>
        <Col xs={24} sm={24} lg={12}>
          <JoiInputNumber label="Capital" name="capital" />
        </Col>
        <Col xs={24} sm={24} lg={12}>
          <JoiInputNumber label="Probabilidad mínima" name="minProba" />
        </Col>
        <Col xs={24} sm={24} lg={12}>
          <JoiInputNumber label="Diferencia mínima P" name="minDiffP" />
        </Col>
        <Col xs={24} sm={24} lg={12}>
          <JoiInputNumber label="Diferencia mínima E" name="minDiffE" />
        </Col>
      </Row>
    </Col>
  );
}
// --------------------------------------- FORM COMPONENT --------------------------------------
function RulesForm(props) {
  const { defaultValues, formInstance } = props;
  return (
    <div className="form-container">
      <Form initialValues={defaultValues} form={formInstance}>
        <Row gutter={[20, 10]}>
          <FormSection />
          {/* Finish Form */}
        </Row>
      </Form>
    </div>
  );
}

export default RulesForm;
