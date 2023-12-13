
import * as React from 'react';

const ReferenceData = React.lazy(() => import('@app/pages/Reference-Data/Reference-Data.jsx') );

const referenceDataRoutes = [
  { 
    path: '/reference-data',
    element: <ReferenceData/>
  }
];

export default referenceDataRoutes;