import React from 'react';
import { connect } from 'react-redux';
import { sendMessage } from '../actions';

class SendMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleClear(event) {
    event.preventDefault();
    this.setState({value: ''});
  }

  handleSubmit(event) {
    event.preventDefault();
    const date = Date.now();
    this.props.dispatch(sendMessage(this.state.value, date));
    this.setState({value: ''});
  }

  render() {
    return (
      <form className='send-message' onSubmit={this.handleSubmit}>
        <input className='form-control' type='text' value={this.state.value} onChange={this.handleChange} required='required' />
        <button className='btn btn-default' onClick={this.handleClear}>
          <span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
          Clear
        </button>
        <button className='btn btn-primary' type='submit'>Send</button>
      </form>
    );
  }
};

export default connect()(SendMessage);