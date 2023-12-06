

const URL = '/api/fam-dwc-components-list.json';
const HEADERS = new Headers();
HEADERS.append(
  "Authorization",
  "api_key"
);
const REQ = new Request( URL,
  {
    method: "GET",
    //HEADERS,
    mode: "cors",
    cache: "default"
  }
);

export const homeService = {
  
  isLoaded: false,

  getItems: async (_callback) => {
    const response = await fetch(REQ);
    try{
      let res = await response.json();
      homeService.requestNext( res, _callback, 'getItems' ); 
    } catch(_err){
      console.log( 'getItems' + ' Design SERVICE ERROR', _err)
    }
    
  },

  requestNext: (_res, _callback, _methodCalled) => {
    //console.log('METHOD',_methodCalled);
    if(_res.errors){
      _callback({ status: false, errors: _res.error });
    } else {
      _callback({ status: true, data: _res });
    }
  } 
}

