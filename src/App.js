import React from 'react';
import Modal from './components/Modal';
import Sidebar from './components/Sidebar';
import MessageList from './components/MessageList';
import SendMessage from './components/SendMessage';

function App() {
  return (
    <div className='container-fluid'>
      <Sidebar />
      <div className='col-md-9'>
        <MessageList />
        <SendMessage />
      </div>
      <Modal />
    </div>
  );
}

export default App;