ENV['RACK_ENV'] ||= 'development'

require 'sinatra/base'
require 'sinatra/flash'


class BowlingChallenge < Sinatra::Base
  get '/' do
    erb :'/game/index'
  end

end
