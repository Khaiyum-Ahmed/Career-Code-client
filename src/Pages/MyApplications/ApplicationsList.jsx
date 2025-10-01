import { use } from "react";
import ApplicationRow from "./ApplicationRow";

const ApplicationsList = ({ myApplicationsPromise }) => {
    const applications = use(myApplicationsPromise)
    return (
        <div>
            <h3 className="text-2xl font-bold text-center py-8">Jobs Applied so far: {applications.length}</h3>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                Serial No
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            applications.map((application,index) => <ApplicationRow application={application} index={index} key={application._id}></ApplicationRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ApplicationsList;