require 'sinatra'
require 'sinatra/contrib'

class BowlingGame < Sinatra::Base

  configure :development do
    register Sinatra::Reloader
  end

  enable :sessions
  
  get '/' do  
    p 'index.html'.to_sym
    erb('index.html'.to_sym)
  end

  run! if app_file == $0
end
