var gulp = require('gulp');
//var clean = require('gulp-clean');
var gutil = require('gulp-util');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var replace = require('gulp-replace');
var watch = require('gulp-watch');

/*gulp.task('build-px-example-clean', function() {
	return gulp
		.src(['./release'])
		.pipe(clean({
			read: false,
			force: true
		}));
});*/

/*
gulp.task('jshint-js', function() {
	return gulp
		.src(['./js/*.js'])
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});
*/

gulp.task('build-px-example-js', function() {
	return gulp
		.src(['./src/js/*.js'])
		//.pipe(uglify())
		.pipe(gulp.dest('./release/js'));
});

gulp.task('build-px-example-lib-js', function() {
	return gulp
		.src([
			'./src/lib/**/*.min.js'
		])
		.pipe(gulp.dest('./release/lib'));
});

gulp.task('build-px-example-lib-css', function() {
	return gulp
		.src([
			'./src/lib/**/*.min.css'
		])
		.pipe(gulp.dest('./release/lib'));
});

gulp.task('build-px-example-bootstrap-css', function() {
	return gulp
		.src([
			'./src/lib/bootstrap/**/*.css'
		])
		.pipe(cssmin())
		.pipe(gulp.dest('./release/lib/bootstrap'));
});

gulp.task('build-px-example-lib-angular-i18n', function() {
	return gulp
		.src([
			'./src/lib/angular-i18n/angular-locale_pt-br.js'
		])
		.pipe(uglify())
		.pipe(gulp.dest('./release/lib/angular-i18n'));
});

gulp.task('build-px-example-lib-angular-ui-calendar', function() {
	return gulp
		.src([
			'./src/lib/angular-ui-calendar/**/*.js'
		])
		.pipe(uglify())
		.pipe(gulp.dest('./release/lib/angular-ui-calendar'));
});

gulp.task('build-px-example-lib-ui-calendar', function() {
	return gulp
		.src([
			'./src/lib/ui-calendar/src/**/*.js'
		])
		.pipe(uglify())
		.pipe(gulp.dest('./release/lib/ui-calendar/src'));
});

gulp.task('build-px-example-lib-px-project', function() {
	return gulp
		.src([
			'./src/lib/px-project/dist/system/**/*.js'
		])
		.pipe(uglify())
		.pipe(gulp.dest('./release/lib/px-project/dist/system'));
});

gulp.task('build-px-example-lib-px-project-rest', function() {
	return gulp
		.src([
			'./src/lib/px-project/dist/rest/**/*'
		])
		.pipe(gulp.dest('./release/lib/px-project/dist/rest'));
});

gulp.task('build-px-example-lib-px-project-css', function() {
	return gulp
		.src([
			'./src/lib/px-project/dist/system/**/*.css'
		])
		.pipe(cssmin())
		.pipe(gulp.dest('./release/lib/px-project/dist/system'));
});

gulp.task('build-px-example-lib-px-project-others', function() {
	return gulp
		.src([
			'./src/lib/px-project/dist/system/**/*.html',
			'./src/lib/px-project/dist/system/**/*.woff',
			'./src/lib/px-project/dist/system/**/*.ttf',
			'./src/lib/px-project/dist/system/**/*.cfm',
			'./src/lib/px-project/dist/system/**/*.cfc',
			'./src/lib/px-project/dist/system/**/*.cfc',
			'./src/lib/px-project/dist/system/**/*.gif',
			'./src/lib/px-project/dist/system/**/*.png'
		])
		.pipe(gulp.dest('./release/lib/px-project/dist/system'));
});

gulp.task('build-px-example-lib-font-awesome-others', function() {
	return gulp
		.src([
			'./src/lib/font-awesome/**/*.ttf',
			'./src/lib/font-awesome/**/*.woff',
			'./src/lib/font-awesome/**/*.woff2'
		])
		.pipe(gulp.dest('./release/lib/font-awesome'));
});

gulp.task('build-px-example-lib-requirejs', function() {
	return gulp
		.src([
			'./src/lib/requirejs/**/*.js'
		])
		.pipe(uglify())
		.pipe(gulp.dest('./release/lib/requirejs'));
});

gulp.task('build-px-example-src-html', function() {
	return gulp
		.src([
			'./src/custom/**/*.html'
		])
		.pipe(gulp.dest('./release/custom'));
});

gulp.task('build-px-example-src-js', function() {
	return gulp
		.src(['./src/custom/**/*.js'])
		//.pipe(uglify())
		.pipe(gulp.dest('./release/custom'));
});

gulp.task('build-px-example-src-cf', function() {
	return gulp
		.src([
			'./src/custom/**/*.cfm',
			'./src/custom/**/*.cfc'
		])
		.pipe(gulp.dest('./release/custom'));
});

gulp.task('build-px-example-src-css', function() {
	return gulp
		.src(['./src/custom/**/*.css'])
		.pipe(cssmin())
		.pipe(gulp.dest('./release/custom'));
});

gulp.task('build-px-example-src-assets', function() {
	return gulp
		.src([
			'./src/custom/assets/**/*.svg',
			'./src/custom/assets/**/*.png',
			'./src/custom/assets/**/*.jpg'
		])
		.pipe(gulp.dest('./release/custom/assets'));
});

gulp.task('build-px-example-root', function() {
	return gulp
		.src([
			'./src/*.html',
			'./src/*.cfc',
			'./src/*.cfm',
			'./src/*.ico'
		])
		.pipe(gulp.dest('./release'));
});

gulp.task('build-px-example-root-css', function() {
	return gulp
		.src([
			'./src/*.css',
		])
		.pipe(cssmin())
		.pipe(gulp.dest('./release'));
});

gulp.task('build-px-example-server', function() {
	return gulp
		.src([
			'./_server/*'
		])
		.pipe(gulp.dest('./release/_server'));
});

gulp.task('build-px-example-pdf-viewer', function() {
	return gulp
		.src([
			'./pdf-viewer/**/*'
		])
		.pipe(gulp.dest('./release/pdf-viewer'));
});

gulp.task('build-px-example-webservice', function() {
	return gulp
		.src([
			'./wspx-example/**/*'
		])
		.pipe(gulp.dest('./release/wspx-example'));
});

gulp.task('build-px-example-schedule', function() {
	return gulp
		.src([
			'./schedule/**/*'
		])
		.pipe(gulp.dest('./release/schedule'));
});


/*gulp.task('watch', function() {});*/
gulp.task('default', [
	'build-px-example'
]);


gulp.task('build-px-example', [
	'build-px-example-js',
	'build-px-example-lib-js',
	'build-px-example-lib-css',
	'build-px-example-bootstrap-css',
	'build-px-example-lib-angular-i18n',
	'build-px-example-lib-angular-ui-calendar',
	'build-px-example-lib-px-project',
	'build-px-example-lib-px-project-rest',
	'build-px-example-lib-px-project-css',
	'build-px-example-lib-px-project-others',
	'build-px-example-lib-font-awesome-others',
	'build-px-example-lib-requirejs',
	'build-px-example-lib-ui-calendar',
	'build-px-example-src-html',
	'build-px-example-src-js',
	'build-px-example-src-cf',
	'build-px-example-src-css',
	'build-px-example-src-assets',
	'build-px-example-server',
	'build-px-example-pdf-viewer',
	'build-px-example-webservice',
	'build-px-example-schedule',
	'build-px-example-root',
	'build-px-example-root-css',
]);