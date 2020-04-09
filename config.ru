ENV['RACK_ENV'] = ENV.fetch('RACK_ENV', 'production')

require './app/controllers/app_controller.rb'

run BowlingScorecardApp
