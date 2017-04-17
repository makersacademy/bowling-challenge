require 'sinatra/base'

class BowlingGame < Sinatra::Base

  get '/' do
    erb :'bowling'
  end

end