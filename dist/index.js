"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFetch = exports.useAppQuery = exports.useAppMutation = exports.QueryProvider = void 0;
__exportStar(require("@tanstack/react-query"), exports);
var QueryProvider_1 = require("./QueryProvider");
Object.defineProperty(exports, "QueryProvider", { enumerable: true, get: function () { return QueryProvider_1.QueryProvider; } });
var useAppMutation_1 = require("./useAppMutation");
Object.defineProperty(exports, "useAppMutation", { enumerable: true, get: function () { return useAppMutation_1.useAppMutation; } });
var useAppQuery_1 = require("./useAppQuery");
Object.defineProperty(exports, "useAppQuery", { enumerable: true, get: function () { return useAppQuery_1.useAppQuery; } });
var useFetch_1 = require("./useFetch");
Object.defineProperty(exports, "useFetch", { enumerable: true, get: function () { return useFetch_1.useFetch; } });
