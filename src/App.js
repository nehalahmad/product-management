import React, { Component } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Layout from "./hoc/Layout/Layout";
import asyncComponent from "./hoc/asyncComponent/asyncComponent";
import ProductList from "./containers/ProductList/ProductList";

const asyncAddProduct = asyncComponent(() =>
  import("./containers/AddProduct/AddProduct")
);

class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path="/product/add" component={asyncAddProduct} />
        <Route path="/" exact component={ProductList} />
        <Redirect to="/" />
      </Switch>
    );

    return <Layout>{routes}</Layout>;
  }
}

export default withRouter(App);
