require 'sinatra/base'

class BowlingApp < Sinatra::Base
  enable :sessions

  get '/' do
    erb(:index)
  end
end
