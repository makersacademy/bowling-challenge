require 'sinatra/base'
require 'json'

class Bowling < Sinatra::Base
  enable :sessions

  get '/' do
    erb :index
  end

  post '/scores/new' do
    session['current_scorecard'] = params['current_scorecard']
  end

  get '/scores/new' do
    content_type :json
    
    session['current_scorecard'].to_json
  end

  run! if app_file == $0
end
