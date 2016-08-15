ENV['RACK_ENV'] ||= 'test'

require './app/app'
require 'capybara'
require 'capybara/rspec'

Capybara.app = Bowling
