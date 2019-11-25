module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],

    files: [
      'src/**/*.js',
      'specs/**/*.js'
    ],

    reporters: ['progress'],

    browsers: ['ChromeHeadless']
  })
}
