import { Link, useLoaderData } from "react-router";

const JobDetails = () => {
    const {_id, title, location, jobType, category, salaryRange, description, company, requirements, responsibilities, hr_email, hr_name, company_logo} = useLoaderData();
    return (
        <div className="py-12">
            <h1 className="text-5xl font-bold text-center">Details of: {title}</h1>
            <Link to={`/jobApply/${_id}`}><button className="btn btn-primary">Apply Now</button></Link>
        </div>
    );
};

export default JobDetails;