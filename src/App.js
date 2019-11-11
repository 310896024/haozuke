import React from 'react';
import logo from './logo.svg'
import './App.css';
import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
import Layout from './view/Layout'
import Login from './view/Login'

function NotFound() {
  return <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2060401442,1612664087&fm=26&gp=0.jpg" alt={'404'}/>
}

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/layout" component={Layout} />
          <Route path="/login" component={Login} />
          <Redirect exact from="/" to="/layout"/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
