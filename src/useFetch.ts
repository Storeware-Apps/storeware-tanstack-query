export function useFetch() {
  return async <T = any>(uri: string, options?: RequestInit): Promise<T> => {
    const response = await fetch(uri, options);

    if (!response.ok) {
      throw new Error(`Error fetching ${uri}: ${response.statusText}`);
    }

    const data = (await response.json()) as T;
    return data;
  };
}
