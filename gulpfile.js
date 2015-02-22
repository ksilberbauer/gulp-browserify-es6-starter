var gulp = require('gulp'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    watchify = require('watchify'),
    htmlReplace = require('gulp-html-replace'),
    source = require('vinyl-source-stream'),
    browserSync = require('browser-sync');


gulp.task('htmlReplace', function () {
    console.log('Updating HTML');
    gulp.src('./src/index.html')
        .pipe(htmlReplace({
            js: 'build/build.js'
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function () {

    gulp.watch('./src/index.html', ['htmlReplace']);


    var watcher = watchify(browserify({
        entries: ['./src/js/App.js'],
        transform: [babelify],
        debug: true,
        cache: {}, packageCache: {}, fullPaths: true
    }));

    return watcher.on('update', function () {
        watcher
            .bundle()
            .pipe(source('build.js'))
            .pipe(gulp.dest('dist/build'))
            .pipe(browserSync.reload({stream: true}));
        console.log('Updated');
    })
        .bundle()
        .pipe(source('build.js'))
        .pipe(gulp.dest('dist/build'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('browser-sync', function () {
    browserSync({
        server: {
            baseDir: './dist'
        }
    });
});

gulp.task('default', ['browser-sync', 'watch']);