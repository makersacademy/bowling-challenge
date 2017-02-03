require 'sinatra/base'

class bowling_challenge < Sinatra::Base
  get '/' do
    'Hello bowling_challenge!'
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
