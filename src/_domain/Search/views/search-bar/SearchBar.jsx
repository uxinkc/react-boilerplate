import { useNavigation } from '@inf/hooks/useNavigation.js';

const SearchBar = (_props) => {

  const { goto } = useNavigation();

  const TEMPLATE = (
    
    <div className="fam-search" role="search">
      <div className="fam-search__bd eis-search-stretch">
        <div className="fam-search__entry fam-search__entry--grow">
          <label className="fam-search__label fam-search__label--sr-only" htmlFor="UNIQUE-ID-yughsjj6j">Label</label>
          <input className="fam-input fam-search__input" id="UNIQUE-ID-yughsjj6j" type="search" name="search"/>
        </div>
        <div className="fam-search__submit">
          <button onClick={()=>goto('/incidents')} className="fam-btn fam-search__btn" type="submit">
            <span className="fam-search__text">Search</span>
          </button>
        </div>
      </div>
    </div>
  );
  return TEMPLATE;
};

export default SearchBar;