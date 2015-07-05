/*
 * grunt-sasster
 * 
 *
 * Copyright (c) 2015 Spencer Leopold <spencer.leopold@gmail.com>
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path');
var Sasster = require('sasster');

module.exports = function(grunt) {

  grunt.registerMultiTask('sasster', 'Use sasster with grunt.', function() {
    var self = this;
    var _ = grunt.util._;
    var done = _.once(self.async());

    var options = this.options({
      outputStyle: 'nested',
      sourceMap: false,
      watch: false
    });

    var e = Sasster(options);
    e.start().then(function(src) {
      if (!options.watch) {
        done();
      }
    });
  });

};
