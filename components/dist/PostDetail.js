"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var PostDetail = function (_a) {
    var article = _a.article;
    var author = article.author, category = article.category, thumbnail = article.thumbnail, slug = article.slug, title = article.title, summary = article.summary, content = article.content;
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "bg-white space-y-6 pb-8" },
            React.createElement("h1", { className: "text-4xl leading-normal text-gray font-bold" }, title),
            React.createElement("p", { className: "font-semibold leading-8" }, summary),
            React.createElement("div", { className: "uppercase" },
                React.createElement("span", { className: "text-lightgray" }, "By"),
                " ",
                [author.firstName, author.middleName, author.lastName].join(" "),
                " ",
                React.createElement("span", { className: "text-lightgray" }, "in"),
                " ",
                category.name)),
        React.createElement("div", { className: "mt-8 mb-20" },
            React.createElement(image_1["default"], { src: thumbnail, alt: title, width: 1000, height: 667, className: "w-full h-auto object-cover rounded-lg aspect-[3/2]" }),
            React.createElement("p", { className: "my-8 leading-8 text-gray" }, content))));
};
exports["default"] = PostDetail;
