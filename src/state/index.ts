import { useQuery, useQueryClient } from "@tanstack/react-query";

export const createGlobalState = <T>(queryKey: string, initialState: T) => {
  return () => {
    const queryClient = useQueryClient();

    const { data } = useQuery({
      queryKey: [queryKey],
      queryFn: () => Promise.resolve(initialState),
      refetchOnMount: false,
      refetchInterval: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      refetchIntervalInBackground: false,
    });

    const setData = (data: Partial<T>) => {
      queryClient.setQueryData([queryKey], data);
    };

    const resetData = () => {
      queryClient.invalidateQueries({
        queryKey: [queryKey],
      });
      queryClient.setQueryData([queryKey], initialState);
    };

    return {
      data,
      setData,
      resetData,
    };
  };
};
