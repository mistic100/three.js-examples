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
const EXAMPLES_PATH = 'examples/js';

/**
 * Copy license file
 */
gulp.task('licence', () => {
    return gulp.src(`${THREE_PATH}/LICENSE`)
        .pipe(gulp.dest('.'));
});

/**
 * Copy examples JS files without UMD loader
 */
gulp.task('build-no-umd', () => {
    const paths = _.map(config.noUMD, path => `${THREE_PATH}/${EXAMPLES_PATH}/${path}`);

    return gulp.src(paths, {base: `${THREE_PATH}/${EXAMPLES_PATH}`})
        .pipe(gulp.dest(EXAMPLES_PATH));
});

/**
 * Copy examples JS files with UMD loader
 */
gulp.task('build-umd', () => {
    function normalize(path) {
        return path.replace(/\\/g, '/');
    }

    const paths = [`${THREE_PATH}/${EXAMPLES_PATH}/**/*.js`]
        .concat(_.map(config.ignore, path => `!${THREE_PATH}/${EXAMPLES_PATH}/${path}`))
        .concat(_.map(config.noUMD, path => `!${THREE_PATH}/${EXAMPLES_PATH}/${path}`));

    return gulp.src(paths, {base: `${THREE_PATH}/${EXAMPLES_PATH}`})
        .pipe(insert.prepend(file => {
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
            const globals = _(config.globals)
                .filter((vars, path) => normalize(file.path).includes(path))
                .flatten()
                .map(global => `THREE.${global} = ${global};`)
                .join(`\n`);

            return globals ? `\n${globals}\n` : '';
        }))
        .pipe(insert.append(() => {
            return `}));`;
        }))
        .pipe(gulp.dest(EXAMPLES_PATH));
});

/**
 * Remove old files
 */
gulp.task('clean', () => {
    return gulp.src(`${EXAMPLES_PATH}/**/*.js`, {read: false, base: EXAMPLES_PATH})
        .pipe(filter(file => {
            const filePath = path.relative(__dirname, file.path);
            return !fs.existsSync(`${THREE_PATH}/${filePath}`);
        }))
        .pipe(clean());
});

gulp.task('build', gulp.parallel('build-umd', 'build-no-umd'));
gulp.task('default', gulp.series('licence', 'build', 'clean'));
