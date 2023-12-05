
import { useNavigation } from '@inf/hooks/useNavigation';

import Page from '@app/pages/Page.jsx';

const Dashboard = () => {

  const { goto } = useNavigation();
  
  const TEMPLATE = (
    <Page>

      <div className="fam-m-t--m fam-m-b--m">

        <div className="fam-level--none@m fam-level--full@l fam-level--justify-between">
          <h1 className="fam-m--none">Dashboard</h1>

          <span>
            <div className="fam-search" role="search">
              <div className="fam-search__bd eis-search-stretch__dashboard">
                <div className="fam-search__entry fam-search__entry--grow">
                  <label className="fam-search__label fam-search__label--sr-only" htmlFor="UNIQUE-ID-yughsjj6j">Label</label>
                  <input className="fam-input fam-search__input" id="UNIQUE-ID-yughsjj6j" type="search" name="search"/>
                </div>
                <div className="fam-search__entry">
                  <label className="fam-search__label fam-search__label--sr-only" htmlFor="UNIQUE-ID-dfyu65ppj">Label</label>
                  <select className="fam-select fam-search__select" name="UNIQUE-NAME-dfyu65ppj" id="UNIQUE-ID-dfyu65ppj">
                    <option value="sdsd" defaultValue>Incidents</option>
                    <option value="l;kjlk">Thing One</option>
                    <option value="qwer">Thing Two</option>
                  </select>
                </div>
                <div className="fam-search__submit">
                  <button className="fam-btn fam-search__btn" type="submit">
                    <span className="fam-search__text">Search</span>
                  </button>
                </div>
              </div>
            </div>
          </span>

        </div>
      </div>



      <div className="fam-section fam-box fam-shadow--raised">
        <div className="fam-section__bd fam-m-b--m">
          <h2>H2 Header:</h2>
          
          <div className="fam-text-align--right">
            <button data-testid="view_public_btn" onClick={()=> goto('/public')} className="fam-btn fam-btn--secondary">View Public</button>
          </div>

        </div>
      </div>
      
    </Page>
  );

  return TEMPLATE;
};

export default Dashboard;