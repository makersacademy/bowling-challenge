require 'sinatra/base'
require 'json'

class Bowling < Sinatra::Base
  enable :sessions

  set :public_folder, proc { File.join(root) }

  get '/' do
    headers 'Access-Control-Allow-Origin' => '*'
    
  end