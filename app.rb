require 'sinatra'

class Scorecard < Sinatra::Base

	get "/" do 
		File.read(File.join('./', 'index.html'))
	end

	run! if app_file = $0
end