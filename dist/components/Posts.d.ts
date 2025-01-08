import React from "react";
type Post = {
    id: number;
    title: string;
    body: string;
    userId: number;
};
type Posts = Post[];
declare const Posts: () => React.JSX.Element;
export default Posts;
