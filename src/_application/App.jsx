
import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from '@app/router.jsx';

import WhiteOut from '@ui/components/white-out/white-out';
import Disclaimer from '@ui/partials/Disclaimer';
import AlertSystem from '@ui/partials/AlertSystem';


function App() {

  return (
    <>
      <WhiteOut/>
      <Disclaimer/>
      <AlertSystem/>
      
      <Suspense fallback={<>...</>}>
        <RouterProvider
          router={router}
          fallbackElement={<h2>Loading...</h2>}
        />
      </Suspense>
    </>
  )
}

export default App