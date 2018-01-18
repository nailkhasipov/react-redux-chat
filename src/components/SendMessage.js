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
      <input type='text' ref={node => {input = node;}} />
      <button type='submit'>Send</button>
      <button>Clear</button>
    </form>
  );
};

SendMessage = connect()(SendMessage);

export default SendMessage;