import { Suspense } from "react";
import UseAuth from "../../Hooks/UseAuth";
import MyPostedJobList from "./MyPostedJobList";
import Loading from "../../Shared/Loading";
import useJobApi from "../../Services/useJobApi";

const MyPostedJobs = () => {
    const {user}=UseAuth();
    const {JobsCreatedByPromise} = useJobApi()

    return (
        <div>
            <Suspense fallback={<Loading></Loading>}>
                <MyPostedJobList JobsCreatedByPromise={JobsCreatedByPromise(user.email, user.accessToken)}></MyPostedJobList>
            </Suspense>
        </div>
    );
};

export default MyPostedJobs;