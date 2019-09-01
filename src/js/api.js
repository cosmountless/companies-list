import apisauce from 'apisauce'

const BASE_URL = '/api/';

const createApi = () => {
  const api = apisauce.create({
    baseURL: BASE_URL,
    headers: {
      'Accept': 'application/json',
    },
    timeout: 20000,
  });
  const getCompanies = () => api.get('companies');
  const putCompany = (data) => api.put('company', data);
  return {
    getCompanies,
    putCompany,
    _axiosInstance: api.axiosInstance,
  }
}

export default createApi
