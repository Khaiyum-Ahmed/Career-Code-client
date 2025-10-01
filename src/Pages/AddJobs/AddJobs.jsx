
const AddJobs = () => {
    return (
        <div className="py-20">
            <h3 className="font-bold text-2xl text-center py-6">Please add a job</h3>
            <form>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs mx-auto border p-4">
                    <legend className="fieldset-legend">Add Job</legend>

                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email" />

                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Password" />

                    <button className="btn btn-info font-bold mt-4">Add Job</button>
                </fieldset>
            </form>
        </div>
    );
};

export default AddJobs;