// Karma configuration
// Generated on Fri Apr 09 2021 16:05:28 GMT+0100 (British Summer Time)

module.exports = function (config) {
  config.set({

    basePath: '',

    frameworks: ['jasmine'],

    files: [
      'src/jquery.js',
      'src/*.js',
      'spec/*Spec.js'
    ],

    exclude: [
    ],

    preprocessors: {
      'src/**/*.js': ['coverage']
    },

    reporters: ['progress', 'coverage'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['Chrome'],

    singleRun: false,

    concurrency: Infinity
  });
};
