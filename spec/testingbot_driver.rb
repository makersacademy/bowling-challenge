require "selenium/webdriver"

module TestingbotDriver
  class << self
    def testingbot_endpoint
      "file:///Users/lowthe01/projects/makers_academy/weekend_challenges/bowling-challenge/index.html"
    end

    def caps
      caps = {
        :platform => "CAPITAN",
        :browserName => "Chrome",
        :version => "latest"
      }
    end

    def new_driver
      Selenium::WebDriver.for :remote, :url => testingbot_endpoint, :desired_capabilities => caps
    end
  end
end
