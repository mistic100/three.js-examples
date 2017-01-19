'use strict';

const path = require('path');
const fs = require('fs');
const gulp = require('gulp');
const insert = require('gulp-insert');
const filter = require('gulp-filter');
const clean = require('gulp-clean');
const parsePath = require('parse-filepath');
const _ = require('lodash');

const config = require('./config.json');

const THREE_PATH = 'node_modules/three';

/**
 * Copy license file
 */
gulp.task('licence', () => {
    gulp.src(`${THREE_PATH}/LICENSE`)
        .pipe(gulp.dest('.'));
});

/**
 * Copy examples JS files & add UMD loader
 */
gulp.task('build', () => {
    function normalize(path) {
        return path.replace(/\\/g, '/');
    }

    gulp.src([`${THREE_PATH}/examples/js/**/*.js`].concat(
        _.map(config.ignore, map => `!${THREE_PATH}/examples/js/${map}`)
    ))
        .pipe(insert.prepend(file => {
            if (_.some(config.noUMD, path => normalize(file.path).includes(path))) {
                return '';
            }

            return `(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define('three.${parsePath(file.path).stem}', ['three'], factory);
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
        .pipe(insert.append(file => {
            return _(config.globals)
                .filter((vars, path) => normalize(file.path).includes(path))
                .flatten()
                .map(global => `THREE.${global} = ${global};`)
                .join(`\n`);
        }))
        .pipe(insert.append(file => {
            if (_.some(config.noUMD, path => normalize(file.path).includes(path))) {
                return '';
            }

            return `}));`;
        }))
        .pipe(gulp.dest('examples/js'));
});

/**
 * Remove old files
 */
gulp.task('clean', () => {
    gulp.src('examples/js/**/*.js', { read: false })
        .pipe(filter(file => {
            var filePath = path.relative(__dirname, file.path);
            return !fs.existsSync(`${THREE_PATH}/${filePath}`);
        }))
        .pipe(clean());
});

gulp.task('default', ['licence', 'build', 'clean']);