var babelify = require ('babelify'),
    buffer = require ('vinyl-buffer'),
    browserify = require ('browserify'),
    browserSync = require ('browser-sync').create(),
    chalk = require ('chalk'),
    gulp = require ('gulp'),
    gutil = require ('gutil'),
    imagemin = require ('gulp-imagemin'),
    rename = require ('gulp-rename'),
    sass = require ('gulp-sass'),
    source = require ('vinyl-source-stream'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify');

var config = {
    sass: {
        input: './sass/**/*.scss',
        output: './css'
    }
};

function map_error (err) {
    if (err.fileName) {
        gutil.log(chalk.red(err.name)
            +': '
            + chalk.yellow(err.fileName.replace(__dirname+'src', ''))
            + ': '
            + 'Line '
            + chalk.magenta(err.lineNumber)
            + ' & Column '
            + chalk.magenta(err.columnNumber || err.column)
            + ': '
            + chalk.blue(err.description)
        );
    } else {
        gutil.log(chalk.red(err.name)
        + ': '
        + chalk.yellow(err.message));
    }
    this.emit('end');
}

gulp.task('sass', () => {
    return gulp.src(config.sass.input)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest(config.sass.output))
        .pipe(browserSync.stream({match: '**/*.css'}));
});

function bundle_js(bundler) {
    return bundler.bundle()
        .on('error', map_error)
        .pipe(source('main.js'))
        .pipe(buffer())
        .pipe(gulp.dest('js'))
        .pipe(rename('app.min.js'))
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('js'));
}

gulp.task('js', () => {
    var bundler = browserify('./src/main.js',{debug: true}).transform(babelify, {presets: ['es2015']});
    return bundle_js(bundler);
});

gulp.task('js-watch',['js'], (done) => {
    browserSync.reload();
    done();
});

gulp.task('images', () => {
    return gulp.src('img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('img'));
});

gulp.task('serve', ['images', 'sass', 'js'], () => {
    browserSync.init({
        server: '.'
    });

    gulp.watch(config.sass.input, ['sass']);
    gulp.watch('./src/**/*.js', ['js-watch']);
    gulp.watch('*.html', browserSync.reload());
})

gulp.task('default', ['serve']);
