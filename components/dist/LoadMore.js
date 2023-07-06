"use client";
"use strict";
exports.__esModule = true;
var LoadMore = function (_a) {
    var fetchMore = _a.fetchMore, noMore = _a.noMore, _b = _a.isLoading, isLoading = _b === void 0 ? false : _b;
    return (React.createElement("button", { onClick: fetchMore, hidden: noMore, disabled: isLoading, className: "font-semibold text-watermelon border-solid border-2 border-watermelon rounded-full w-fit px-10 py-3 text-lg" }, isLoading ? "Loading..." : "Load More"));
};
exports["default"] = LoadMore;
