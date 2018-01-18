import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const SidebarComponent = ({ users }) => {
  return (
    <ul className='sidebar col-md-3'>
      {users.map(user => (
        <li>{user.name}</li>
      ))}
    </ul>
  );
};

SidebarComponent.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
};

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

const Sidebar = connect(
  mapStateToProps
)(SidebarComponent);

export default Sidebar;