import { COMPANIES_TYPES } from '../types'

const initialState = {
  items: [],
  isFetching: false,
  isFetched: false,
};

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case COMPANIES_TYPES.REQUEST:
      return { ...state, isFetching: true };
    case COMPANIES_TYPES.SUCCESS:
      return { ...state, items: action.data, isFetching: false, isFetched: true };
    case COMPANIES_TYPES.FAILURE:
      return { ...state, isFetching: false }
    case COMPANIES_TYPES.PUT:
      const newCompanies = state.items.map(item => {
        let company = item;
        if (company.id === action.data.id) {
          company = action.data;
        }
        return company
      });
      return { ...state, items: newCompanies}
  }
  return state;
};
