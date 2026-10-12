# Storeware TanStack Query

A custom TanStack Query wrapper for Storeware applications with a shared query client and fetch utilities.

## Requirements

- React 18 or 19
- TanStack Query v5 (`@tanstack/react-query`)

These are peer dependencies, so your app must install them. The package uses your app's copies and does not bundle its own.

## Installation

Install the package from npm, along with its peer dependencies, using:

```bash
npm i storeware-tanstack-query @tanstack/react-query
```

or

```bash
yarn add storeware-tanstack-query @tanstack/react-query
```

## Upgrade

Upgrade the package using:

```bash
npm update storeware-tanstack-query
```

or 
```bash
yarn upgrade storeware-tanstack-query
```

## Usage

To use the TanStack Query hooks, first wrap your application with the `QueryProvider`:

```tsx
import { QueryProvider } from "storeware-tanstack-query";

function App() {
  return (
    <QueryProvider>
      {/* Your app components */}
    </QueryProvider>
  );
}
```

The `QueryProvider` creates a single shared TanStack Query client and provides it to your app.

`useAppQuery` uses these defaults, which you can override through `reactQueryOptions`: `staleTime` of 5 minutes, `refetchOnWindowFocus: false`, and `refetchInterval: false`.

### useAppQuery Example

```tsx
import { useAppQuery } from "storeware-tanstack-query";

interface User {
  id: number;
  name: string;
}

const UserProfile = () => {
  const { data, isLoading } = useAppQuery<User>({
    queryKey: ["user", 1],
    queryFn: async () => {
      const response = await fetch("/api/users/1");
      return response.json();
    },
    reactQueryOptions: {
      enabled: true,
      staleTime: 5000,
    },
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h1>{data?.name}</h1>
    </div>
  );
};
```

### useAppMutation Example

```tsx
import { useAppMutation } from "storeware-tanstack-query";

interface UpdateUserInput {
  id: number;
  name: string;
}

const UserUpdateForm = () => {
  const { mutate, isPending } = useAppMutation<UpdateUserInput>({
    mutationKey: ["updateUser"],
    mutationFn: async (data) => {
      const response = await fetch(`/api/users/${data.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      return response.json();
    },
    onSuccess: (data) => {
      console.log("User updated successfully", data);
    },
    onError: (error) => {
      console.error("Failed to update user:", error);
    },
    options: {
      retry: 2,
    },
  });

  const handleSubmit = (values: UpdateUserInput) => {
    mutate(values);
  };

  return (
    <form onSubmit={() => handleSubmit({ id: 1, name: "John Doe" })}>
      {/* Form fields */}
      <button type="submit" disabled={isPending}>
        {isPending ? "Updating..." : "Update User"}
      </button>
    </form>
  );
};
```

## API Reference

### useAppQuery Options

- `url`: The URL to query
- `queryKey`: React Query cache key
- `queryFn`: Custom query function
- `fetchInit`: Fetch API options
- `reactQueryOptions`: Additional React Query options

### useAppMutation Options

- `mutationKey`: React Query mutation key
- `mutationFn`: Custom mutation function
- `onMutate`: Callback function to run before the mutation function
- `onSuccess`: Callback function to perform action on success
- `onError`: Callback function to perform action on error
- `options`: Additional React Query mutation options

## Contribution

To contribute to this package, fork the repository, create a branch, and submit a pull request. Ensure you add tests and documentation for any new features or changes.