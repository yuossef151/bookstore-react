import { createBrowserRouter, Navigate } from "react-router-dom";
import Mainlayout from "../layouts/Mainlayout";
import Home from "../page/home/Home";
import Books from "../page/books/Books";
import About from "../page/About/About";
import Login from "../page/login/Login";
import Regester from "../page/sign/Regester";
import GuestRoute from "../Components/GuestRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "Books",
        element: <Books />,
      },
      {
        path: "About",
        element: <About />,
      },
      {
        path: "login",
        element: (
          <GuestRoute>
            <Login />
          </GuestRoute>
        ),
      },
      {
        path: "Regester",
        element: (
          <GuestRoute>
           <Regester />
          </GuestRoute>
        ),
      },
    ],
  },
]);

export default router;
