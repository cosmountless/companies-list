import MockAdapter from 'axios-mock-adapter'

const requestCompaniesData = [
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
  },
];

const apiMock = (api) => {
  const mock = new MockAdapter(api._axiosInstance, { delayResponse: 1000 });
  mock.onGet('api/companies').reply(200, requestCompaniesData);
  mock.onPut('api/company').reply(200);
};

export default apiMock