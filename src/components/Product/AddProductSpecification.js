import React, { Component } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

import Auxilliary from "../../hoc/Auxilliary/Auxilliary";
import { updateObject } from "../../shared/utility";

class AddProductSpecification extends Component {
  state = {
    specifications: {
      length: [{ id: 1, measurementVar: "", type: "", value: "" }],
      weight: [{ id: 1, measurementVar: "", type: "", value: "" }],
      document: [{ id: 1, measurementVar: "", type: "", value: "" }],
    },
    specificationRow: "",
  };

  constructor(props) {
    super(props);

    this.changeSpecHandler = this.changeSpecHandler.bind(this);
  }

  changeSpecHandler(e) {
    this.setState({ specificationRow: e.target.value });
  }

  onAddClickHandler(spec, pos) {
    const specs = JSON.parse(JSON.stringify(this.state.specifications[spec]));
    let specObj = { id: specs.length + 1 };

    switch (spec) {
      case "length":
        specObj = {
          ...specObj,
          ...{ measurementVar: "", type: "", value: "" },
        };
        break;
      case "weight":
        specObj = {
          ...specObj,
          ...{ measurementVar: "", type: "", value: "" },
        };
        break;
      default:
        specObj = {
          ...specObj,
          ...{ measurementVar: "", type: "", value: "" },
        };
        break;
    }
    specs.splice(pos + 1, 0, specObj);

    const newSpecifications = updateObject(this.state.specifications, {
      [spec]: specs,
    });
    this.setState({ specifications: newSpecifications });
  }

  inputChangeHandler(spec, rowIndex, specName, e) {
    let newSpecObj = updateObject(this.state.specifications[spec][rowIndex], {
      [specName]: e.target.value,
    });

    let newSpecArr = JSON.parse(
      JSON.stringify(this.state.specifications[spec])
    );
    newSpecArr.splice(rowIndex, 1, newSpecObj);

    let newSpecifications = updateObject(this.state.specifications, {
      [spec]: newSpecArr,
    });
    this.setState({ specifications: newSpecifications });
  }

  onDeleteClickHandler(spec, pos) {
    const specs = JSON.parse(JSON.stringify(this.state.specifications[spec]));
    specs.splice(pos, 1);

    const newSpecifications = updateObject(this.state.specifications, {
      [spec]: specs,
    });
    this.setState({ specifications: newSpecifications });
  }

  render() {
    return (
      <Auxilliary>
        <Form.Group as={Row} controlId="exampleForm.ControlInput5">
          <Form.Label column sm="2">
            Specification
          </Form.Label>
          <Col sm="10">
            <Form.Control as="select" onChange={this.changeSpecHandler}>
              <option value="">Add Specification</option>
              <option value="length">Length</option>
              <option value="weight">Weight</option>
              <option value="document">Document</option>
            </Form.Control>
          </Col>
        </Form.Group>
        {this.state.specificationRow === "length" &&
          this.state.specifications["length"].map((spec, index) => (
            <Row key={spec.id}>
              <Col>
                <Row>
                  <Col>
                    <Form.Control
                      type="text"
                      placeholder="measurement variable..."
                      onChange={(e) =>
                        this.inputChangeHandler(
                          "length",
                          index,
                          "measurementVar",
                          e
                        )
                      }
                    />
                  </Col>
                  <Col>
                    <Form.Control
                      as="select"
                      onChange={(e) =>
                        this.inputChangeHandler("length", index, "type", e)
                      }
                    >
                      <option value="">Select</option>
                      <option value="sqft">Sq feet</option>
                      <option value="meter">Meter</option>
                      <option value="centimeter">Centimeter</option>
                    </Form.Control>
                  </Col>
                  <Col>
                    <Form.Control
                      type="text"
                      placeholder="value..."
                      onChange={(e) =>
                        this.inputChangeHandler("length", index, "value", e)
                      }
                    />
                  </Col>
                </Row>
              </Col>
              <Col sm="auto">
                <Button
                  variant="light"
                  onClick={() => this.onAddClickHandler("length", index)}
                >
                  <i
                    className="fa fa-plus-circle"
                    style={{ color: "blue" }}
                  ></i>
                </Button>

                <Button
                  variant="light"
                  style={{ color: "red" }}
                  onClick={() => this.onDeleteClickHandler("length", index)}
                  disabled={index === 0}
                >
                  <i className="fa fa-trash"></i>
                </Button>
              </Col>
              <br />
            </Row>
          ))}
        {this.state.specificationRow === "weight" &&
          this.state.specifications["weight"].map((spec, index) => (
            <Row key={spec.id}>
              <Col>
                <Row>
                  <Col>
                    <Form.Control
                      type="text"
                      placeholder="measurement variable..."
                      onChange={(e) =>
                        this.inputChangeHandler(
                          "length",
                          index,
                          "measurementVar",
                          e
                        )
                      }
                    />
                  </Col>
                  <Col>
                    <Form.Control
                      as="select"
                      onChange={(e) =>
                        this.inputChangeHandler("length", index, "type", e)
                      }
                    >
                      <option value="">Select</option>
                      <option value="kg">Kg</option>
                      <option value="lbs">LBS</option>
                      <option value="gram">Gram</option>
                    </Form.Control>
                  </Col>
                  <Col>
                    <Form.Control
                      type="text"
                      placeholder="value..."
                      onChange={(e) =>
                        this.inputChangeHandler("length", index, "value", e)
                      }
                    />
                  </Col>
                </Row>
              </Col>
              <Col sm="auto">
                <Button
                  variant="light"
                  onClick={() => this.onAddClickHandler("weight", index)}
                >
                  <i
                    className="fa fa-plus-circle"
                    style={{ color: "blue" }}
                  ></i>
                </Button>
                <Button
                  variant="light"
                  style={{ color: "red" }}
                  onClick={() => this.onDeleteClickHandler("weight", index)}
                  disabled={index === 0}
                >
                  <i className="fa fa-trash"></i>
                </Button>
              </Col>
              <br />
            </Row>
          ))}
        {this.state.specificationRow === "document" &&
          this.state.specifications["document"].map((spec, index) => (
            <Row key={spec.id}>
              <Col>
                <Row>
                  <Col>
                    <Form.Control
                      type="text"
                      placeholder="measurement variable..."
                      onChange={(e) =>
                        this.inputChangeHandler(
                          "length",
                          index,
                          "measurementVar",
                          e
                        )
                      }
                    />
                  </Col>
                  <Col>
                    <Form.Control
                      as="select"
                      onChange={(e) =>
                        this.inputChangeHandler("length", index, "type", e)
                      }
                    >
                      <option value="">Select</option>
                      <option value="pdf">Pdf</option>
                      <option value="Word">Word</option>
                      <option value="Image">Image</option>
                    </Form.Control>
                  </Col>
                  <Col>
                    <Form.Control
                      type="text"
                      placeholder="value..."
                      onChange={(e) =>
                        this.inputChangeHandler("length", index, "value", e)
                      }
                    />
                  </Col>
                </Row>
              </Col>
              <Col sm="auto">
                <Button
                  variant="light"
                  onClick={() => this.onAddClickHandler("document", index)}
                >
                  <i
                    className="fa fa-plus-circle"
                    style={{ color: "blue" }}
                  ></i>
                </Button>
                <Button
                  variant="light"
                  style={{ color: "red" }}
                  onClick={() => this.onDeleteClickHandler("document", index)}
                  disabled={index === 0}
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
