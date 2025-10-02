import { use } from "react";

const MyPostedJobList = ({ JobsCreatedByPromise }) => {
    const jobs = use(JobsCreatedByPromise)
    return (
        <div>
            <h3>My Posted Job List so far: {jobs.length}</h3>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Title</th>
                            <th>Location</th>
                            <th>Company</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* rows */}
                       {
                        jobs.map((job,idx) =>  <tr key={job._id}>
                            <th>{idx + 1}</th>
                            <td>{job.title}</td>
                            <td>{job.location}</td>
                            <td>{job.company}</td>
                        </tr>)
                       }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPostedJobList;