module.exports = ( grunt ) => {
  grunt.initConfig( {
    jasmine: {
      src: "src/model/*.js",
      options: {
        specs: "spec/*.js"
      }
    }
  } );
  grunt.loadNpmTasks( "grunt-contrib-jasmine" );
};
