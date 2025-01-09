# Storeware TanStack Query

A custom TanStack Query wrapper for Storeware applications with built-in authentication and fetch utilities.

## Installation

Install the package from your Git repository using:

```bash
npm i git+ssh://git@github.com:Storeware-Apps/storeware-tanstack-query.git
```

or

```bash
npm i git+https://github.com/Storeware-Apps/storeware-tanstack-query.git
```

## Upgrade

Upgrade the pacakge form Git repository using:

```bash
npm update storeware-tanstack-query
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

The `QueryProvider` initializes the TanStack Query client with default configurations optimized for Storeware applications. It also handles authentication and error management automatically.

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
  const { mutate, isLoading } = useAppMutation<UpdateUserInput>({
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
      <button type="submit" disabled={isLoading}>
        {isLoading ? "Updating..." : "Update User"}
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
- `onSuccess`: Callback function to perform action on success
- `onError`: Callback function to perform action on error
- `options`: Additional React Query mutation options

## Contribution

To contribute to this package, fork the repository, create a branch, and submit a pull request. Ensure you add tests and documentation for any new features or changes.