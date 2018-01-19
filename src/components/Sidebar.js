import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function Sidebar(props) {
  const users = props.users.map((user, index) =>
    <li className='list-group-item' key={index}>
      {user.name}
    </li>
  );
  return (
    <ul className='sidebar list-group col-sm-2 col-xs-2 col-md-3'>{users}</ul>
  );
}

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

export default connect(mapStateToProps)(Sidebar);