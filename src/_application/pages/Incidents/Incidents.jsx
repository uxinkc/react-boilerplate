
import { useState } from 'react';
import { useSelector } from "react-redux";

import Page from '@app/pages/Page.jsx';

import SearchBar from '@dom/Search/views/search-bar/SearchBar.jsx';
import Workspace from '@dom/Workspace/views/Workspace.jsx';

import IncidentsSearchResults from '@dom/Incidents/views/search/IncidentsSearchResults.jsx';
import IncidentSelected from '@dom/Incidents/views/IncidentSelected.jsx';
import ContentTabs from '@ui/components/content-tabs/ContentTabs.jsx';
import IncidentsDetails from '@/_domain/Incidents/views/forms/IncidentForm.jsx';

// For Demo Use
import IncidentsHolder from '@dom/Incidents/views/IncidentBlank.jsx';

import { useNavigation } from '@inf/hooks/useNavigation.js';

const Incidents = () => {

  const [isSelected, setIsSelected] = useState(false)

  const isExpanded = useSelector((_state) => _state.searchResults.expanded);

  const checkSelected = (_boo) => {
    console.log('checkSelected', _boo)
    setIsSelected(_boo)
  }

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

          

          <IncidentsSearchResults
            emitCheckSelected={checkSelected}
            USE_BORDER_SCROLL={true}
            USE_EXPAND={true}
            BORDER_SCROLL_HEIGHT={isExpanded ? "28vh" : "38vh"}
            EXPANDED={false}
          />

    <IncidentSelected IS_SELECTED={isSelected} CONTAINER_CLASSES={'fam-m-t--l fam-m-b--m'}/>

        </div>
        <div className={ isExpanded ? "fam-grid__1/1" : "fam-grid__1/1 fam-grid__1/1@m fam-grid__7/12@xl"}>

          <ContentTabs
            TABS_CLASS=""
            TABS_CONTAINER_CLASS="fam-m-t--m"
            TABS_DATA={ [
              {
                label:'Update Incident',
                id: 'update-incident-id',
                isSelected: true,
                useIcon: true,
                iconSize: '2',
                iconPath: 'M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z',
                iconFillHex: '#494440',
                containerId: 'update-incident-id-container',
                container: <IncidentsDetails />
              },
              {
                label:'Import/Export',
                id: 'import-export-id',
                isSelected: false,
                useIcon: true,
                iconSize: '2',
                iconPath: 'M9 3L5 6.99h3V14h2V6.99h3L9 3zm7 14.01V10h-2v7.01h-3L15 21l4-3.99h-3z',
                iconFillHex: '#494440',
                containerId: 'import-export-id-container',
                container: (<div className="fam-box">
                              <h3>Turtles</h3>
                            </div>)
              },
              {
                label:'User Access',
                id: 'user-access-id',
                isSelected: false,
                useIcon: true,
                iconSize: '2',
                iconPath: 'M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 4c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1.4c0-2 4-3.1 6-3.1s6 1.1 6 3.1V19z',
                iconFillHex: '#494440',
                containerId: 'user-access-id-container',
                container: (<div className="fam-box">
                              <h3>User access</h3>
                            </div>)
              }
            ]}/>

            {/**
             * {
                label:'Reference Data',
                id: 'reference-data-id',
                isSelected: false,
                useIcon: true,
                iconSize: '2',
                iconPath: 'M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z',
                iconFillHex: '#494440',
                containerId: 'reference-data-id-container',
                container: (<div className="fam-box">
                              <h3>Reference Data</h3>
                            </div>)
              },
             * 
             */}
          
        </div>
      </div>   
    </Page>
  );

  return TEMPLATE;
}

export default Incidents;



