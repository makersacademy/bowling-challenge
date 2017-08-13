require 'sinatra/base'

class Bowling < Sinatra::Base

  get '/' do
    send_file 'index.html'
  end

  run! if app_file == $0
end
