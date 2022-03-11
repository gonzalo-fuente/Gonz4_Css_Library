const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const purgecss = require("gulp-purgecss");

function buildStyles() {
  return src("gonz4-css/**/*.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(purgecss({ content: ["*.html"] }))
    .pipe(dest("css"));
}

function watchTask() {
  watch(["gonz4-css/**/*.scss"], buildStyles);
}

exports.default = series(buildStyles, watchTask);
