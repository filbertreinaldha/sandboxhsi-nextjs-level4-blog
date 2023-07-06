"use strict";
exports.__esModule = true;
var PostSkeleton = function (_a) {
    var _b = _a.mini, mini = _b === void 0 ? false : _b;
    return (React.createElement("div", { className: "mb-4 sm:mb-8 lg:mb-16 flex flex-col gap-y-4 animate-pulse w-full" },
        React.createElement("div", { className: "w-full h-auto aspect-[3/2] rounded-lg bg-zinc-300" }),
        React.createElement("div", { className: " w-1/2 h-6 rounded-lg bg-zinc-300" }),
        React.createElement("div", { className: (mini ? "h-12" : "h-20") + " w-full rounded-lg bg-zinc-300" }),
        React.createElement("div", { className: (mini ? "block" : "hidden") + " w-full h-24 rounded-lg bg-zinc-300" })));
};
exports["default"] = PostSkeleton;
