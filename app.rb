require 'sinatra/base'
# require './lib/peep.rb'
# require './lib/user.rb'

class BowlingApp < Sinatra::Base
  enable :sessions, :method_override

  get '/' do
    erb :index
  end

  post '/frameform' do
    session[:roll1] = params[:roll1]
    session[:roll2] = params[:roll2]
    redirect '/frameform'
  end

  get '/frameform' do
    @roll1 = session[:roll1] 
    @roll2 = session[:roll2]
    erb :index
  end

  run! if app_file == $0
end