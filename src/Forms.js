import React from 'react';
import Form from 'react-bootstrap/Form';



class Forms extends React.Component {

  render() {
    return (
      <>
        <h2> Welcome! How many horns are you looking for today?</h2>
        <main>
          <Form id="Myform">
            <label for="Horns"></label>
            <br />

            <Form.Group controlId="horns.ControlSelect">
              <Form.Control as="select" name="horns" onChange={this.props.handle}>
                <option value="0"> Select Your Number of Horns </option>
                <option value="1 Horn"> 1 Horn </option>
                <option value="2 Horn"> 2 Horns </option>
                <option value="3 Horn"> 3 Horns </option>
                <option value="X Horn"> I need way more then 3 </option>
              </Form.Control>
            </Form.Group>
          </Form>
        </main>
      </>
    );
  }
}
export default Forms;
