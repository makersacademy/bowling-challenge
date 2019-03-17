require 'sinatra/base'
require 'json'

class ScoreCard < Sinatra::Base
  enable :sessions

  get "/" do
    erb :index
  end

  # get "/count" do
  #   count = session[:count] || 0.to_s
  #
  #   content_type :json
  #   { count: count }.to_json
  # end
  #
  # post "/count" do
  #   session[:count] = params[:count]
  #   200
  # end

  run! if app_file == $0
end
