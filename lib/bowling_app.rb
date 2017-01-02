require 'sinatra/base'

class BowlingApp < Sinatra::Base
  get '/' do
    'Hello BowlingApp!'
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
