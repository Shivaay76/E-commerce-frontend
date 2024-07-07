const URL = import.meta.env.VITE_BASE_URL ;
const BASE_URL = URL + '/api/v1/';

// Product endpoints
export const GET_ALL_PRODUCTS = BASE_URL + 'products';

export const GET_PRODUCT = BASE_URL + 'products/' // + ":id"
export const ADD_PRODUCT = BASE_URL + 'products/add';

export const UPDATE_PRODUCT = BASE_URL + 'products/update/'; //+ ":id"
export const DELETE_PRODUCT = BASE_URL + 'products/'; // + ":id"

// Cart endpoints
export const GET_CART = BASE_URL + 'cart/';

export const ADD_ITEM_TO_CART = BASE_URL + 'cart/';
export const REMOVE_ITEM_FROM_CART = BASE_URL + 'cart/'; // + ":id"



// Authentication endpoints
export const LOGIN = BASE_URL + 'auth/login';

export const SIGNUP = BASE_URL + 'auth/signup';