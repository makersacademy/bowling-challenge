require 'sinatra/base'
require 'json'


class Bowling < Sinatra::Base

  get '/' do
    send_file 'src/bowling.html'
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
