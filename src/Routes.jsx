import { createBrowserRouter } from "react-router-dom";
import Main from "./layouts/Main";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import CheckOut from "./pages/CheckOut/CheckOut";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/signup',
            element: <SignUp />
        },
        {
            path: '/checkout/:id',
            element: <CheckOut />,
            loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
      ]
    },
  ]);


  export default router;