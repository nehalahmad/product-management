import React, { Component, createRef } from "react";
import { connect } from "react-redux";
import { Row, Col, Form, Button } from "react-bootstrap";

import * as actions from "../../store/actions";

import WithErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

class AddProduct extends Component {
  state = {
    name: "",
    category: "",
    mfgDate: "",
    type: "",
    specifications: [],
  };

  constructor(props) {
    super(props);

    this.nameRef = createRef();
    this.catRef = createRef();
    this.mfgDateRef = createRef();
    this.typeRef = createRef();

    this.cancelClickHandler = this.cancelClickHandler.bind(this);
    this.submitFormHandler = this.submitFormHandler.bind(this);
  }

  cancelClickHandler() {
    this.props.history.goBack();
  }

  submitFormHandler(event) {
    event.preventDefault();

    const product = {
      name: this.nameRef.value,
      category: this.catRef.value,
      mfgDate: this.mfgDateRef.value,
      type: this.typeRef.value,
      specifications: [],
    };

    this.props.onAddProduct(product);

    this.props.history.goBack();
  }

  nameChangeHandler = (e) => {
    console.log(e);
    this.setState({ name: e.tartget.value });
  };

  render() {
    return (
      <Form onSubmit={this.submitFormHandler}>
        <h3>Add Product Form</h3>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="name..."
            maxLength="100"
            ref={(ref) => (this.nameRef = ref)}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Category</Form.Label>
          <Form.Control as="select" multiple ref={(ref) => (this.catRef = ref)}>
            <option value="cat1">Category 1</option>
            <option value="cat2">Category 2</option>
            <option value="cat3">Category 3</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput3">
          <Form.Label>Mfg Date</Form.Label>
          <Form.Control type="text" ref={(ref) => (this.mfgDateRef = ref)} />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput4">
          <Form.Label>Product Type</Form.Label>
          <Form.Control as="select" ref={(ref) => (this.typeRef = ref)}>
            <option value="type1">Type 1</option>
            <option value="type2">Type 2</option>
            <option value="type3">Type 3</option>
          </Form.Control>
        </Form.Group>
        <Button variant="secondary" onClick={this.cancelClickHandler}>
          Cancel
        </Button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.product.products,
});

const mapDispatchToProps = (dispatch) => ({
  onAddProduct: (product) => dispatch(actions.addProduct(product)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithErrorHandler(AddProduct));
