const initialState = [
  {
    id: 1,
    name: 'Company name',
    ogrn: 123123123,
    type: 'ИП',
    registration_date: '22.01.18',
    is_active: true,
  },
  {
    id: 2,
    name: 'Company name',
    ogrn: 123123123,
    type: 'ООО',
    registration_date: '22.01.18',
    is_active: false,
  },
  {
    id: 3,
    name: 'Company name',
    ogrn: 123123123,
    type: 'ИП',
    registration_date: '22.01.18',
    is_active: true,
  }
];

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_COMPANY_DATA':
      const newCompanies = state.companies.map(company => {
        if (company.id === action.data.id) {
          company = company.data;
        }
        return company;
      });
      return { ...state, newCompanies }
  }
  return state
}