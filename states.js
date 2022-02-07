const sum = (items, key) => {
  let sum = 0;
  items.forEach((element) => {
    sum += element[key];
  });
  return sum;
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE_ITEM":
      state = {
        ...state,
        items: [...state.items, action.payload],
      };
      return state;

    case "UPDATE_ITEM":
      const updatedItems = state.items.map((item) => {
        if (item.id === action.payload.id) {
          item.ppg = action.payload.ppg;
          item.weight = action.payload.weight;
          item.total = action.payload.total;
        }
        return item;
      });
      state = {
        ...state,
        items: updatedItems,
        ppgSum: sum(updatedItems, "ppg"),
        weightSum: sum(updatedItems, "weight"),
        totalSum: sum(updatedItems, "total"),
      };
      return state;
    case "RESET_ITEMS":
      const removedItems = state.items.map((item) => {
        item.ppg = 0;
        item.weight = 0;
        item.total = 0;
        return item;
      });
      state = {
        ...state,
        items: removedItems,
        ppgSum: 0,
        weightSum: 0,
        totalSum: 0,
        reset: true,
      };
      return state;
    case "CHANGE_RESET":
      state = { ...state, reset: false };
      return state;
    default:
      return state;
  }
};
const state = {
  items: [],
  ppgSum: 0,
  weightSum: 0,
  totalSum: 0,
  reset: false,
};
export { state, reducer };
