
import { useState, useEffect } from 'react'

const AgencyForm = (_props) => {

  //const [incidentNumber, setIncidentNumber] = useState('');
  
  let agencyName, agencyDesc, agencyGroup, rateGroup;

  const TEMPLATE = (
    <>
      <div className="fam-grid">
        <div className="fam-grid__1/1 fam-grid__1/3@l">

          <div className="fam-field">
            <label className="fam-field__label" htmlFor="agency-name-id">Agency Name <span className="fam-field__label-desc eis-field-required">Req.</span></label>
            <input id="agency-name-id" defaultValue={agencyName} className="fam-input fam-field__item" name="agency-name" aria-describedby="agency-name-id-help" aria-required="true" type="text" />
          </div>

        </div>
        <div className="fam-grid__1/1 fam-grid__1/3@l">

          <div className="fam-field">
            <label className="fam-field__label" htmlFor="agency-desc-id">Agency Description <span className="fam-field__label-desc eis-field-required">Req.</span></label>
            <input id="agency-desc-id" defaultValue={agencyDesc} className="fam-input fam-field__item" name="agency-desc" aria-describedby="agency-desc-id-help" aria-required="true" type="text" />
          </div>
          
        </div>
        <div className="fam-grid__1/1 fam-grid__1/3@l">

          <div className="fam-level fam-level--grow-auto fam-level--gutter-m">
            <div className="fam-field">
              <label className="fam-field__label" htmlFor="incident-event-type-id">Agency Group <span className="fam-field__label-desc eis-field-required">Req.</span></label>
              <select id="incident-event-type-id" defaultValue={agencyGroup} className="fam-select fam-field__item" aria-describedby="incident-event-type-id" aria-required="true" name="incident-event-type">
                <option value="AL">AL</option>
                <option value="AK">AK</option>
                <option value="AZ">AZ</option>
                <option value="AR">AR</option>
                <option value="CA">CA</option>
              </select>
            </div>

            <div className="fam-field">
              <label className="fam-field__label" htmlFor="incident-jurisdiction-id">Rate Group <span className="fam-field__label-desc eis-field-required">Req.</span></label>
              <select id="incident-jurisdiction-id" defaultValue={rateGroup} className="fam-select fam-field__item" aria-describedby="incident-jurisdiction-id" aria-required="true" name="incident-jurisdiction">
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

      <div className="fam-m-t--m">

        <button className="fam-btn fam-btn--primary">
          <svg className="fam-icon fam-icon--size-1" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"/></svg>
          Save Agency
        </button>

      </div>

      

    </>
  );
  return TEMPLATE;
}

export default AgencyForm;