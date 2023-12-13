

const IncidentSelected = ( {CONTAINER_CLASSES, IS_SELECTED} ) => {

  return (
    <>      
      <div className={'fam-box fam-shadow--raised ' + CONTAINER_CLASSES}>

        <div className="fam-m-b--s">

          <div className="fam-level fam-level--justify-between fam-m-b--s">
            <div className="fam-text-size--4 fam-m-b--s">
              <span className="fam-m-r--xxs"><svg className="fam-icon fam-icon--size-1" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path></svg></span>
              <span className="fam-text--h4">Selected Incident(s)</span>
            </div>

            <div className={ IS_SELECTED ? '':'fam-hide'}>
              <div className="fam-level fam-level--wrap">
                <div>
                  <button type="button" className="fam-btn fam-btn--plain fam-p--s fam-radius--full fam-bg--tertiary-100 fam-color--tertiary fam-link:hover--primary fam-bg:hover--primary-100" title="Vote Up" aria-label="Vote Up">
                  <svg className="fam-icon fam-icon--size-2" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></svg>
                  </button>
                </div>
                <div>
                  <button type="button" className="fam-btn fam-btn--plain fam-p--s fam-radius--full fam-bg--tertiary-100 fam-color--tertiary fam-link:hover--primary fam-bg:hover--primary-100" title="Vote Down" aria-label="Vote Down">
                  <svg className="fam-icon fam-icon--size-2" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></svg>
                  </button>
                </div>
              </div>
            </div>

          </div>
          
          <div className={ IS_SELECTED ? '':'fam-hide'}>
            <div className="fam-grid fam-grid--no-gutter">
              <div className="fam-grid__1/1 fam-grid__1/2@l">
                <div className="fam-level fam-m-b--xs">
                  <span>Name: </span>
                  <span>{ 'LOOKOUT' }</span>
                </div>
                <div className="fam-level">
                  <span>State: </span>
                  <span>{ 'MO' }</span>
                  <span>Event Type: </span>
                  <span>{ 'WF' }</span>
                </div>
                
              </div>
              <div className="fam-grid__1/1 fam-grid__1/2@l">
                <div className="fam-level fam-m-b--xs">
                  <span>Number: </span>
                  <span>{ 'US-MO-MTF-4534534534' }</span>
                </div>
                <div className="fam-level">
                  <span>Jurisdiction: </span>
                  <span>{ 'USFS' }</span>
                </div>
              </div>
            </div>

            <div className="fam-divider fam-m-t--s fam-m-b--s"/>


            <div className="fam-grid">
              <div className="fam-grid__1/1 fam-grid__1/2@l">
                <div className="fam-level">
                  <span>Start Date: </span>
                  <span>{ '12/15/2025' }</span>
                </div>
              </div>
              <div className="fam-grid__1/1 fam-grid__1/2@l">
                <div className="fam-level fam-m-b--xs">
                  <span>End Date: </span>
                  <span className="">{ 'Unknown' }</span>
                </div>
              </div>
            </div>

            <div>
              <span className="fam-text--h5">Description:</span>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            </div>

          </div>


        </div>

      </div>
    </>
  )
}

export default IncidentSelected;