export const render_items = "render_items"; 
export const sort_by_size = "sort_by_size";
export const add_items = "add_items";
export const remove_item = "remove_item";

const initState = { items: [], filteredItems: [], size: ""};
export default function (state = initState, action) {
  switch (action.type) {
    case render_items:
      return { ...state, items: action.payload, filteredItems: action.payload };
    case sort_by_size:
      return {
        ...state,
        filteredItems: action.payload.items,
        size: action.payload.size,         
      }; 
    default:
      return state;
  }
}
