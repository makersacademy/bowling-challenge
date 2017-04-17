require 'sinatra/base'

class BowlingWeb < Sinatra::Base
  get '/' do
    erb :index
  end

  post '/' do
    
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
