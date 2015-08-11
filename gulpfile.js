var gulp = require("gulp")
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var plumber = require("gulp-plumber");
var eslint = require("gulp-eslint");

gulp.task("lint", function(){
	return gulp.src("rand.js")
	.pipe(plumber())
	.pipe(eslint({"configFile":".eslintrc"}))
	.pipe(eslint.format())
	.pipe(eslint.failOnError());
});

gulp.task("uglify", ["lint"], function(){
	return gulp.src("rand.js")
	.pipe(plumber())
	.pipe(uglify())
	.pipe(rename("rand.min.js"))
	.pipe(gulp.dest("./"));
});

gulp.task("default", ["uglify"]);