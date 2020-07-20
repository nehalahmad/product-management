import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  products: [],
  product: 0,
  loading: false,
  error: null,
  limit: 10,
  offset: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PRODUCT:
      return updateObject(state, {
        products: state.products.concat(action.product),
      });
    case actionTypes.ADD_PRODUCT_START:
      return updateObject(state, { loading: true });
    case actionTypes.ADD_PRODUCT_SUCCESS:
      return updateObject(state, { loading: false });
    case actionTypes.ADD_PRODUCT_FAIL:
      return updateObject(state, { loading: false, error: action.error });
    default:
      return state;
  }
};

export default reducer;
