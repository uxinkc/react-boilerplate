
import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from "@inf/hooks/useReactHooks";
import {
  getIncidentsItemsAllItems,
  getIncidentsItemsStuff,
  getIncidentsItemsStatus,
  getIncidentsItemsErrors,
  getIncidentsItemsThunk,
  getItemsCount,
  updateTotalCount } from "@dom/Incidents/store/incidents.slice.js";

const IncidentsDisplay = (_props) => {

  const dispatch = useAppDispatch();

  const incidentsAllItems = useAppSelector(getIncidentsItemsAllItems);
  const incidentsStuff = useAppSelector(getIncidentsItemsStuff);
  const incidentsStatus = useAppSelector(getIncidentsItemsStatus);
  const incidentsErrors = useAppSelector(getIncidentsItemsErrors);
  const totalItems = useAppSelector(getItemsCount);

  const updateTotal = () => {
    dispatch(updateTotalCount());
  }

  const getIncidents = async () => {
    dispatch( getIncidentsItemsThunk() );
  }

  return (
    <>
      <h3>{ _props.title || 'Page Header' }</h3>
      
      <div className="fam-box fam-m-t--m fam-m-b--m">

        <div className="fam-level">
          <div className="fam-m--s">Stuff: <strong>{ incidentsStuff.total }</strong></div>
          <div data-testid="status_text" className="fam-m--s">Status: <strong>{ incidentsStatus }</strong></div>
          <div data-testid="total_text" aria-live="polite" className="fam-m--s">Total Items in Store: <strong>{ totalItems }</strong></div>
          <div data-testid="errors_text" className="fam-m--s">Errors: <strong>{ incidentsErrors }</strong></div>
        </div>

        <div className="fam-level fam-level--auto-grow">
          <button role="button" data-testid="update_total_btn" onClick={()=> updateTotal()} className="fam-btn fam-btn--secondary fam-m-t--l">Update Total</button>
          <button role="button" data-testid="get_api_data_btn" onClick={()=> getIncidents()} className="fam-btn fam-btn--secondary fam-m-t--l">Get Items from API</button>
        </div>

      </div>
      
      <div className="fam-box fam-m-t--m fam-m-b--m">
        <h3>Data From Store</h3>
        <ul data-testid="data_list">
          { 
            incidentsAllItems.map( (item) => {
              return <li key={ item.id }>{ item.title }</li>
            })
          }
        </ul>
      </div>
    </>
  )
}

export default IncidentsDisplay;