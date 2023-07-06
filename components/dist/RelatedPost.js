"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var link_1 = require("next/link");
var RelatedPost = function (props) {
    var article = props.article, index = props.index;
    var title = article.title, summary = article.summary, slug = article.slug, thumbnail = article.thumbnail;
    return (React.createElement("div", { className: "my-8", key: index },
        React.createElement("div", { className: "grid grid-cols-2 bg-white rounded-lg shadow overflow-hidden" },
            React.createElement("div", { className: "cols-start-1 p-8" },
                React.createElement("div", { className: "flex flex-col gap-y-4" },
                    React.createElement("h2", { className: "text-2xl" }, "" + (index < 9 ? "0" : "") + (index + 1)),
                    React.createElement(link_1["default"], { href: "/" + slug },
                        React.createElement("h2", { className: "text-3xl font-semibold text-cabin leading-normal" }, title)),
                    React.createElement("p", { className: "text-lightgray leading-loose" }, summary))),
            React.createElement("div", { className: "cols-start-2" },
                React.createElement(image_1["default"], { src: thumbnail, alt: title, width: 1000, height: 667, className: "object-cover h-full" })))));
};
exports["default"] = RelatedPost;
