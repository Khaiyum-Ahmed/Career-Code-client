import { Form } from "react-router";

const AddJobs = () => {
    
    const handleAddJob = e=>{
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries())
        console.log(data)
    }
    return (
        <div className="py-20">
            <h3 className="font-bold text-2xl text-center py-6">Please add a job</h3>
            <form onSubmit={handleAddJob}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xl mx-auto border p-4">
                    <legend className="fieldset-legend">Add Job</legend>

                    <label className="label">Job Title</label>
                    <input type="text" name="title" className="input w-full" placeholder="Job Title" />

                    <label className="label">Company</label>
                    <input type="text" name="company" className="input w-full" placeholder="Company Name" />

                    <label className="label">Location</label>
                    <input type="text" name="location" className="input w-full" placeholder="Company Location" />

                    <label className="label">Company Logo</label>
                    <input type="url" name="company_logo" className="input w-full" placeholder="Company Logo URL" />

                    {/* Job Type */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xl border p-4">
                        <legend className="fieldset-legend">Job Type</legend>
                        <div className="filter">
                            <input className="btn filter-reset" type="radio" name="jobType" aria-label="All" />
                            <input className="btn" type="radio" name="jobType" aria-label="On-Site" />
                            <input className="btn" type="radio" name="jobType" aria-label="Remote" />
                            <input className="btn" type="radio" name="jobType" aria-label="Hybrid" />
                        </div>

                    </fieldset>
                    {/* Job Category */}

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xl border p-4">
                        <legend className="fieldset-legend">Job Category</legend>
                        <select defaultValue="Job Category" name="category" className="select w-full">
                            <option disabled={true}>Job Category</option>
                            <option>Engineering</option>
                            <option>Marketing</option>
                            <option>Finance</option>
                            <option>Accounting</option>
                            <option>Web Development</option>
                            <option>SEO Expert</option>
                        </select>
                    </fieldset>
                    {/* Application Deadline */}

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xl border p-4">
                        <legend className="fieldset-legend">Application Deadline</legend>
                        <input type="date" name="date" className="input w-full" />

                    </fieldset>
                    {/* Salary Range */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                        <legend className="fieldset-legend">Salary Range</legend>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
                            <div>
                                <label className="label">Minimum Salary</label>
                                <input type="text" name="minSalary" className="input" placeholder="Minimum Salary" />
                            </div>

                            <div>
                                <label className="label">Maximum Salary</label>
                                <input type="text" name="maxSalary" className="input" placeholder="Maximum Salary" />
                            </div>

                            <div>
                                <label className="label">Currency</label>
                                <select defaultValue="Select a Currency" name="currency" className="select">
                                    <option disabled={true}>Select a Currency</option>
                                    <option>BDT</option>
                                    <option>USD</option>
                                    <option>EUR</option>
                                    <option>INR</option>
                                </select>
                            </div>
                        </div>
                    </fieldset>
                    {/* Job Description */}

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xl border p-4">
                        <legend className="fieldset-legend">Job Description</legend>
                        <textarea className="textarea w-full" name="description" placeholder="Job Description"></textarea>

                    </fieldset>
                    {/* Job Requirements */}

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xl border p-4">
                        <legend className="fieldset-legend">Job Requirements</legend>
                        <textarea className="textarea w-full" name="requirements" placeholder="Job Requirements (separate by comma)"></textarea>

                    </fieldset>
                    {/* Job Responsibilities */}

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xl border p-4">
                        <legend className="fieldset-legend">Job Responsibilities</legend>
                        <textarea className="textarea w-full" name="Responsibilities" placeholder="Job Responsibilities (separate by comma)"></textarea>

                    </fieldset>
                    {/* HR related info */}

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xl border p-4">
                        <legend className="fieldset-legend">HR Related Info</legend>
                        <label className="label">HR Name</label>
                        <input type="text" name="hr_name" className="input w-full" placeholder="HR Name" />

                        <label className="label">HR Email</label>
                        <input type="email" name="hr_email" className="input w-full" placeholder="HR Email" />

                    </fieldset>

                    <button className="btn btn-info font-bold mt-4">Add Job</button>
                </fieldset>
            </form>
        </div>
    );
};

export default AddJobs;