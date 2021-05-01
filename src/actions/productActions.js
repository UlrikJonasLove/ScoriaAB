import {
  FETCH_PRODUCTS,
  FILTER_PRODUCTS,
  ORDER_PRODUCTS_BY_PRICE,
} from "./types";

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const fetchProducts = () => (dispatch) => {
  fetch("http://localhost:8000/products")
    .then(handleErrors)
    .then((res = console.log("OK")) => res.json())
    .catch((err) =>
      fetch("db.json")
        .then((res) => res.json())
        .then((data) => data.products)
    )
    .then((data) => {
      dispatch({ type: FETCH_PRODUCTS, payload: data });
    });
};

export const filterProducts = (products, filter) => (dispatch) => {
  dispatch({
    type: FILTER_PRODUCTS,
    payload: {
      filter: filter,
      items:
        filter === ""
          ? products
          : products.filter(
              (x) => x.available.indexOf(filter.toUpperCase()) >= 0
            ),
    },
  });
};

export const sortProducts = (items, sort) => (dispatch) => {
  const products = items.slice();
  if (sort !== "") {
    products.sort((a, b) =>
      sort === "lowestprice"
        ? a.price > b.price
          ? 1
          : -1
        : a.price < b.price
        ? 1
        : -1
    );
  } else {
    products.sort((a, b) => (a.id > b.id ? 1 : -1));
  }
  dispatch({
    type: ORDER_PRODUCTS_BY_PRICE,
    payload: {
      sort: sort,
      items: products,
    },
  });
};
