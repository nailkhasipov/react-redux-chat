import React from 'react';
import { connect } from 'react-redux';
import { addUser } from './actions';

let Modal = ({ dispatch }) => {
  let input;

  return (
    <div id='myModal' className='modal fade' tabIndex='-1' role='dialog'>
      <form onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        dispatch(addUser(input.value));
        input.value = '';
        $('#myModal').modal('hide');
      }}>
        <div className='modal-dialog' role='document'>
          <div className='modal-content'>
            <div className='modal-header'>
              <button type='button' className='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>×</span></button>
              <h4 className='modal-title'>Pick a username</h4>
            </div>
            <div className='modal-body'>
              <input type='text' id='username-field' className='form-control' ref={node => {input = node;}} />
            </div>
            <div className='modal-footer'>
              <button type='button' className='btn btn-default' data-dismiss='modal'>Sign out</button>
              <button type='submit' className='btn btn-primary'>Sign in</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

Modal = connect()(Modal);

export default Modal;