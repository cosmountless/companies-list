import { COMPANY_FORM_TYPES } from '../types'

const initialState = {
  isFetching: false,
  isFetched: false,
};

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case COMPANY_FORM_TYPES.REQUEST:
      return { ...state, isFetching: true, errors: [] };
    case COMPANY_FORM_TYPES.SUCCESS:
      return { ...state, isFetching: false };
    case COMPANY_FORM_TYPES.FAILURE:
      return { ...state, isFetching: false, errors: action.data }
  }
  return state;
};
