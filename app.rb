require 'sinatra'

class Balls < Sinatra::Base

  get '/' do
    "This is balls"
  end

  get '/game' do
    erb :game
  end

  post '/game' do
    
    redirect '/game'
  end

end
