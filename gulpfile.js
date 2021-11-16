const gulp = require("gulp");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");

gulp.task("scripts", function() {
  return gulp.src(["./task_4/**/*.js"])
  .pipe(concat("all.js"))
  .pipe(uglify())
  .pipe(gulp.dest("./task_4/dist"))
})
