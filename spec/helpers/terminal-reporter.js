var Reporter = require('jasmine-terminal-reporter')
var reporter = new Reporter({
  isVerbose: true
})

jasmine.getEnv().addReporter(reporter)
