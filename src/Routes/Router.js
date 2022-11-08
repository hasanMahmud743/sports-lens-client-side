import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Services from "../Pages/Services/Services";
import ServiceDetails from "../Pages/ServiseDetails/ServiceDetails";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>

            },

            {
                path: '/services',
                element: <Services></Services>,
                loader: ()=> fetch('http://localhost:5300/services')
            },
            {
                path: '/services/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({params})=> fetch(`http://localhost:5300/services/${params.id}`)
            },
            {
                path:'/login',
                element: <Login></Login>
            }
        ]
    }
])