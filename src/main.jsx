import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RegisterUser from "./Pages/RegisterUser.jsx";
import Contact from "./Pages/Contact.jsx";
import Info from "./Pages/Info.jsx";
import About from "./Pages/About.jsx";
import Login from "./Pages/Login.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/register",
        element: <RegisterUser />,
      },
      {
        path: "",
        element: <h1>Hello World</h1>,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/info",
        element: <Info />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
