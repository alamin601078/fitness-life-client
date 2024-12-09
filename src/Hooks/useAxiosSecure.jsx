import axios from "axios";


export const axiosSecure = axios.create({
    // baseURL:  'http://localhost:5000/',
    // baseURL: [ 'https://assinment-twelve-server.vercel.app','http://localhost:5000']
    baseURL:'https://assinment-twelve-server.vercel.app',
})
const useAxiosSecure = () => {

    return axiosSecure;
};

export default useAxiosSecure;