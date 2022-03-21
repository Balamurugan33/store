import constants from "./constants";

export const getItems = (payload) => ({
  type: constants.GET_ITEMS,
  payload
})

export const getItemsSuccess = (data) => ({
  type: constants.GET_ITEMS_SUCCESS,
  data
})

export const setLoading = (payload) => ({
  type: constants.SET_LOADING,
  payload
})

export const addToCart = (data) => ({
  type: constants.ADD_CART,
  data
})

export const removeFromCart = (data) => ({
  type: constants.REMOVE_CART,
  data
})