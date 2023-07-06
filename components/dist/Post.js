"use client";
"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var link_1 = require("next/link");
var Post = function (props) {
    var article = props.article, _a = props.mini, mini = _a === void 0 ? false : _a, _b = props.className, className = _b === void 0 ? "" : _b;
    var id = article.id, author = article.author, category = article.category, thumbnail = article.thumbnail, slug = article.slug, title = article.title, summary = article.summary;
    return (React.createElement("div", { key: id, className: "mb-4 sm:mb-8 lg:mb-16 flex flex-col gap-y-4 " + className },
        React.createElement(image_1["default"], { src: thumbnail, alt: title, width: 1000, height: 667, className: "w-full h-auto object-cover rounded-lg aspect-[3/2]" }),
        React.createElement("div", { className: "uppercase" },
            React.createElement("span", { className: "text-lightgray" }, "By"),
            " ",
            [author.firstName, author.middleName, author.lastName].join(" "),
            " ",
            React.createElement("span", { className: "text-lightgray" }, "in"),
            " ",
            category.name),
        React.createElement(link_1["default"], { href: "/" + slug },
            React.createElement("h1", { className: (mini ? "text-3xl" : "text-5xl") + " font-semibold text-cabin leading-tight" }, title)),
        React.createElement("h1", { className: (mini ? "block" : "hidden") + " mb-4 leading-8 text-lightgray" }, summary)));
};
exports["default"] = Post;
