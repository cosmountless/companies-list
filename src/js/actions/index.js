import { COMPANY_FORM_TYPES, COMPANIES_TYPES } from '../types'

export const companyFormActions = {
  submitFormAction: (data, history) => ({ type: COMPANY_FORM_TYPES.SUBMIT, data, history }),
  successResponse: data => ({ type: COMPANY_FORM_TYPES.SUCCESS, data }),
  failureResponse: error => ({ type: COMPANY_FORM_TYPES.FAILURE, error }),
};

export const companiesActions = {
  requestCompanies: () => ({ type: COMPANIES_TYPES.REQUEST }),
  successResponse: data => ({ type: COMPANIES_TYPES.SUCCESS, data }),
  failureResponse: error => ({ type: COMPANIES_TYPES.FAILURE, error }),
  putCompany: data => ({ type: COMPANIES_TYPES.PUT, data }),
};
