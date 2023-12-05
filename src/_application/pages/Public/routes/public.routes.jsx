
import * as React from 'react';

const Public = React.lazy(() => import('@app/pages/Public/Public.jsx'));

const publicRoutes = [
  { 
    path: '/public',
    element: <Public/>
  }
];

export default publicRoutes;