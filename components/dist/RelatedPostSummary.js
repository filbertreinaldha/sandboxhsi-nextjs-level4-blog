"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var RelatedPostSummary = function (props) {
    var article = props.article;
    return (React.createElement("div", { className: "bg-white space-y-6 pb-12" },
        React.createElement("h2", { className: "font-bold text-2xl" }, "Related Post List"),
        React.createElement("div", { className: "grid grid-cols-[15%_85%] gap-x-4 md:gap-x-6" },
            React.createElement("div", { className: "cols-start-1 rounded-lg overflow-hidden" },
                React.createElement(image_1["default"], { src: article.thumbnail, alt: article.title, width: 600, height: 400, className: "object-cover object-right h-full" })),
            React.createElement("div", { className: "cols-start-2 flex flex-col gap-y-2" },
                React.createElement("h3", { className: "font-bold text-4xl text-gray leading-normal" }, article.title),
                React.createElement("p", { className: "leading-relaxed font-semibold text-lg" }, article.summary)))));
};
exports["default"] = RelatedPostSummary;
