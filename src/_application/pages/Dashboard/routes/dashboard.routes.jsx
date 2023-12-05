
import * as React from 'react';

const Dashboard = React.lazy(() => import('@app/pages/Dashboard/Dashboard.jsx'));

const dashboardRoutes = [
  { 
    path: '/',
    element: <Dashboard/>
  }
];

export default dashboardRoutes;