
const BASE_URL = 'https://jsonplaceholder.typicode.com';

import { api } from '@inf/services/api.js';
const { callApi } = api(BASE_URL);

const getData = async (_payload = {}) => {
  _payload.endPoint = '/posts'
  return callApi('get', _payload, 'incidents >> getData()')
}

const saveData = async (_payload = {}) => {
  _payload.endPoint = '/posts'
  return callApi('save', _payload = {}, 'incidents >> saveData()')
}

const removeData = async (_payload = {}) => {
  _payload.endPoint = '/posts'
  return callApi('remove', _payload, 'incidents >> removeData()')
}

export const incidentsService = {
  get: getData,
  save: saveData,
  remove: removeData
}
