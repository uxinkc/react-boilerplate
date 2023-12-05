
//const BASE_URL = '';

import { api } from '@inf/services/api.js';
const { callApi } = api();

const getData = async (_payload = {}) => {
  _payload.endPoint = '/api/eis-navigation.json'
  return callApi('get', _payload, 'navigation >> getData()')
}


export const navigationService = {
  get: getData
}
