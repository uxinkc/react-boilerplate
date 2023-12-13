
import { useState } from 'react';
import { useSelector } from "react-redux";

import Page from '@app/pages/Page.jsx';

import SearchBar from '@dom/Search/views/search-bar/SearchBar.jsx';
import Workspace from '@dom/Workspace/views/Workspace.jsx';

import ContentTabs from '@ui/components/content-tabs/ContentTabs.jsx';
import ReferenceDataSearchResults from '@dom/Reference-Data/views/search/ReferenceDataSearchResults.jsx';


import { useNavigation } from '@inf/hooks/useNavigation.js';

const ReferenceData = () => {

  const [isSelected, setIsSelected] = useState(false)

  const isExpanded = useSelector((_state) => _state.searchResults.expanded);

  const checkSelected = (_boo) => {
    setIsSelected(_boo)
  }

  const { goto } = useNavigation();
  
  const TEMPLATE = (
    <Page>
      <div className="fam-m-t--m fam-m-b--m">

        <div className="fam-level--none@m fam-level--full@l fam-level--justify-between">
          <h1 className="fam-m--none fam-m-r--xl@l fam-text-size--6@s fam-text-size--5@l fam-text-size--6@xl">Reference Data</h1>

          <div className="fam-level fam-level--justify-right fam-level--grow-auto@m fam-level--gutter-s">
            
            <span className="fam-level__item--grow-auto fam-m-r--s@s fam-m-r--s@m fam-m-r--s@l fam-m-r--m@xl">
              <SearchBar />
            </span>

            <span className="fam-level__item--grow-none fam-m-r--s@s fam-m-r--s@m fam-m-r--s@l fam-m-r--m@xl">
              <Workspace />
            </span>
                    
          </div>
        </div>
      </div>


      <div className="fam-grid">
        
        <div className={ isExpanded ? "fam-grid__1/1" : "fam-grid__1/1 fam-grid__1/1@m fam-grid__5/12@xl fam-p-r--s@none fam-p-r--m@s" }>

          <ReferenceDataSearchResults
            emitCheckSelected={checkSelected}
            USE_BORDER_SCROLL={true}
            USE_EXPAND={false}
            BORDER_SCROLL_HEIGHT={"70vh"}
            EXPANDED={false}
          />

        </div>
        <div className={ isExpanded ? "fam-grid__1/1" : "fam-grid__1/1 fam-grid__1/1@m fam-grid__7/12@xl"}>

          <ContentTabs
            TABS_CLASS=""
            TABS_CONTAINER_CLASS="fam-m-t--m"
            TABS_DATA={ [
              {
                label:'Agencies',
                id: 'agencies-id',
                isSelected: true,
                useIcon: false,
                iconSize: '2',
                iconPath: 'M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z',
                iconFillHex: '#494440',
                containerId: 'agencies-id-container',
                container: (<div className="fam-box">
                              <h3>Agencies - Form / Controls</h3>
                            </div>)
              },
              {
                label:'Unit IDs',
                id: 'unit-ids-id',
                isSelected: false,
                useIcon: false,
                iconSize: '2',
                iconPath: 'M9 3L5 6.99h3V14h2V6.99h3L9 3zm7 14.01V10h-2v7.01h-3L15 21l4-3.99h-3z',
                iconFillHex: '#494440',
                containerId: 'unit-ids-container',
                container: (<div className="fam-box">
                              <h3>Unit IDs - Form / Controls</h3>
                            </div>)
              },
              {
                label:'Jetports',
                id: 'jetports-id',
                isSelected: false,
                useIcon: false,
                iconSize: '2',
                iconPath: 'M9 3L5 6.99h3V14h2V6.99h3L9 3zm7 14.01V10h-2v7.01h-3L15 21l4-3.99h-3z',
                iconFillHex: '#494440',
                containerId: 'jetports-id-container',
                container: (<div className="fam-box">
                              <h3>Jetports - Form / Controls</h3>
                            </div>)
              },
              {
                label:'Item Codes',
                id: 'item-codes-id',
                isSelected: false,
                useIcon: false,
                iconSize: '2',
                iconPath: 'M9 3L5 6.99h3V14h2V6.99h3L9 3zm7 14.01V10h-2v7.01h-3L15 21l4-3.99h-3z',
                iconFillHex: '#494440',
                containerId: 'item-codes-id-container',
                container: (<div className="fam-box">
                              <h3>Item Codes - Form / Controls</h3>
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

export default ReferenceData;



