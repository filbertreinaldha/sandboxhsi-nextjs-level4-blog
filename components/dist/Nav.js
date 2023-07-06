"use client";
"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var link_1 = require("next/link");
var navigation_1 = require("next/navigation");
var logo_svg_1 = require("@/assets/logo.svg");
var Nav = function (_a) {
    var _b = _a.hideButtons, hideButtons = _b === void 0 ? false : _b, _c = _a.white, white = _c === void 0 ? false : _c;
    var router = navigation_1.useRouter();
    var queryString = navigation_1.useSearchParams();
    var sort = (queryString === null || queryString === void 0 ? void 0 : queryString.get("sort")) || "new";
    return (React.createElement("header", { className: "relative grid grid-cols-3 justify-between pt-8 pb-16 " + (white ? "bg-white" : "") },
        React.createElement("div", { className: "flex-row gap-x-3 sm:gap-x-6 font-semibold col-start-1 " + (hideButtons ? "hidden" : "flex") },
            React.createElement("button", { onClick: function () { return router.push("?sort=popular"); }, className: "" + (sort == "popular"
                    ? "text-white bg-watermelon rounded-lg px-4 py-1 focus:outline-watermelon-dark"
                    : "px-4 py-1") }, "Popular"),
            React.createElement("button", { onClick: function () { return router.push("?sort=new"); }, className: "" + (sort == "new"
                    ? "text-white bg-watermelon rounded-lg px-4 py-1 focus:outline-watermelon-dark"
                    : "px-4 py-1") }, "New")),
        React.createElement("div", { className: "col-start-2 text-center justify-center" },
            React.createElement(link_1["default"], { href: "/" },
                React.createElement(image_1["default"], { src: logo_svg_1["default"], className: "inline-block", alt: "Logo" }))),
        React.createElement("div", { className: (hideButtons ? "hidden" : "flex") + " col-start-3" })));
};
exports["default"] = Nav;
