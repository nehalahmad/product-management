import React, { Component } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import Auxilliary from "../../hoc/Auxilliary/Auxilliary";

class AddProductSpecification extends Component {
  render() {
    return (
      <Auxilliary>
        <Form.Group as={Row} controlId="exampleForm.ControlInput5">
          <Form.Label column sm="2">
            Specification
          </Form.Label>
          <Col sm="10">
            <Form.Control
              as="select"
              onChange={this.changeSpecificationHandler}
            >
              <option value="">Add Specification</option>
              <option value="length">Length</option>
              <option value="weight">Weight</option>
              <option value="document">Document</option>
            </Form.Control>
          </Col>
        </Form.Group>
        {this.state.specifications["length"].map((spec) => (
          <Row key={spec.id}>
            <Col>
              <Row>
                <Col>
                  <Form.Control
                    type="text"
                    placeholder="measurement variable..."
                  />
                </Col>
                <Col>
                  <Form.Control as="select">
                    <option value="sqft">Sq feet</option>
                    <option value="meter">Meter</option>
                    <option value="centimeter">Centimeter</option>
                  </Form.Control>
                </Col>
                <Col>
                  <Form.Control type="text" placeholder="value..." />
                </Col>
              </Row>
            </Col>
            <Col sm="auto">
              <Button variant="light" onClick={this.onAddClickHandler}>
                <i className="fa fa-plus-circle" style={{ color: "blue" }}></i>
              </Button>
              <Button
                variant="light"
                style={{ color: "red" }}
                onClick={this.onDeleteClickHandler}
              >
                <i className="fa fa-trash"></i>
              </Button>
            </Col>
          </Row>
        ))}
        <br />
        {this.state.specifications["weight"].map((spec) => (
          <Row key={spec.id}>
            <Col>
              <Row>
                <Col>
                  <Form.Control
                    type="text"
                    placeholder="measurement variable..."
                  />
                </Col>
                <Col>
                  <Form.Control as="select">
                    <option value="kg">Kg</option>
                    <option value="lbs">LBS</option>
                    <option value="gram">Gram</option>
                  </Form.Control>
                </Col>
                <Col>
                  <Form.Control type="text" placeholder="value..." />
                </Col>
              </Row>
            </Col>
            <Col sm="auto">
              <Button variant="light" onClick={this.onAddClickHandler}>
                <i className="fa fa-plus-circle" style={{ color: "blue" }}></i>
              </Button>
              <Button
                variant="light"
                style={{ color: "red" }}
                onClick={this.onDeleteClickHandler}
              >
                <i className="fa fa-trash"></i>
              </Button>
            </Col>
          </Row>
        ))}
        <br />
        {this.state.specifications["document"].map((spec) => (
          <Row key={spec.id}>
            <Col>
              <Row>
                <Col>
                  <Form.Control
                    type="text"
                    placeholder="measurement variable..."
                  />
                </Col>
                <Col>
                  <Form.Control as="select">
                    <option value="pdf">Pdf</option>
                    <option value="Word">Word</option>
                    <option value="Image">Image</option>
                  </Form.Control>
                </Col>
                <Col>
                  <Form.Control type="text" placeholder="value..." />
                </Col>
              </Row>
            </Col>
            <Col sm="auto">
              <Button variant="light" onClick={this.onAddClickHandler}>
                <i className="fa fa-plus-circle" style={{ color: "blue" }}></i>
              </Button>
              <Button
                variant="light"
                style={{ color: "red" }}
                onClick={this.onDeleteClickHandler}
              >
                <i className="fa fa-trash"></i>
              </Button>
            </Col>
          </Row>
        ))}
        <br />
      </Auxilliary>
    );
  }
}

export default AddProductSpecification;
