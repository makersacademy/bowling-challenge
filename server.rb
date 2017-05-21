require "sinatra/base"
require "json"

class Bowling < Sinatra::Base
  enable :sessions

  set :public_folder, proc{ File.join(root)}

  post "/pins" do
    headers "Access-Control-Allow-Origin" => "*"
    session[:rolls] = params[:rolls]
  end

  get "/pins" do
    headers "Access-Control-Allow-Origin" => "*"
    session[:rolls] || "nil"
  end

  get "/" do
    File.read("bowling.html")
  end

  run! if app_file == $0
end
