module.exports = ( grunt ) => {
  grunt.initConfig( {
    jasmine: {
      src: "src/*.js",
      options: {
        specs: "spec/*.js"
      }
    }
  } );
  grunt.loadNpmTasks( "grunt-contrib-jasmine" );
};
