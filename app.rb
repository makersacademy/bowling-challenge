require 'sinatra/base'

class Bowling < Sinatra::Base
  enable :sessions

  get '/' do
    'Hi'
  end

  run! if app_file == $0
end
