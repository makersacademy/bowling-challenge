require 'sinatra/base'

class BowlingApp < Sinatra::Base
  enable :sessions

  get '/' do
    haml :index
  end

  run! if app_file == $0
end
