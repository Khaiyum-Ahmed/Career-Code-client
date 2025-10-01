import { FaLocationDot } from "react-icons/fa6";
import { HiOutlineCurrencyBangladeshi } from "react-icons/hi";
import { Link, useLoaderData } from "react-router";

const JobDetails = () => {
    const { _id, title, location, jobType, category, salaryRange, description, company, requirements, responsibilities, hr_email, hr_name, company_logo } = useLoaderData();
    return (
        <div className="py-12">
            <h1 className="text-5xl font-bold text-center">Details of: {title}</h1>
            <div className="card bg-base-100 w-xl shadow-sm mx-auto mt-10 p-3">
                <div className="flex items-center gap-3">
                    <figure>
                        <img
                            className="w-20"
                            src={company_logo}
                            alt="Shoes" />
                    </figure>
                    <div>
                        <h3 className="text-4xl font-semibold">{company}</h3>
                        <p className="flex items-center gap-2 text-gray-500"><FaLocationDot />{location}</p>
                    </div>
                </div>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <div className="flex items-center justify-between">
                        <h4 className="font-semibold ">Job Type: {jobType}</h4>
                        <h5 className="font-medium text-gray-700">Category: {category}</h5>
                    </div>
                    <p className="flex items-center gap-0.5 font-medium text-gray-600">Salary: {salaryRange.min}-{salaryRange.max}  <HiOutlineCurrencyBangladeshi />{salaryRange.currency}</p>
                    <p>{description}</p>
                    <div className="card-actions">
                        {
                            requirements.map((skill, idx) => <div key={idx} className="badge badge-outline">{skill}</div>)
                        }
                    </div>
                    <div className="card-actions">
                        {
                            responsibilities.map((res, idx) => <div key={idx} className="badge badge-ghost">{res}</div>)
                        }
                    </div>
                    <div className="py-5">
                        <h3 className="font-semibold ">HR_NAME : {hr_name}</h3>
                        <h3 className="font-semibold ">HR_EMAIL : {hr_email}</h3>
                    </div>
                    <div className="justify-end card-actions">
                        <Link to={`/jobApply/${_id}`}><button className="btn btn-accent font-semibold text-black">Apply Now</button></Link>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default JobDetails;