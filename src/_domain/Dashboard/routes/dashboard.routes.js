
import * as React from 'react';

const Dashboard = React.lazy(() => import('@/_domain/Dashboard/views/DashboardCounter'));

const dashboardRoutes = [
  { 
    path: '/dashboardXX',
    element: <Dashboard />,
  }
]

export default dashboardRoutes