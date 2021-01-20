const { series, src, dest, watch } = require("gulp");

const folder = {
  src: "src/",
  dist: "dist/",
};

function html() {}
function css() {}
function js() {}
function image() {}

exports.default = series(html, css, js, image);
