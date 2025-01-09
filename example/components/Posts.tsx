import { Banner, BlockStack, Card, Page, Text } from "@shopify/polaris";
import React from "react";
import { useAppMutation, useAppQuery } from "storeware-tanstack-query";

type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

type Posts = Post[];

const fetchData = async (): Promise<Posts> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return response.json();
};

const addNewPost = async (post: Omit<Post, "id">): Promise<Post> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(post),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  return response.json();
};

const Posts = () => {
  const [newPost, setNewPost] = React.useState<Post | null>(null);

  const { data } = useAppQuery<Posts>({
    queryKey: ["posts"],
    queryFn: fetchData,
  });

  const { mutate: createNewPost, isPending } = useAppMutation({
    mutationFn: addNewPost,
    onSuccess: (post) => {
      setNewPost(post);
    },
    options: {
      retry: 2,
    },
  });

  return (
    <Page
      narrowWidth
      title="Storeware Tanstack React Query Example"
      primaryAction={{
        content: "New post",
        onAction: () =>
          createNewPost({
            title: "New post",
            body: "This is a new post",
            userId: 1,
          }),
        loading: isPending,
      }}
    >
      <BlockStack gap={"400"}>
        {newPost && (
          <Banner
            title="New post created"
            tone="info"
            onDismiss={() => setNewPost(null)}
          >
            <BlockStack gap={"200"}>
              <Text as="h4" variant="headingSm">
                {newPost.title}
              </Text>
              <Text as="p" variant="bodySm" tone="subdued">
                {newPost.body}
              </Text>
            </BlockStack>
          </Banner>
        )}
        {data?.map((post) => (
          <Card key={post.id}>
            <BlockStack gap={"200"}>
              <Text as="h4" variant="headingSm">
                {post.title}
              </Text>
              <Text as="p" variant="bodySm" tone="subdued">
                {post.body}
              </Text>
            </BlockStack>
          </Card>
        ))}
      </BlockStack>
    </Page>
  );
};

export default Posts;
