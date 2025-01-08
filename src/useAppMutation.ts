// src/useMutation.ts
import {
  MutationKey,
  useMutation,
  UseMutationOptions,
  UseMutationResult,
} from "@tanstack/react-query";

type MutationFunction<T> = (data: T) => Promise<any>;

export interface UseAppMutationOptions<T = unknown> {
  mutationKey?: MutationKey;
  mutationFn?: MutationFunction<T>;
  onSuccess?: (data: any, variables: T) => void;
  onError?: (error: Error, variables: T) => void;
  options?: Omit<
    UseMutationOptions<any, Error, T, unknown>,
    "onSuccess" | "onError"
  >;
}

export const useAppMutation = <T = unknown>({
  mutationKey,
  mutationFn,
  onSuccess,
  onError,
  options,
}: UseAppMutationOptions<T>): UseMutationResult<any, Error, T, unknown> => {
  return useMutation({
    ...options,
    mutationKey,
    mutationFn,
    onSuccess,
    onError,
  });
};
