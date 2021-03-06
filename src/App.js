import React from 'react';
// need to include the import bootstrap css so that bootstrap elements have default bootstrap styling
// import ABOVE App.css, not underneath it, otherwise the CSS breaks
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './Navigation';
import Generator from './Generator';
import Scanner from './Scanner';
import ReportForm from './ReportForm';
import CardsContainer from './CardsContainer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// notice that Home is not using {} but ()
// this is the syntax used for Route component
const Home = () => (
  <div>
    <h1 className="home">Home</h1>
  </div>
)


function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/generator" component={Generator} />
          <Route path="/scanner" component={Scanner} />
          <Route path="/form" component={ReportForm} />
          <Route path="/cardscontainer" component={CardsContainer} />
        </Switch>
      </div>
    </Router>
  );
}



export default App;
