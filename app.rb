require 'sinatra/base'

class BowlingScorecard < Sinatra::Base

  get '/' do
    erb :index
  end

end