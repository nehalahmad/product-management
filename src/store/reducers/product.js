import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  products: [
    {
      name: "lorem 1",
      category: "cat1",
      mfgDate: "21-07-2020",
      type: "type1",
      specifications: [],
      id: 1,
    },
    {
      name: "lorem 2",
      category: "cat2",
      mfgDate: "21-07-2020",
      type: "type2",
      specifications: [],
      id: 2,
    },
    {
      name: "lorem 3",
      category: "cat3",
      mfgDate: "21-07-2020",
      type: "type3",
      specifications: [],
      id: 3,
    },
    {
      name: "lorem 4",
      category: "cat1",
      mfgDate: "21-07-2020",
      type: "type1",
      specifications: [],
      id: 4,
    },
    {
      name: "lroem 5",
      category: "cat2",
      mfgDate: "21-07-2020",
      type: "type2",
      specifications: [],
      id: 5,
    },
    {
      name: "lorem 6",
      category: "cat3",
      mfgDate: "21-07-2020",
      type: "type3",
      specifications: [],
      id: 6,
    },
    {
      name: "lorem 7",
      category: "cat1",
      mfgDate: "21-07-2020",
      type: "type1",
      specifications: [],
      id: 7,
    },
    {
      name: "lorem 8",
      category: "cat2",
      mfgDate: "21-07-2020",
      type: "type2",
      specifications: [],
      id: 8,
    },
    {
      name: "lorem 9",
      category: "cat3",
      mfgDate: "21-07-2020",
      type: "type3",
      specifications: [],
      id: 9,
    },
    {
      name: "lorem 10",
      category: "cat1",
      mfgDate: "21-07-2020",
      type: "type1",
      specifications: [],
      id: 10,
    },
    {
      name: "lorem 11",
      category: "cat2",
      mfgDate: "21-07-2020",
      type: "type2",
      specifications: [],
      id: 11,
    },
    {
      name: "lorem 12",
      category: "cat3",
      mfgDate: "21-07-2020",
      type: "type3",
      specifications: [],
      id: 12,
    },
    {
      name: "lorem 13",
      category: "cat2",
      mfgDate: "21-07-2020",
      type: "type2",
      specifications: [],
      id: 13,
    },
  ],
  filteredProducts: [],
  loading: false,
  error: null,
};

const addProduct = (state, action) => {
  let prdouctAlreadyExists = !!state.products.find(
    (product) => product.name === action.product.name
  );
  if (prdouctAlreadyExists) {
    return updateObject(state, { error: "Product already exists!" });
  }

  let lastProductId = 0;
  if (state.products && state.products.length) {
    lastProductId = state.products[state.products.length - 1].id;
  }

  const newProduct = updateObject(action.product, { id: lastProductId + 1 });
  return updateObject(state, {
    loading: false,
    error: null,
    products: state.products.concat(newProduct),
  });
};

const getProducts = (state, action) => {
  let filteredProducts = JSON.parse(JSON.stringify(state.products));

  if (action.searchKeyword.length) {
    filteredProducts = state.products.filter(
      (product) =>
        product.name.includes(action.searchKeyword) ||
        product.category.includes(action.searchKeyword) ||
        product.id === action.searchKeyword ||
        product.type.includes(action.searchKeyword)
    );
  }

  return updateObject(state, {
    filteredProducts,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PRODUCT:
      return addProduct(state, action);
    case actionTypes.GET_PRODUCTS:
      return getProducts(state, action);
    case actionTypes.RESET_STORE:
      return updateObject(state, { error: null, loading: false });
    default:
      return state;
  }
};

export default reducer;
