// ---Dependencys
import React, { useReducer } from 'react';
import { Row, Col, Form } from 'antd';
// ---Redux
import { useDispatch } from 'react-redux';
import { updateLoading } from 'Actions/appInfo';
// ---Components
import BetMenu from 'Comp/Sugerencia/BetMenu';
import RulesForm from 'Comp/Sugerencia/RulesForm';
import SubmitMenu from 'Comp/Sugerencia/SubmitMenu';
import BetForm3 from 'Comp/Sugerencia/BetForm3';
import BetForm2 from 'Comp/Sugerencia/BetForm2';
// ---Requests
import { asyncHandler, testError } from 'Others/requestHandlers';
import { getSuggestedBetReq } from 'Others/requests';

// ---AUX COMPONENTS
function MapForms(props) {
  const { request, defaultValues, formInstance } = props;
  if (request && request.length > 0)
    return (
      <Row>
        {request.map((element, index) => {
          return (
            <Col xs={24} sm={24} lg={12}>
              {element.apuestas.length === 3 ? (
                <BetForm3
                  key={index}
                  parentIndex={index}
                  formInstance={formInstance}
                  defaultValues={defaultValues}
                />
              ) : (
                <BetForm2
                  key={index}
                  parentIndex={index}
                  formInstance={formInstance}
                  defaultValues={defaultValues}
                />
              )}
            </Col>
          );
        })}
      </Row>
    );
  return null;
}
// ------------------------------------------ REDUCER -----------------------------------------
const typesR = {
  RESET_FORM: 'RESET_FORM',
  UPDATE_FORM_RULES: 'UPDATE_FORM_RULES',
  NEW_BET: 'NEW_BET'
};

const { RESET_FORM, UPDATE_FORM_RULES, NEW_BET } = typesR;

const initialState = {
  form: {
    request: []
  }
};

function reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case RESET_FORM:
      return {
        ...state,
        ...initialState
      };

    case UPDATE_FORM_RULES:
      return { ...state, form: { ...state.form, ...payload } };

    case NEW_BET:
      return {
        ...state,
        form: { ...state.form, request: [...state.form.request, payload] }
      };

    default:
      return state;
  }
}
// ------------------------------------------ COMPONENT-----------------------------------------
function Sugerencia() {
  // ----------------------- hooks, const, props y states
  const [formInstance] = Form.useForm();
  const [state, dispatch] = useReducer(reducer, initialState);
  // Redux Actions
  const dispatchR = useDispatch();
  const isLoading = flag => dispatchR(updateLoading(flag));

  // ----------------------- Metodos Principales
  function getSuggestedBet(reqData) {
    isLoading(true);
    asyncHandler(getSuggestedBetReq, onSuccess, onError, reqData);
  }
  function onSubmit(form) {
    // console.log('full form: ', form);
    dispatch({ type: UPDATE_FORM_RULES, payload: form });
    getSuggestedBet(form);
  }
  function onNewBet(type) {
    if (type === 'league') {
      const apuestas = [0, 0];
      dispatch({ type: NEW_BET, payload: { apuestas } });
    } else {
      const apuestas = [0, 0, 0];
      dispatch({ type: NEW_BET, payload: { apuestas } });
    }
  }
  // ----------------------- Metodos Auxiliares
  function onSuccess(data) {
    isLoading(false);
    console.log('Success: ', data);
  }

  function onError(err) {
    testError(err);
    isLoading(false);
  }
  return (
    <Row>
      <Col xs={24} sm={24} lg={12}>
        <RulesForm formInstance={formInstance} defaultValues={state.form} />
      </Col>
      <Col className="center-block" xs={24} sm={24} lg={12}>
        <BetMenu onNewBet={onNewBet} />
      </Col>
      <Col className="center-block" xs={24} sm={24} lg={24}>
        <MapForms
          formInstance={formInstance}
          defaultValues={state.form}
          request={state.form.request}
        />
      </Col>
      <Col className="center-block" xs={24} sm={24} lg={24}>
        <SubmitMenu formInstance={formInstance} onSubmit={onSubmit} />
      </Col>
    </Row>
  );
}

export default Sugerencia;
