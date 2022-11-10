import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import AddService from "../Pages/AddReview/AddService";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyReview from "../Pages/MyReview/MyReview";
import Private from "../Pages/PrivateRoute/Private";
import Registration from "../Pages/Registration/Registration";
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
                loader: ()=> fetch('https://sports-lens-assignment.vercel.app/services')
            },
            {
                path: '/services/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({params})=> fetch(`https://sports-lens-assignment.vercel.app/services/${params.id}`)
            },
            {
                path:'/login',
                element: <Login></Login>
            }

            ,
            {
                path: '/registration',
                element: <Registration></Registration>
            },
            {
                path: '/myreview',
                element:<MyReview></MyReview>,
                fetch: () => ('https://sports-lens-assignment.vercel.app/review')
            },

            {
                path: '/addservice',
                element: <Private><AddService></AddService></Private>,
            },

            {
                path: '/blog',
                element: <Blog></Blog>
            }
           
        ]
    }
])