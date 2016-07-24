var gulp        = require('gulp');
var browserSync = require('browser-sync');
var cp          = require('child_process');

var messages = {
    jekyllBuild: 'Running jekyll build'
};

gulp.task('jekyll-build', function (done) {
    browserSync.notify(messages.jekyllBuild);
    return cp.spawn('jekyll', ['build'], {stdio: 'inherit'}).on('close', done);
});

gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
    browserSync.reload();
});

gulp.task('browser-sync', ['jekyll-build'], function () {
    browserSync({
        server: {
            baseDir: '_site'
        }
    });
});

gulp.task('watch', function () {
    gulp.watch(['./**/*.html', './**/*.css', './**/*.js', './**/*.md', '!_site/**/*'],
               {debounceDelay: 2000},
               ['jekyll-rebuild']);
});

gulp.task('default', ['browser-sync', 'watch']);
