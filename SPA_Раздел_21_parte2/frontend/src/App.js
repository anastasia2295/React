import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import RootLayout from "./pages/Root";
import EventDetail, { 
  loader as eventDetailLoader,
  action as deleteEventAction
 } from "./pages/EventDetail";
import NewEvent, {action as NewEventAction} from "./pages/NewEvent";
import EditEvent from "./pages/EditEvent";
import EventsRootLayout from "./pages/EventsRoot";
import EventsPage, {loader as eventsLoader} from "./pages/Event";



const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children: [
     {index: true, element: <HomePage/>},
     {path: "events", 
     element: <EventsRootLayout/>,
     children: [
     {index: true, 
      element: <EventsPage/>, 
      loader: eventsLoader
    },
     {
      path: ":eventId",
      id: "event-detail",
      loader: eventDetailLoader,
      children:[
         {index: true, 
          element:<EventDetail/>,
          action: deleteEventAction
          },
         {path: "edit", element:<EditEvent/>}, 
      ]
     },
     {path: "new", element:<NewEvent/>, action: NewEventAction},
     ]
    }
    ]
  }
])  


function App() {
  return <RouterProvider router={router}/>;
}

export default App;
