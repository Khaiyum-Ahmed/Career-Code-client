import { Link, useParams } from "react-router";
import UseAuth from "../../Hooks/UseAuth";

const JobApply = () => {
    const { id: jobId } = useParams();
    const { user } = UseAuth();
    console.log(jobId, user);

    const handleApplyForm= e=>{
        e.preventDefault()
        const form = e.target;
        const linkedin = form.linkedin.value;
        const github = form.github.value;
        const resume = form.resume.value;
        console.log(linkedin, github, resume)
    }


    return (
        <div className="py-12 ">
            <h3 className="text-4xl text-center font-bold py-8">Apply for this Job : <Link to={`/jobs/${jobId}`}>Details</Link></h3>
            <form onSubmit={handleApplyForm}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mx-auto">

                    <label className="label">Linkedin Link</label>
                    <input type="url" name="linkedin" className="input" placeholder="Linkedin profile link" />

                    <label className="label">GitHub Link</label>
                    <input type="url" name="github" className="input" placeholder="GitHub profile link" />

                    <label className="label">Resume Link</label>
                    <input type="url" name="resume" className="input" placeholder="Resume link" />

                    <button className="btn btn-neutral mt-4">Apply</button>
                </fieldset>
            </form>
        </div>
    );
};

export default JobApply;