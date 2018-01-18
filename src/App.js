import React from 'react';
import Sidebar from './components/Sidebar';
import MessageList from './components/MessageList';
import SendMessage from './components/SendMessage';

function App() {
  return (
    <div className='container-fluid'>
      <div className="row">
        <Sidebar />
        <div className='col-md-9 col-sm-10 col-xs-10 main no-gutter'>
          <MessageList />
          <SendMessage />
        </div>
      </div>
    </div>
  );
}

export default App;