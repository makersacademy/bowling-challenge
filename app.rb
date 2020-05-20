require 'sinatra/base'

class Bowling < Sinatra::Base
  enable :sessions 

get '/' do 
  'Welcome stranger!'
  @email = session[:email]
  erb :index
end

get '/users/new' do
  erb :'users/new'
end

post '/users' do
 session[:email] = params[:email]
 redirect('/')
end

  run! if app_file == $0
end