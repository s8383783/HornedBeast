import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favs: 0,
    };
  }
  onFav = () => {
    this.setState({ favs: this.state.favs + 1 });
  }
  onDislike = () => {
    this.setState({ favs: this.state.favs - 1 });
  }
  selectBeast = () =>{ 
    this.props.showModal();
    this.props.selectBeast(this.props.title, this.props.description, this.props.image_url);

  }

  render() {
    return (
      <div className="m-1" id="container">
        <Card style={{ width: '18rem' }}>
          <Card.Img onClick = {this.selectBeast} variant="top" src={this.props.imageURL} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              {this.props.description}
            </Card.Text>
            <p>Picture Likes: {this.state.favs}</p>
            <Button onClick={this.onFav}> Like💗 </Button>
            <Button onClick={this.onDislike}> Dislike💔 </Button>
          </Card.Body>
        </Card>


      </div>
    );
  }
}
export default HornedBeast;
