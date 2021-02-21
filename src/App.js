import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./machine.css";

import Navbar from "./components/navbar.component";
import SodaList from "./components/soda-list.component";
import CreateSoda from "./components/edit-soda.component";

function App() {
 return (
  <Router>
   <div>
     <Navbar />
      <Route path="/" exact component={SodaList} />
      <Route path="/edit" component={CreateSoda} />
   </div>
   </Router>
 );
}
 
export default App;