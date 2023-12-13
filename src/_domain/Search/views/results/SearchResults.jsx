
import { useEffect } from 'react';

import { useSelector, useDispatch } from "react-redux";
import { toggleExpanded } from "@dom/Search/store/searchResults.slice";

const SearchResults = ( { emitCheckSelected, USE_BORDER_SCROLL, BORDER_SCROLL_HEIGHT, USE_EXPAND, EXPANDED } ) => {

  const dispatch = useDispatch();
  const isExpanded = useSelector((_state) => _state.searchResults.expanded);


  const setExpanded = (_val) => {
    dispatch(toggleExpanded(_val));
  }

  useEffect(()=>{
    setExpanded(EXPANDED);
  },[])

  const checkForSelected = () => {
    let isSelected = false;
    let cbs = document.querySelectorAll('.fam-checkbox--solo');
    cbs.forEach((cb)=>{
      console.log('cb',cb.checked)
      if(cb.checked) isSelected = true;
    })
    emitCheckSelected(isSelected)
  }

  const TEMPLATE = (
    <>
      <h2 className="sr-only">Search Results</h2>
      
      <div className="">
        <div className="fam-level@l fam-level--justify-between fam-level--align-bottom">
          <div className="fam-level fam-level--grow-auto fam-m-b--s fam-m-b--none@l">
            {/* <button className="fam-btn fam-btn--secondary fam-btn--fill fam-btn--small" type="button" disabled="">
              <svg className="fam-icon fam-icon--size-1" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></svg> <span className="fam-sr-only@s-only fam-sr-only@m-only fam-sr-only@l-only">Edit</span>
            </button> */}
            <button className="fam-btn fam-btn--secondary fam-btn--fill fam-btn--small" type="button">
              <svg className="fam-icon fam-icon--size-1" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"></path></svg> <span className="fam-sr-only@s-only fam-sr-only@m-only fam-sr-only@l-only">Add Workspace</span>
            </button>
            <button className="fam-btn fam-btn--secondary fam-btn--fill fam-btn--small" type="button">
              <svg className="fam-icon fam-icon--size-1" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 6h-8l-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6 12v-3h-4v-4h4V8l5 5-5 5z"></path></svg> <span className="fam-sr-only@s-only fam-sr-only@m-only fam-sr-only@l-only">Action</span>
            </button>

          </div>

          <div className="fam-show@xl-only fam-level fam-level--grow-auto">
            <div className={USE_EXPAND ? '' : 'fam-hide'}>

              <span className="fam-level fam-level--inline">
                <label htmlFor="expand-table-btn-id">Expanded</label>
                <label className="fam-switch">
                  <input checked={ isExpanded } onChange={()=> setExpanded(!isExpanded) } type="checkbox" className="fam-switch__checkbox" id="expand-table-btn-id" name="expand-table-btn-id"/>
                  <span className="fam-switch__track"></span>
                </label>
              </span>
            
            </div>
          </div>

        </div>
      </div>
      
      <div className="fam-table-container--scroll fam-border--xxs" style={ USE_BORDER_SCROLL? {"--custom-table-height": BORDER_SCROLL_HEIGHT } : {"":""}}>
        <table className="fam-table fam-table--borderless fam-table--responsive">
          <caption className="sr-only">Caption that is hidden visually, but read by screenreader</caption>
          <thead>
            <tr>
              <th className="fam-table__th--sticky fam-table__th--select" scope="col">
                <span>
                  <input className="fam-checkbox fam-checkbox--solo" data-behavior="select-table-all" id="incidents__select-all" type="checkbox" name="inpections__select-all" value="Select all"/>
                  <label htmlFor="incidents__select-all" title="Select all"><span className="sr-only">Select all</span></label>
                </span>
              </th>
              <th className="fam-table__th--sticky" scope="col">Name</th>
              <th className="fam-table__th--sticky" scope="col">Number</th>
              <th className="fam-table__th--sticky" scope="col">Event Type</th>
              { isExpanded && <th className="fam-table__th--sticky" scope="col">Start Date</th> }
              { isExpanded && <th className="fam-table__th--sticky" scope="col">Jurisdiction</th> }
              { isExpanded && <th className="fam-table__th--sticky" scope="col"> 
                <a className="fam-btn fam-btn--plain" href="#" title="Accounting Code"><strong>Code</strong></a>
              </th> }
              { isExpanded && <th className="fam-table__th--sticky" scope="col">
                <a className="fam-btn fam-btn--plain" href="#" title="Accounting Code Agency">
                  <strong>Agency</strong>
                </a>
              </th> }
            </tr>
          </thead>
          <tbody>
          <tr>
              <td aria-label="Select">
                <span>
                  <input onChange={()=>checkForSelected()} className="fam-checkbox fam-checkbox--solo" data-behavior="select-table-row" id="i-1" type="checkbox" name="inpections__select-inspection--3" value="10"/>
                  <label htmlFor="i-1"><span className="sr-only">Select this row</span></label>
                </span>
              </td>
              <td aria-label="Incident Name">Test Incident 2022</td>
              <td aria-label="Incident Number">US-MO-MTF-4534534534</td>
              <td aria-label="Event Type">FI - WILDFIRE</td>
              { isExpanded && <td aria-label="Start Date">11/01/2022</td> }
              { isExpanded && <td aria-label="Jurisdiction">USFS</td> }
              { isExpanded && <td aria-label="Accounting Code">P222</td> }
              { isExpanded && <td aria-label="Accounting Code Agency">FED</td> }
            </tr>
            <tr>
              <td aria-label="Select">
                <span>
                  <input onChange={()=>checkForSelected()} className="fam-checkbox fam-checkbox--solo" data-behavior="select-table-row" id="i-2" type="checkbox" name="inpections__select-inspection--3" value="10"/>
                  <label htmlFor="i-2"><span className="sr-only">Select this row</span></label>
                </span>
              </td>
              <td aria-label="Incident Name">Test Incident 2022</td>
              <td aria-label="Incident Number">US-MO-MTF-4534534534</td>
              <td aria-label="Event Type">FI - WILDFIRE</td>
              { isExpanded && <td aria-label="Start Date">11/01/2022</td> }
              { isExpanded && <td aria-label="Jurisdiction">USFS</td> }
              { isExpanded && <td aria-label="Accounting Code">P222</td> }
              { isExpanded && <td aria-label="Accounting Code Agency">FED</td> }
            </tr>
            <tr>
              <td aria-label="Select">
                <span>
                  <input onChange={()=>checkForSelected()} className="fam-checkbox fam-checkbox--solo" data-behavior="select-table-row" id="i-3" type="checkbox" name="inpections__select-inspection--3" value="10"/>
                  <label htmlFor="i-3"><span className="sr-only">Select this row</span></label>
                </span>
              </td>
              <td aria-label="Incident Name">Test Incident 2022</td>
              <td aria-label="Incident Number">US-MO-MTF-4534534534</td>
              <td aria-label="Event Type">FI - WILDFIRE</td>
              { isExpanded && <td aria-label="Start Date">11/01/2022</td> }
              { isExpanded && <td aria-label="Jurisdiction">USFS</td> }
              { isExpanded && <td aria-label="Accounting Code">P222</td> }
              { isExpanded && <td aria-label="Accounting Code Agency">FED</td> }
            </tr>
            <tr>
              <td aria-label="Select">
                <span>
                  <input onChange={()=>checkForSelected()} className="fam-checkbox fam-checkbox--solo" data-behavior="select-table-row" id="i-4" type="checkbox" name="inpections__select-inspection--3" value="10"/>
                  <label htmlFor="i-4"><span className="sr-only">Select this row</span></label>
                </span>
              </td>
              <td aria-label="Incident Name">Test Incident 2022</td>
              <td aria-label="Incident Number">US-MO-MTF-4534534534</td>
              <td aria-label="Event Type">FI - WILDFIRE</td>
              { isExpanded && <td aria-label="Start Date">11/01/2022</td> }
              { isExpanded && <td aria-label="Jurisdiction">USFS</td> }
              { isExpanded && <td aria-label="Accounting Code">P222</td> }
              { isExpanded && <td aria-label="Accounting Code Agency">FED</td> }
            </tr>
            <tr>
              <td aria-label="Select">
                <span>
                  <input onChange={()=>checkForSelected()} className="fam-checkbox fam-checkbox--solo" data-behavior="select-table-row" id="i-5" type="checkbox" name="inpections__select-inspection--3" value="10"/>
                  <label htmlFor="i-5"><span className="sr-only">Select this row</span></label>
                </span>
              </td>
              <td aria-label="Incident Name">Test Incident 2022</td>
              <td aria-label="Incident Number">US-MO-MTF-4534534534</td>
              <td aria-label="Event Type">FI - WILDFIRE</td>
              { isExpanded && <td aria-label="Start Date">11/01/2022</td> }
              { isExpanded && <td aria-label="Jurisdiction">USFS</td> }
              { isExpanded && <td aria-label="Accounting Code">P222</td> }
              { isExpanded && <td aria-label="Accounting Code Agency">FED</td> }
            </tr>
            <tr>
              <td aria-label="Select">
                <span>
                  <input onChange={()=>checkForSelected()} className="fam-checkbox fam-checkbox--solo" data-behavior="select-table-row" id="inpections__select-inspection--3" type="checkbox" name="inpections__select-inspection--3" value="10"/>
                  <label htmlFor="inpections__select-inspection--3"><span className="sr-only">Select this row</span></label>
                </span>
              </td>
              <td aria-label="Incident Name">Test Incident 2022</td>
              <td aria-label="Incident Number">US-MO-MTF-4534534534</td>
              <td aria-label="Event Type">FI - WILDFIRE</td>
              { isExpanded && <td aria-label="Start Date">11/01/2022</td> }
              { isExpanded && <td aria-label="Jurisdiction">USFS</td> }
              { isExpanded && <td aria-label="Accounting Code">P222</td> }
              { isExpanded && <td aria-label="Accounting Code Agency">FED</td> }
            </tr>
            <tr>
              <td aria-label="Select">
                <span>
                  <input onChange={()=>checkForSelected()} className="fam-checkbox fam-checkbox--solo" data-behavior="select-table-row" id="inpections__select-inspection--3" type="checkbox" name="inpections__select-inspection--3" value="10"/>
                  <label htmlFor="inpections__select-inspection--3"><span className="sr-only">Select this row</span></label>
                </span>
              </td>
              <td aria-label="Incident Name">Test Incident 2022</td>
              <td aria-label="Incident Number">US-MO-MTF-4534534534</td>
              <td aria-label="Event Type">FI - WILDFIRE</td>
              { isExpanded && <td aria-label="Start Date">11/01/2022</td> }
              { isExpanded && <td aria-label="Jurisdiction">USFS</td> }
              { isExpanded && <td aria-label="Accounting Code">P222</td> }
              { isExpanded && <td aria-label="Accounting Code Agency">FED</td> }
            </tr>
            <tr>
              <td aria-label="Select">
                <span>
                  <input onChange={()=>checkForSelected()} className="fam-checkbox fam-checkbox--solo" data-behavior="select-table-row" id="inpections__select-inspection--3" type="checkbox" name="inpections__select-inspection--3" value="10"/>
                  <label htmlFor="inpections__select-inspection--3"><span className="sr-only">Select this row</span></label>
                </span>
              </td>
              <td aria-label="Incident Name">Test Incident 2022</td>
              <td aria-label="Incident Number">US-MO-MTF-4534534534</td>
              <td aria-label="Event Type">FI - WILDFIRE</td>
              { isExpanded && <td aria-label="Start Date">11/01/2022</td> }
              { isExpanded && <td aria-label="Jurisdiction">USFS</td> }
              { isExpanded && <td aria-label="Accounting Code">P222</td> }
              { isExpanded && <td aria-label="Accounting Code Agency">FED</td> }
            </tr>
            <tr>
              <td aria-label="Select">
                <span>
                  <input onChange={()=>checkForSelected()} className="fam-checkbox fam-checkbox--solo" data-behavior="select-table-row" id="inpections__select-inspection--3" type="checkbox" name="inpections__select-inspection--3" value="10"/>
                  <label htmlFor="inpections__select-inspection--3"><span className="sr-only">Select this row</span></label>
                </span>
              </td>
              <td aria-label="Incident Name">Test Incident 2022</td>
              <td aria-label="Incident Number">US-MO-MTF-4534534534</td>
              <td aria-label="Event Type">FI - WILDFIRE</td>
              { isExpanded && <td aria-label="Start Date">11/01/2022</td> }
              { isExpanded && <td aria-label="Jurisdiction">USFS</td> }
              { isExpanded && <td aria-label="Accounting Code">P222</td> }
              { isExpanded && <td aria-label="Accounting Code Agency">FED</td> }
            </tr>
            <tr>
              <td aria-label="Select">
                <span>
                  <input onChange={()=>checkForSelected()} className="fam-checkbox fam-checkbox--solo" data-behavior="select-table-row" id="inpections__select-inspection--3" type="checkbox" name="inpections__select-inspection--3" value="10"/>
                  <label htmlFor="inpections__select-inspection--3"><span className="sr-only">Select this row</span></label>
                </span>
              </td>
              <td aria-label="Incident Name">Test Incident 2022</td>
              <td aria-label="Incident Number">US-MO-MTF-4534534534</td>
              <td aria-label="Event Type">FI - WILDFIRE</td>
              { isExpanded && <td aria-label="Start Date">11/01/2022</td> }
              { isExpanded && <td aria-label="Jurisdiction">USFS</td> }
              { isExpanded && <td aria-label="Accounting Code">P222</td> }
              { isExpanded && <td aria-label="Accounting Code Agency">FED</td> }
            </tr>
            <tr>
              <td aria-label="Select">
                <span>
                  <input onChange={()=>checkForSelected()} className="fam-checkbox fam-checkbox--solo" data-behavior="select-table-row" id="inpections__select-inspection--3" type="checkbox" name="inpections__select-inspection--3" value="10"/>
                  <label htmlFor="inpections__select-inspection--3"><span className="sr-only">Select this row</span></label>
                </span>
              </td>
              <td aria-label="Incident Name">Test Incident 2022</td>
              <td aria-label="Incident Number">US-MO-MTF-4534534534</td>
              <td aria-label="Event Type">FI - WILDFIRE</td>
              { isExpanded && <td aria-label="Start Date">11/01/2022</td> }
              { isExpanded && <td aria-label="Jurisdiction">USFS</td> }
              { isExpanded && <td aria-label="Accounting Code">P222</td> }
              { isExpanded && <td aria-label="Accounting Code Agency">FED</td> }
            </tr>
            <tr>
              <td aria-label="Select">
                <span>
                  <input onChange={()=>checkForSelected()} className="fam-checkbox fam-checkbox--solo" data-behavior="select-table-row" id="inpections__select-inspection--3" type="checkbox" name="inpections__select-inspection--3" value="10"/>
                  <label htmlFor="inpections__select-inspection--3"><span className="sr-only">Select this row</span></label>
                </span>
              </td>
              <td aria-label="Incident Name">Test Incident 2022</td>
              <td aria-label="Incident Number">US-MO-MTF-4534534534</td>
              <td aria-label="Event Type">FI - WILDFIRE</td>
              { isExpanded && <td aria-label="Start Date">11/01/2022</td> }
              { isExpanded && <td aria-label="Jurisdiction">USFS</td> }
              { isExpanded && <td aria-label="Accounting Code">P222</td> }
              { isExpanded && <td aria-label="Accounting Code Agency">FED</td> }
            </tr>
            <tr>
              <td aria-label="Select">
                <span>
                  <input onChange={()=>checkForSelected()} className="fam-checkbox fam-checkbox--solo" data-behavior="select-table-row" id="inpections__select-inspection--3" type="checkbox" name="inpections__select-inspection--3" value="10"/>
                  <label htmlFor="inpections__select-inspection--3"><span className="sr-only">Select this row</span></label>
                </span>
              </td>
              <td aria-label="Incident Name">Test Incident 2022</td>
              <td aria-label="Incident Number">US-MO-MTF-4534534534</td>
              <td aria-label="Event Type">FI - WILDFIRE</td>
              { isExpanded && <td aria-label="Start Date">11/01/2022</td> }
              { isExpanded && <td aria-label="Jurisdiction">USFS</td> }
              { isExpanded && <td aria-label="Accounting Code">P222</td> }
              { isExpanded && <td aria-label="Accounting Code Agency">FED</td> }
            </tr>
            <tr>
              <td aria-label="Select">
                <span>
                  <input onChange={()=>checkForSelected()} className="fam-checkbox fam-checkbox--solo" data-behavior="select-table-row" id="inpections__select-inspection--3" type="checkbox" name="inpections__select-inspection--3" value="10"/>
                  <label htmlFor="inpections__select-inspection--3"><span className="sr-only">Select this row</span></label>
                </span>
              </td>
              <td aria-label="Incident Name">Test Incident 2022</td>
              <td aria-label="Incident Number">US-MO-MTF-4534534534</td>
              <td aria-label="Event Type">FI - WILDFIRE</td>
              { isExpanded && <td aria-label="Start Date">11/01/2022</td> }
              { isExpanded && <td aria-label="Jurisdiction">USFS</td> }
              { isExpanded && <td aria-label="Accounting Code">P222</td> }
              { isExpanded && <td aria-label="Accounting Code Agency">FED</td> }
            </tr>
            <tr>
              <td aria-label="Select">
                <span>
                  <input onChange={()=>checkForSelected()} className="fam-checkbox fam-checkbox--solo" data-behavior="select-table-row" id="inpections__select-inspection--3" type="checkbox" name="inpections__select-inspection--3" value="10"/>
                  <label htmlFor="inpections__select-inspection--3"><span className="sr-only">Select this row</span></label>
                </span>
              </td>
              <td aria-label="Incident Name">Test Incident 2022</td>
              <td aria-label="Incident Number">US-MO-MTF-4534534534</td>
              <td aria-label="Event Type">FI - WILDFIRE</td>
              { isExpanded && <td aria-label="Start Date">11/01/2022</td> }
              { isExpanded && <td aria-label="Jurisdiction">USFS</td> }
              { isExpanded && <td aria-label="Accounting Code">P222</td> }
              { isExpanded && <td aria-label="Accounting Code Agency">FED</td> }
            </tr>
            <tr>
              <td aria-label="Select">
                <span>
                  <input onChange={()=>checkForSelected()} className="fam-checkbox fam-checkbox--solo" data-behavior="select-table-row" id="inpections__select-inspection--3" type="checkbox" name="inpections__select-inspection--3" value="10"/>
                  <label htmlFor="inpections__select-inspection--3"><span className="sr-only">Select this row</span></label>
                </span>
              </td>
              <td aria-label="Incident Name">Test Incident 2022</td>
              <td aria-label="Incident Number">US-MO-MTF-4534534534</td>
              <td aria-label="Event Type">FI - WILDFIRE</td>
              { isExpanded && <td aria-label="Start Date">11/01/2022</td> }
              { isExpanded && <td aria-label="Jurisdiction">USFS</td> }
              { isExpanded && <td aria-label="Accounting Code">P222</td> }
              { isExpanded && <td aria-label="Accounting Code Agency">FED</td> }
            </tr>
            <tr>
              <td aria-label="Select">
                <span>
                  <input onChange={()=>checkForSelected()} className="fam-checkbox fam-checkbox--solo" data-behavior="select-table-row" id="inpections__select-inspection--3" type="checkbox" name="inpections__select-inspection--3" value="10"/>
                  <label htmlFor="inpections__select-inspection--3"><span className="sr-only">Select this row</span></label>
                </span>
              </td>
              <td aria-label="Incident Name">Test Incident 2022</td>
              <td aria-label="Incident Number">US-MO-MTF-4534534534</td>
              <td aria-label="Event Type">FI - WILDFIRE</td>
              { isExpanded && <td aria-label="Start Date">11/01/2022</td> }
              { isExpanded && <td aria-label="Jurisdiction">USFS</td> }
              { isExpanded && <td aria-label="Accounting Code">P222</td> }
              { isExpanded && <td aria-label="Accounting Code Agency">FED</td> }
            </tr>
            <tr>
              <td aria-label="Select">
                <span>
                  <input onChange={()=>checkForSelected()} className="fam-checkbox fam-checkbox--solo" data-behavior="select-table-row" id="inpections__select-inspection--3" type="checkbox" name="inpections__select-inspection--3" value="10"/>
                  <label htmlFor="inpections__select-inspection--3"><span className="sr-only">Select this row</span></label>
                </span>
              </td>
              <td aria-label="Incident Name">Test Incident 2022</td>
              <td aria-label="Incident Number">US-MO-MTF-4534534534</td>
              <td aria-label="Event Type">FI - WILDFIRE</td>
              { isExpanded && <td aria-label="Start Date">11/01/2022</td> }
              { isExpanded && <td aria-label="Jurisdiction">USFS</td> }
              { isExpanded && <td aria-label="Accounting Code">P222</td> }
              { isExpanded && <td aria-label="Accounting Code Agency">FED</td> }
            </tr>
            <tr>
              <td aria-label="Select">
                <span>
                  <input onChange={()=>checkForSelected()} className="fam-checkbox fam-checkbox--solo" data-behavior="select-table-row" id="inpections__select-inspection--3" type="checkbox" name="inpections__select-inspection--3" value="10"/>
                  <label htmlFor="inpections__select-inspection--3"><span className="sr-only">Select this row</span></label>
                </span>
              </td>
              <td aria-label="Incident Name">Test Incident 2022</td>
              <td aria-label="Incident Number">US-MO-MTF-4534534534</td>
              <td aria-label="Event Type">FI - WILDFIRE</td>
              { isExpanded && <td aria-label="Start Date">11/01/2022</td> }
              { isExpanded && <td aria-label="Jurisdiction">USFS</td> }
              { isExpanded && <td aria-label="Accounting Code">P222</td> }
              { isExpanded && <td aria-label="Accounting Code Agency">FED</td> }
            </tr>
            <tr>
              <td aria-label="Select">
                <span>
                  <input onChange={()=>checkForSelected()} className="fam-checkbox fam-checkbox--solo" data-behavior="select-table-row" id="inpections__select-inspection--3" type="checkbox" name="inpections__select-inspection--3" value="10"/>
                  <label htmlFor="inpections__select-inspection--3"><span className="sr-only">Select this row</span></label>
                </span>
              </td>
              <td aria-label="Incident Name">Test Incident 2022</td>
              <td aria-label="Incident Number">US-MO-MTF-4534534534</td>
              <td aria-label="Event Type">FI - WILDFIRE</td>
              { isExpanded && <td aria-label="Start Date">11/01/2022</td> }
              { isExpanded && <td aria-label="Jurisdiction">USFS</td> }
              { isExpanded && <td aria-label="Accounting Code">P222</td> }
              { isExpanded && <td aria-label="Accounting Code Agency">FED</td> }
            </tr>
            <tr>
              <td aria-label="Select">
                <span>
                  <input onChange={()=>checkForSelected()} className="fam-checkbox fam-checkbox--solo" data-behavior="select-table-row" id="inpections__select-inspection--3" type="checkbox" name="inpections__select-inspection--3" value="10"/>
                  <label htmlFor="inpections__select-inspection--3"><span className="sr-only">Select this row</span></label>
                </span>
              </td>
              <td aria-label="Incident Name">Test Incident 2022</td>
              <td aria-label="Incident Number">US-MO-MTF-4534534534</td>
              <td aria-label="Event Type">FI - WILDFIRE</td>
              { isExpanded && <td aria-label="Start Date">11/01/2022</td> }
              { isExpanded && <td aria-label="Jurisdiction">USFS</td> }
              { isExpanded && <td aria-label="Accounting Code">P222</td> }
              { isExpanded && <td aria-label="Accounting Code Agency">FED</td> }
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );

  return TEMPLATE;

};

export default SearchResults;
