import { MutationKey, UseMutationOptions, UseMutationResult } from "@tanstack/react-query";
type MutationFunction<T> = (data: T) => Promise<any>;
export interface UseAppMutationOptions<T = unknown> {
    mutationKey?: MutationKey;
    mutationFn?: MutationFunction<T>;
    onMutate?: (variables: T) => void | Promise<void>;
    onSuccess?: (data: any, variables: T) => void;
    onError?: (error: Error, variables: T) => void;
    options?: Omit<UseMutationOptions<any, Error, T, unknown>, "onSuccess" | "onError" | "onMutate">;
}
export declare const useAppMutation: <T = unknown>({ mutationKey, mutationFn, onMutate, onSuccess, onError, options, }: UseAppMutationOptions<T>) => UseMutationResult<any, Error, T, unknown>;
export {};
