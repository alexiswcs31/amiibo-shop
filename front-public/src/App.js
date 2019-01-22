import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import AmiiboList from './components/AmiiboList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <AmiiboList />
        <Footer />
      </div>
    );
  }
}

export default App;