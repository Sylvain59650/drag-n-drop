const babel = require("gulp-babel");
const watch = require("gulp-watch");
const gulp = require("gulp");
const concat = require("gulp-concat");

const chemins = {
  sources: "./src/",
  distrib: "./distrib/",
  demo: "./docs/demo/"
};



gulp.task("htmlelement-dnd.min.js", () => {
  return gulp.src([
      "node_modules/isnotnull/distrib/isdef.js",
      "src/**.js"
    ])
    .pipe(concat("htmlelement-dnd.min.js"))
    .pipe(babel({
      presets: ["es2015"],
      compact: true,
      comments: false,
      minified: true
    }))
    .pipe(gulp.dest(chemins.distrib))
    .pipe(gulp.dest(chemins.demo + "/modules/htmlelement-dnd/distrib/"))
});

gulp.task("release", function(arg1, arg2) {
  console.log("arg", arg1, arg2);
  return gulp.src([
      "node_modules/isnotnull/distrib/isdef.js",
      "src/**.js"
    ])
    .pipe(concat("htmlelement-dnd.min.js"))
    .pipe(babel({
      presets: ["es2015"],
      compact: true,
      comments: false,
      minified: true
    }))
    .pipe(gulp.dest(chemins.distrib))
    .pipe(gulp.dest(chemins.demo + "/modules/htmlelement-dnd/distrib/"))
    .on("end", (aa) => console.log("end", aa));
});


gulp.task("watch:htmlelement-dnd.min.js", function() {
  watch("./src/**.js", function() {
    gulp.run("htmlelement-dnd.min.js");
  });
});

gulp.task("default", ["htmlelement-dnd.min.js"]);


gulp.task("all", ["default"]);

gulp.task("watch", ["watch:htmlelement-dnd.min.js"]);