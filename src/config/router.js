import { RouterProvider, createBrowserRouter ,Outlet, useNavigate } from "react-router-dom";
import CardDetails from "../screen/CardDetails/CardDetails";
import ProfileUpdate from "../screen/ProfileUpdate/Profile";
import addToCart from "../screen/addToCart/App"
import Header from "../reusable/header/Header";
import Login from '../screen/Login'
import Signup from '../screen/Signup'
import Todos from '../screen/Todos'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useState,useEffect } from "react";
import Cart from "../screen/addToCart/App";
// import Footer from "../reusable/footer/Footer";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [],
  },
  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/register",
    element: <Signup />,
  },
  {
    path: "/Profile",
    element: <ProfileUpdate />,
  },

  {
    path: "/additem",
    element: <Todos />,
  },
  {
    path: "/addtocart",
    element: <Cart/>,
  },

  {
    path: "/card/:Id",
    element: <CardDetails />,
  },
]);
function Layout(){
  const navigate =useNavigate()
   const [user, setUser] = useState(null);

   useEffect(() => {
     onAuthStateChanged(auth, (user) => {
       if(user){
         setUser(user);
     }else{
      setUser(null)
     }
       
     })
     
   }, []);

   useEffect(() => {
     const pathname = window.location
    //  console.log(pathname,"pathname")
     if(user){
      if(pathname ==="/login" || pathname === "/register"){
        navigate("/")
      }
      
     }
   }, [window.location.pathname, user]);

  return(
    <div>
      <Header/>
      <Outlet/>
    </div>
  )

}
function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
