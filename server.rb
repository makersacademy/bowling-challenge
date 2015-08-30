require 'sinatra/base'

class Bowling < Sinatra::Base

  get '/' do
    erb :'index'
  end

end