# frozen_string_literal: true

require 'sinatra/base'
require './lib/bowling'
require './lib/player'
class BowlingGame < Sinatra::Base
	enable :sessions
  get '/' do
    erb :main_page
  end

	post '/game' do
		@player = Player.new(params[:name])
	end 

	get '/game' do
		erb :game
	end 
	
  run! if app_file == $PROGRAM_NAME
end
