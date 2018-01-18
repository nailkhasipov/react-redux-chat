import React from 'react';

function App() {
  return (
    <div className='container-fluid'>
      <Sidebar />
      <div className='col-md-8'>
        <MessageList />
        <AddMessage />
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <div className="col-md-3 sidebar">
      <ul></ul>
    </div>
  );
}

function MessageList() {
  return <ul></ul>;
}

function AddMessage() {
  return <div className='add-message'><input type="text" /></div>;
}

export default App;