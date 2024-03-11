import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import Events from "./pages/Events";
import EventDetail from "./pages/EventDetail";
import NewEvent from "./pages/NewEvent";
import EditEvent from "./pages/EditEvent";



const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children: [
     {index: true, element: <HomePage/>},
     {path: "events", element: <Events/>},
     {path: "events/:event.id", element:<EventDetail/>},
     {path: "events/new", element:<NewEvent/>},
     {path: "events/:eventId/edit", element:<EditEvent/>}
    ]
  }
])  


function App() {
  return <RouterProvider router={router}/>;
}

export default App;
