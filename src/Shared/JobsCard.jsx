

const JobsCard = ({job}) => {
    const {_id, title, location, jobType, category, salaryRange, description, company, requirements, responsibilities,hr_email, hr_name, company_logo} = job;
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img
                    className="w-fit"
                    src={company_logo}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
    );
};

export default JobsCard;