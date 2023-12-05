
import * as React from 'react';

const Incidents = React.lazy(() => import('@app/pages/Incidents/Incidents.jsx'));
const IncidentsAlt = React.lazy(() => import('@app/pages/Incidents/Incidents-alt.jsx'));

const incidentsRoutes = [
  { 
    path: '/incidents',
    element: <Incidents/>
  },
  { 
    path: '/incidents-alt',
    element: <IncidentsAlt/>
  }
];

export default incidentsRoutes;