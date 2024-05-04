import { useQuery } from "@tanstack/react-query"
import axios from 'axios';

export const useFetch = (url: string, key: string) => {
    const cacheProperties = {
        cacheTime: 86400000, // saved for 1 day
        staleTime: 86400000, // refreshes every 1 day
    }

    const query = useQuery({
        queryKey: [key],
        queryFn: async function() {
            const response = await axios.get(url);
            return response;
        },
        ...cacheProperties
    })

    let data = undefined;
    if(query.data !== undefined) {
        data = query.data.data.feed.entry;
    }
    let isLoading = query.isLoading;
    let isError = query.isError;

    return { data, isLoading, isError }
}