require 'sinatra/base'
require './lib/user'
require 'sinatra/flash'


class Bowling < Sinatra::Base
  enable :sessions 

get '/' do 
  'Welcome stranger!'
  erb :index
end

get '/users/new' do
  erb :'users/signup'
end

post '/users/new' do
     user = User.find(email:params[:email])
  if !user.nil? 
    session[:notice] = 'Email adress exist, please try log-in'
  else
    User.create(email: params[:email], password: params[:password])
    session[:notice] = 'Registration successful, please log-in'
  end
    redirect '/users/log-in' 
 end

 get '/users/log-in' do
  erb :'users/login'
end

post '/users/log-in' do
  user = User.find(email: params[:email]) 
  case params[:submit]
    when 'Log in'
      if user.nil?
        session[:notice] = 'Please try again or sign-up'
        redirect '/users/log-in'
      elsif  user['password'] == params[:password]
          session[:email] = params[:email]
          redirect '/'
      else
        session[:notice] = 'Please try again or sign-up'
        redirect 'users/log-in'
      end 
    when 'Sign up'
      redirect 'users/new'
  end
end

  run! if app_file == $0
end