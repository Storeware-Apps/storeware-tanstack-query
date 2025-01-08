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
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAppQuery = void 0;
const react_query_1 = require("@tanstack/react-query");
const react_1 = require("react");
const useFetch_1 = require("./useFetch");
const ONE_MINUTE = 60 * 1000;
const useAppQuery = ({ url, queryKey = null, queryFn = null, fetchInit = {}, reactQueryOptions = {}, }) => {
    const authenticatedFetch = (0, useFetch_1.useFetch)();
    const fetch = (0, react_1.useMemo)(() => {
        return () => __awaiter(void 0, void 0, void 0, function* () {
            if (!url) {
                throw new Error("URL is required for useAppQuery.");
            }
            const response = yield authenticatedFetch(url, fetchInit);
            return response.json();
        });
    }, [url, queryKey, JSON.stringify(fetchInit)]);
    return (0, react_query_1.useQuery)(Object.assign({ queryKey: queryKey || [url], queryFn: queryFn || fetch, refetchOnWindowFocus: false, staleTime: 5 * ONE_MINUTE, refetchInterval: false }, reactQueryOptions));
};
exports.useAppQuery = useAppQuery;
