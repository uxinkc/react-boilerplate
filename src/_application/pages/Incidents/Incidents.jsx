
import Page from '@app/pages/Page.jsx';
import ContentTabs from '@/_ui/components/content-tabs/ContentTabs.jsx';

// using for demonstration purposes
import IncidentsDisplay from '@dom/Incidents/views/IncidentsDisplay.jsx';

const Incidents = () => {

  const TEMPLATE = (
    <Page>
      <div className="fam-m-t--m fam-m-b--m">

        <div className="fam-level--none@m fam-level--full@l fam-level--justify-between">
          <h1 className="fam-m--none fam-m-r--xl@l fam-text-size--6@s fam-text-size--5@l fam-text-size--6@xl">Incidents</h1>

          <div className="fam-level fam-level--justify-right fam-level--grow-auto@m fam-level--gutter-s">
            
            <span className="fam-level__item--grow-auto fam-m-r--s@s fam-m-r--s@m fam-m-r--s@l fam-m-r--m@xl">
              <div className="fam-search" role="search">
                <div className="fam-search__bd eis-search-stretch">
                  <div className="fam-search__entry fam-search__entry--grow">
                    <label className="fam-search__label fam-search__label--sr-only" htmlFor="UNIQUE-ID-yughsjj6j">Label</label>
                    <input className="fam-input fam-search__input" id="UNIQUE-ID-yughsjj6j" type="search" name="search"/>
                  </div>
                  <div className="fam-search__submit">
                    <button className="fam-btn fam-search__btn" type="submit">
                      <span className="fam-search__text">Search</span>
                    </button>
                  </div>
                </div>
              </div>
            </span>

            <span className="fam-level__item--grow-none fam-m-r--s@s fam-m-r--s@m fam-m-r--s@l fam-m-r--m@xl">
              <button className="fam-btn fam-btn--fill fam-btn--secondary" type="button">
              <svg className="fam-icon fam-icon--size-1" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"></path></svg>
                <span className="fam-show@l">Bookmark</span>
              </button>
            </span>
            
            <span className="fam-level__item--grow-none">
              <button className="fam-btn fam-btn--fill fam-btn--secondary" type="button">
                <svg className="fam-icon fam-icon--size-1" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path></svg>
                <span className="fam-show@l">Add</span>
              </button>
            </span>
            
            <span className="fam-level__item--grow-none">
              <button className="fam-btn fam-btn--fill fam-btn--tertiary" type="button">
                <svg className="fam-icon fam-icon--size-1" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"/></svg>
                <span className="fam-show@l">Remove</span>
              </button>
            </span>

            
          
          </div>
        </div>
      </div>


      <div className="fam-grid">
        <div className="fam-grid__1/1 fam-grid__1/1@l">
          <h2 className="sr-only">Search Results</h2>
          <div className="">
            <div className="fam-level@l fam-level--justify-between fam-level--align-bottom">
              <div className="fam-level fam-level--grow-auto fam-m-b--s fam-m-b--none@l">
                <button className="fam-btn fam-btn--secondary fam-btn--fill fam-btn--small" type="button" disabled=""><svg className="fam-icon fam-icon--size-1" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></svg> <span className="fam-sr-only@xs-only">Edit</span></button>
                <button className="fam-btn fam-btn--secondary fam-btn--fill fam-btn--small" type="button"><svg className="fam-icon fam-icon--size-1" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 4c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1.4c0-2 4-3.1 6-3.1s6 1.1 6 3.1V19z"></path></svg> <span className="fam-sr-only@xs-only">Assign</span></button>
                <button className="fam-btn fam-btn--secondary fam-btn--fill fam-btn--small" type="button"><svg className="fam-icon fam-icon--size-1" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 6h-8l-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6 12v-3h-4v-4h4V8l5 5-5 5z"></path></svg> <span className="fam-sr-only@xs-only">Move</span></button>
                <button className="fam-btn fam-btn--secondary fam-btn--fill fam-btn--small" type="button"><svg className="fam-icon fam-icon--size-1" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16z"></path></svg> <span className="fam-sr-only@xs-only">Label</span></button>
              </div>
              <div className="fam-show@m fam-level fam-level--grow-auto">
                <div>
                  <label htmlFor="lorem_find" className="fam-text-size--2">Quick Find</label>
                  <input type="text" className="fam-input fam-input--small fam-input--fill" id="lorem_find"/>
                </div>
                <div>
                  <span className="fam-text-size--2" id="lorem_timeframe">Timeframe</span>
                  <span className="fam-btn-group fam-btn-group--small fam-btn-group--fill" role="group" aria-labelledby="lorem_timeframe">
                    <button className="fam-btn-group__item fam-btn-group__item--active" aria-selected="true" type="button">Today</button>
                    <button className="fam-btn-group__item" type="button">This Week</button>
                    <button className="fam-btn-group__item" type="button">This Year</button>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="fam-table-container--scroll fam-border--xxs" style={{"--custom-table-height": "33vh" }}>

            <table className="fam-table fam-table--borderless fam-table--responsive">
              <caption className="sr-only">Caption that is hidden visually, but read by screenreader</caption>
              <thead>
                <tr>
                  <th className="fam-table__th--sticky fam-table__th--select" scope="col">
                    <span>
                      <input className="fam-checkbox fam-checkbox--solo" data-behavior="select-table-all" id="inpections__select-all" type="checkbox" name="inpections__select-all" value="Select all"/>
                      <label htmlFor="inpections__select-all" title="Select all"><span className="sr-only">Select all</span></label>
                    </span>
                  </th>
                  <th className="fam-table__th--sticky" scope="col">Name</th>
                  <th className="fam-table__th--sticky" scope="col">Number</th>
                  <th className="fam-table__th--sticky" scope="col">Event Type</th>
                  <th className="fam-table__th--sticky" scope="col">Start Date</th>
                  <th className="fam-table__th--sticky" scope="col">Jurisdiction</th>
                  <th className="fam-table__th--sticky" scope="col">
                    <a className="fam-btn fam-btn--plain" href="#" title="Accounting Code"><strong>Code</strong></a>
                  </th>
                  <th className="fam-table__th--sticky" scope="col">
                    <a className="fam-btn fam-btn--plain" href="#" title="Accounting Code Agency"><strong>Agency</strong></a>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td aria-label="Select">
                    <span>
                      <input className="fam-checkbox fam-checkbox--solo" data-behavior="select-table-row" id="inpections__select-inspection--1" type="checkbox" name="inpections__select-inspection--1" value="10"/>
                      <label htmlFor="inpections__select-inspection--1"><span className="sr-only">Select this row</span></label>
                    </span>
                  </td>
                  <td aria-label="Incident Name">Test Incident 2022</td>
                  <td aria-label="Incident Number">US-MO-MTF-4534534534</td>
                  <td aria-label="Event Type">FI - WILDFIRE</td>
                  <td aria-label="Start Date">11/01/2022</td>
                  <td aria-label="Jurisdiction">USFS</td>
                  <td aria-label="Accounting Code">P222</td>
                  <td aria-label="Accounting Code Agency">FED</td>
                </tr>
                <tr>
                  <td aria-label="Select">
                    <span>
                      <input className="fam-checkbox fam-checkbox--solo" data-behavior="select-table-row" id="inpections__select-inspection--2" type="checkbox" name="inpections__select-inspection--2" value="10"/>
                      <label htmlFor="inpections__select-inspection--2"><span className="sr-only">Select this row</span></label>
                    </span>
                  </td>
                  <td aria-label="Incident Name">Test Incident 2022</td>
                  <td aria-label="Incident Number">US-MO-MTF-4534534534</td>
                  <td aria-label="Event Type">FI - WILDFIRE</td>
                  <td aria-label="Start Date">11/01/2022</td>
                  <td aria-label="Jurisdiction">USFS</td>
                  <td aria-label="Accounting Code">P222</td>
                  <td aria-label="Accounting Code Agency">FED</td>
                </tr>
                <tr>
                  <td aria-label="Select">
                    <span>
                      <input className="fam-checkbox fam-checkbox--solo" data-behavior="select-table-row" id="inpections__select-inspection--3" type="checkbox" name="inpections__select-inspection--3" value="10"/>
                      <label htmlFor="inpections__select-inspection--3"><span className="sr-only">Select this row</span></label>
                    </span>
                  </td>
                  <td aria-label="Incident Name">Test Incident 2022</td>
                  <td aria-label="Incident Number">US-MO-MTF-4534534534</td>
                  <td aria-label="Event Type">FI - WILDFIRE</td>
                  <td aria-label="Start Date">11/01/2022</td>
                  <td aria-label="Jurisdiction">USFS</td>
                  <td aria-label="Accounting Code">P222</td>
                  <td aria-label="Accounting Code Agency">FED</td>
                </tr>
                <tr>
                  <td aria-label="Select">
                    <span>
                      <input className="fam-checkbox fam-checkbox--solo" data-behavior="select-table-row" id="inpections__select-inspection--4" type="checkbox" name="inpections__select-inspection--4" value="10"/>
                      <label htmlFor="inpections__select-inspection--4"><span className="sr-only">Select this row</span></label>
                    </span>
                  </td>
                  <td aria-label="Incident Name">Test Incident 2022</td>
                  <td aria-label="Incident Number">US-MO-MTF-4534534534</td>
                  <td aria-label="Event Type">FI - WILDFIRE</td>
                  <td aria-label="Start Date">11/01/2022</td>
                  <td aria-label="Jurisdiction">USFS</td>
                  <td aria-label="Accounting Code">P222</td>
                  <td aria-label="Accounting Code Agency">FED</td>
                </tr>
                <tr>
                  <td aria-label="Select">
                    <span>
                      <input className="fam-checkbox fam-checkbox--solo" data-behavior="select-table-row" id="inpections__select-inspection--5" type="checkbox" name="inpections__select-inspection--5" value="10"/>
                      <label htmlFor="inpections__select-inspection--5"><span className="sr-only">Select this row</span></label>
                    </span>
                  </td>
                  <td aria-label="Incident Name">Test Incident 2022</td>
                  <td aria-label="Incident Number">US-MO-MTF-4534534534</td>
                  <td aria-label="Event Type">FI - WILDFIRE</td>
                  <td aria-label="Start Date">11/01/2022</td>
                  <td aria-label="Jurisdiction">USFS</td>
                  <td aria-label="Accounting Code">P222</td>
                  <td aria-label="Accounting Code Agency">FED</td>
                </tr>
                <tr>
                  <td aria-label="Select">
                    <span>
                      <input className="fam-checkbox fam-checkbox--solo" data-behavior="select-table-row" id="inpections__select-inspection--6" type="checkbox" name="inpections__select-inspection--6" value="10"/>
                      <label htmlFor="inpections__select-inspection--6"><span className="sr-only">Select this row</span></label>
                    </span>
                  </td>
                  <td aria-label="Incident Name">Test Incident 2022</td>
                  <td aria-label="Incident Number">US-MO-MTF-4534534534</td>
                  <td aria-label="Event Type">FI - WILDFIRE</td>
                  <td aria-label="Start Date">11/01/2022</td>
                  <td aria-label="Jurisdiction">USFS</td>
                  <td aria-label="Accounting Code">P222</td>
                  <td aria-label="Accounting Code Agency">FED</td>
                </tr>
                <tr>
                  <td aria-label="Select">
                    <span>
                      <input className="fam-checkbox fam-checkbox--solo" data-behavior="select-table-row" id="inpections__select-inspection--7" type="checkbox" name="inpections__select-inspection--7" value="10"/>
                      <label htmlFor="inpections__select-inspection--7"><span className="sr-only">Select this row</span></label>
                    </span>
                  </td>
                  <td aria-label="Incident Name">Test Incident 2022</td>
                  <td aria-label="Incident Number">US-MO-MTF-4534534534</td>
                  <td aria-label="Event Type">FI - WILDFIRE</td>
                  <td aria-label="Start Date">11/01/2022</td>
                  <td aria-label="Jurisdiction">USFS</td>
                  <td aria-label="Accounting Code">P222</td>
                  <td aria-label="Accounting Code Agency">FED</td>
                </tr>
                <tr>
                  <td aria-label="Select">
                    <span>
                      <input className="fam-checkbox fam-checkbox--solo" data-behavior="select-table-row" id="inpections__select-inspection--8" type="checkbox" name="inpections__select-inspection--8" value="10"/>
                      <label htmlFor="inpections__select-inspection--8"><span className="sr-only">Select this row</span></label>
                    </span>
                  </td>
                  <td aria-label="Incident Name">Test Incident 2022</td>
                  <td aria-label="Incident Number">US-MO-MTF-4534534534</td>
                  <td aria-label="Event Type">FI - WILDFIRE</td>
                  <td aria-label="Start Date">11/01/2022</td>
                  <td aria-label="Jurisdiction">USFS</td>
                  <td aria-label="Accounting Code">P222</td>
                  <td aria-label="Accounting Code Agency">FED</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/*
          <div className="fam-table-container--scroll fam-border--xxs" style={{"--custom-table-height": "33vh" }}>
        */}

          <ContentTabs
            TABS_CLASS="fam-border--primary-300"
            TABS_CONTAINER_CLASS="fam-m-t--m"
            TABS_DATA={ [
              {
                label:'Tab One',
                id: 'tab-one-id',
                isSelected: true,
                useIcon: true,
                iconSize: '2',
                iconPath: 'M20 13H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM20 3H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z',
                iconFillHex: '#494440',
                containerId: 'tab-one-id-container',
                container: (<div className="fam-box">
                              <h3>1 - Elephant</h3>
                            </div>)
              },
              {
                label:'Tab Two',
                id: 'tab-two-id',
                isSelected: false,
                useIcon: true,
                iconSize: '2',
                iconPath: 'M20 13H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM20 3H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z',
                iconFillHex: '#494440',
                containerId: 'tab-two-id-container',
                container: <IncidentsDisplay />
              },
              {
                label:'Tab Three',
                id: 'tab-three-id',
                isSelected: false,
                useIcon: false,
                containerId: 'tab-three-id-container',
                container: (<div className="fam-box">
                              <h3>3 - Turtles</h3>
                            </div>)
              }
            ]}/>     

    </Page>
  );

  return TEMPLATE;
}

export default Incidents;