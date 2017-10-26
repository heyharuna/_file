var gulp = require("gulp");
var browser = require("browser-sync")
var $ = require("jQuery")

gulp.task("server", function () {
    browser({
        proxy: 'http://localhost/week8/public/',
        files: [
            "./src/sass/**/*.sass",
            "./src/js/**/*.js",
        ]
    });
})

var sass = require("gulp-sass");
var autoprefixer = require('gulp-autoprefixer');
gulp.task("sass", function() {
    gulp.src("src/sass/main.sass")
        .pipe(sass())
        .pipe(gulp.dest("public/style"));
});

gulp.task("sass", function() {
    gulp.src("src/sass/main.sass")
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest("public/style"));
});

var uglify = require("gulp-uglify");
gulp.task("js", function() {
   gulp.src("src/js/main.js")
       .pipe(uglify())
       .pipe(gulp.dest("public/scripts"))
});

gulp.task("default", ['server'], function() {
    gulp.watch(["src/js/main.js"],["js"]);
    gulp.watch("src/sass/main.sass",["sass"]);
});