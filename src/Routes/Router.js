import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home";
import Services from "../Pages/Services/Services";

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
            }
        ]
    }
])