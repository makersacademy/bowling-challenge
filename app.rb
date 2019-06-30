require 'sinatra/base'
require 'json'

class Bowling < Sinatra::Base
  enable :sessions

  get '/' do
    headers 'Access-Control-Allow-Origin' => '*'
    erb :index
  end