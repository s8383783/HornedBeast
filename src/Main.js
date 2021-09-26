import React from 'react';
import HornedBeast from './HornedBeast';
import BeastsArray from './Beast.json';

class Main extends React.Component {


  render() {
    return (
      BeastsArray.map(beast => {
        return (

          <HornedBeast 
            title={beast.title}
            imageURL={beast.image_url}
            description={beast.description}
            showModal={this.props.showModal}
            closeModal={this.props.closeModal} 
            selectBeast = {this.props.selectBeast}
          />
        );
      })




    );
  }
}
export default Main;
