import React, { Component } from 'react';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value );
    //this.setState({ value: event.target.value });
    this.setState({value: event.target.value.toUpperCase()});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    // {this.handleSubmit} 不要加双(单)引号 
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name: <input type="text" value={this.state.value} name="name" onChange={this.handleChange}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Login;
