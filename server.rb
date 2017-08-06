ENV['RACK_ENV'] ||= 'development'

require 'sinatra'
require 'sinatra/base'

class BowlingScorecard < Sinatra::Base

  get '/' do
    erb :index
  end

  run! if app_file == $0
end
