const axios = require('axios').default;

axios.get('http://localhost:5000/sodas')
.then((response) => {
	console.log(response);
}, (error) => {
	console.log(error);
})