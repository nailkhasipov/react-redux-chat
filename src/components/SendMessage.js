import React from 'react';
import { connect } from 'react-redux';
import { sendMessage } from '../actions';

let SendMessage = ({ dispatch }) => {
  let input;

  return (
    <form className='send-message' onSubmit={e => {
      e.preventDefault();
      if (!input.value.trim()) {
        return;
      }
      dispatch(sendMessage(input.value));
      input.value = '';
    }}>
      <input className='form-control' type='text' ref={node => {input = node;}} />
      <button className='btn btn-default'>
        <span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
        Clear
      </button>
      <button className='btn btn-primary' type='submit'>Send</button>
    </form>
  );
};

SendMessage = connect()(SendMessage);

export default SendMessage;