import axios from "axios";
import UseAuth from "../Hooks/UseAuth";

const instance = axios.create({
    baseURL:'http://localhost:3000'
})

const UseAxiosSecure = () => {
    const {user} = UseAuth();
    instance.interceptors.request.use(config =>{
        config.headers.authorization = `Bearer ${user.accessToken}`
        return config;
    })
    return instance;
};

export default UseAxiosSecure;