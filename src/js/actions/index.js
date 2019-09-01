import { FORM_TYPES, COMPANIES_TYPES } from '../types'

export const companyFormActions = {
  submitFormAction: (data) => ({ type: FORM_TYPES.SUBMIT, data }),
  successResponse: () => ({ type: FORM_TYPES.SUCCESS }),
  failureResponse: (data) => ({ type: FORM_TYPES.FAILURE, data }),
}

export const companiesActions = {
  requestCompanies: () => ({ type: COMPANIES_TYPES.REQUEST }),
  successResponse: (data) => ({ type: COMPANIES_TYPES.SUCCESS, data }),
  failureResponse: (data) => ({ type: COMPANIES_TYPES.FAILURE, data }),
}
