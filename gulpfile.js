'use strict';

const gulp = require('gulp');
const insert = require('gulp-insert');
const parsePath = require('parse-filepath');

const THREE_PATH = 'node_modules/three';

gulp.task('default', () => {

    /**
     * Copy license file
     */
    gulp.src(`${THREE_PATH}/LICENSE`)
        .pipe(gulp.dest('.'));

    /**
     * Copy examples JS files & add UMD loader
     */
    gulp.src(`${THREE_PATH}/examples/js/**/*.js`)
        .pipe(insert.prepend(file => {
            let filename = parsePath(file.path).stem;
            return `(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define('three.${filename}', ['three'], factory);
    }
    else if ('undefined' !== typeof exports && 'undefined' !== typeof module) {
        module.exports = factory(require('three'));
    }
    else {
        factory(root.THREE);
    }
}(this, function(THREE) {

`;
        }))
        .pipe(insert.append(`}));`))
        .pipe(gulp.dest('examples/js'));
});