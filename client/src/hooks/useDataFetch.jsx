import { useQuery } from "@tanstack/react-query";
import axiosPublic from "@/utils/axiosPublic";

const useDataFetch = (endpoint, options = {}) => {
    const { dependencies = [], enabled = true, ...queryOptions } = options;

    const { data, isLoading, isError, error, refetch } = useQuery({
        queryKey: [endpoint, ...dependencies],
        queryFn: async () => {
            try {
                if (!endpoint) return null;
                const res = await axiosPublic.get(endpoint);
                return res.data?.data;
            } catch (error) {
                const errorMessage =
                    error.response?.data?.message ||
                    error.message ||
                    "Failed to fetch data";
                // error message
                console.log(errorMessage);
                throw error;
            }
        },
        enabled: !!endpoint && enabled,
        ...queryOptions,
    });

    return {
        data,
        loading: isLoading,
        error: isError ? error : null,
        refetch,
    };
};

export default useDataFetch;
