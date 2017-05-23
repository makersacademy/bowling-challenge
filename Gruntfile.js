jasmine: {
    js: {
      src: jsFiles,
      options: {
        specs: 'test/*_spec.js',
        template: "SpecRunner.tmpl",
        templateOptions: {
          application_id: process.env.ALGOLIA_APPLICATION_ID,
          api_key: process.env.ALGOLIA_API_KEY
        }
      }
    }
  },
