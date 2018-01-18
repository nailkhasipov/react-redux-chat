import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const MessageListComponent = ({ messages }) => {
  return (
    <ul className='message-list'>
      {messages.map(message => (
        <li>{message.text}</li>
      ))}
    </ul>
  );
};

MessageListComponent.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
};

const mapStateToProps = state => {
  return {
    messages: state.messages
  };
};

const MessageList = connect(
  mapStateToProps
)(MessageListComponent);

export default MessageList;