import { FaLocationDot } from "react-icons/fa6";
import { HiOutlineCurrencyBangladeshi } from "react-icons/hi";
import { Link } from "react-router";


const JobsCard = ({ job }) => {
    const { _id, title, location, jobType, category, salaryRange, description, company, requirements, responsibilities, company_logo } = job;
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
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
                <div className="justify-end card-actions">
                    <Link to={`/jobs/${_id}`}><button className="btn btn-primary">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default JobsCard;