require 'sinatra'
require_relative './lib/frame.rb'
require_relative './lib/game.rb'

class Balls < Sinatra::Base

  get '/' do
    erb :home
  end

  get '/game' do
    @scores = Game.all
    erb :game
  end

  post '/game' do
    
    redirect '/game'
  end

end
