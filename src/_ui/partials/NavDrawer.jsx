
import { useNavigation } from "@inf/hooks/useNavigation";

/*  Props
navData: Object
setMenuIsOpen(): Boolean 
isMenuOpen: Boolean
setMenuId(): String
currentMenuId: String
 */
import { useState, useEffect } from 'react'

const NavDrawer = (_props) => {

  const { goto } = useNavigation();
  const [ navItems, setNavItems ] = useState({});

  useEffect(()=>{
    setNavItems(_props.navData);
  }, [_props]);


  let isMenuOpen = _props.isMenuOpen;
  let setMenuId = _props.setMenuId;
  let currentMenuId = _props.currentMenuId;
  const setMenuIsOpen = _props.setMenuIsOpen;

  const openMenu = (_boo) => setMenuIsOpen( _boo );

  const setMenu = (_obj) => {
    setMenuId(_obj.uid);
    openMenu(false);
    goto(_obj.path);
  }

  const openProfile = (_obj) => {
    if(_obj.path!='') goto(_obj.path);
    else alert('show Profile Flyout');
  }

  const TEMPLATE = (
    <nav>
      <div className="eis-nav-bar fam-hide@l">
        <div className="eis-nav-bar__bd">
          
          <div className="eis-nav-bar__btn">
            <button onClick={()=> openMenu(true)} type="button"
              className="fam-btn fam-btn--plain fam-p--xs fam-radius--full fam-bg--white fam-color--tertiary fam-link:hover--primary fam-bg:hover--primary-100"
              title="Open Menu"
              aria-label="Open Menu"
              aria-controls="primary-navigation"
              aria-expanded={ isMenuOpen ? 'true' : 'false' }>
              <svg className="fam-icon fam-icon--size-2"
                aria-hidden={ isMenuOpen ? 'false' : 'true' } focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" />
              </svg>
            </button>
          </div>
        
        </div>
      </div>

      <div className={ 'eis-nav-drawer' + (isMenuOpen ? ' eis-nav-drawer--open' : '') }>
        <div className="eis-nav-drawer__bd">
          
          <div className="eis-nav-drawer__btn">
            <button onClick={()=> openMenu(false) }
              type="button"
              className="fam-btn fam-btn--plain fam-p--xs fam-radius--full fam-bg--white fam-color--tertiary fam-link:hover--primary fam-bg:hover--primary-100 fam-hide@l"
              title="Close Menu"
              aria-label="Close Menu"
              aria-controls="primary-navigation"
              aria-expanded={ isMenuOpen ? 'true' : 'false' }>
              <svg className="fam-icon fam-icon--size-2"
                aria-hidden={ isMenuOpen ? 'false' : 'true' }
                focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M3 18H16V16H3V18ZM3 13H13V11H3V13ZM3 6V8H16V6H3ZM21 15.59L17.42 12L21 8.41L19.59 7L14.59 12L19.59 17L21 15.59Z" />
              </svg>
            </button>
          </div>


          <div className="eis-nav-drawer__content ">
            <ul className="eis-nav-drawer__list" id="primary-navigation" aria-hidden={ isMenuOpen ? 'false' : 'true' } aria-label="Primary Navigation">

              {
                navItems.main?.map( (item) => 
                  <li key={ item.uid } data-control-id={item.uid} className="eis-nav-drawer__list-item">
                    <div className={ 'eis-nav-drawer__item' + (isMenuOpen ? '' : ' eis-nav-drawer__item--hidden')}>
                      <a href={ import.meta.env.BASE_URL + item.path}
                        onClick={(e) => {e.preventDefault(); setMenu(item)}}
                        className={'eis-nav-drawer__link ' + (currentMenuId==item.uid ? 'eis-nav-drawer__link--active' : '')}>
                        <span className="eis-nav-drawer__icon">
                        <span className="eis-nav-drawer__icon-background"></span>
                        <svg
                            className={ item.icon.style }
                            aria-hidden={isMenuOpen ? 'false' : 'true'}
                            focusable="false"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24"
                            viewBox="0 0 24 24"
                          >
                            <path d={ item.icon.path } />
                          </svg>
                        </span>
                        <span className="eis-nav-drawer__label">{ item.label }</span>
                      </a>
                    </div>
                  </li>
                )
              }

            </ul>
          </div>

          <div className="eis-nav-drawer__profile">
            <ul className="" id="user-profile" aria-hidden={ isMenuOpen ? 'false' : 'true' } aria-label="User Profile">
              {
                navItems.profile?.map( (item) => 
                  <li key={ item.uid } data-control-id={item.uid} className="eis-nav-drawer__list-item">
                    <div className={ 'eis-nav-drawer__item' + (isMenuOpen ? '' : ' eis-nav-drawer__item--hidden')}>
                      <a href={ import.meta.env.BASE_URL + item.path}
                        onClick={(e) => {e.preventDefault(); openProfile(item)}}
                        className={'eis-nav-drawer__link ' + (currentMenuId==item.uid ? 'eis-nav-drawer__link--active' : '')}>
                        <span className="eis-nav-drawer__icon">
                        <span className="eis-nav-drawer__icon-background"></span>
                        <svg
                            className={ item.icon.style }
                            aria-hidden={isMenuOpen ? 'false' : 'true'}
                            focusable="false"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24"
                            viewBox="0 0 24 24"
                          >
                            <path d={ item.icon.path } />
                          </svg>
                        </span>
                        <span className="eis-nav-drawer__label">{ item.label }</span>
                      </a>
                    </div>
                  </li>
                )
              }

            </ul>
          </div>
          
        </div>
        
      </div>
    </nav>
  )

  return TEMPLATE;      
}

export default NavDrawer;