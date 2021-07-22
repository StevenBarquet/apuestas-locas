// ---Dependencys
import React from 'react';
import { Select } from 'antd';
// ---Util Comps
// import ButtonMlg from 'Utils/ButtonMlg';
// ---Components
// import AuthValidate from 'Comp/AuthValidate';
// ------------------------------------------ COMPONENT-----------------------------------------
const { Option } = Select;

const optionsExample = [
  {
    label: 'Male',
    value: 'Male'
  },
  {
    label: 'Female',
    value: 'Female'
  },
  {
    label: 'Unknown',
    value: 'unknown'
  }
];

const mapOptions = options => {
  return options.map((element, i) => {
    return (
      <Option key={i} value={element.value}>
        {element.label}
      </Option>
    );
  });
};

export default mapOptions;
