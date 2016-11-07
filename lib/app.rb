require 'sinatra/base'

class Bowling < Sinatra::Base
  get '/' do
    erb :game
  end

get '/bowl' do
  "hello world"
end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
