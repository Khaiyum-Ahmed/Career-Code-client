import React, { use } from "react";
import JobsCard from "../../Shared/JobsCard";

const HotJobs = ({jobsPromise}) => {
    const jobs = use(jobsPromise)
    return (
        <div className="py-28">
            <h1 className="py-12 text-2xl text-center font-bold">Hot Jobs of the Day {jobs.length}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {
                    jobs.map(job => <JobsCard key={job._id} job={job}></JobsCard>)
                }
            </div>
        </div>
    );
};

export default HotJobs;