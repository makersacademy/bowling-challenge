ENV['RACK_ENV'] ||= 'development'

require 'sinatra/base'
require 'sinatra/flash'
# require_relative

class BowlingChallenge < Sinatra::Base
  get '/' do
    erb :'/game/index'
  end

end
