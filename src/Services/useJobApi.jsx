import UseAxiosSecure from "./UseAxiosSecure";

const useJobApi = () => {
    const axiosSecure = UseAxiosSecure();
    const JobsCreatedByPromise = email =>{
        return axiosSecure.get(`/jobs?email=${email}`).then(res=>res.data)
    }
    return {
        JobsCreatedByPromise
    };
};

export default useJobApi;