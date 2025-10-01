import { Suspense } from "react";
import ApplicationsList from "./ApplicationsList";
import Loading from "../../Shared/Loading";
import UseAuth from "../../Hooks/UseAuth";
import { myApplicationsPromise } from "../../Services/Firebase/applicationsApi";


const MyApplications = () => {

    const {user}= UseAuth();


    return (
        <div>
            <Suspense fallback={<Loading></Loading>}>
                <ApplicationsList myApplicationsPromise={myApplicationsPromise(user.email)}></ApplicationsList>
            </Suspense>
        </div>
    );
};

export default MyApplications;