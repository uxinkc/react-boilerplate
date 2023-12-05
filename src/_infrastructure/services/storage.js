

export default function storage(){

  const CONTAINER_NAME = 'EIS';
  
  const getStorage = () => {
    return JSON.parse( localStorage.getItem(CONTAINER_NAME) ) || [];
  }
  
  const setStorage = (_payload) => {
    localStorage.setItem(CONTAINER_NAME, JSON.stringify(_payload));
    return getStorage()
  }

  return {
    getStorage,
    setStorage
  }
}