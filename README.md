# three.js-examples for Bower

[![Bower version](https://img.shields.io/bower/v/three.js-examples.svg?style=flat-square)](https://github.com/mistic100/three.js-examples)

A Bower package only containing the JavaScript files of the [Three.js](https://github.com/mrdoob/three.js) examples.

This package exists because the official Three.js package (`threejs`) is too heavy and the lightweight package (`three.js`) does not contains examples files.

NPM users should simply use the `three` package which includes all examples and has a decent size.

## AMD friendly
An UMD (Universal Module Definition) loader is added to each file for easy usage on every environments.
AMD (Asynchronous Module Definition) modules are named `three. + filename` (ex: `three.Projector`).

Librairies and irrelevant files are not included in this package (see the `ignore` section of `config.json`).

Some source files that expose their content globally, are modified to add the relevant functions in the `THREE` variable in order be compatible with the UMD wrapper (see the `globals` section of `config.json`).

## Usage

```
bower install three.js-examples --save
```