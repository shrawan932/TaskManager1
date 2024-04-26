import React from "react";
import "./App.css";
//import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import EventList from './EventList';
import EventDetails from './EventDetails';


function App() {
  return (
    <Router>
      <div  className = "App">
        <Routes>
          <Route exact path="/" element = {<EventList/>}/>
          <Route path="/event/:id" element = {<EventDetails/>}/>

          </Routes>
  

        </div>
      </Router>

  );
}
export default App;
