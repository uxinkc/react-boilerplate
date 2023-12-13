
//import { useDatePicker } from '@ui/hooks/useDatePicker.js';
import { useState, useEffect } from 'react';

const DatePicker = ({LABEL, USE_TODAY_BTN, USE_TODAY_LABEL, EMIT_HANDLER}) => {

  /* const {
    initializeDatePicker,
    createDatePicker,
    setDateAsToday,
    setRange } = useDatePicker(); */

  //initializeDatePicker( 'https://usda-fpac.github.io/fds-style/js/vendor/fds-date-picker.js');

  useEffect(()=>{

  },[])

  const TEMPLATE = (
    <>
      <div className="fam-level fam-level--align-top">
          
        <div className="fam-field fam-field">
          <label className="fam-field__label" htmlFor="datePickerOneId">{ LABEL } <span className="fam-field__label-desc eis-field-required">Req.</span></label>
          <input placeholder="mm/dd/yyyy" className="fam-input fam-field__item" id="datePickerOneId" aria-describedby="datePickerOneID__help" aria-required="true" name="datePickerOneId" type="text" />
        </div>

        { USE_TODAY_BTN && <button onClick={()=> '///setDateAsToday( datePickerOneId )///'} className="eis-field--datepicker-today-btn fam-btn fam-btn--secondary" type="button">
          <svg className="fam-icon fam-icon--size-2" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"></path></svg>
          { USE_TODAY_LABEL }
        </button> }
        
      </div>
    </>
  );
  return TEMPLATE;
}

export default DatePicker;