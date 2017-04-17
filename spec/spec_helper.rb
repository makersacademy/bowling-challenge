require 'capybara/rspec'
require_relative '../server.rb'
require 'capybara/poltergeist'

Capybara.app = Bowling
Capybara.javascript_driver = :poltergeist

RSpec.configure do |config|

  config.expect_with :rspec do |expectations|
    expectations.include_chain_clauses_in_custom_matcher_descriptions = true
  end
  config.mock_with :rspec do |mocks|
    mocks.verify_partial_doubles = true
  end

end
