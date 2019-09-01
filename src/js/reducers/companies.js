import { COMPANIES_TYPES } from '../types'

const initialState = {
  items: [],
  isFetching: false,
};

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case COMPANIES_TYPES.REQUEST:
      return { ...state, isFetching: true };
    case COMPANIES_TYPES.SUCCESS:
      return { ...state, items: action.data, isFetching: false };
    case COMPANIES_TYPES.FAILURE:
      return { ...state, isFetching: false }
  }
  return state;
}