require 'sinatra/base'
require 'json'

class Chocobowling < Sinatra::Base
  enable :sessions

  get "/" do
    erb :index
  end

  post "/score" do
    session[:roll1] = params[:roll1]
    session[:roll2] = params[:roll2]

  end


  get "/memory" do
    temp = session[:temp] || 20

    content_type :json
    { temp: temp }.to_json
  end

  post "/memory" do
    session[:temp] = params[:temp]
    #session[:psm] = params[:psm]
  end

  run! if app_file == $0
end
