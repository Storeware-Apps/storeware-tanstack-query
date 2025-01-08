import { QueryFunction, QueryKey, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
/**
 * A hook for querying your custom app data.
 * @desc A thin wrapper around useAuthenticatedFetch and react-query's useQuery.
 *
 * @param {UseAppQueryOptions<T>} options - The options for your query. Accepts up to 5 keys:
 *
 * 1. url: The URL to query. E.g: /api/widgets/1
 * 2. queryKey: The query key that will be used by react-query. If empty, the **url** value will default as the query key.
 * 3. queryFn: The query function that would load data & return a promise. If no queryFn is provided, the default **fetch** function will be used.
 * 4. fetchInit: The init options for fetch. See: https://developer.mozilla.org/en-US/docs/Web/API/fetch#parameters
 * 5. reactQueryOptions: The options for `useQuery`. See: https://tanstack.com/query/v4/docs/reference/useQuery
 *
 * @returns {UseQueryResult<T>} Return value of useQuery. See: https://tanstack.com/query/v4/docs/reference/useQuery.
 */
export interface UseAppQueryOptions<T = unknown> {
    url?: string;
    queryKey?: QueryKey | null;
    queryFn?: QueryFunction<T> | null;
    fetchInit?: RequestInit;
    reactQueryOptions?: Omit<UseQueryOptions<T, Error, T, QueryKey>, "queryKey" | "queryFn">;
}
export declare const useAppQuery: <T = unknown>({ url, queryKey, queryFn, fetchInit, reactQueryOptions, }: UseAppQueryOptions<T>) => UseQueryResult<T>;
