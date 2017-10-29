module.exports = function (grunt) {
  
  grunt.initConfig({
    jasmine: {
      pivotal: {
        src: 'src/js/*.js',
        options: {
          specs: 'spec/features/*.js',
          // helpers: 'src/js/Game.js'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jasmine');
  
};
