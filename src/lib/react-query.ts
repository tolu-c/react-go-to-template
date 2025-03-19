import { DefaultOptions } from "@tanstack/react-query";

export const queryConfig = {
  queries: {
    retry: false,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60,
  },
} satisfies DefaultOptions;
