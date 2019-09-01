import MockAdapter from 'axios-mock-adapter'

const requestCompaniesData = [
  {
    id: 1,
    name: 'Company name',
    ogrn: '12332221123322',
    type: 'ИП',
    registration_date: '22.01.2018',
    is_active: true,
  },
  {
    id: 2,
    name: 'Company name',
    ogrn: '12332221123322',
    type: 'ООО',
    registration_date: '22.01.2017',
    is_active: false,
  },
  {
    id: 3,
    name: 'Company name',
    ogrn: '12332221123322',
    type: 'ИП',
    registration_date: '22.01.1998',
    is_active: true,
  },
];

const apiMock = (api) => {
  const mock = new MockAdapter(api._axiosInstance, { delayResponse: 1000 });
  mock.onGet('api/companies').reply(200, requestCompaniesData);
  mock.onPut('api/company').reply(({ data }) => {
    let response;
    try {
      response = [200, JSON.parse(data)]
    } catch (e) {
      response = [200, {}]
    }
    return response;
  });
};

export default apiMock