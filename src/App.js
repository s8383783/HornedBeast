
import React from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import SelectedBeast from './SelectedBeast';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      selectedBeastTitle: '',
      selectedBeastDescription: '',
      selectedBeastImage: ''
    };
  }
  showModal = () => {
    this.setState({ toggle: true });
    console.log('show modal');
  }
  closeModal = () => {
    this.setState({ toggle: false });
    console.log('close modal');

  }

  selectBeast = (title, description, image_url) => {
    this.setState({
      selectedBeastTitle: title,
      selectedBeastDescription: description,
      selectedBeastImage: image_url,
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Horned Beast</h1>
        <Header />
        <Main
          showModal={this.showModal}
          closeModal={this.closeModal}
          selectBeast={this.selectBeast}
        />
        <Footer />
        <SelectedBeast
          title = {this.state.selectedBeastTitle}
          description = {this.state.selectedBeastDescription}
          toggle={this.state.toggle}
          close={this.closeModal}
        />
      </div>
    );
  }
}

export default App;


//

