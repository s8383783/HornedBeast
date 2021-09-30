import React from 'react';
import HornedBeast from './HornedBeast';
import BeastsArray from './Beast.json';
import Forms from './Forms';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beasts: BeastsArray
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    console.log(event);
    let userChoice = event.target.value;
    let filterBeast;
    if (userChoice === '1 Horn') {
      filterBeast = BeastsArray.filter(item => {
        return item.horns === 1;
      });
      this.setState({
        beasts: filterBeast,
      });
    }else if (userChoice === '2 Horn') {
      filterBeast = BeastsArray.filter(item => {
        return item.horns === 2;
      });
      this.setState({
        beasts: filterBeast,
      });
    }else if (userChoice === '3 Horn') {
      filterBeast = BeastsArray.filter(item => {
        return item.horns === 3;
      });
      this.setState({
        beasts: filterBeast,
      });
    }else if (userChoice === 'X Horn'){
      filterBeast = BeastsArray.filter(item => {
        return item.horns >= 4;
      });
      this.setState({
        beasts: filterBeast,
      });
    }else {
      this.setState({
        beasts: BeastsArray
      });
    }
  }

  render() {
    return (
      <>
        <Forms
          handle={this.handleChange} />
        {this.state.beasts.map(beast => {
          return (

            <HornedBeast
              title={beast.title}
              imageURL={beast.image_url}
              description={beast.description}
              showModal={this.props.showModal}
              closeModal={this.props.closeModal}
              selectBeast={this.props.selectBeast}
              horns={beast.horns}
            />

          );
        })}
      </>



    );
  }
}
export default Main;
