require 'sinatra/base'

class Bowling < Sinatra::Base
  enable :sessions

  get '/' do
    erb :index
  end
end
  