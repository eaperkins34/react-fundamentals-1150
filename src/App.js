import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './components/site/Header';
import Footer from './components/site/Footer';
import Sidebar from './components/site/Sidebar';
// import LogLifecycle from './components/concepts/LogLifecycle';
import {                      
  BrowserRouter as Router,
} from 'react-router-dom'; 

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {/* <LogLifecycle />  */}
        <Router>
          <Sidebar />
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
