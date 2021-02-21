import React, { Component } from 'react';
import axios from 'axios';

export default class CreateSoda extends Component {

  constructor(props) {
  	super(props);
  	this.state = {sodas: [],
  				  inEditMode: false,
  				  editRow: null,
  				  price: null
  				};
  }

   // get initial state of table
  componentDidMount() {
  	axios.get('http://localhost:5000/sodas')
  		.then(res => {
  			const sodas = res.data;
  			this.setState({ sodas });
  	})
  }

  handleName(event) {
  	this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {

  }
  render() {
    return (
    <div>
      <table class="center">
      	<thead>
      	 <tr>
      	 	<th>Name</th>
      	 	<th>Price</th>
      	 	<th>Quantity</th>
      	 	<th>Description</th>
      	 	<th>Edit</th>
      	 </tr>
      	</thead>
      	<tbody>
      		{this.state.sodas.map((soda, index) => (
      			<tr key={soda._id}> 
      				<td>{soda.name}</td> 
      				<td>${soda.price}</td> 
      				<td>{soda.quantity}</td>
      				<td>{soda.description}</td>
                </tr>))}
      	</tbody>
      	</table>
     </div>
    )
  }
}