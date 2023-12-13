
export function useDatePicker() {

  let id, formatStr, disabledDaysArr, staticPositionBoo, statusFormatStr, disableValidationBoo;

  const store = useStore();
  const isLoaded = computed(() => {
    let boo = store.getters["today/getIsLoaded"];
    if(boo) return boo;
    else return false;
  });

  const initializeDatePicker = (_path) => {
    if(!isLoaded.value){
      let scriptTag = document.createElement('script');
      let scriptPath = _path;
      scriptTag.setAttribute('src', scriptPath);
      document.head.appendChild(scriptTag);
      store.dispatch("today/setLoaded", true);
    }
    
  }

  const getController = () => {
    // this value needs to match the value in the datepicker.js code
    return datePickerController;
  }

  const createDatePicker = (_obj) => {
    let isReady = false;
    let int = setInterval(function () {
      try{
        if ( getController() ) {
          isReady = true;
          clearInterval(int);
          datePicker(_obj);
        }
      }
      catch(err){
        //console.log('catch err >>> ',err)
        isReady = false;
      }
      return isReady;
    }, 500);
  }

  const datePicker = (_obj) => {
    id = _obj.id || 'dp-123-id';
    formatStr = _obj.format || "%m/%d/%Y";
    // create disabled days array
    disabledDaysArr = _obj.disabledDays || [0,0,0,0,0,0,0];
    // sets if the calendar is always open/shown
    staticPositionBoo = _obj.staticPos || false;
    // 
    statusFormatStr = _obj.statusFormat || "%l, %d%S %F %Y";
    // disables automatic validation and reformatting
    disableValidationBoo = _obj.disableFormatting || false;

    let controller = getController();
    // create form elements object
    let formElObj = {};
    let idStr =  id.toString();
    formElObj[idStr] = formatStr.toString();
    // initialize the controller in datepicker.js
    controller.createDatePicker({
      formElements: formElObj,
      disabledDays: disabledDaysArr,
      staticPos: staticPositionBoo,
      statusFormat: statusFormatStr,
      disableFormatting: disableValidationBoo
    });

  }

  const setDateAsToday = (_id, _format=null) => {
    let dp = document.getElementById( _id );
    dp.value = formatDate( Date.now(), (_format || "%m%d%Y"));
  }


  const formatDate = (_date, _format) => {
    let d = new Date(_date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if( _format.includes('%m') ) {
      if (month.length < 2) month = '0' + month;
      if (day.length < 2) day = '0' + day;
    }

    if( _format.includes('%y') ) {
      year = year.slice(-2);
    }

    switch(_format){
      case "%m%d%Y":
        return [month, day, year].join('/');
        break;
      case "%n%j%Y":
        return [month, day, year].join('');
        break;
      case "%m/%d/%Y":
        return [month, day, year].join('/');
        break;
      case "%n/%j/%Y":
        return [month, day, year].join('');
        break;
      case "%m/%d/%y":
        return [month, day, year].join('/');
        break;
      case "%n/%j/%y":
        return [month, day, year].join('/');
        break;
      default:
        return [month, day, year].join('/');
    }
    
  }

  const setRange = (_id, _lowDateStr, _highDateStr) => {
    let controller = getController();
    controller.setRangeLow(_id, _lowDateStr);
    controller.setRangeHigh(_id, _highDateStr);
  }


  return { 
    initializeDatePicker,
    createDatePicker,
    setDateAsToday,
    setRange
  }
}