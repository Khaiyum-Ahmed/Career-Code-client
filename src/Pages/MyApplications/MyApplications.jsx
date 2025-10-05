import { Suspense } from "react";
import ApplicationsList from "./ApplicationsList";
import Loading from "../../Shared/Loading";
import UseAuth from "../../Hooks/UseAuth";
import useApplicationApi from "../../Services/useApplicationApi";



const MyApplications = () => {

    const {user}= UseAuth();
    const {myApplicationsPromise} = useApplicationApi()


    return (
        <div>
            <Suspense fallback={<Loading></Loading>}>
                <ApplicationsList myApplicationsPromise={myApplicationsPromise(user.email)}></ApplicationsList>
            </Suspense>
        </div>
    );
};

export default MyApplications;