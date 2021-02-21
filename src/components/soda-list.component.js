import React, { Component } from 'react';

import axios from 'axios';

export default class SodaList extends Component {

  constructor(props) {
  	super(props);
  	this.buy = this.buy.bind(this);
  	this.download = this.download.bind(this);
  }
  state = {
  	sodas: []
  }

  // get initial state of table
  componentDidMount() {
  	axios.get('http://localhost:5000/sodas')
  		.then(res => {
  			const sodas = res.data;
  			this.setState({ sodas });
  	})
  }

  // download json file based on clicked soda
  download(soda) {
  	let output = JSON.stringify(soda);
  	const blob = new Blob([output]);
  	const fileDownloadURL = URL.createObjectURL(blob);
  	const link = document.createElement('a');
  	link.href = fileDownloadURL;
  	link.setAttribute('download', 'soda.json');
  	document.body.appendChild(link);
  	link.click();
  	link.parentNode.removeChild(link);
  }

  // send post request to decrement quantity in soda database
  buy(id, soda, index) {
  	// download before updating database
  	this.download(soda);
  	axios.post('http://localhost:5000/sodas/buy/' + id)
  	.then(res => {
  		console.log('Soda Bought!');
  	})
  	// change state so that changes appear on page without
  	// rerendering or pinging server again
  	let soda_update = this.state.sodas;
  	soda_update[index].quantity = this.state.sodas[index].quantity - 1;
  	this.setState({soda_update});


  }

  render() {
    return (
    <div>
      <ul>
      {this.state.sodas.map((soda, index) => <li>{soda.name}, {soda.description}, ${soda.price}, {soda.quantity} <button onClick={this.buy.bind(this, soda._id, soda, index)}>Buy</button></li>)}
      </ul>
      </div>
    );
  }
}