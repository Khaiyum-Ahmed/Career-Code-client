import { Suspense } from "react";
import UseAuth from "../../Hooks/UseAuth";
import MyPostedJobList from "./MyPostedJobList";
import { JobsCreatedByPromise } from "../../Services/jobsAPI";
import Loading from "../../Shared/Loading";

const MyPostedJobs = () => {
    const {user}=UseAuth();

    return (
        <div>
            <Suspense fallback={<Loading></Loading>}>
                <MyPostedJobList JobsCreatedByPromise={JobsCreatedByPromise(user.email)}></MyPostedJobList>
            </Suspense>
        </div>
    );
};

export default MyPostedJobs;