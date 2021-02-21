import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.component";
import SodaList from "./components/soda-list.component";
import CreateSoda from "./components/create-soda.component";

function App() {
 return (
  <Router>
   <div className="container">
     <Navbar />
      <br/>
      <Route path="/" exact component={SodaList} />
      <Route path="/create" component={CreateSoda} />
   </div>
   </Router>
 );
}
 
export default App;