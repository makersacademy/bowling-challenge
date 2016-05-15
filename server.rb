require 'sinatra/base'

class Bowling < Sinatra::Base
  enable :sessions

  set :public_folder, proc{ File.join(root)}

  post '/game' do
    content_type :json
    session[:game] = params
  end

  get '/game' do
    headers 'Access-Control-Allow-Origin' => '*'
    session[:game] || []
  end

  get '/' do
      File.read('bowling.html')
  end

  run! if app_file == $0
end
