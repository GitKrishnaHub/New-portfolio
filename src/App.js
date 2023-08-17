import React from "react";
import { createBrowserRouter,Outlet,Route,RouterProvider , createRoutesFromElements,ScrollRestoration} from 'react-router-dom';
import Topnav from "./Components/Navbar/Topnav";
const Layout = () => {
  return (
    <div>
      <Topnav />
      <ScrollRestoration />
      <Outlet />
    </div>
  );
};

const App = () => {
  const router =createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout/>}>
      </Route>
    )
  );

  return (
   <div>
    <RouterProvider router={router}></RouterProvider>
   </div>
  );
};

export default App;
