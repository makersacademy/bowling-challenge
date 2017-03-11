module.exports = function (grunt) {
  grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      jasmine: {
        src: ['src/**.js'],
        options: {
          specs: ['spec/*Spec.js'],
          vendor: [],
          forceExit: true,
          coverage: {
            includeAllSources: true
          },
        }
      }
    });
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-jasmine-node-coverage');
  grunt.registerTask('default',['jasmine', 'jasmine_node'])
};
