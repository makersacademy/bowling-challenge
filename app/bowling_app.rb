require 'sinatra/base'

class BowlingApp < Sinatra::Base

enable :sessions
use Rack::MethodOverride

get '/play' do
  erb :play
end

get '/about' do
  erb :about
end

get '/rules' do
  erb :rules
end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
