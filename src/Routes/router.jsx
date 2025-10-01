import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Home/Register";
import LogIn from "../Shared/LogIn/LogIn";
import JobDetails from "../Pages/JobDetails/JobDetails";
import PrivateRoutes from "./PrivateRoutes";
import JobApply from "../Pages/JobApply/JobApply";
import MyApplications from "../Pages/MyApplications/MyApplications";


const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children:[
            {
                index: true,
                Component:Home
            },
            {
                path:'/jobs/:id',
                Component:JobDetails,
                loader: ({params})=> fetch(`http://localhost:3000/jobs/${params.id}`)
            },
            {
                path:'jobApply/:id',
                element:<PrivateRoutes><JobApply></JobApply></PrivateRoutes>
            },
            {
                path:'myApplications',
                element:<PrivateRoutes><MyApplications></MyApplications></PrivateRoutes>
            },
            {
                path:"/register",
                Component:Register
            },
            {
                path:"/login",
                Component:LogIn
            }
        ]
    },
]);
export default router;