import React, {useEffect} from 'react';

const Page = props => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main id="main-content">
      <div className="fam-section fam-section--fullscreen">
        <div className="fam-section__bd">

          { props.children }
        
        </div>
      </div>
    </main>
  );
}

export default Page;