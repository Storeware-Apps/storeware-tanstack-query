"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const polaris_1 = require("@shopify/polaris");
const react_1 = __importDefault(require("react"));
const useAppMutation_1 = require("../useAppMutation");
const useAppQuery_1 = require("../useAppQuery");
const fetchData = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch("https://jsonplaceholder.typicode.com/posts");
    return response.json();
});
const addNewPost = (post) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(post),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    });
    return response.json();
});
const Posts = () => {
    const [newPost, setNewPost] = react_1.default.useState(null);
    const { data } = (0, useAppQuery_1.useAppQuery)({
        queryKey: ["posts"],
        queryFn: fetchData,
    });
    const { mutate: createNewPost, isPending } = (0, useAppMutation_1.useAppMutation)({
        mutationFn: addNewPost,
        onSuccess: (post) => {
            setNewPost(post);
        },
        options: {
            retry: 2,
        },
    });
    return (react_1.default.createElement(polaris_1.Page, { narrowWidth: true, title: "Storeware Tanstack React Query Example", primaryAction: {
            content: "New post",
            onAction: () => createNewPost({
                title: "New post",
                body: "This is a new post",
                userId: 1,
            }),
            loading: isPending,
        } },
        react_1.default.createElement(polaris_1.BlockStack, { gap: "400" },
            newPost && (react_1.default.createElement(polaris_1.Banner, { title: "New post created", tone: "info", onDismiss: () => setNewPost(null) },
                react_1.default.createElement(polaris_1.BlockStack, { gap: "200" },
                    react_1.default.createElement(polaris_1.Text, { as: "h4", variant: "headingSm" }, newPost.title),
                    react_1.default.createElement(polaris_1.Text, { as: "p", variant: "bodySm", tone: "subdued" }, newPost.body)))), data === null || data === void 0 ? void 0 :
            data.map((post) => (react_1.default.createElement(polaris_1.Card, { key: post.id },
                react_1.default.createElement(polaris_1.BlockStack, { gap: "200" },
                    react_1.default.createElement(polaris_1.Text, { as: "h4", variant: "headingSm" }, post.title),
                    react_1.default.createElement(polaris_1.Text, { as: "p", variant: "bodySm", tone: "subdued" }, post.body))))))));
};
exports.default = Posts;
