import axios from "axios";
import { useLoaderData, useParams } from "react-router";
import Swal from "sweetalert2";

const ShowApplications = () => {
    const { job_id } = useParams()
    console.log(job_id)
    const app_ids = useLoaderData();
    const handleStatusChange = (e, app_id) => {
        console.log(e.target.value, app_id);

        axios.patch(`http://localhost:3000/applications/${app_id}`, { status: e.target.value })
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Application Status Updated",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div>
            <h2>app_id for: {app_ids.length}</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Applicant Email</th>
                            <th>GitHub</th>
                            <th>Resume</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* rows */}
                        {
                            app_ids.map((app_id, idx) => <tr key={app_id._id}>
                                <th>{idx + 1}</th>
                                <td>{app_id.applicant}</td>
                                <td>{app_id.github}</td>
                                <td>{app_id.resume}</td>
                                <td>
                                    <select onChange={e => handleStatusChange(e, app_id._id)} defaultValue={app_id.status} className="select">
                                        <option disabled={true}>Status</option>
                                        <option>Pending</option>
                                        <option>Interview</option>
                                        <option>Hired</option>
                                        <option>Reject</option>
                                    </select>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ShowApplications; 