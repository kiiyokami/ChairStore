import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './pages/home';
import NavBar from './components/NavBar';
import './assets/App.css'

class App extends Component {
  render(){
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Routes>
            <Route exact path='/' element={< Home />}></Route>
          </Routes>
        </div>
      </Router>
    )
  }
}

export default App
