var gulp = require('gulp');
var uglify = require('gulp-uglifyjs');
var rename = require('gulp-rename');

gulp.task('default', function(){
	gulp.src('./index.js')
	.pipe(uglify())
	.pipe(rename('test-eq.js'))
	.pipe(gulp.dest('./'));
});
