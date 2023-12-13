
import * as React from 'react';

const Incidents = React.lazy(() => import('@app/pages/Incidents/Incidents.jsx'));
const Incidents2 = React.lazy(() => import('@app/pages/Incidents/Incidents-2.jsx'));
//const Incidents3 = React.lazy(() => import('@app/pages/Incidents/Incidents-3.jsx'));
const IncidentsInitial = React.lazy(() => import('@app/pages/Incidents/Incidents-initial.jsx'));
const IncidentsAdd = React.lazy(()=> import('@app/pages/Incidents/Incidents-3-Add.jsx'));

const incidentsRoutes = [
  { 
    path: '/incidents',
    element: <Incidents/>
  },
  { 
    path: '/incidents-2',
    element: <Incidents2/>
  },
  { 
    path: '/incidents-initial',
    element: <IncidentsInitial/>
  },
  { 
    path: '/incident-add',
    element: <IncidentsAdd/>
  }
];

export default incidentsRoutes;