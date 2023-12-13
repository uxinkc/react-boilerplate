
import SearchResults from '@dom/Search/views/results/SearchResults.jsx';

const IncidentsSearchResults = (_props) => {

  const TEMPLATE = (
    <>
      <SearchResults 
        emitCheckSelected={_props.emitCheckSelected}
        USE_BORDER_SCROLL={_props.USE_BORDER_SCROLL}
        BORDER_SCROLL_HEIGHT={_props.BORDER_SCROLL_HEIGHT}
        USE_EXPAND={_props.USE_EXPAND}
        EXPANDED={_props.EXPANDED}
      />
    </>
  );
  return TEMPLATE;
}

export default IncidentsSearchResults;