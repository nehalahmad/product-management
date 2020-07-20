import React, { Component } from "react";
import { connect } from "react-redux";
import { Pagination, Row, Col, CardColumns, Button } from "react-bootstrap";

import * as actions from "../../store/actions";

import WithErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

class ProductList extends Component {
  constructor(props) {
    super(props);

    this.addProductClickHandler = this.addProductClickHandler.bind(this);
  }

  addProductClickHandler() {
    this.props.history.push("/product/add");
  }

  render() {
    return (
      <Row>
        <Col sm="12">
          <Button onClick={this.addProductClickHandler}>Add Product</Button>
        </Col>
        <Col sm="12">Product List here</Col>
      </Row>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.product.products,
});

const mapDispatchToProps = (dispatch) => ({
  onProductsGet: (slug) => dispatch(actions.getProducts(slug)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithErrorHandler(ProductList));
