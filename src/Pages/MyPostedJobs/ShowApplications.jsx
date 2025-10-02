import { useLoaderData, useParams } from "react-router";

const ShowApplications = () => {
    const {job_id} = useParams()
    console.log(job_id)
    const applications = useLoaderData()
    return (
        <div>
            <h2>Application for: {applications.length}</h2>
        </div>
    );
};

export default ShowApplications; 