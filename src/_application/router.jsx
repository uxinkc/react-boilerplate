
import { createBrowserRouter } from "react-router-dom";

import PublicLayout from "@app/layouts/PublicLayout.jsx";
import DefaultLayout from "@app/layouts/DefaultLayout.jsx";

import publicRoutes from '@app/pages/Public/routes/Public.routes.jsx';
import dashboardRoutes from "@app/pages/Dashboard/routes/dashboard.routes.jsx";
import incidentsRoutes from '@app/pages/Incidents/routes/incidents.routes.jsx';
import referenceDataRoutes from "@app/pages/Reference-Data/routes/reference-data.routes.jsx";

const allRoutes = [
  {
    path: '/public',
    element: <PublicLayout/>,
    children: [
    ...publicRoutes
    ]
  },
  {
    path: '/',
    element: <DefaultLayout/>,
    children: [
    ...dashboardRoutes,
    ...incidentsRoutes,
    ...referenceDataRoutes
    ]
  },
  { path: '*', element: (<h1>Whoops! 404</h1>) }
];

export const router = createBrowserRouter( allRoutes, { basename: import.meta.env.BASE_URL } );