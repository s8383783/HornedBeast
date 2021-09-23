import React from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';


class App extends React.Component {
  render(){
    return (
      <div className="App">
        <h1>Horned Beast</h1>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
