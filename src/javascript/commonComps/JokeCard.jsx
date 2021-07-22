/* eslint-disable jsx-a11y/anchor-has-content */
// ---Dependencys
import React from 'react';
// import { Card, Form, Input, Row } from 'antd';
// ---ComonComponents
// import ButtonMlg from 'CommonComps/ButtonMlg';
// ---Components
// import AuthValidate from 'Comp/Master/AuthValidate';
// ------------------------------------------ COMPONENT-----------------------------------------
const JokeCard = props => {
  const { data } = props;
  const { id, value, url } = data;
  if (data.value)
    return (
      <div style={{ marginTop: 30 }} className="joke-card">
        <section>
          <span>ID: </span>
          {id}
        </section>
        <p>
          <span>Joke: </span>
          {value}
        </p>
        <p>
          <a href={url} target="_blank" rel="noopener noreferrer">
            See original
          </a>
        </p>
      </div>
    );
  return null;
};

export default JokeCard;
