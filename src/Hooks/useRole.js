import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useRole = () => {

    const { user, loading } = useAuth();
    console.log(user?.email,loading);
    const axiosSecure = useAxiosSecure();
    const { data: role= '', isLoading } = useQuery({
        queryKey: ['role'],
        enabled:  !!user?.email,
        queryFn: async () => {
            const {data} = await axiosSecure.get(`/users/${user?.email}`);
            console.log(data);
            return data.role;
        }
    });
    return [role ,isLoading]
};

export default useRole;