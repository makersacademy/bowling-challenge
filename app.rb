require 'sinatra/base'

class Bowling < Sinatra::Base

get '/' do
  'Welcome to Homepage'
end

get '/users/new' do
  
end
  run! if app_file == $0
end