import { createBrowserRouter, redirect } from "react-router-dom";
import App from "./pages/App";
import Login from "./pages/login/Login";
import Home from "./pages/Home/";
import Search from "./pages/search";
import Detail from "./pages/detail";
import ProtectedRoute from "./pages/protected";
import AuthProvider from "./hooks/Auth";

export default createBrowserRouter([
{
  element: <AuthProvider />
},
  {
    path: "/error",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <ProtectedRoute><Home /></ProtectedRoute>,
  },
  {
    path: "/search",
    element: <ProtectedRoute><Search /></ProtectedRoute>,
  },
  {
    path: "/detail",
    element:<ProtectedRoute><Detail /></ProtectedRoute> ,
  },
]);
