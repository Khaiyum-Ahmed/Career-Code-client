import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Home/Register";
import LogIn from "../Shared/LogIn/LogIn";
import JobDetails from "../Pages/JobDetails/JobDetails";
import PrivateRoutes from "./PrivateRoutes";
import JobApply from "../Pages/JobApply/JobApply";
import MyApplications from "../Pages/MyApplications/MyApplications";
import AddJobs from "../Pages/AddJobs/AddJobs";
import MyPostedJobs from "../Pages/MyPostedJobs/MyPostedJobs";
import ShowApplications from "../Pages/MyPostedJobs/ShowApplications";


const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/jobs/:id',
                Component: JobDetails,
                loader: ({ params }) => fetch(`https://career-code-client.vercel.app/jobs/${params.id}`)
            },
            {
                path: 'jobApply/:id',
                element: <PrivateRoutes><JobApply></JobApply></PrivateRoutes>
            },
            {
                path: 'myApplications',
                element: <PrivateRoutes><MyApplications></MyApplications></PrivateRoutes>
            },
            {
                path: 'addJob',
                element: <PrivateRoutes><AddJobs></AddJobs></PrivateRoutes>
            },
            {
                path:'myPostedJobs',
                element:<PrivateRoutes><MyPostedJobs></MyPostedJobs></PrivateRoutes>
            },
            {
                path:'applications/:job_id',
                element:<PrivateRoutes><ShowApplications></ShowApplications></PrivateRoutes>,
                loader: ({params})=> fetch(`https://career-code-client.vercel.app/applications/jobs/${params.job_id}`)
            },
            {
                path: "/register",
                Component: Register
            },
            {
                path: "/login",
                Component: LogIn
            }
        ]
    },
]);
export default router;