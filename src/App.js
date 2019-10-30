import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './listview.css'
import Listview from './listview';
import Singleview from './singleview';

function App() {
  return (
    <Router>
    <div className="App">
    <Route exact path="/" component={Listview}/>
    <Route path="/singleview/:id" component={Singleview}/>
    </div>
    </Router>
  );
}

export default App;
