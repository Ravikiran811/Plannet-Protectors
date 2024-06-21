import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import FrontView from './front/frontView';
import Problems from './front/problems';
import AirPollution from './front/issues/airPollution';

import Comment from './front/issues/comments';
import AddComments from './front/issues/addcomments';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <FrontView />,
    },
    
    {
      path: "/problems",
      children: [
        {
          index: true,
          element: <Problems />,
        },
        {
          path: "airpollution",element:<AirPollution />,
          children: [
            {
              path:":problem" ,
            },
      
            
          ],
        },
        {
          path : "addcomments", children :[
            {index:true,element :<AddComments />},
            { path: ":id", element: <AddComments /> },
          ]

          
        },
        {
          path: "plasticpollution",
          element: <AirPollution />,
          children: [
            {
              path:":problem",
            },
            
            
          ],
        },
        {
          path: "globalwarming",
          element: <AirPollution />,children: [
            {
              path:":problem",
            },
            
            
          ],
        },
        {
          path: "deforestation",
          element: <AirPollution />,children: [
            {
              path:":problem",
            },
            
            
          ],
        },
        {
          path: "waterpollution",
          element: <AirPollution />,children: [
            {
              path:":problem",
            },
            
            
          ],
        },
        {
          path: "wastemanagement",
          element: <AirPollution />,children: [
            {
              path:":problem",
            },
            
            
          ],
        },
        {
          path: "chemicalpollution",
          element: <AirPollution />,children: [
            {
              path:":problem",
            },
            
            
          ],
        },
        {
          path: "desertification",
          element: <AirPollution />,children: [
            {
              path:":problem",
            },
            
            
          ],
        },
        {
          path: "oceanacidification",
          element: <AirPollution />,children: [
            {
              path:":problem",
            },
            
            
          ],
        },
        {
          path: "ozonedepletion",
          element: <AirPollution />,children: [
            {
              path:":problem",
            },
            
            
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
