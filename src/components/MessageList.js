import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function MessageList(props) {
  const messages = props.messages.map((message, index) =>
    <li className='message' key={index}>
      <span><b>{message.author}</b> {new Date(message.date).toLocaleString().split(' ')[1]}</span>
      <p>{message.text}</p>
    </li>
  );
  return (
    <ul className='message-list'>{messages}</ul>
  );
}

const mapStateToProps = state => {
  return {
    messages: state.messages
  };
};

export default connect(mapStateToProps)(MessageList);;