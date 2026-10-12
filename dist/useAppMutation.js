"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAppMutation = void 0;
const react_query_1 = require("@tanstack/react-query");
const useAppMutation = ({ mutationKey, mutationFn, onMutate, onSuccess, onError, options, }) => {
    return (0, react_query_1.useMutation)(Object.assign(Object.assign({}, options), { mutationKey,
        mutationFn,
        onMutate,
        onSuccess,
        onError }));
};
exports.useAppMutation = useAppMutation;
