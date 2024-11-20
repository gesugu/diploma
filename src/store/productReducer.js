import Smartphones from "../components/Smartphones";
import { smartphonesArr } from "../data/smartphonesArr";

const defaultState = {
    items: [],
    smartphonesArr: smartphonesArr,
    infoProduct: null,
}

const ADD_PRODUCT = 'ADD_PRODUCT';
const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
const SET_PRODUCTS = 'SET_PRODUCTS';
const SET_INFO_PRODUCT = 'SET_INFO_PRODUCT';
const GET_ITEMS = 'GET_ITEMS';

export const productReducer = (state = defaultState, action) => {
  switch (action.type) {
      case ADD_PRODUCT:
          return { ...state, smartphonesArr: [...state.smartphonesArr, action.payload] };
      case REMOVE_PRODUCT:
          return {
              ...state,
              smartphonesArr: state.smartphonesArr.filter(
                  smartphone => String(smartphone.id) !== String(action.payload.id)
              )
          };
      case SET_PRODUCTS:
          return { ...state, smartphonesArr: [...state.smartphonesArr, ...action.payload] };
      case SET_INFO_PRODUCT:
          return { ...state, infoProduct: action.payload };
      case GET_ITEMS: 
          return{...state, items: [...state.items,...action.payload]};
      default:
          return state;
  }
};


export const addProductAction = payload => ({ type: ADD_PRODUCT, payload });
export const removeProductAction = payload => ({ type: REMOVE_PRODUCT, payload });
export const setProductAction = payload => ({ type: SET_PRODUCTS, payload });
export const setProductInfoAction = payload => ({ type: SET_INFO_PRODUCT, payload });
export const getItemsAction = payload => ({ type: GET_ITEMS, payload });