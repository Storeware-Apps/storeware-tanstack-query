"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryProvider = void 0;
const react_query_1 = require("@tanstack/react-query");
const react_1 = __importDefault(require("react"));
const queryClient = new react_query_1.QueryClient({
    queryCache: new react_query_1.QueryCache(),
    mutationCache: new react_query_1.MutationCache(),
});
const QueryProvider = ({ children }) => (react_1.default.createElement(react_query_1.QueryClientProvider, { client: queryClient }, children));
exports.QueryProvider = QueryProvider;
