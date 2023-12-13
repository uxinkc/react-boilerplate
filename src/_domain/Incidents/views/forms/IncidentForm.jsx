
import DatePicker from '@ui/components/date-picker/DatePicker.jsx';
import { useState, useEffect } from 'react'

const IncidentsForm = (_props) => {

  const [incidentNumber, setIncidentNumber] = useState('');
  
  let incName = '';
  let incEventType = '';
  let incState = '';
  let incJurisdiction = '';
  let incCountryCode = 'US';
  let incUnitId = '';
  let incNumberOnly = '';

  const updateIncidentNumber = () => {
    let v1 = incCountryCode = document.getElementById('country-code-id').value;
    let v2 = incUnitId = document.getElementById('unit-id-id').value;
    let v3 = incNumberOnly = document.getElementById('incident-number-only-id').value;
    setIncidentNumber(v1+'-'+v2+'-'+v3);
  }

  const setDateAsToday = () => {

  }

  const TEMPLATE = (
    <>
      <div className="fam-grid">
        <div className="fam-grid__1/1 fam-grid__1/3@l">

          <div className="fam-field">
            <label className="fam-field__label" htmlFor="incident-name-id">Incident Name <span className="fam-field__label-desc eis-field-required">Req.</span></label>
            <input id="incident-name-id" defaultValue={incName} className="fam-input fam-field__item" name="incident-name" aria-describedby="incident-name-id-help" aria-required="true" type="text" />
          </div>

        </div>
        <div className="fam-grid__1/1 fam-grid__1/3@l">

          <div className="fam-field">
            <label className="fam-field__label" htmlFor="incident-event-type-id">Event Type <span className="fam-field__label-desc eis-field-required">Req.</span></label>
            <select id="incident-event-type-id" defaultValue={incEventType} className="fam-select fam-field__item"  aria-describedby="incident-event-type-id" aria-required="true" name="incident-event-type">
              <option value="Option A">WF</option>
              <option value="Option B">WF</option>
              <option value="Option C">WF</option>
              <option value="Option D">WF</option>
              <option value="Option E">WF</option>
            </select>
          </div>
          
        </div>
        <div className="fam-grid__1/1 fam-grid__1/3@l">

          <div className="fam-level fam-level--grow-auto fam-level--gutter-m">
            <div className="fam-field">
              <label className="fam-field__label" htmlFor="incident-event-type-id">State <span className="fam-field__label-desc eis-field-required">Req.</span></label>
              <select id="incident-event-type-id" defaultValue={incState} className="fam-select fam-field__item" aria-describedby="incident-event-type-id" aria-required="true" name="incident-event-type">
                <option value="AL">AL</option>
                <option value="AK">AK</option>
                <option value="AZ">AZ</option>
                <option value="AR">AR</option>
                <option value="CA">CA</option>
              </select>
            </div>

            <div className="fam-field">
              <label className="fam-field__label" htmlFor="incident-jurisdiction-id">Jurisdiction <span className="fam-field__label-desc eis-field-required">Req.</span></label>
              <select id="incident-jurisdiction-id" defaultValue={incJurisdiction} className="fam-select fam-field__item" aria-describedby="incident-jurisdiction-id" aria-required="true" name="incident-jurisdiction">
                <option value="AL">USFS</option>
                <option value="AK">USFS</option>
                <option value="AZ">USFS</option>
                <option value="AR">USFS</option>
                <option value="CA">USFS</option>
              </select>
            </div>

          </div>

          
        </div>
      </div>

      <div className="fam-box fam-m-t--s">
        <div className="fam-m-b--s">
          <span className="fam-text-size--4">Incident Number:</span> <span className="fam-text-size--4">
            <mark><strong>{ incidentNumber }</strong></mark>
          </span>
        </div>
        
        <div className="fam-grid">
          <div className="fam-grid__1/1 fam-grid__1/3@l">

            <div className="fam-field">
              <label className="fam-field__label" htmlFor="country-code-id">Country Code <span className="fam-field__label-desc eis-field-required">Req.</span></label>
              <input id="country-code-id" value={incCountryCode} onChange={()=>updateIncidentNumber()} className="fam-input fam-field__item"  readnly="" name="country-code" aria-describedby="country-code-id-help" aria-required="true" type="text" />
            </div>

          </div>
          <div className="fam-grid__1/1 fam-grid__1/3@l">

            <div className="fam-field">
              <label className="fam-field__label" htmlFor="unit-id-id">Unit ID <span className="fam-field__label-desc eis-field-required">Req.</span></label>
              <select id="unit-id-id" onChange={()=>updateIncidentNumber()} className="fam-select fam-field__item" aria-describedby="unit-id-id" aria-required="true" name="unit-id">
                <option value="">Select Unit ID</option>
                <option value="MT-117">MT-117</option>
                <option value="CA-304">CA-304</option>
                <option value="UT-104">UT-104</option>
                <option value="OR-098">OR-098</option>
                <option value="UT-121">UT-121</option>
              </select>
            </div>
            
          </div>
          <div className="fam-grid__1/1 fam-grid__1/3@l">

            <div className="fam-field">
              <label className="fam-field__label" htmlFor="incident-number-only-id">Number <span className="fam-field__label-desc eis-field-required">Req.</span></label>
              <input id="incident-number-only-id" defaultValue={incNumberOnly} onChange={()=>updateIncidentNumber()} className="fam-input fam-field__item" name="incident-number-only" aria-describedby="incident-number-only-id-help" aria-required="true" type="text" />
            </div>
            
          </div>
        </div>                                                                    

      </div>

      <div className="fam-m-t--s">

        <div className="fam-level fam-level__auto-grow fam-level--gutter-l">
          <DatePicker
            LABEL="Start Date"
            USE_TODAY_BTN={true}
            USE_TODAY_LABEL={''}
            EMIT_HANDLER={()=>{}}
          />
          <DatePicker
            LABEL="End Date"
            USE_TODAY_BTN={true}
            USE_TODAY_LABEL={''}
            EMIT_HANDLER={()=>{}}
          />
        </div>

      </div>

      <div className="fam-m-t--s">

        <div className="fam-field fam-field--fill">
          <label className="fam-field__label" htmlFor="incident-description-id">Incident Description </label>
          <textarea className="fam-textarea fam-field__item fam-field__item--" placeholder="" id="incident-description-id" aria-describedby="incident-description-id-help" aria-required="true" name="incident-description"></textarea>
        </div>

      </div>

      <div className="fam-m-t--m">

        <button className="fam-btn fam-btn--primary">
          <svg className="fam-icon fam-icon--size-1" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"/></svg>
          Save Incident
        </button>

      </div>

      

    </>
  );
  return TEMPLATE;
}

export default IncidentsForm;