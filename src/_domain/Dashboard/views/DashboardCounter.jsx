
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "@dom/Dashboard/store/dashboard.slice";


const Dashboard = (_props) => {
  
  const dispatch = useDispatch();
  const bigCount = useSelector((_state) => _state.dashboard.count);

  const up = (_val) => {
    dispatch(increment(_val));
  }
  const down = (_val) => {
    dispatch(decrement(_val));
  }
  const bad = (_val) => {
    dispatch(increment(_val))
  }

  const TEMPLATE = (
    <>
      <div data-testid={ _props.data_testid } className="fam-box">
        <h3 data-testid="h3-title">{ _props.title || 'Dashboard Feature' }</h3>
        
        <span data-testid="incident_name" className="fam-text-size--7">{ bigCount + Number(_props.propsCountInit || 0 ) }</span>
        <div className="fam-level fam-level--auto-grow">
          <button data-testid="incBtn" onClick={ ()=> up(5) } className="fam-btn fam-btn--secondary">+</button>
          <button data-testid="decBtn" onClick={ ()=> down(1) } className="fam-btn fam-btn--secondary">-</button>
        </div>
      </div> 
    </>
  );

  return TEMPLATE;
};

export default Dashboard;