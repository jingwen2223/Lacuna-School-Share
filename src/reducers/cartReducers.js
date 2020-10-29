export const render_items = "render_items";
export const sort_by_size = "sort_by_size";
export const add_items = "add_items";
export const remove_item = "remove_item";

export default function (state = {}, action) {
  switch (action.type) {
    case add_items:
      return { ...state, items: action.payload.cartItems };
    case remove_item:
      return { ...state, items: action.payload.cartItems };

    default:
      return state;
  }
}
