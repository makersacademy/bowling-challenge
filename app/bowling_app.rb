require 'sinatra/base'

class BowlingApp < Sinatra::Base
  enable :sessions
use Rack::MethodOverride

get '/' do
  erb :index
end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
