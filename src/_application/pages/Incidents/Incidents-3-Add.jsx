
import { useSelector } from "react-redux";

import Page from '@app/pages/Page.jsx';

import SearchBar from '@dom/Search/views/search-bar/SearchBar.jsx';
import Workspace from '@dom/Workspace/views/Workspace.jsx';

import IncidentsDetails from '@/_domain/Incidents/views/forms/IncidentForm.jsx';


import { useNavigation } from '@inf/hooks/useNavigation.js';

const Incidents = () => {

  let isExpanded = false;

  const { goto } = useNavigation();

  const TEMPLATE = (
    <Page>
      <div className="fam-m-t--m fam-m-b--m">

        <div className="fam-level--none@m fam-level--full@l fam-level--justify-between">
          <h1 className="fam-m--none fam-m-r--xl@l fam-text-size--6@s fam-text-size--5@l fam-text-size--6@xl">Incidents</h1>

          <div className="fam-level fam-level--justify-right fam-level--grow-auto@m fam-level--gutter-s">
            
            <span className="fam-level__item--grow-auto fam-m-r--s@s fam-m-r--s@m fam-m-r--s@l fam-m-r--m@xl">
              <SearchBar />
            </span>

            <span className="fam-level__item--grow-none fam-m-r--s@s fam-m-r--s@m fam-m-r--s@l fam-m-r--m@xl">
              <Workspace />
            </span>
            
            <span className="fam-level__item--grow-none">
              <button onClick={()=> goto('/incident-add') } className="fam-btn fam-btn--fill fam-btn--secondary" type="button">
                <svg className="fam-icon fam-icon--size-1" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path></svg>
                <span className="fam-show@l">Add Incident</span>
              </button>
            </span>
            {/*
            <span className="fam-level__item--grow-none">
              <button className="fam-btn fam-btn--fill fam-btn--tertiary" type="button">
                <svg className="fam-icon fam-icon--size-1" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"/></svg>
                <span className="fam-show@l">Remove</span>
              </button>
            </span>
            */}

          
          </div>
        </div>
      </div>


      <div className="fam-grid">
        
        <div className={ isExpanded ? "fam-grid__1/1" : "fam-grid__1/1 fam-grid__1/1@m fam-grid__5/12@xl fam-p-r--s@none fam-p-r--m@s" }>

          <div className="eis-init-state--box">
            <div className="eis-init-state--box__bd">
              <p className="">Perform a search to display Incident data</p>
                <svg class="fam-icon fam-icon--size-4" aria-hidden="true" focusable="false" role="img" fill="#95908E" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
            </div>
          </div>
          
        </div>
        <div className={ isExpanded ? "fam-grid__1/1" : "fam-grid__1/1 fam-grid__1/1@m fam-grid__7/12@xl"}>

          <IncidentsDetails />
          
        </div>
      </div>   
    </Page>
  );

  return TEMPLATE;
}

export default Incidents;