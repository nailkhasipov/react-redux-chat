import React from 'react';
import { connect } from 'react-redux';
import { HotKeys } from 'react-hotkeys';
import { sendMessage } from '../actions';

class SendMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handlers = {};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  componentDidMount() {
    this.handlers = {
      'ctrl+r': (event) => this._clearMessage(),
      'enter': (event) => this._sendMessage()
    };
  }

  _clearMessage() {
    this.setState({value: ''});
  }

  _sendMessage() {
    const date = Date.now();
    this.props.dispatch(sendMessage(this.state.value, this.props.username, date));
    this._clearMessage();
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleClear(event) {
    event.preventDefault();
    this._clearMessage();
  }

  handleSubmit(event) {
    event.preventDefault();
    this._sendMessage();
  }

  render() {
    return (
      <form className='send-message' onSubmit={this.handleSubmit}>
        <HotKeys handlers={this.handlers} className='input-wrapper'>
          <input className='form-control' type='text' value={this.state.value} onChange={this.handleChange} required='required' />
        </HotKeys>
        <button className='btn btn-default' onClick={this.handleClear}>
          <span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
          Clear
        </button>
        <button className='btn btn-primary' type='submit'>Send</button>
      </form>
    );
  }
};

const mapStateToProps = state => {
  return {
    username: state.app.username
  };
};

export default connect(mapStateToProps)(SendMessage);