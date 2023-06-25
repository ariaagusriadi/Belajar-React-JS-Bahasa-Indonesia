import { createStore, legacy_createStore } from "redux";

// reducer
const cartReducer = (
  state = {
    cart: [{id:1, qty:20}],
  },
  action
) => {
  switch (action.type) { // type adalah nama actionya
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload], // payload adalah datanya
      };
    default:
     return state;
  }
};

// store
// const store = createStore(cartReducer); deprecated
const store = legacy_createStore(cartReducer);
console.log("oncreate store: " , store.getState());

// subscribe
store.subscribe(() => {
     console.log("STORE CHANGE : ", store.getState());
})

// dispatch
const action1 = {type: "ADD_TO_CART", payload:{id:2, qty:20}}
store.dispatch(action1);

const action2 = {type: "ADD_TO_CART", payload:{id:21, qty:200}}
store.dispatch(action2);