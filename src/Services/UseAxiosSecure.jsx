import axios from "axios";
import UseAuth from "../Hooks/UseAuth";

const instance = axios.create({
    baseURL:'http://localhost:3000'
})

const UseAxiosSecure = () => {
    const {user, logOut} = UseAuth();
    instance.interceptors.request.use(config =>{
        config.headers.authorization = `Bearer ${user.accessToken}`
        return config;
    });
    // response interceptor
    instance.interceptors.response.use(response=>{
        return response
    }, error=>{
        if(error.status ===401 || error.status === 403){
            logOut()
            .then(()=>{
                console.log('user sign out for 401 status code')
            })
            .catch(error=>{
                console.log(error)
            })
        }
        return Promise.reject(error)
    });
    return instance;
};

export default UseAxiosSecure;