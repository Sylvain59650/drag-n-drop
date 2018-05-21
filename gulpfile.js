const babel = require("gulp-babel");
const watch = require("gulp-watch");
const gulp = require("gulp");
const concat = require("gulp-concat");

const chemins = {
  sources: "./src/",
  distrib: "./distrib/"
};



gulp.task("htmlelement-dnd.min.js", () => {
  return gulp.src([
      "node_modules/isnotnull/distrib/isdef.js", "src/**.js"
    ])
    .pipe(concat("htmlelement-dnd.min.js"))
    .pipe(babel({
      presets: ["es2015"],
      compact: false,
      comments: false,
      minified: false
    }))
    //.pipe(uglify())
    //.on('error', function(err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
    // .pipe(umd())
    .pipe(gulp.dest(chemins.distrib))
});


gulp.task("watch:htmlelement-dnd.min.js", function() {
  watch("./src/**.js", function() {
    gulp.run("htmlelement-dnd.min.js");
  });
});

gulp.task("default", ["htmlelement-dnd.min.js"]);


gulp.task("all", ["default"]);

gulp.task("watch", ["watch:htmlelement-dnd.min.js"]);