import React, { Component } from 'react';

export default class CreateSoda extends Component {

  constructor(props) {
  	super(props);
  	this.state = {name: '',
  				  description: 'Describe the soda :)',
  				  price: 0,
  				  quantity: 0};

  	this.handleChange = this.handleName.bind(this);
  	this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleName(event) {
  	this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {

  }
  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
      	<label>
      	Soda Name:
      	<input type='text' value={this.state.name} onChange={this.handleName} />
      	</label>
      	</form>
      </div>
    )
  }
}