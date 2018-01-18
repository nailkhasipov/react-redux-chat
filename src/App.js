import React from 'react';
import Modal from './Modal';
import { Sidebar } from './Sidebar';

function App() {
  return (
    <div className='container-fluid'>
      <Sidebar />
      <div className='col-md-8'>
        {/* <MessageList />
        <AddMessage /> */}
      </div>
      <Modal />
    </div>
  );
}

export default App;