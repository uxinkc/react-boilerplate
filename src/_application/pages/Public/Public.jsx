
import { useNavigation } from '@inf/hooks/useNavigation';
import Page from '@app/pages/Page.jsx';

const Public = () => {

  const { goto } = useNavigation();
  
  const TEMPLATE = (
    <Page>
      <h1>Welcome Public People!</h1>
      <p className="fam-m-t--l"><button onClick={()=> goto('/')} className="fam-btn fam-btn--primary" role="button">Login</button></p>
    </Page>
  );

  return TEMPLATE;
};

export default Public;