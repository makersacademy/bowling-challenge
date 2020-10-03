require "sinatra/base"
class Bowling < Sinatra::Base 

	get '/' do 
		"Welcome to the bowling alley"
	end 

	  run! if app_file == $0
end