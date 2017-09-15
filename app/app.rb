require 'sinatra/base'

# Controller for bowling app
class Bowling < Sinatra::Base

  get '/' do
    erb :bowling_score
  end

  get '/play' do
    erb :play
  end

  run! if app_file == $PROGRAM_NAME
end
