import constants from "./constants";

const initialState = {
  loading: false,
  items: [],
  cartItems: {}
}

export default function(state = initialState, action) {
  switch(action.type) {
    case constants.SET_LOADING:
      return {
        ...state,
        loading: action.data
      }
    case constants.GET_ITEMS_SUCCESS: 
      return {
        ...state,
        items: action.data,
        loading: false
      }
    case constants.ADD_CART: 
      return {
        ...state,
        cartItems: action.data,
        loading: false
      }
    default:
      return {
        ...state
      }
    
  }
}