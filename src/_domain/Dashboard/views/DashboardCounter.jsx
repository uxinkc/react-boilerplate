
const DashboardCounter = (_props) => {
  

  const TEMPLATE = (
    <>
      <div data-testid={ _props.data_testid } className="fam-box">
        <h3 data-testid="h3-title">{ _props.title || 'Dashboard Feature' }</h3>
        
      </div> 
    </>
  );

  return TEMPLATE;
};

export default DashboardCounter;