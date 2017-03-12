module.exports = function (grunt) {
  grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      jasmine : {
          coverage : {
              src : [
              'src/*.js' ],
              options : {
                  specs: ['spec/*Spec.js'],
                  template : require('grunt-template-jasmine-istanbul'),
                  templateOptions : {
                      coverage : 'coverage/coverage.json',
                      report : 'coverage',
                      thresholds : {
                          lines : 5,
                          statements : 5,
                          branches : 1,
                          functions : 1
                      }
                  }
              }
          }
      }
    });
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.registerTask('default',['jasmine'])
};
