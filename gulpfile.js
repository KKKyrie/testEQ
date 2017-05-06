var gulp = require('gulp');
var uglify = require('gulp-uglifyjs');
var rename = require('gulp-rename');

gulp.task('default', function(){
	gulp.src('./index.js')
	.pipe(uglify())
	.pipe(rename('main01.js'))
	.pipe(gulp.dest('./'));
});
