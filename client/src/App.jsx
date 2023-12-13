import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Header from "./components/Header.jsx";
import AllProducts from "./pages/AllProducts.jsx";
import Login from "./pages/Login.jsx"
import SignUp from "./pages/SignUp.jsx"
import Profile from "./pages/Profile.jsx"
import AdminDashboard from "./pages/AdminDashboard.jsx"
import About from "./pages/About.jsx"
import Basket from "./pages/Basket.jsx"
import "./index.css";
import Footer from "./components/Footer.jsx";
import EditProfile from "./pages/EditProfile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Header />
        <Home />
        <Footer/>
      </div>
    ),
  },
  {
    path: "/all-products",
    element: (
      <div>
        <Header />
        <AllProducts />
        <Footer/>
      </div>
    ),
  },
  {
    path: "/login",
    element: (
      <div>
        <Header />
        <Login />
      </div>
    )
  },
  {
    path: "/signup",
    element: (
      <div>
        <Header />
        <SignUp />
      </div>
    )
  },
  {
    path: "/profile",
    element: (
      <div>
        <Header />
        <Profile />
        <Footer/>
      </div>
    )
  },
  {
    path: "/edit-profile",
    element: (
      <div>
        <Header />
        <EditProfile />
        <Footer/>
      </div>
    )
  },
  {
    path: "/admin",
    element: (
      <div>
        <Header />
        <AdminDashboard />
        <Footer/>
      </div>
    )
  },
  {
    path: "/about",
    element: (
      <div>
        <Header />
        <About/>
        <Footer/>
      </div>
    )
  },
  {
    path: "/basket",
    element: (
      <div>
        <Header />
        <Basket/>
      </div>
    )
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
