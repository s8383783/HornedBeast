import React from 'react';
import HornedBeast from './HornedBeast';
import BeastsArray from './Beast.json';

class Main extends React.Component {
  render() {
    return (
      BeastsArray.map(beast => {
        return (

          <HornedBeast title={beast.title} imageURL={beast.image_url} description={beast.description} />
        );
      })




    );
  }
}
export default Main;
