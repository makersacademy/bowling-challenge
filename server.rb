require 'sinatra/base'
# require 'json'

class Server < Sinatra::Base
  enable :sessions

  # set :public folder, proc {File.join()}

  get '/' do
    erb :index
  end

  run! if app_file == $0

end