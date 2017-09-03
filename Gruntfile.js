jasmine: {
  js: {
    src: jsFiles,
    options: {
      specs: 'spec/*Spec.js',
      keepRunner: true
      // template: "SpecRunner.html",
      // templateOptions: {
      //   application_id: process.env.ALGOLIA_APPLICATION_ID,
      //   api_key: process.env.ALGOLIA_API_KEY
      // }
    }
  }
}

grunt.registerTask('travis', [
       'jasmine'
   ]);
