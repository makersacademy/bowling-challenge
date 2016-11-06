require 'sinatra/base'

class BowlingGame < Sinatra::Base
  get '/' do
      @bowling = Bowling.new
    erb :'index'
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
