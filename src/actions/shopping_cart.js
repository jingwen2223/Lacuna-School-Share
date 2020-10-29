export const render_items = "render_items";
export const sort_by_size = "sort_by_size";
export const add_items = "add_items";
export const remove_item = "remove_item";

export const addToCart = (items, product) => (dispatch) => {
  const cartItems = items.slice();
  let productAlreadyInCart = false;

  cartItems.forEach((cp) => {
    if (cp.id === product.id) {
      cp.count += 1;
      productAlreadyInCart = true;
    }
  });

  if (!productAlreadyInCart) {
    cartItems.push({ ...product, count: 1 });
  }
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  dispatch({ type: add_items, payload: { cartItems } });
};

export const removeFromCart = (items, product) => (dispatch) => {
  const cartItems = items.slice().filter((a) => a.id !== product.id);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  dispatch({ type: remove_item, payload: { cartItems } });
};

export const fetchProducts = () => (dispatch) => {
  fetch("http://localhost:3000/artjola")
    .then((res) => res.json())
    .catch((err) =>
      fetch("data.json")
        .then((res) => res.json())
        .then((data) => data.products)
    )
    .then((data) => {
      dispatch({ type: render_items, payload: data });
    });
};

export const filterProducts = (products, size) => (dispatch) => {
  dispatch({
    type: sort_by_size,
    payload: {
      size: size,
      items:
        size === ""
          ? products
          : products.filter(
              (x) => x.availableSizes.indexOf(size.toUpperCase()) >= 0
            ),
    },
  });
};