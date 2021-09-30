import React from 'react';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';


class SelectedBeast extends React.Component {
  render() {
    return (
      <>
        <Modal show={this.props.toggle} onHide={true}>
          <Modal.Header>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{this.props.description}
            <img src={this.props.imageURL} alt={this.props.title} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.props.close}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
export default SelectedBeast;
