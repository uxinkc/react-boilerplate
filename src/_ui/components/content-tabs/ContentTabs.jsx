import { useEffect, useState } from 'react';
import { useUtilities } from '@inf/hooks/useUtilities';
const { setPropertyFromProperty } = useUtilities();

const ContentTabs = (_props) => {
  const [tabsData, setTabsData] = useState(_props.TABS_DATA);

  const handleTabSelected = (_id) => {
    let data = [...tabsData]; // <- deconstruction required here
    tabsData.forEach( (o) => setPropertyFromProperty(o.id, 'id', 'isSelected', false, data) );
    setPropertyFromProperty(_id, 'id', 'isSelected', true, data);
    setTabsData(data);
    setVisibility();
  }

  const setSelectedClass = (_boo) => { return _boo ? 'fam-content-tabs__label--active' : '' };

  const setVisibility = () => {
    tabsData.forEach( (o) => {
      if(o.isSelected) {
        document.getElementById(o.containerId).style.visibility = "initial";
        document.getElementById(o.containerId).style.display = "inline";
      } else {
        document.getElementById(o.containerId).style.visibility = "hidden";
        document.getElementById(o.containerId).style.display = "none";
      }
    })
  };

  const initializeTabs = () => {

    let el = document.getElementById( tabsData[0]['containerId'] );
    if(el != undefined) {
      setVisibility();
    } else {
      setTimeout(() => initializeTabs(), 250);
    }
  };

  useEffect(()=>{
    initializeTabs();
  },[])

  useEffect(()=>{
    setVisibility();
  },[tabsData])


  const TEMPLATE = (
    <>
        <div className={'fam-content-tabs ' + (_props.TABS_CLASS ? _props.TABS_CLASS: '')}>
          <ul data-testid="tabsControls" className="fam-content-tabs__list">
            {
              tabsData.map( (tab) => {
                let markup = (
                  <li key={ tab.id } className="fam-content-tabs__item eis-content-tabs__item">
                    <button  id={tab.id}
                      role="button"
                      onClick={(e) => { e.preventDefault(), handleTabSelected(tab.id); }}
                      className={'fam-content-tabs__label ' + String( setSelectedClass(tab.isSelected) ) }
                      href="">
                      
                      <span className="fam-content-tabs__label-text">
                        
                        { tab.useIcon && (
                          <svg
                            className={'fam-icon fam-icon--size-'+tab.iconSize?tab.iconSize:'2'}
                            aria-hidden="true"
                            focusable="false"
                            role="img"
                            fill={tab.iconFillHex ? tab.iconFillHex : '#494440'}
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24">
                            <path d={tab.iconPath}></path>
                          </svg>
                        )}
                        { tab.label }
                      
                      </span>
                    </button>
                  </li>
                )
                return markup
              })
            }
            
          </ul>
        </div>

        <div className={_props.TABS_CONTAINER_CLASS ? _props.TABS_CONTAINER_CLASS : 'fam-m-t--l'}>
          <div data-testid="tabsContainers" className="fam-content-tabs-containers fam-p-t--xxs">
            {
              tabsData.map( (tab) => {
                let markup = (
                  <div key={ tab.containerId } className="fam-content__tabs-container" id={tab.containerId}>
                    {tab.container}
                  </div>
                );
                return markup
              })
            }
          </div>
        </div>

    </>
  );

  return TEMPLATE;
};

export default ContentTabs;