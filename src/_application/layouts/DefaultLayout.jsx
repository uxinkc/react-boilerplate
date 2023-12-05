
import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";

import {
  getNavigationItems,
  getNavigationStatus,
  getNavigationErrors,
  getNavigationItemsThunk } from "@app/layouts/store/navigation.slice.js";

import NavDrawer from '@ui/partials/NavDrawer.jsx';

function DefaultLayout() {

  const dispatch = useDispatch();
  const navigationData = useSelector(getNavigationItems);
  const navigationStatus = useSelector(getNavigationStatus);
  const navigationErrors = useSelector(getNavigationErrors);

  const init = async () => {
    dispatch( getNavigationItemsThunk( { value: 42 } ));
  }

  // Local State
  const [ isMenuOpen, setMenuIsOpen ] = useState(false);
  const [ currentMenuId, setMenuId ] = useState('');

  // on render, run init()
  useEffect(()=>{ init() },[]);

  return (
    <>
      <div className="eis-nav-drawer-layout">
        <div className={'eis-nav-drawer-layout__nav ' + (isMenuOpen ? 'eis-nav-drawer-layout--open ' : '')}>
          <NavDrawer
            navData={ navigationData }
            setMenuIsOpen={setMenuIsOpen}
            isMenuOpen={isMenuOpen}
            setMenuId={setMenuId}
            currentMenuId={currentMenuId}>
          </NavDrawer>
        </div>
        <div className={'eis-nav-drawer-layout__bd ' + (isMenuOpen ? 'eis-nav-drawer-layout--open ' : '')}>
          
          <Outlet/>

        </div>
      </div>
    </>
  )
}

export default DefaultLayout;