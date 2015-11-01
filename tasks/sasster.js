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
    var options = this.options();
    var logger = grunt.log;
    logger.log = logger.writeln; // alias grunt's .write to .log
    options.logger = logger;
    options.writeToFile = true;

    var s = Sasster(options);
    s.start().then(function() {
      done();
    });
  });

};
