import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import NotFound from "./components/NotFound";
import Root from "./components/Root";
import Home from "./components/Home";
import BookDetail from "./components/BookDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement: <NotFound></NotFound>,

    children:[
      {
        path: "/",
        element: <Home></Home> ,
      },

      {
        path: "/book/:id",
        element: <BookDetail></BookDetail> ,
      },

      {
        path: "/listed",
        element: <BookDetail></BookDetail> ,
      },
      
    ],

  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);  