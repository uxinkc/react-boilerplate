
// Axios
import axios from 'axios';

export function api(_baseUrl = null){

  const BASE_URL = _baseUrl || 'http://localhost:3001'; // <-- SHAME: Need host and port to be dynamic here
  const requestConfig = {
    baseURL: BASE_URL,
    timeout: 4000,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }

  const axiosAPI = axios.create(requestConfig);

  // Object to be filled with API methods
  const apiCaller = {};

  const get = async (_payload) => {
    const abort = new AbortController();
    try{
      return await axiosAPI.get( _payload.endPoint, { signal: abort.signal }, _payload );
    } catch (_err){
      return { errors: [_err.message] }
    }
  }
  apiCaller.get = get;

  const save = async (_payload) => {
    const abort = new AbortController();
    try{
      return await axiosAPI.post( _payload.endPoint, { signal: abort.signal }, _payload );
    } catch (_err){
      return { errors: [_err.message] }
    }
  }
  apiCaller.save = save;

  const remove = async (_payload) => {
    const abort = new AbortController();
    try{
      return await axiosAPI.delete( _payload.endPoint, { signal: abort.signal }, _payload );
    } catch (_err){
      return { errors: [_err.message] }
    }
  }
  apiCaller.remove = remove;


  //--------------//

  // Calls an Async method from the services API
  const callApi = async (_method, _payload = null, _caller = '') => {
    try{
      let response = await apiCaller[_method](_payload);
      return requestNext( response, _caller);
    } catch(_err){
      return requestNext( {errors: [_err]}, _caller + ' ERROR');
    }
  }

  // Used to create a common structure for returned data
  const requestNext = (_res, _caller) => {
    console.log(`METHOD: ${_caller}`, _res);
    if(_res.errors){
      return { status: false, errors: _res.error };
    } else {
      return { status: true, data: _res.data }; // <-- response.data is specific to Axios
    }
  }

  return {
    callApi
  }

}
