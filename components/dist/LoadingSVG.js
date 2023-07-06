"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var loading_svg_1 = require("@/assets/loading.svg");
function LoadingSVG() {
    return (React.createElement(image_1["default"], { priority: true, src: loading_svg_1["default"], width: 50, height: 50, alt: "Loading", className: "invert-[24%] sepia-[11%] saturate-[341%] hue-rotate-[201deg] brightness-95 contrast-[96%] animate-pulse" }));
}
exports["default"] = LoadingSVG;
