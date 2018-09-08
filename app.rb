require 'sinatra/base'

class BowlingApp < Sinatra::Base

  get "/" do
    erb :index
  end

end
