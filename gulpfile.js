const babel = require("gulp-babel");
const watch = require("gulp-watch");
const gulp = require("gulp");
const concat = require("gulp-concat");

const chemins = {
  sources: "./src/",
  distrib: "./distrib/"
};



gulp.task("dragNdrop.min.js", () => {
  return gulp.src([
      "node_modules/isnotnull/distrib/isdef.js", "src/**.js"
    ])
    .pipe(concat("dragNdrop.min.js"))
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


gulp.task("watch:dragNdrop.min.js", function() {
  watch("./src/**.js", function() {
    gulp.run("dragNdrop.min.js");
  });
});

gulp.task("default", ["dragNdrop.min.js"]);


gulp.task("all", ["default"]);

gulp.task("watch", ["watch:dragNdrop.min.js"]);