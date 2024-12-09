

import axios from "axios";

export const axiosPublic = axios.create({
    baseURL:'https://assinment-twelve-server.vercel.app',
    // baseURL:[ 'https://assinment-twelve-server.vercel.app','http://localhost:5000']
    // baseURL:  'http://localhost:5000/',
})      
const useAxiosPublic = () => {
    return axiosPublic;
}

export default useAxiosPublic;
// 'https://assinment-twelve-server.vercel.app',