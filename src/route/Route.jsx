
import { createBrowserRouter } from "react-router-dom";
import PhoneDetails from "../components/phone-details/PhoneDetails";
import Layout from "../layout/Layout";
import Favourite from "../pages/favourite/Favourite";
import Home from "../pages/home/Home";
import { Login } from "../pages/login/Login";

  const myRoute = createBrowserRouter([
    {
        path:'/',
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Home/>,
                loader: ()=>fetch('../phones.json')
            },
            {
                path:'/login',
                element: <Login/>
            },
            {
                path:'/favourite',
                element: <Favourite/>
            },
            {
                path:'/phone/:id',
                element: <PhoneDetails/>,
                loader: ()=>fetch('../phones.json') 
            }
        ]
        
    }
  ])


export default myRoute