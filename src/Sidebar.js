import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const SidebarComponent = ({ users }) => {
  return (
    <ul>
      {users.map(user => (
        <li>{user.name}</li>
      ))}
    </ul>
  );
};

SidebarComponent.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired).isRequired
};

export const Sidebar = connect(state => ({
  users: state.users
}), {})(SidebarComponent);